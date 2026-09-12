> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasstype](https://developer.apple.com/documentation/passkit/pkpasstype)

# PKPassType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Types of passes.

## Declaration

```swift
enum PKPassType
```

## Topics

### Pass types

- [PKPassType.any](pkpasstype/any.md): A nonspecific pass type.
- [PKPassType.barcode](pkpasstype/barcode.md): A pass that represents a barcode.
- [PKPassType.secureElement](pkpasstype/secureelement.md): A pass that represents a credential that the device stores in the Secure Element.
- [payment](pkpasstype/payment.md): Deprecated. A pass that represents a credit or debit card

### Initializers

- [init(rawValue:)](pkpasstype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying a pass

- [passType](pkpass/passtype.md): The pass’s type.
- [secureElementPass](pkpass/secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](pkpass/serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](pkpass/passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](pkpass/devicename.md): The name of the device that hosts the pass.
- [localizedName](pkpass/localizedname.md): The localized name for the pass’s template.
- [localizedDescription](pkpass/localizeddescription.md): The pass’s localized description.
- [isRemotePass](pkpass/isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](pkpass/paymentpass.md): Deprecated. The underlying payment pass.

# PKPassType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Types of passes.

## Declaration

```objectivec
enum PKPassType : NSUInteger;
```

## Topics

### Pass types

- [PKPassTypeAny](pkpasstype/any.md): A nonspecific pass type.
- [PKPassTypeBarcode](pkpasstype/barcode.md): A pass that represents a barcode.
- [PKPassTypeSecureElement](pkpasstype/secureelement.md): A pass that represents a credential that the device stores in the Secure Element.
- [PKPassTypePayment](pkpasstype/payment.md): Deprecated. A pass that represents a credit or debit card

## See Also

### Identifying a pass

- [passType](pkpass/passtype.md): The pass’s type.
- [secureElementPass](pkpass/secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](pkpass/serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](pkpass/passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](pkpass/devicename.md): The name of the device that hosts the pass.
- [localizedName](pkpass/localizedname.md): The localized name for the pass’s template.
- [localizedDescription](pkpass/localizeddescription.md): The pass’s localized description.
- [remotePass](pkpass/isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](pkpass/paymentpass.md): Deprecated. The underlying payment pass.
