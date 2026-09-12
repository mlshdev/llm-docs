> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedwritemultipleblocks(requestflags:blockrange:datablocks:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedwritemultipleblocks(requestflags:blockrange:datablocks:completionhandler:))

# extendedWriteMultipleBlocks(requestFlags:blockRange:dataBlocks:completionHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func extendedWriteMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: [Data], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func extendedWriteMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: [Data], completionHandler: @escaping ((any Error)?) -> Void)
```
