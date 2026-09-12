> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/init(merchantidentifier:currency:region:supportednetworks:merchantcapabilities:summaryitems:)](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/init(merchantidentifier:currency:region:supportednetworks:merchantcapabilities:summaryitems:))

# init(merchantIdentifier:currency:region:supportedNetworks:merchantCapabilities:summaryItems:)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

Creates a disbursement request with the parameters you specify.

## Declaration

```swift
convenience init(merchantIdentifier: String, currency: Locale.Currency, region: Locale.Region, supportedNetworks: [PKPaymentNetwork], merchantCapabilities: PKMerchantCapability, summaryItems: [PKPaymentSummaryItem])
```

## Parameters

- `merchantIdentifier`: A string that identifies the merchant.
- `currency`: The [Locale.Currency](../../foundation/locale/currency-swift.struct.md) that represents the [ISO 4127 currency code](https://www.iso.org/iso-4217-currency-codes.html), which represents the value of this disbursement.
- `region`: The [Locale.Region](../../foundation/locale/region-swift.struct.md) that represents the merchant’s [ISO 3166 region code](https://www.iso.org/iso-3166-country-codes.html).
- `supportedNetworks`: An array of [PKPaymentNetwork](../pkpaymentnetwork.md) networks the merchant supports.
- `merchantCapabilities`: An array of [PKMerchantCapability](../pkmerchantcapability.md) structures that describe the capabilities the merchant supports.
- `summaryItems`: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that describe the disbursement.
