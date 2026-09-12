> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagcommandconfiguration](https://developer.apple.com/documentation/corenfc/nfctagcommandconfiguration)

# NFCTagCommandConfiguration (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A set of parameters you use to define the configuration of an NFC tag command.

## Declaration

```swift
class NFCTagCommandConfiguration
```

## Topics

### Configuring a Tag Command

- [maximumRetries](nfctagcommandconfiguration/maximumretries.md): The maximum number of retries.
- [retryInterval](nfctagcommandconfiguration/retryinterval.md): The time between retries, in seconds.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NFCISO15693CustomCommandConfiguration](nfciso15693customcommandconfiguration.md)
- [NFCISO15693ReadMultipleBlocksConfiguration](nfciso15693readmultipleblocksconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-swift.enum.md): An object that represents an NFC tag object.

# NFCTagCommandConfiguration (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A set of parameters you use to define the configuration of an NFC tag command.

## Declaration

```objectivec
@interface NFCTagCommandConfiguration : NSObject
```

## Topics

### Configuring a Tag Command

- [maximumRetries](nfctagcommandconfiguration/maximumretries.md): The maximum number of retries.
- [retryInterval](nfctagcommandconfiguration/retryinterval.md): The time between retries, in seconds.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NFCISO15693CustomCommandConfiguration](nfciso15693customcommandconfiguration.md)
- [NFCISO15693ReadMultipleBlocksConfiguration](nfciso15693readmultipleblocksconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
