> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/localizedname](https://developer.apple.com/documentation/passkit/pkpass/localizedname)

# localizedName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The localized name for the pass’s template.

## Declaration

```swift
var localizedName: String { get }
```

<a id="Discussion"></a>

## Discussion

The pass’s template defines the pass’s basic layout. For more information about the available templates, see [Pass Style Sets the Overall Visual Appearance](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/Creating.html#//apple_ref/doc/uid/TP40012195-CH4-SW45) in [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195).

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [isRemotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.

# localizedName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The localized name for the pass’s template.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * localizedName;
```

<a id="Discussion"></a>

## Discussion

The pass’s template defines the pass’s basic layout. For more information about the available templates, see [Pass Style Sets the Overall Visual Appearance](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/Creating.html#//apple_ref/doc/uid/TP40012195-CH4-SW45) in [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195).

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [remotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.
