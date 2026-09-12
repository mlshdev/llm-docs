> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/initwithmerchantidentifier:currencycode:regioncode:supportednetworks:merchantcapabilities:summaryitems:](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/initwithmerchantidentifier:currencycode:regioncode:supportednetworks:merchantcapabilities:summaryitems:)

# initWithMerchantIdentifier:currencyCode:regionCode:supportedNetworks:merchantCapabilities:summaryItems:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates a new instance of a disbursement request with the merchant identifier, currency and region codes, and other parameters you specify.

## Declaration

```objectivec
- (instancetype) initWithMerchantIdentifier:(NSString *) merchantIdentifier currencyCode:(NSString *) currencyCode regionCode:(NSString *) regionCode supportedNetworks:(NSArray<NSString *> *) supportedNetworks merchantCapabilities:(PKMerchantCapability) merchantCapabilities summaryItems:(NSArray<PKPaymentSummaryItem *> *) summaryItems;
```

## Parameters

- `merchantIdentifier`: A string that identifies the merchant.
- `currencyCode`: The [ISO 4127 currency code](https://www.iso.org/iso-4217-currency-codes.html) string that represents the value of this disbursement.
- `regionCode`: The merchant’s [ISO 3166 region code](https://www.iso.org/iso-3166-country-codes.html) string.
- `supportedNetworks`: An array of [PKPaymentNetwork](../pkpaymentnetwork.md) networks the merchant supports.
- `merchantCapabilities`: An array of [PKMerchantCapability](../pkmerchantcapability.md) structures that describe the capabilities the merchant supports.
- `summaryItems`: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that describe the disbursement.

<a id="return-value"></a>

## Return Value

A new `PKDisbursementRequest`.
