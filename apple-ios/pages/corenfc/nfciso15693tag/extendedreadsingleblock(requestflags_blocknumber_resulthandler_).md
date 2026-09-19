> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedreadsingleblock(requestflags:blocknumber:resulthandler:)

# extendedReadSingleBlock(requestFlags:blockNumber:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func extendedReadSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int, resultHandler: @escaping @Sendable (Result<Data, any Error>) -> Void)
```
