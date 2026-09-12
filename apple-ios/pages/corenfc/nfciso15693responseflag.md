> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693responseflag](https://developer.apple.com/documentation/corenfc/nfciso15693responseflag)

# NFCISO15693ResponseFlag (Swift)

**Framework:** Core NFC  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
struct NFCISO15693ResponseFlag
```

## Topics

### Initializers

- [init(rawValue:)](nfciso15693responseflag/init%28rawvalue_%29.md)

### Type Properties

- [blockSecurityStatusBit5](nfciso15693responseflag/blocksecuritystatusbit5.md)
- [blockSecurityStatusBit6](nfciso15693responseflag/blocksecuritystatusbit6.md)
- [error](nfciso15693responseflag/error.md)
- [finalResponse](nfciso15693responseflag/finalresponse.md)
- [protocolExtension](nfciso15693responseflag/protocolextension.md)
- [responseBufferValid](nfciso15693responseflag/responsebuffervalid.md)
- [waitTimeExtension](nfciso15693responseflag/waittimeextension.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](nfciso15693requestflag.md)
- [NFCVASResponse.ErrorCode](nfcvasresponse/errorcode.md)
- [NFCVASCommandConfiguration.Mode](nfcvascommandconfiguration/mode-swift.enum.md)

# NFCISO15693ResponseFlag (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
enum NFCISO15693ResponseFlag : uint8_t;
```

## Topics

### Enumeration Cases

- [NFCISO15693ResponseFlagBlockSecurityStatusBit5](nfciso15693responseflag/blocksecuritystatusbit5.md)
- [NFCISO15693ResponseFlagBlockSecurityStatusBit6](nfciso15693responseflag/blocksecuritystatusbit6.md)
- [NFCISO15693ResponseFlagError](nfciso15693responseflag/error.md)
- [NFCISO15693ResponseFlagFinalResponse](nfciso15693responseflag/finalresponse.md)
- [NFCISO15693ResponseFlagProtocolExtension](nfciso15693responseflag/protocolextension.md)
- [NFCISO15693ResponseFlagResponseBufferValid](nfciso15693responseflag/responsebuffervalid.md)
- [NFCISO15693ResponseFlagWaitTimeExtension](nfciso15693responseflag/waittimeextension.md)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](nfciso15693requestflag.md)
- [NFCVASErrorCode](nfcvasresponse/errorcode.md)
- [NFCVASMode](nfcvascommandconfiguration/mode-swift.enum.md)
