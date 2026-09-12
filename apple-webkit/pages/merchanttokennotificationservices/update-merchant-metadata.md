> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/update-merchant-metadata](https://developer.apple.com/documentation/merchanttokennotificationservices/update-merchant-metadata)

# Update Merchant Metadata

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Update the merchant token’s notification URL.

## URL

```http
POST https://apple-pay-gateway.apple.com/paymentservices/v1/merchantId/{merchantId}/merchantToken/updateMerchantMetadata
```

## Path Parameters

- `merchantId` — `string` (required): The merchant identifier issued by Apple.
  **Maximum length:** `64`

## Header Parameters

- `Accept` — `string`: The response format the client expects, for example, `application/json` for JSON.
- `Content-Type` — `string` (required): The format of the data sent in the request body, for example, `application/json` for JSON payloads.
- `x-request-id` — `string` (required): The header used to uniquely identify the request.

## HTTP Body

Content type: `application/json`

Type: `UpdateMerchantMetadataRequest`

The request body you use to specify the updated merchant metadata.

## Response Codes

- `200` OK: Successful response.
- `400` Bad Request — `ErrorResponse`: Bad request.
- `403` Forbidden — `ErrorResponse`: Authorization failed.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `500` Internal Server Error — `ErrorResponse`: Internal server error.

<a id="Discussion"></a>

## Discussion

The merchant server calls this API to update the value of a merchant token’s `tokenNotificationURL`. This URL receives life-cycle and metadata update notifications from the Apple Pay servers about the Apple Pay merchant token.

## See Also

### Merchant token notification handling

- [Receiving and handling merchant token notifications](https://developer.apple.com/documentation/applepaymerchanttokenmanagementapi/receiving-and-handling-merchant-token-notifications): Implement an endpoint to receive and handle merchant token life-cycle updates from Apple Pay.
- [Send Merchant Token Event](send-merchant-token-event.md): Receive and handle merchant token life-cycle updates from Apple Pay.
