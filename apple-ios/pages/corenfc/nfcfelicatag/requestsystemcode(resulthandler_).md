> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestsystemcode(resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestsystemcode(resulthandler:))

# requestSystemCode(resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestSystemCode(resultHandler: @escaping @Sendable (Result<[Data], any Error>) -> Void)
```

```swift
func requestSystemCode(resultHandler: @escaping (Result<[Data], any Error>) -> Void)
```
