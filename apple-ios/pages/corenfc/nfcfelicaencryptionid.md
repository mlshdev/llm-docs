> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicaencryptionid](https://developer.apple.com/documentation/corenfc/nfcfelicaencryptionid)

# NFCFeliCaEncryptionId (Swift)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

## Declaration

```swift
enum NFCFeliCaEncryptionId
```

## Topics

### Enumeration Cases

- [NFCFeliCaEncryptionId.AES](nfcfelicaencryptionid/aes-swift.enum.case.md)
- [NFCFeliCaEncryptionId.AES_DES](nfcfelicaencryptionid/aes_des-swift.enum.case.md)

### Initializers

- [init(rawValue:)](nfcfelicaencryptionid/init%28rawvalue_%29.md)

### Type Properties

- [aes](nfcfelicaencryptionid/aes-swift.type.property.md): Deprecated. An identifier that indicates the Advanced Encryption Standard (AES) encryption algorithm.
- [aes_des](nfcfelicaencryptionid/aes_des-swift.type.property.md): Deprecated. An identifier that indicates the Data Encryption Standard (DES) encryption algorithm.

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

- [NFCFeliCaPollingRequestCode](nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](nfciso15693requestflag.md)
- [NFCISO15693ResponseFlag](nfciso15693responseflag.md)
- [NFCVASResponse.ErrorCode](nfcvasresponse/errorcode.md)
- [NFCVASCommandConfiguration.Mode](nfcvascommandconfiguration/mode-swift.enum.md)

# NFCFeliCaEncryptionId (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
enum NFCFeliCaEncryptionId : NSInteger;
```

## Topics

### Enumeration Cases

- [NFCFeliCaEncryptionIdAES](nfcfelicaencryptionid/aes-swift.enum.case.md)
- [NFCFeliCaEncryptionIdAES_DES](nfcfelicaencryptionid/aes_des-swift.enum.case.md)
- [EncryptionIdAES](nfcfelicaencryptionid/aes-swift.type.property.md): Deprecated. An identifier that indicates the Advanced Encryption Standard (AES) encryption algorithm.
- [EncryptionIdAES_DES](nfcfelicaencryptionid/aes_des-swift.type.property.md): Deprecated. An identifier that indicates the Data Encryption Standard (DES) encryption algorithm.

## See Also

### Enumerations

- [NFCFeliCaPollingRequestCode](nfcfelicapollingrequestcode.md)
- [NFCFeliCaPollingTimeSlot](nfcfelicapollingtimeslot.md)
- [NFCISO15693RequestFlag](nfciso15693requestflag.md)
- [NFCISO15693ResponseFlag](nfciso15693responseflag.md)
- [NFCVASErrorCode](nfcvasresponse/errorcode.md)
- [NFCVASMode](nfcvascommandconfiguration/mode-swift.enum.md)
