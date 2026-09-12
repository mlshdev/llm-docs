> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/writemultipleblocks(requestflags:blockrange:datablocks:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/writemultipleblocks(requestflags:blockrange:datablocks:completionhandler:))

# writeMultipleBlocks(requestFlags:blockRange:dataBlocks:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write Multiple Blocks command (0x24 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func writeMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: [Data], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: [Data]) async throws
```

## See Also

### Sending Multi-block Commands

- [readMultipleBlocks(requestFlags:blockRange:completionHandler:)](readmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Read Multiple Blocks command (0x23 command code), as defined in the ISO 15693-3 specification, to the tag.
- [getMultipleBlockSecurityStatus(requestFlags:blockRange:completionHandler:)](getmultipleblocksecuritystatus%28requestflags_blockrange_completionhandler_%29.md): Sends the Get Multiple Block Security Status command (0x2C command code), as defined in the ISO 15693-3 specification, to the tag.

# writeMultipleBlocksWithRequestFlags:blockRange:dataBlocks:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Write Multiple Blocks command (0x24 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) writeMultipleBlocksWithRequestFlags:(NFCISO15693RequestFlag) flags blockRange:(NSRange) blockRange dataBlocks:(NSArray<NSData *> *) dataBlocks completionHandler:(void (^)(NSError *error)) completionHandler;
```

## See Also

### Sending Multi-block Commands

- [readMultipleBlocksWithRequestFlags:blockRange:completionHandler:](readmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Read Multiple Blocks command (0x23 command code), as defined in the ISO 15693-3 specification, to the tag.
- [getMultipleBlockSecurityStatusWithRequestFlag:blockRange:completionHandler:](getmultipleblocksecuritystatus%28requestflags_blockrange_completionhandler_%29.md): Sends the Get Multiple Block Security Status command (0x2C command code), as defined in the ISO 15693-3 specification, to the tag.
