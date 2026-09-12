> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkmerchantcapability](https://developer.apple.com/documentation/passkit/pkmerchantcapability)

# PKMerchantCapability (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Capabilities for processing payment.

## Declaration

```swift
struct PKMerchantCapability
```

## Topics

### Initializers

- [init(rawValue:)](pkmerchantcapability/init%28rawvalue_%29.md): Creates a merchant capability using the raw value you provide.

### Constants

- [instantFundsOut](pkmerchantcapability/instantfundsout.md): The value that indicates the merchant supports disbursing funds using Instant Funds Out.
- [threeDSecure](pkmerchantcapability/threedsecure.md): Support for the 3-D Secure protocol.
- [emv](pkmerchantcapability/emv.md): Support for the EMV protocol.
- [credit](pkmerchantcapability/credit.md): Support for credit cards.
- [debit](pkmerchantcapability/debit.md): Support for debit cards.

### Type Properties

- [capability3DS](pkmerchantcapability/capability3ds.md): Deprecated.
- [capabilityCredit](pkmerchantcapability/capabilitycredit.md): Deprecated.
- [capabilityDebit](pkmerchantcapability/capabilitydebit.md): Deprecated.
- [capabilityEMV](pkmerchantcapability/capabilityemv.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting merchant information

- [PKPaymentRequest.MerchantCategoryCode](pkpaymentrequest/merchantcategorycode-swift.struct.md): An optional four-digit struct, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [merchantIdentifier](pkpaymentrequest/merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](pkpaymentrequest/merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.

# PKMerchantCapability (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Capabilities for processing payment.

## Declaration

```objectivec
enum PKMerchantCapability : NSUInteger;
```

## Topics

### Constants

- [PKMerchantCapabilityInstantFundsOut](pkmerchantcapability/instantfundsout.md): The value that indicates the merchant supports disbursing funds using Instant Funds Out.
- [PKMerchantCapability3DS](pkmerchantcapability/threedsecure.md): Support for the 3-D Secure protocol.
- [PKMerchantCapabilityEMV](pkmerchantcapability/emv.md): Support for the EMV protocol.
- [PKMerchantCapabilityCredit](pkmerchantcapability/credit.md): Support for credit cards.
- [PKMerchantCapabilityDebit](pkmerchantcapability/debit.md): Support for debit cards.

## See Also

### Setting merchant information

- [PKMerchantCategoryCode](pkmerchantcategorycode.md): The optional four-digit type, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [merchantCategoryCode](pkpaymentrequest/merchantcategorycode-7vg6z.md): An optional four-digit property, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [PKMerchantCategoryCodeNone](pkmerchantcategorycodenone.md)
- [merchantIdentifier](pkpaymentrequest/merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](pkpaymentrequest/merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
