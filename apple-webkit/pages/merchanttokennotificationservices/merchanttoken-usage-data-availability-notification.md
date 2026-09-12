> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchanttoken-usage-data-availability-notification](https://developer.apple.com/documentation/merchanttokennotificationservices/merchanttoken-usage-data-availability-notification)

# MerchantToken Usage Data Availability Notification

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Notify Apple servers that the user’s devices can retrieve merchant token usage information.

## URL

```http
POST https://apple-pay-gateway.apple.com/paymentservices/v1/merchantId/{merchantId}/merchantToken/notify
```

## Path Parameters

- `merchantId` — `string` (required): Your merchant identifier.
  **Maximum length:** `64`

## Header Parameters

- `Accept` — `string`: The response format the client expects, for example, `application/json` for JSON payloads.
- `Content-Type` — `string` (required): The format of the data sent in the request body, for example, `application/json` for JSON payloads.
- `x-request-id` — `string` (required): The header that uniquely identifies the request.

## HTTP Body

Content type: `application/json`

Type: `MerchantTokenUsageDataAvailabilityNotificationRequest`

The data.

## Response Codes

- `200` OK: Successful response.
- `400` Bad Request — `ErrorResponse`: Bad request.
- `403` Forbidden — `ErrorResponse`: Authorization failed.
- `404` Not Found — `ErrorResponse`: Not found.
- `500` Internal Server Error — `ErrorResponse`: Internal server error.

<a id="Discussion"></a>

## Discussion

Use this API to notify Apple that the user’s device can retrieve merchant token usage information. The request includes metadata about encryption and where to retrieve the usage information.

## See Also

### Merchant token usage information

- [Retrieve Merchant Token Public Key](retrieve-merchant-token-public-key.md): Get the merchant token public key.
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
