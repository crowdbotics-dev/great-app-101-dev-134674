import axios from "axios"
const greatappdevAPI = axios.create({
  baseURL: "https://great-app-101-dev-134674.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return greatappdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return greatappdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return greatappdevAPI.post(`/api/v1/signup/`, payload)
}
function modules_two_factor_authentication_enable_2fa_retrieve(payload) {
  return greatappdevAPI.get(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_create(payload) {
  return greatappdevAPI.post(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_enable_2fa_destroy(payload) {
  return greatappdevAPI.delete(`/modules/two-factor-authentication/enable/2fa`)
}
function modules_two_factor_authentication_google_authenticator_qr_retrieve(
  payload
) {
  return greatappdevAPI.get(
    `/modules/two-factor-authentication/google/authenticator/qr`
  )
}
function modules_two_factor_authentication_send_otp_create(payload) {
  return greatappdevAPI.post(`/modules/two-factor-authentication/send/otp`)
}
function modules_two_factor_authentication_verify_otp_create(payload) {
  return greatappdevAPI.post(`/modules/two-factor-authentication/verify/otp`)
}
function modules_two_factor_authentication_verify_otp_create_2(payload) {
  return greatappdevAPI.post(
    `/modules/two-factor-authentication/verify/otp/${payload.enable}`
  )
}
function rest_auth_login_create(payload) {
  return greatappdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return greatappdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return greatappdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return greatappdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return greatappdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return greatappdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return greatappdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return greatappdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return greatappdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return greatappdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return greatappdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_two_factor_authentication_enable_2fa_retrieve,
  modules_two_factor_authentication_enable_2fa_create,
  modules_two_factor_authentication_enable_2fa_destroy,
  modules_two_factor_authentication_google_authenticator_qr_retrieve,
  modules_two_factor_authentication_send_otp_create,
  modules_two_factor_authentication_verify_otp_create,
  modules_two_factor_authentication_verify_otp_create_2,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
