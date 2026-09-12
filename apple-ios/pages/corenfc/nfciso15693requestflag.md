> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693requestflag](https://developer.apple.com/documentation/corenfc/nfciso15693requestflag)

# NFCISO15693RequestFlag (Swift)

**Framework:** Core NFC  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
struct NFCISO15693RequestFlag
```

## Topics

### Initializers

- [init(rawValue:)](nfciso15693requestflag/init%28rawvalue_%29.md)

### Type Properties

- [RequestFlagAddress](nfciso15693requestflag/requestflagaddress.md): Deprecated. A bit mask value that turns on the address flag.
- [RequestFlagDualSubCarriers](nfciso15693requestflag/requestflagdualsubcarriers.md): Deprecated. A bit mask value that turns on the subcarrier flag.
- [RequestFlagHighDataRate](nfciso15693requestflag/requestflaghighdatarate.md): Deprecated. A bit mask value that turns on the high data rate flag.
- [RequestFlagOption](nfciso15693requestflag/requestflagoption.md): Deprecated. A bit mask value that turns on the option flag.
- [RequestFlagProtocolExtension](nfciso15693requestflag/requestflagprotocolextension.md): Deprecated. A bit mask value that turns on the protocol extension flag.
- [RequestFlagSelect](nfciso15693requestflag/requestflagselect.md): Deprecated. A bit mask value that turns on the select flag.
- [address](nfciso15693requestflag/address.md)
- [commandSpecificBit8](nfciso15693requestflag/commandspecificbit8.md)
- [dualSubCarriers](nfciso15693requestflag/dualsubcarriers.md)
- [highDataRate](nfciso15693requestflag/highdatarate.md)
- [option](nfciso15693requestflag/option.md)
- [protocolExtension](nfciso15693requestflag/protocolextension.md)
- [select](nfciso15693requestflag/select.md)

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
- [NFCISO15693ResponseFlag](nfciso15693responseflag.md)
- [NFCVASResponse.ErrorCode](nfcvasresponse/errorcode.md)
- [NFCVASCommandConfiguration.Mode](nfcvascommandconfiguration/mode-swift.enum.md)

# NFCISO15693RequestFlag (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
enum NFCISO15693RequestFlag : uint8_t;
```

## Topics

### Enumeration Cases

- [RequestFlagAddress](nfciso15693requestflag/requestflagaddress.md): Deprecated. A bit mask value that turns on the address flag.
- [RequestFlagDualSubCarriers](nfciso15693requestflag/requestflagdualsubcarriers.md): Deprecated. A bit mask value that turns on the subcarrier flag.
- [RequestFlagHighDataRate](nfciso15693requestflag/requestflaghighdatarate.md): Deprecated. A bit mask value that turns on the high data rate flag.
- [RequestFlagOption](nfciso15693requestflag/requestflagoption.md): Deprecated. A bit mask value that turns on the option flag.
- [RequestFlagProtocolExtension](nfciso15693requestflag/requestflagprotocolextension.md): Deprecated. A bit mask value that turns on the protocol extension flag.
- [RequestFlagSelect](nfciso15693requestflag/requestflagselect.md): Deprecated. A bit mask value that turns on the select flag.
- [NFCISO15693RequestFlagAddress](nfciso15693requestflag/address.md)
- [NFCISO15693RequestFlagCommandSpecificBit8](nfciso15693requestflag/commandspecificbit8.md)
- [NFCISO15693RequestFlagDualSubCarriers](nfciso15693requestflag/dualsubcarriers.md)
- [NFCISO15693RequestFlagHighDataRate](nfciso15693requestflag/highdatarate.md)
- [NFCISO15693RequestFlagOption](nfciso15693requestflag/option.md)
- [NFCISO15693RequestFlagProtocolExtension](nfciso15693requestflag/protocolextension.md)
- [NFCISO15693RequestFlagSelect](nfciso15693requestflag/select.md)

## See Also

### Enumerations

- [NFCFeliCaEncryptionId](nfcfelicaencryptionid.md)
- [NFCFeliCaPollingRequestCode](nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](nfcfelicapollingtimeslot.md)
- [NFCISO15693ResponseFlag](nfciso15693responseflag.md)
- [NFCVASErrorCode](nfcvasresponse/errorcode.md)
- [NFCVASMode](nfcvascommandconfiguration/mode-swift.enum.md)
