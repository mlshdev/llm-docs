> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedreadsingleblock(requestflags:blocknumber:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedreadsingleblock(requestflags:blocknumber:completionhandler:))

# extendedReadSingleBlock(requestFlags:blockNumber:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

## Declaration

```swift
func extendedReadSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int, completionHandler: @escaping @Sendable (Data, (any Error)?) -> Void)
```

```swift
func extendedReadSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int) async throws -> Data
```

<a id="Discussion"></a>

## Discussion

## See Also

### Sending Extended Commands

- [extendedWriteSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:)](extendedwritesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlock(requestFlags:blockNumber:completionHandler:)](extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedReadMultipleBlocks(requestFlags:blockRange:completionHandler:)](extendedreadmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

# extendedReadSingleBlockWithRequestFlags:blockNumber:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

## Declaration

```objectivec
- (void) extendedReadSingleBlockWithRequestFlags:(NFCISO15693RequestFlag) flags blockNumber:(NSInteger) blockNumber completionHandler:(void (^)(NSData *data, NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Sending Extended Commands

- [extendedWriteSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler:](extendedwritesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlockWithRequestFlags:blockNumber:completionHandler:](extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedReadMultipleBlocksWithRequestFlags:blockRange:completionHandler:](extendedreadmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
