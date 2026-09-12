> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/readmultipleblocks(requestflags:blockrange:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/readmultipleblocks(requestflags:blockrange:completionhandler:))

# readMultipleBlocks(requestFlags:blockRange:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Read Multiple Blocks command (0x23 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func readMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: @escaping @Sendable ([Data], (any Error)?) -> Void)
```

```swift
func readMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange) async throws -> [Data]
```

## See Also

### Sending Multi-block Commands

- [writeMultipleBlocks(requestFlags:blockRange:dataBlocks:completionHandler:)](writemultipleblocks%28requestflags_blockrange_datablocks_completionhandler_%29.md): Sends the Write Multiple Blocks command (0x24 command code), as defined in the ISO 15693-3 specification, to the tag.
- [getMultipleBlockSecurityStatus(requestFlags:blockRange:completionHandler:)](getmultipleblocksecuritystatus%28requestflags_blockrange_completionhandler_%29.md): Sends the Get Multiple Block Security Status command (0x2C command code), as defined in the ISO 15693-3 specification, to the tag.

# readMultipleBlocksWithRequestFlags:blockRange:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Read Multiple Blocks command (0x23 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) readMultipleBlocksWithRequestFlags:(NFCISO15693RequestFlag) flags blockRange:(NSRange) blockRange completionHandler:(void (^)(NSArray<NSData *> *dataBlocks, NSError *error)) completionHandler;
```

## See Also

### Sending Multi-block Commands

- [writeMultipleBlocksWithRequestFlags:blockRange:dataBlocks:completionHandler:](writemultipleblocks%28requestflags_blockrange_datablocks_completionhandler_%29.md): Sends the Write Multiple Blocks command (0x24 command code), as defined in the ISO 15693-3 specification, to the tag.
- [getMultipleBlockSecurityStatusWithRequestFlag:blockRange:completionHandler:](getmultipleblocksecuritystatus%28requestflags_blockrange_completionhandler_%29.md): Sends the Get Multiple Block Security Status command (0x2C command code), as defined in the ISO 15693-3 specification, to the tag.
