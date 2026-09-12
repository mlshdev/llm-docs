> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedreadmultipleblocks(requestflags:blockrange:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedreadmultipleblocks(requestflags:blockrange:completionhandler:))

# extendedReadMultipleBlocks(requestFlags:blockRange:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

## Declaration

```swift
func extendedReadMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: @escaping @Sendable ([Data], (any Error)?) -> Void)
```

```swift
func extendedReadMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange) async throws -> [Data]
```

## See Also

### Sending Extended Commands

- [extendedReadSingleBlock(requestFlags:blockNumber:completionHandler:)](extendedreadsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedWriteSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:)](extendedwritesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlock(requestFlags:blockNumber:completionHandler:)](extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

# extendedReadMultipleBlocksWithRequestFlags:blockRange:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

## Declaration

```objectivec
- (void) extendedReadMultipleBlocksWithRequestFlags:(NFCISO15693RequestFlag) flags blockRange:(NSRange) blockRange completionHandler:(void (^)(NSArray<NSData *> *dataBlocks, NSError *error)) completionHandler;
```

## See Also

### Sending Extended Commands

- [extendedReadSingleBlockWithRequestFlags:blockNumber:completionHandler:](extendedreadsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedWriteSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler:](extendedwritesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlockWithRequestFlags:blockNumber:completionHandler:](extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
