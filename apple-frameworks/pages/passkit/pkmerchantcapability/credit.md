> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkmerchantcapability/credit](https://developer.apple.com/documentation/passkit/pkmerchantcapability/credit)

# credit (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 2.0+

Support for credit cards.

## Declaration

```swift
static var credit: PKMerchantCapability { get }
```

## See Also

### Constants

- [instantFundsOut](instantfundsout.md): The value that indicates the merchant supports disbursing funds using Instant Funds Out.
- [threeDSecure](threedsecure.md): Support for the 3-D Secure protocol.
- [emv](emv.md): Support for the EMV protocol.
- [debit](debit.md): Support for debit cards.

# PKMerchantCapabilityCredit (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Support for credit cards.

## Declaration

```objectivec
PKMerchantCapabilityCredit
```

## See Also

### Constants

- [PKMerchantCapabilityInstantFundsOut](instantfundsout.md): The value that indicates the merchant supports disbursing funds using Instant Funds Out.
- [PKMerchantCapability3DS](threedsecure.md): Support for the 3-D Secure protocol.
- [PKMerchantCapabilityEMV](emv.md): Support for the EMV protocol.
- [PKMerchantCapabilityDebit](debit.md): Support for debit cards.
