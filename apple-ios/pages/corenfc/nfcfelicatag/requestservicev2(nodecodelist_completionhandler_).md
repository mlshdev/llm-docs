> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestservicev2(nodecodelist:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestservicev2(nodecodelist:completionhandler:))

# requestServiceV2(nodeCodeList:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func requestServiceV2(nodeCodeList: [Data], completionHandler: @escaping @Sendable (Int, Int, NFCFeliCaEncryptionId, [Data], [Data], (any Error)?) -> Void)
```

```swift
func requestServiceV2(nodeCodeList: [Data]) async throws -> (Int, Int, NFCFeliCaEncryptionId, [Data], [Data])
```

## See Also

### Requesting Services

- [requestService(nodeCodeList:completionHandler:)](requestservice%28nodecodelist_completionhandler_%29.md): Sends the Request Service command, as defined by the FeliCa card specification, to the tag.
- [EncryptionId](../encryptionid.md): Deprecated. Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.

# requestServiceV2WithNodeCodeList:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) requestServiceV2WithNodeCodeList:(NSArray<NSData *> *) nodeCodeList completionHandler:(void (^)(NSInteger statusFlag1, NSInteger statusFlag2, NFCFeliCaEncryptionId encryptionIdentifier, NSArray<NSData *> *nodeKeyVersionListAES, NSArray<NSData *> *nodeKeyVersionListDES, NSError *error)) completionHandler;
```

## See Also

### Requesting Services

- [requestServiceWithNodeCodeList:completionHandler:](requestservice%28nodecodelist_completionhandler_%29.md): Sends the Request Service command, as defined by the FeliCa card specification, to the tag.
- [EncryptionId](../encryptionid.md): Deprecated. Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.
