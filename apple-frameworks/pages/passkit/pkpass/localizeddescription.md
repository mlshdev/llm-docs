> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/localizeddescription](https://developer.apple.com/documentation/passkit/pkpass/localizeddescription)

# localizedDescription (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The pass’s localized description.

## Declaration

```swift
var localizedDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

This property provides access to the description string from the pass’s JSON file. For more information about the JSON format, see [Pass Design and Creation](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/Creating.html#//apple_ref/doc/uid/TP40012195-CH4) in [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195). For information about adding localized strings to the JSON file, see [Passes Support Localization](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/Creating.html#//apple_ref/doc/uid/TP40012195-CH4-SW54) in that same guide.

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [isRemotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.

# localizedDescription (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The pass’s localized description.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

This property provides access to the description string from the pass’s JSON file. For more information about the JSON format, see [Pass Design and Creation](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/Creating.html#//apple_ref/doc/uid/TP40012195-CH4) in [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195). For information about adding localized strings to the JSON file, see [Passes Support Localization](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/Creating.html#//apple_ref/doc/uid/TP40012195-CH4-SW54) in that same guide.

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [secureElementPass](secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [remotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.
