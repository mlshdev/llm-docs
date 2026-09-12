> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/get-merchanttoken-usage-information-package](https://developer.apple.com/documentation/merchanttokennotificationservices/get-merchanttoken-usage-information-package)

# Get MerchantToken Usage Information Package

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Retrieve the merchant token usage information package from the merchant server.

## URL

```http
GET https://merchant.example.com/v1/merchantToken/{merchantTokenIdentifier}/usageInformation
```

## Path Parameters

- `merchantTokenIdentifier` — `string` (required): The unique identifier of the merchant token.

## Header Parameters

- `Authorization` — `string` (required): Authentication for the usage information. The scheme is `ApplePayMerchantTokenUsageInformation` with the `authenticationToken` as a parameter. For example, `ApplePayMerchantTokenUsageInformation {authenticationToken}`.

## Response Codes

- `200` OK — `GetMerchantTokenUsageInformationPackageResponse`: The request was successful and the response includes the encrypted merchant token usage information package.
- `401` Unauthorized — `ErrorResponse`: Unauthorized. See the body for more details.
- `404` Not Found — `ErrorResponse`: Not found. See the body for more details.

<a id="Discussion"></a>

## Discussion

The user’s device calls this API to get the merchant token usage information package from the merchant server. Devices use the `webServiceURL` delivered to the Apple Pay server as part of the metadata.

For more information on formatting your merchant token usage information, see [Adding merchant token usage information](https://developer.apple.com/documentation/applepaymerchanttokenmanagementapi/adding-merchant-token-usage-information)

## See Also

### Merchant token usage information

- [Retrieve Merchant Token Public Key](retrieve-merchant-token-public-key.md): Get the merchant token public key.
- [MerchantToken Usage Data Availability Notification](merchanttoken-usage-data-availability-notification.md): Notify Apple servers that the user’s devices can retrieve merchant token usage information.
- [MerchantTokenUsageDataAvailabilityNotificationRequest](merchanttokenusagedataavailabilitynotificationrequest.md): The data for the merchant token usage data availability notification request.
- [GetMerchantTokenUsageInformationPackageResponse](getmerchanttokenusageinformationpackageresponse.md): The encrypted merchant token usage information package.
- [AutomaticReloadPaymentDetails](../applepaymerchanttokenusageinformation/automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [CurrencyAmount](../applepaymerchanttokenusageinformation/currencyamount.md): An amount of money.
- [DeferredPaymentDetails](../applepaymerchanttokenusageinformation/deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PastPayment](../applepaymerchanttokenusageinformation/pastpayment.md): A past payment.
- [PaymentIssueDetails](../applepaymerchanttokenusageinformation/paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](../applepaymerchanttokenusageinformation/recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](../applepaymerchanttokenusageinformation/upcomingpayment.md): An upcoming payment.
- [UsageInformation](../applepaymerchanttokenusageinformation/usageinformation.md): Information about the usage of a merchant token, such as past and upcoming payments.
