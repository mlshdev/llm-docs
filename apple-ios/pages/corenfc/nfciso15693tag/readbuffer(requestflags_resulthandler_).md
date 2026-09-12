> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/readbuffer(requestflags:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/readbuffer(requestflags:resulthandler:))

# readBuffer(requestFlags:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func readBuffer(requestFlags flags: NFCISO15693RequestFlag, resultHandler: @escaping @Sendable (Result<(NFCISO15693ResponseFlag, Data), any Error>) -> Void)
```

```swift
func readBuffer(requestFlags flags: NFCISO15693RequestFlag, resultHandler: @escaping (Result<(NFCISO15693ResponseFlag, Data), any Error>) -> Void)
```
