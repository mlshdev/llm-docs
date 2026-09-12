> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedwritesingleblock(requestflags:blocknumber:datablock:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedwritesingleblock(requestflags:blocknumber:datablock:completionhandler:))

# extendedWriteSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

## Declaration

```swift
func extendedWriteSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int, dataBlock: Data, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func extendedWriteSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int, dataBlock: Data) async throws
```

## See Also

### Sending Extended Commands

- [extendedReadSingleBlock(requestFlags:blockNumber:completionHandler:)](extendedreadsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlock(requestFlags:blockNumber:completionHandler:)](extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedReadMultipleBlocks(requestFlags:blockRange:completionHandler:)](extendedreadmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

# extendedWriteSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

## Declaration

```objectivec
- (void) extendedWriteSingleBlockWithRequestFlags:(NFCISO15693RequestFlag) flags blockNumber:(NSInteger) blockNumber dataBlock:(NSData *) dataBlock completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Extended Commands

- [extendedReadSingleBlockWithRequestFlags:blockNumber:completionHandler:](extendedreadsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlockWithRequestFlags:blockNumber:completionHandler:](extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedReadMultipleBlocksWithRequestFlags:blockRange:completionHandler:](extendedreadmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
