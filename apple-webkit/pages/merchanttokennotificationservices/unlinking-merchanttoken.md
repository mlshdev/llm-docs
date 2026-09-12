> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/unlinking-merchanttoken](https://developer.apple.com/documentation/merchanttokennotificationservices/unlinking-merchanttoken)

# Invalidate a Merchant Token

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0.10+ · Apple Pay Merchant Token Management API 1.0.12+

Invalidate a merchant token associated with your merchant identifier, making it invalid for future transaction authorizations.

## URL

```http
POST https://apple-pay-gateway.apple.com/paymentservices/v1/merchantId/{merchantId}/merchantToken/unlink
```

## Path Parameters

- `merchantId` — `string` (required): Your merchant identifier.

## Header Parameters

- `Accept` — `string`:
- `Content-Type` — `string` (required):
- `x-request-id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `MerchantTokenUnlinkRequest`

The request body you use to specify the merchant token that Apple Pay should invalidate.

## Response Codes

- `204` No Content: Success. The service doesn’t return any additional information.
- `400` Bad Request — `ErrorResponse`: Invalid request. The merchant token identifier isn’t valid for the merchant identifier.
- `500` Internal Server Error — `ErrorResponse`: Internal server error.

<a id="Discussion"></a>

## Discussion

When you call this endpoint, Apple Pay server unlinks — invalidates — the merchant token, and the token is no longer valid for future transaction authorizations. Call this endpoint in the following cases:

- Someone cancels a recurring transaction on your website or in your app that uses this merchant token
- Someone changes the payment method for a recurring transactions, for example, they stop using Apple Pay for the transaction

## See Also

### Merchant token invalidation

- [MerchantTokenUnlinkRequest](merchanttokenunlinkrequest.md): The request body you use to invalidate a merchant token.
