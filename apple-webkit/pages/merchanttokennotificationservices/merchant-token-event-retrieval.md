> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchant-token-event-retrieval](https://developer.apple.com/documentation/merchanttokennotificationservices/merchant-token-event-retrieval)

# Get Details of a Merchant Token Event

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0.10+ · Apple Pay Merchant Token Management API 1.0.12+

Get the details of a merchant token event after receiving a notification.

## URL

```http
GET https://apple-pay-gateway.apple.com/paymentservices/v1/merchantId/{merchantId}/merchantToken/event/{eventId}
```

## Path Parameters

- `eventId` — `string` (required): A unique event identifier that you receive in a notification from the Apple Pay server.
- `merchantId` — `string` (required): Your merchant identifier.

## Header Parameters

- `Accept` — `string`:
- `Content-Type` — `string` (required):
- `x-request-id` — `string` (required):

## Response Codes

- `200` OK — `MerchantTokenEventResponse`: Successful response.
- `400` Bad Request — `ErrorResponse`: Bad request.
- `500` Internal Server Error — `ErrorResponse`: Internal server error.

## Mentioned In

- [Receiving and handling merchant token notifications](https://developer.apple.com/documentation/applepaymerchanttokenmanagementapi/receiving-and-handling-merchant-token-notifications)

<a id="Discussion"></a>

## Discussion

For information about setting your server’s notification URL to receive life-cycle events, see [tokenNotificationURL](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentrequest/tokennotificationurl) in [PKAutomaticReloadPaymentRequest](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentrequest), [tokenNotificationURL](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest/tokennotificationurl) in [PKRecurringPaymentRequest](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest), [tokenNotificationURL](../applepayontheweb/applepayautomaticreloadpaymentrequest/tokennotificationurl.md) in [ApplePayAutomaticReloadPaymentRequest](../applepayontheweb/applepayautomaticreloadpaymentrequest.md), or [tokenNotificationURL](../applepayontheweb/applepayrecurringpaymentrequest/tokennotificationurl.md) in [ApplePayRecurringPaymentRequest](../applepayontheweb/applepayrecurringpaymentrequest.md).

## See Also

### Merchant token event retrieval

- [MerchantTokenEventResponse](merchanttokeneventresponse.md): A response body that contains information about a life-cycle event for a merchant token.
- [MerchantTokenMetadata](merchanttokenmetadata.md): The card information related to a merchant token, including its card art and metadata.
- [CardArt](cardart.md): Data for displaying art to represent a card.
- [CardMetadata](cardmetadata.md): Data about the card, including its expiration date and suffix.
