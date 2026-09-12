> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/paymentpass](https://developer.apple.com/documentation/passkit/pkpass/paymentpass)

# paymentPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

The underlying payment pass.

> Use [secureElementPass](secureelementpass.md) instead.

## Declaration

```swift
var paymentPass: PKPaymentPass? { get }
```

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [isRemotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.

# paymentPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

The underlying payment pass.

> Use [secureElementPass](secureelementpass.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PKPaymentPass * paymentPass;
```

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [remotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
