<template>
  <div
    class="checkout-wrapper"
    :style="{ paddingBottom: isMobile ? (isInBilling ? '136px' : '88px') : '' }"
  >
    <template v-if="products.length">
      <b-container class="p-0">
        <b-row>
          <b-col cols="12" md="5" :class="isInBilling && isMobile && 'd-none'">
            <div class="checkout-wrapper__title-main">
              <b></b><span>Resumen del Pedido</span><b></b>
            </div>
            <Table :items="products" :fields="fields">
              <template #cell(item)="{ item }">
                <div class="product">
                  <img
                    style="width: 48px; height: 48px"
                    :src="item.image_url"
                    alt=""
                  />
                  <div class="d-flex">
                    <div class="d-flex align-items-center">
                      <span>{{ item.name }}</span>
                      <span
                        class="font-weight-bold col flex-nowrap"
                        style="min-width: max-content"
                        >x {{ item.quantity }}</span
                      >
                    </div>
                    <div v-if="item.note">
                      <b-icon icon="pencil" class="mr-2"></b-icon
                      ><span class="note-style">{{ item.note }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template #cell(subtotal)="{ item }">
                <div>{{ formatValue(item.quantity * item.price) }}</div>
              </template>
            </Table>
            <div class="checkout-wrapper__action d-none d-md-block">
              <div>
                <div class="d-flex justify-content-between">
                  Subtotal:
                  <span class="font-weight-bold ml-2">{{
                    formatValue(totalPrice)
                  }}</span>
                </div>
                <div class="d-flex justify-content-between">
                  Envío:
                  <span class="font-weight-bold ml-2">{{
                    formatValue(shippingFee)
                  }}</span>
                </div>
                <div class="d-flex justify-content-between">
                  Total:
                  <span class="font-weight-bold ml-2">{{
                    formatValue(totalPrice + shippingFee)
                  }}</span>
                </div>
              </div>
            </div>
          </b-col>
          <b-col
            class="d-md-block"
            :class="!isInBilling && isMobile && 'd-none'"
            cols="12"
            md="7"
          >
            <div class="checkout-wrapper__title-main">
              <b></b><span>Información de Facturación</span><b></b>
            </div>
            <div class="form">
              <b-form @submit.prevent="onSubmit" ref="form">
                <b-form-group
                  label="Información de Contacto"
                  label-class="font-weight-bold"
                  label-size="lg"
                >
                  <b-container class="p-0">
                    <b-row class="">
                      <b-col>
                        <b-form-group
                          id="fieldset-1"
                          label="Introduce tu nombre *"
                          label-for="input-1"
                          :invalid-feedback="'Nombre inválido'"
                          :state="nameState"
                        >
                          <b-form-input
                            id="input-1"
                            v-model="billInfo.name"
                            :state="nameState"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12" md="7">
                        <b-form-group
                          label="Introduce tu correo electrónico"
                          label-for="input-2"
                        >
                          <b-form-input
                            id="input-2"
                            v-model="billInfo.email"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="12" md="5">
                        <b-form-group
                          label="Tu teléfono *"
                          label-for="input-3"
                          :invalid-feedback="'Teléfono inválido'"
                          :state="phoneState"
                        >
                          <b-form-input
                            id="input-3"
                            v-model="billInfo.phone"
                            :state="phoneState"
                            trim
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-form-group>
                <b-form-group
                  label="Métodos de Envío"
                  label-class="font-weight-bold"
                  label-size="lg"
                >
                  <b-form-radio
                    v-model="billInfo.shippingMethod"
                    name="shipping-methods-radios"
                    value="pickup"
                    >Recoger en tienda</b-form-radio
                  >
                  <b-form-radio
                    v-model="billInfo.shippingMethod"
                    name="shipping-methods-radios"
                    value="delivery"
                    >Entrega</b-form-radio
                  >
                </b-form-group>
                <b-form-group
                  label="Método de Pago"
                  label-class="font-weight-bold"
                  label-size="lg"
                >
                  <b-form-radio
                    v-model="billInfo.paymentMethod"
                    name="payment-methods-radios"
                    value="later"
                    >Pagar después</b-form-radio
                  >
                </b-form-group>
                <b-button
                  class="d-none d-md-inline"
                  type="submit"
                  variant="secondary"
                  >Realizar Pedido</b-button
                >
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="bottom-area fixed-bottom d-flex flex-column d-md-none">
        <div class="p-2">
          <template v-if="isInBilling">
            <div class="d-flex justify-content-between">
              Subtotal:
              <span class="font-weight-bold ml-2">{{
                formatValue(totalPrice)
              }}</span>
            </div>
            <div class="d-flex justify-content-between">
              Envío:
              <span class="font-weight-bold ml-2">{{
                formatValue(shippingFee)
              }}</span>
            </div>
          </template>
          <div class="d-flex justify-content-between">
            Total:
            <span class="font-weight-bold ml-2">{{
              formatValue(totalPrice + shippingFee)
            }}</span>
          </div>
        </div>
        <div class="d-flex">
          <router-link :to="PATH.CART" class="flex-grow-1">
            <b-button
              variant="outline-secondary"
              class="btn btn-lg w-100 rounded-0"
              ><b-icon icon="arrow-left" style="margin-right: 8px"></b-icon
              >Carrito</b-button
            >
          </router-link>
          <b-button
            @click="checkout"
            class="btn btn-lg text-capitalize flex-grow-1 rounded-0"
            >{{ isInBilling ? "realizar pedido" : "finalizar compra" }}</b-button
          >
        </div>
      </div>
    </template>
    <template v-else>
      <div class="checkout-wrapper__title-main">
        <b></b><span>Resumen del Pedido</span><b></b>
      </div>
      Tu carrito está vacío
      <router-link :to="PATH.PRODUCTS">
        <b-button variant="outline-dark" class="btn mr-4"
          >Seguir Comprando<b-icon
            icon="arrow-right"
            style="margin-left: 8px"
          ></b-icon
        ></b-button>
      </router-link>
    </template>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
