> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/writesingleblock(requestflags:blocknumber:datablock:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/writesingleblock(requestflags:blocknumber:datablock:completionhandler:))

# writeSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func writeSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8, dataBlock: Data, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8, dataBlock: Data) async throws
```

## See Also

### Sending Single Block Commands

- [readSingleBlock(requestFlags:blockNumber:completionHandler:)](readsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockBlock(requestFlags:blockNumber:completionHandler:)](lockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.

# writeSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) writeSingleBlockWithRequestFlags:(NFCISO15693RequestFlag) flags blockNumber:(uint8_t) blockNumber dataBlock:(NSData *) dataBlock completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Single Block Commands

- [readSingleBlockWithRequestFlags:blockNumber:completionHandler:](readsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockBlockWithRequestFlags:blockNumber:completionHandler:](lockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.
