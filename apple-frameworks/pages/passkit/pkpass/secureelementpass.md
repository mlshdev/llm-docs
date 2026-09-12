> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/secureelementpass](https://developer.apple.com/documentation/passkit/pkpass/secureelementpass)

# secureElementPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The pass that contains an accompanying credential that the device stores in the Secure Element.

## Declaration

```swift
var secureElementPass: PKSecureElementPass? { get }
```

<a id="Discussion"></a>

## Discussion

Passes that contain sensitive information — for example, payment cards or digital car keys — store that information in the device’s Secure Element as an instance of [PKSecureElementPass](../pksecureelementpass.md). Use this property to access the accompanying pass, which you can then use for other operations, such as signing data using a cryptographic signature.

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [isRemotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.

# secureElementPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The pass that contains an accompanying credential that the device stores in the Secure Element.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PKSecureElementPass * secureElementPass;
```

<a id="Discussion"></a>

## Discussion

Passes that contain sensitive information — for example, payment cards or digital car keys — store that information in the device’s Secure Element as an instance of [PKSecureElementPass](../pksecureelementpass.md). Use this property to access the accompanying pass, which you can then use for other operations, such as signing data using a cryptographic signature.

## See Also

### Identifying a pass

- [passType](passtype.md): The pass’s type.
- [PKPassType](../pkpasstype.md): Types of passes.
- [serialNumber](serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](devicename.md): The name of the device that hosts the pass.
- [localizedName](localizedname.md): The localized name for the pass’s template.
- [localizedDescription](localizeddescription.md): The pass’s localized description.
- [remotePass](isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](paymentpass.md): Deprecated. The underlying payment pass.
