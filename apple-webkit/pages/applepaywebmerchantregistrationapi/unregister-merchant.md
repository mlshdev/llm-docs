> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepaywebmerchantregistrationapi/unregister-merchant](https://developer.apple.com/documentation/applepaywebmerchantregistrationapi/unregister-merchant)

# Unregister Merchant

**Interface language:** Data

**Framework:** Apple Pay Web Merchant Registration API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Pay Web Merchant Registration API 1.0+

Unregister one or more domains associated with a previously registered merchant.

## URL

```http
POST https://apple-pay-gateway.apple.com/paymentservices/unregisterMerchant
```

## HTTP Body

Content type: `application/json`

Type: `UnregisterMerchantRequest`

The request body for unregistering merchants.

## Response Codes

- `200` OK: Success.
- `400` Bad Request: The request is malformed or invalid, or the merchant isn’t registered.
- `401` Unauthorized: The e-commerce platform doesn’t have permission to call this API.
- `417` Expectation Failed: The e-commerce platform isn’t registered with Apple Developer.
- `500` Internal Server Error: An internal server error occurred.

<a id="Discussion"></a>

## Discussion

Only request to unregister merchants for domains you previously registered using the [Register Merchant](register-merchant.md) API.

If you pass a subset of the merchant’s registered domains, Apple Pay server unregisters only those domains and the merchant remains active. If you unregister a merchant’s last-remaining registered domain, Apple Pay servers delete the merchant’s registration.

> **Note**

>  To access the sandbox environment, use `POST https://apple-pay-gateway-cert.apple.com/paymentservices/unregisterMerchant`.

## See Also

### Web Merchant Unregistration

- [UnregisterMerchantRequest](unregistermerchantrequest.md): The request body you use to unregister one or more merchant domains.
