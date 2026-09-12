> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/retrieve-merchant-token-public-key](https://developer.apple.com/documentation/merchanttokennotificationservices/retrieve-merchant-token-public-key)

# Retrieve Merchant Token Public Key

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Get the merchant token public key.

## URL

```http
POST https://apple-pay-gateway.apple.com/paymentservices/v1/merchantId/{merchantId}/merchantToken/publicKey
```

## Path Parameters

- `merchantId` — `string` (required): Your merchant identifier.
  **Maximum length:** `64`

## Header Parameters

- `Accept` — `string`: The response format the client expects, for example, `application/json` for JSON.
- `Content-Type` — `string` (required): The format of the data sent in the request body, for example, `application/json` for JSON payloads.
- `x-request-id` — `string` (required): The header used to uniquely identify the request.

## HTTP Body

Content type: `application/json`

Type: `RetrieveMerchantTokenPublicKeyRequest`

The request body you use for the merchant token public key.

## Response Codes

- `200` OK — `RetrieveMerchantTokenPublicKeyResponse`: Successful response.
- `202` Accepted — `ErrorResponse`: Accepted. The public key isn’t yet available. Apple notifies via `tokenNotificationURL` when it’s available.
- `400` Bad Request — `ErrorResponse`: Bad request.
- `403` Forbidden — `ErrorResponse`: Authorization failed.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: Metadata conflict. Update the `tokenNotificationURL`.
- `500` Internal Server Error — `ErrorResponse`: Internal server error.

<a id="Discussion"></a>

## Discussion

Your server calls this API to get the public key of a particular merchant token. This public key is created by the merchant token owner’s device. The key is a `P-384` public key. The response includes the `supportedCiphersuite`, which specifies the cipher suite to use when calling the `Merchant-Token-Usage-Data-Availability-Notification` or responding to [Get MerchantToken Usage Information Package](get-merchanttoken-usage-information-package.md).

## See Also

### Merchant token usage information

- [MerchantToken Usage Data Availability Notification](merchanttoken-usage-data-availability-notification.md): Notify Apple servers that the user’s devices can retrieve merchant token usage information.
- [MerchantTokenUsageDataAvailabilityNotificationRequest](merchanttokenusagedataavailabilitynotificationrequest.md): The data for the merchant token usage data availability notification request.
- [Get MerchantToken Usage Information Package](get-merchanttoken-usage-information-package.md): Retrieve the merchant token usage information package from the merchant server.
- [GetMerchantTokenUsageInformationPackageResponse](getmerchanttokenusageinformationpackageresponse.md): The encrypted merchant token usage information package.
- [AutomaticReloadPaymentDetails](../applepaymerchanttokenusageinformation/automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [CurrencyAmount](../applepaymerchanttokenusageinformation/currencyamount.md): An amount of money.
- [DeferredPaymentDetails](../applepaymerchanttokenusageinformation/deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PastPayment](../applepaymerchanttokenusageinformation/pastpayment.md): A past payment.
- [PaymentIssueDetails](../applepaymerchanttokenusageinformation/paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](../applepaymerchanttokenusageinformation/recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](../applepaymerchanttokenusageinformation/upcomingpayment.md): An upcoming payment.
- [UsageInformation](../applepaymerchanttokenusageinformation/usageinformation.md): Information about the usage of a merchant token, such as past and upcoming payments.
