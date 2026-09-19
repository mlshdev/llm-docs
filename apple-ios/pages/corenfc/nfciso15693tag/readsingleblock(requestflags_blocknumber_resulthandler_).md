> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/readsingleblock(requestflags:blocknumber:resulthandler:)

# readSingleBlock(requestFlags:blockNumber:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func readSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: UInt8, resultHandler: @escaping @Sendable (Result<Data, any Error>) -> Void)
```
