> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkmerchantcapability/instantfundsout](https://developer.apple.com/documentation/passkit/pkmerchantcapability/instantfundsout)

# instantFundsOut (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

The value that indicates the merchant supports disbursing funds using Instant Funds Out.

## Declaration

```swift
static var instantFundsOut: PKMerchantCapability { get }
```

<a id="Discussion"></a>

## Discussion

This capability indicates the merchant supports disbursing funds using Instant Funds Out (IFO), which means the recipient receives funds in minutes rather than days. Passing `PKMerchantCapabilityInstantFundsOut` into the [init(merchantIdentifier:currency:region:supportedNetworks:merchantCapabilities:summaryItems:)](../pkdisbursementrequest/init%28merchantidentifier_currency_region_supportednetworks_merchantcapabilities_summaryitems_%29.md) indicates that the merchant is going to use IFO to facilitate the disbursement once the individual authenticates it.

## See Also

### Constants

- [threeDSecure](threedsecure.md): Support for the 3-D Secure protocol.
- [emv](emv.md): Support for the EMV protocol.
- [credit](credit.md): Support for credit cards.
- [debit](debit.md): Support for debit cards.

# PKMerchantCapabilityInstantFundsOut (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

The value that indicates the merchant supports disbursing funds using Instant Funds Out.

## Declaration

```objectivec
PKMerchantCapabilityInstantFundsOut
```

<a id="Discussion"></a>

## Discussion

This capability indicates the merchant supports disbursing funds using Instant Funds Out (IFO), which means the recipient receives funds in minutes rather than days. Passing `PKMerchantCapabilityInstantFundsOut` into the [init(merchantIdentifier:currency:region:supportedNetworks:merchantCapabilities:summaryItems:)](../pkdisbursementrequest/init%28merchantidentifier_currency_region_supportednetworks_merchantcapabilities_summaryitems_%29.md) indicates that the merchant is going to use IFO to facilitate the disbursement once the individual authenticates it.

## See Also

### Constants

- [PKMerchantCapability3DS](threedsecure.md): Support for the 3-D Secure protocol.
- [PKMerchantCapabilityEMV](emv.md): Support for the EMV protocol.
- [PKMerchantCapabilityCredit](credit.md): Support for credit cards.
- [PKMerchantCapabilityDebit](debit.md): Support for debit cards.
