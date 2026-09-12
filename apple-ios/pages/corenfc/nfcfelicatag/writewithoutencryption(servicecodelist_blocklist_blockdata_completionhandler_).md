> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/writewithoutencryption(servicecodelist:blocklist:blockdata:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/writewithoutencryption(servicecodelist:blocklist:blockdata:completionhandler:))

# writeWithoutEncryption(serviceCodeList:blockList:blockData:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write Without Encryption command, as defined by the FeliCa card specification, to the tag.

## Declaration

```swift
func writeWithoutEncryption(serviceCodeList: [Data], blockList: [Data], blockData: [Data], completionHandler: @escaping @Sendable (Int, Int, (any Error)?) -> Void)
```

```swift
func writeWithoutEncryption(serviceCodeList: [Data], blockList: [Data], blockData: [Data]) async throws -> (Int, Int)
```

## See Also

### Reading and Writing Without Encryption

- [readWithoutEncryption(serviceCodeList:blockList:completionHandler:)](readwithoutencryption%28servicecodelist_blocklist_completionhandler_%29.md): Sends the Read Without Encryption command, as defined by the FeliCa card specification, to the tag.

# writeWithoutEncryptionWithServiceCodeList:blockList:blockData:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write Without Encryption command, as defined by the FeliCa card specification, to the tag.

## Declaration

```objectivec
- (void) writeWithoutEncryptionWithServiceCodeList:(NSArray<NSData *> *) serviceCodeList blockList:(NSArray<NSData *> *) blockList blockData:(NSArray<NSData *> *) blockData completionHandler:(void (^)(NSInteger statusFlag1, NSInteger statusFlag2, NSError *error)) completionHandler;
```

## See Also

### Reading and Writing Without Encryption

- [readWithoutEncryptionWithServiceCodeList:blockList:completionHandler:](readwithoutencryption%28servicecodelist_blocklist_completionhandler_%29.md): Sends the Read Without Encryption command, as defined by the FeliCa card specification, to the tag.
