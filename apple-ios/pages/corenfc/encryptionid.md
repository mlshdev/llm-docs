> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/encryptionid](https://developer.apple.com/documentation/corenfc/encryptionid)

# EncryptionId (Swift)

**Framework:** Core NFC  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.

## Declaration

```swift
typealias EncryptionId = NFCFeliCaEncryptionId
```

## Topics

### Identifiers

- [aes](nfcfelicaencryptionid/aes-swift.type.property.md): Deprecated. An identifier that indicates the Advanced Encryption Standard (AES) encryption algorithm.
- [aes_des](nfcfelicaencryptionid/aes_des-swift.type.property.md): Deprecated. An identifier that indicates the Data Encryption Standard (DES) encryption algorithm.

## See Also

### Requesting Services

- [requestService(nodeCodeList:completionHandler:)](nfcfelicatag/requestservice%28nodecodelist_completionhandler_%29.md): Sends the Request Service command, as defined by the FeliCa card specification, to the tag.
- [requestServiceV2(nodeCodeList:completionHandler:)](nfcfelicatag/requestservicev2%28nodecodelist_completionhandler_%29.md): Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.

# EncryptionId (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.

## Declaration

```objectivec
typedef NFCFeliCaEncryptionId EncryptionId;
```

## Topics

### Identifiers

- [EncryptionIdAES](nfcfelicaencryptionid/aes-swift.type.property.md): Deprecated. An identifier that indicates the Advanced Encryption Standard (AES) encryption algorithm.
- [EncryptionIdAES_DES](nfcfelicaencryptionid/aes_des-swift.type.property.md): Deprecated. An identifier that indicates the Data Encryption Standard (DES) encryption algorithm.

## See Also

### Requesting Services

- [requestServiceWithNodeCodeList:completionHandler:](nfcfelicatag/requestservice%28nodecodelist_completionhandler_%29.md): Sends the Request Service command, as defined by the FeliCa card specification, to the tag.
- [requestServiceV2WithNodeCodeList:completionHandler:](nfcfelicatag/requestservicev2%28nodecodelist_completionhandler_%29.md): Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.
