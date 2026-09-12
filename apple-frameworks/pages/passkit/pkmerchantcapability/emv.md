> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkmerchantcapability/emv](https://developer.apple.com/documentation/passkit/pkmerchantcapability/emv)

# emv (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Support for the EMV protocol.

## Declaration

```swift
static var emv: PKMerchantCapability { get }
```

<a id="Discussion"></a>

## Discussion

Include this value only if you support China Union Pay transactions.

## See Also

### Constants

- [instantFundsOut](instantfundsout.md): The value that indicates the merchant supports disbursing funds using Instant Funds Out.
- [threeDSecure](threedsecure.md): Support for the 3-D Secure protocol.
- [credit](credit.md): Support for credit cards.
- [debit](debit.md): Support for debit cards.

# PKMerchantCapabilityEMV (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Support for the EMV protocol.

## Declaration

```objectivec
PKMerchantCapabilityEMV
```

<a id="Discussion"></a>

## Discussion

Include this value only if you support China Union Pay transactions.

## See Also

### Constants

- [PKMerchantCapabilityInstantFundsOut](instantfundsout.md): The value that indicates the merchant supports disbursing funds using Instant Funds Out.
- [PKMerchantCapability3DS](threedsecure.md): Support for the 3-D Secure protocol.
- [PKMerchantCapabilityCredit](credit.md): Support for credit cards.
- [PKMerchantCapabilityDebit](debit.md): Support for debit cards.
