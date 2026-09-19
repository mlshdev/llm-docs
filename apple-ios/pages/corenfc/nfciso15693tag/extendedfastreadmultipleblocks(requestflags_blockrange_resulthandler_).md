> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedfastreadmultipleblocks(requestflags:blockrange:resulthandler:)

# extendedFastReadMultipleBlocks(requestFlags:blockRange:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func extendedFastReadMultipleBlocks(requestFlags flags: NFCISO15693RequestFlag, blockRange: NSRange, resultHandler: @escaping @Sendable (Result<[Data], any Error>) -> Void)
```
