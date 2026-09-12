> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/merchantcategorycode-swift.struct](https://developer.apple.com/documentation/passkit/pkpaymentrequest/merchantcategorycode-swift.struct)

# PKPaymentRequest.MerchantCategoryCode

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS · watchOS 11.0+

An optional four-digit struct, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.

## Declaration

```swift
struct MerchantCategoryCode
```

<a id="overview"></a>

## Overview

The four-digit merchant category codes are in ISO 18245 format and range from 1 to 9999.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LosslessStringConvertible](https://developer.apple.com/documentation/swift/losslessstringconvertible)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting merchant information

- [merchantIdentifier](merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](../pkmerchantcapability.md): Capabilities for processing payment.
