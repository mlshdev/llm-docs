> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvascommandconfiguration](https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration)

# NFCVASCommandConfiguration (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object providing the configuration for a GET VAS DATA command.

## Declaration

```swift
class NFCVASCommandConfiguration
```

## Topics

### Creating a Command Configuration

- [init(vasMode:passTypeIdentifier:url:)](nfcvascommandconfiguration/init%28vasmode_passtypeidentifier_url_%29-9bh8w.md): Creates a VAS command configuration object.

### Setting Configuration Items

- [mode](nfcvascommandconfiguration/mode-swift.property.md): A VAS protocol mode.
- [VASMode](vasmode.md): Deprecated. Constants that indicate the VAS protocol mode.
- [passTypeIdentifier](nfcvascommandconfiguration/passtypeidentifier.md): A type identifier for the Wallet Pass.
- [url](nfcvascommandconfiguration/url.md): A merchant URL.

### Initializers

- [init(VASMode:passTypeIdentifier:url:)](nfcvascommandconfiguration/init%28vasmode_passtypeidentifier_url_%29-1dcy0.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a VAS Reader Session

- [init(vasCommandConfigurations:delegate:queue:)](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-23h52.md): Creates a VAS reader session.
- [NFCVASReaderSessionDelegate](nfcvasreadersessiondelegate.md): A protocol that an object implements to receive callbacks from a VAS reader session.

# NFCVASCommandConfiguration (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An object providing the configuration for a GET VAS DATA command.

## Declaration

```objectivec
@interface NFCVASCommandConfiguration : NSObject
```

## Topics

### Creating a Command Configuration

- [initWithVASMode:passTypeIdentifier:url:](nfcvascommandconfiguration/init%28vasmode_passtypeidentifier_url_%29-9bh8w.md): Creates a VAS command configuration object.

### Setting Configuration Items

- [mode](nfcvascommandconfiguration/mode-swift.property.md): A VAS protocol mode.
- [VASMode](vasmode.md): Deprecated. Constants that indicate the VAS protocol mode.
- [passTypeIdentifier](nfcvascommandconfiguration/passtypeidentifier.md): A type identifier for the Wallet Pass.
- [url](nfcvascommandconfiguration/url.md): A merchant URL.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Creating a VAS Reader Session

- [initWithVASCommandConfigurations:delegate:queue:](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-23h52.md): Creates a VAS reader session.
- [NFCVASReaderSessionDelegate](nfcvasreadersessiondelegate.md): A protocol that an object implements to receive callbacks from a VAS reader session.
