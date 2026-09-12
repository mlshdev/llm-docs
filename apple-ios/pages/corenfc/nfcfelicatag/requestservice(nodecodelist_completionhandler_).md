> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestservice(nodecodelist:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestservice(nodecodelist:completionhandler:))

# requestService(nodeCodeList:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Service command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func requestService(nodeCodeList: [Data], completionHandler: @escaping @Sendable ([Data], (any Error)?) -> Void)
```

```swift
func requestService(nodeCodeList: [Data]) async throws -> [Data]
```

## See Also

### Requesting Services

- [requestServiceV2(nodeCodeList:completionHandler:)](requestservicev2%28nodecodelist_completionhandler_%29.md): Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.
- [EncryptionId](../encryptionid.md): Deprecated. Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.

# requestServiceWithNodeCodeList:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Request Service command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) requestServiceWithNodeCodeList:(NSArray<NSData *> *) nodeCodeList completionHandler:(void (^)(NSArray<NSData *> *nodeKeyVersionList, NSError *error)) completionHandler;
```

## See Also

### Requesting Services

- [requestServiceV2WithNodeCodeList:completionHandler:](requestservicev2%28nodecodelist_completionhandler_%29.md): Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.
- [EncryptionId](../encryptionid.md): Deprecated. Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.
