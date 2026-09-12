> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvascommandconfiguration/mode-swift.enum](https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/mode-swift.enum)

# NFCVASCommandConfiguration.Mode (Swift)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

## Declaration

```swift
enum Mode
```

## Topics

### Enumeration Cases

- [NFCVASCommandConfiguration.Mode.normal](mode-swift.enum/normal.md)
- [NFCVASCommandConfiguration.Mode.urlOnly](mode-swift.enum/urlonly.md)

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

### Type Properties

- [VASModeNormal](mode-swift.enum/vasmodenormal.md): Deprecated. A constant that indicates the Full VAS Protocol mode.
- [VASModeURLOnly](mode-swift.enum/vasmodeurlonly.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](../nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](../nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](../nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](../nfciso15693requestflag.md)
- [NFCISO15693ResponseFlag](../nfciso15693responseflag.md)
- [NFCVASResponse.ErrorCode](../nfcvasresponse/errorcode.md)

# NFCVASMode (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
enum NFCVASMode : NSInteger;
```

## Topics

### Enumeration Cases

- [VASModeNormal](mode-swift.enum/vasmodenormal.md): Deprecated. A constant that indicates the Full VAS Protocol mode.
- [VASModeURLOnly](mode-swift.enum/vasmodeurlonly.md): Deprecated.
- [NFCVASModeNormal](mode-swift.enum/normal.md)
- [NFCVASModeURLOnly](mode-swift.enum/urlonly.md)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](../nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](../nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](../nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](../nfciso15693requestflag.md)
- [NFCISO15693ResponseFlag](../nfciso15693responseflag.md)
- [NFCVASErrorCode](../nfcvasresponse/errorcode.md)
