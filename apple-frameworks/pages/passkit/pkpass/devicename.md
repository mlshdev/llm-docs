> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/devicename](https://developer.apple.com/documentation/passkit/pkpass/devicename)

# deviceName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The name of the device that hosts the pass.

## Declaration

```swift
var deviceName: String { get }
```

<a id="Discussion"></a>

## Discussion

If [isRemotePass](isremotepass.md) is [true](https://developer.apple.com/documentation/swift/true), this property contains the name of the paired device that stores the pass; otherwise, it contains the name of the device.

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [isRemotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.

# deviceName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The name of the device that hosts the pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * deviceName;
```

<a id="Discussion"></a>

## Discussion

If [remotePass](isremotepass.md) is [true](https://developer.apple.com/documentation/swift/true), this property contains the name of the paired device that stores the pass; otherwise, it contains the name of the device.

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [remotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.
