> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/isremotepass](https://developer.apple.com/documentation/passkit/pkpass/isremotepass)

# isRemotePass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.

## Declaration

```swift
var isRemotePass: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the pass is on a paired device, such as an Apple Watch; otherwise, [false](https://developer.apple.com/documentation/swift/false).

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
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.

# remotePass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isRemotePass) BOOL remotePass;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the pass is on a paired device, such as an Apple Watch; otherwise, [false](https://developer.apple.com/documentation/swift/false).

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
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.
