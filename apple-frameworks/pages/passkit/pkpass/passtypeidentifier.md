> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/passtypeidentifier](https://developer.apple.com/documentation/passkit/pkpass/passtypeidentifier)

# passTypeIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The pass’s pass type identifier.

## Declaration

```swift
var passTypeIdentifier: String { get }
```

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [isRemotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.

# passTypeIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The pass’s pass type identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * passTypeIdentifier;
```

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [remotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.
