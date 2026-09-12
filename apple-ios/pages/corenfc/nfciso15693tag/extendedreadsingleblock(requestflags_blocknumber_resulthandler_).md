> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/extendedreadsingleblock(requestflags:blocknumber:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/extendedreadsingleblock(requestflags:blocknumber:resulthandler:))

# extendedReadSingleBlock(requestFlags:blockNumber:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func extendedReadSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int, resultHandler: @escaping @Sendable (Result<Data, any Error>) -> Void)
```

```swift
func extendedReadSingleBlock(requestFlags flags: NFCISO15693RequestFlag, blockNumber: Int, resultHandler: @escaping (Result<Data, any Error>) -> Void)
```
