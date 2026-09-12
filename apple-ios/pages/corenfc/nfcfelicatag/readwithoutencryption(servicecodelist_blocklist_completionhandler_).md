> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/readwithoutencryption(servicecodelist:blocklist:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/readwithoutencryption(servicecodelist:blocklist:completionhandler:))

# readWithoutEncryption(serviceCodeList:blockList:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Read Without Encryption command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func readWithoutEncryption(serviceCodeList: [Data], blockList: [Data], completionHandler: @escaping @Sendable (Int, Int, [Data], (any Error)?) -> Void)
```

```swift
func readWithoutEncryption(serviceCodeList: [Data], blockList: [Data]) async throws -> (Int, Int, [Data])
```

## See Also

### Reading and Writing Without Encryption

- [writeWithoutEncryption(serviceCodeList:blockList:blockData:completionHandler:)](writewithoutencryption%28servicecodelist_blocklist_blockdata_completionhandler_%29.md): Sends the Write Without Encryption command, as defined by the FeliCa card specification, to the tag.

# readWithoutEncryptionWithServiceCodeList:blockList:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Read Without Encryption command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) readWithoutEncryptionWithServiceCodeList:(NSArray<NSData *> *) serviceCodeList blockList:(NSArray<NSData *> *) blockList completionHandler:(void (^)(NSInteger statusFlag1, NSInteger statusFlag2, NSArray<NSData *> *blockData, NSError *error)) completionHandler;
```

## See Also

### Reading and Writing Without Encryption

- [writeWithoutEncryptionWithServiceCodeList:blockList:blockData:completionHandler:](writewithoutencryption%28servicecodelist_blocklist_blockdata_completionhandler_%29.md): Sends the Write Without Encryption command, as defined by the FeliCa card specification, to the tag.
