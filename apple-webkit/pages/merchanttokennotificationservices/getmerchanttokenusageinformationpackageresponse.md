> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/getmerchanttokenusageinformationpackageresponse](https://developer.apple.com/documentation/merchanttokennotificationservices/getmerchanttokenusageinformationpackageresponse)

# GetMerchantTokenUsageInformationPackageResponse

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

The encrypted merchant token usage information package.

## Declaration

```
object GetMerchantTokenUsageInformationPackageResponse
```

## Properties

- `ciphersuite` — `string` (required): The cipher suite used for HPKE in authorization mode. Use the value sent as `supportedCiphersuite` in the `Retrieve MerchantToken PublicKey API` response.
  **Maximum length:** `64`
- `data` — `string` (required): The encrypted merchant token usage information package.
  **Maximum length:** `4000`
- `ephemeralPublicKey` — `string` (required): The ephemeral public key in X9.63 representation, Base64-encoded.
  **Maximum length:** `256`
- `infoHash` — `string` (required): A SHA-256 digest of the `info`, hex-encoded.
  **Maximum length:** `256`
- `merchantPublicKeyHash` — `string` (required): An SHA-256 digest of the `merchantPublicKey`, hex-encoded.
  **Maximum length:** `256`
- `merchantTokenPublicKeyHash` — `string` (required): An SHA-256 digest of the `merchantTokenPublicKey`, hex-encoded.
  **Maximum length:** `256`

## Mentioned In

- [Adding merchant token usage information](https://developer.apple.com/documentation/applepaymerchanttokenmanagementapi/adding-merchant-token-usage-information)

<a id="Discussion"></a>

## Discussion

The `data` needs to be a merchant token usage information package encrypted to the `merchantTokenPublicKey` using HPKE in authorization mode with `merchantPrivateKey` and the following options:

| Option | Value |
| --- | --- |
| `KEM` | DHKEM(P-384, HKDF-SHA384) |
| `KDF` | HKDF-SHA384 |
| `AEAD` | AES-256-GCM |

The `merchantPrivateKey` needs to correspond to the `merchantPublicKey` provided in the merchant token usage information availability notification. The `info` parameter needs to be the UTF-8 bytes of `ApplePayMerchantTokenUsageInformation_1.0` concatenated with the SHA-256 digest (in bytes) of the `merchantTokenIdentifier` (encoded using UTF-8). For the `ciphersuite`, use the `supportedCiphersuite` returned by Apple in the [Retrieve Merchant Token Public Key](retrieve-merchant-token-public-key.md).

## See Also

### Merchant token usage information

- [Retrieve Merchant Token Public Key](retrieve-merchant-token-public-key.md): Get the merchant token public key.
- [MerchantToken Usage Data Availability Notification](merchanttoken-usage-data-availability-notification.md): Notify Apple servers that the user’s devices can retrieve merchant token usage information.
- [MerchantTokenUsageDataAvailabilityNotificationRequest](merchanttokenusagedataavailabilitynotificationrequest.md): The data for the merchant token usage data availability notification request.
- [Get MerchantToken Usage Information Package](get-merchanttoken-usage-information-package.md): Retrieve the merchant token usage information package from the merchant server.
- [AutomaticReloadPaymentDetails](../applepaymerchanttokenusageinformation/automaticreloadpaymentdetails.md): Details about an automatic reload payment.
- [CurrencyAmount](../applepaymerchanttokenusageinformation/currencyamount.md): An amount of money.
- [DeferredPaymentDetails](../applepaymerchanttokenusageinformation/deferredpaymentdetails.md): Details about a deferred payment, such as a hotel booking or a preorder.
- [PastPayment](../applepaymerchanttokenusageinformation/pastpayment.md): A past payment.
- [PaymentIssueDetails](../applepaymerchanttokenusageinformation/paymentissuedetails.md): Details about a payment issue, such as a declined payment.
- [RecurringPaymentDetails](../applepaymerchanttokenusageinformation/recurringpaymentdetails.md): Details about a recurring payment, typically a subscription.
- [UpcomingPayment](../applepaymerchanttokenusageinformation/upcomingpayment.md): An upcoming payment.
- [UsageInformation](../applepaymerchanttokenusageinformation/usageinformation.md): Information about the usage of a merchant token, such as past and upcoming payments.
