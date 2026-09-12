> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchanttokenusagedataavailabilitynotificationrequest](https://developer.apple.com/documentation/merchanttokennotificationservices/merchanttokenusagedataavailabilitynotificationrequest)

# MerchantTokenUsageDataAvailabilityNotificationRequest

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

The data for the merchant token usage data availability notification request.

## Declaration

```
object MerchantTokenUsageDataAvailabilityNotificationRequest
```

## Properties

- `merchantTokenIdentifier` — `string` (required): The unique identifier of the merchant token.
  **Maximum length:** `64`
- `merchantTokenUsageMetadata` — `MerchantTokenUsageMetadata` (required): Metadata that’s encrypted using the `merchantTokenPublicKey`.

<a id="Discussion"></a>

## Discussion

Use this API to notify Apple servers that the user’s device can retrieve merchant token usage information. The request includes metadata about encryption and where to retrieve the usage information.

The `merchantPublicKey` passed in the request needs to be a `P-384` public key.

## See Also

### Merchant token usage information

- [Retrieve Merchant Token Public Key](retrieve-merchant-token-public-key.md): Get the merchant token public key.
- [MerchantToken Usage Data Availability Notification](merchanttoken-usage-data-availability-notification.md): Notify Apple servers that the user’s devices can retrieve merchant token usage information.
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
