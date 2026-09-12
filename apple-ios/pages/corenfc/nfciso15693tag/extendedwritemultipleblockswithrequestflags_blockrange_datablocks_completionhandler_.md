> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedwritemultipleblockswithrequestflags:blockrange:datablocks:completionhandler:](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedwritemultipleblockswithrequestflags:blockrange:datablocks:completionhandler:)

# extendedWriteMultipleBlocksWithRequestFlags:blockRange:dataBlocks:completionHandler:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```objectivec
- (void) extendedWriteMultipleBlocksWithRequestFlags:(NFCISO15693RequestFlag) flags blockRange:(NSRange) blockRange dataBlocks:(NSArray<NSData *> *) dataBlocks completionHandler:(void (^)(NSError *error)) completionHandler;
```
