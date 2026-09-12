> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/lockblock(requestflags:blocknumber:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/lockblock(requestflags:blocknumber:completionhandler:))

# lockBlock(requestFlags:blockNumber:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func lockBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func lockBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8) async throws
```

## See Also

### Sending Single Block Commands

- [readSingleBlock(requestFlags:blockNumber:completionHandler:)](readsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.
- [writeSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:)](writesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.

# lockBlockWithRequestFlags:blockNumber:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) lockBlockWithRequestFlags:(NFCISO15693RequestFlag) flags blockNumber:(uint8_t) blockNumber completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Single Block Commands

- [readSingleBlockWithRequestFlags:blockNumber:completionHandler:](readsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.
- [writeSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler:](writesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.
