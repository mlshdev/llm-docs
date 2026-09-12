> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestresponse(resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestresponse(resulthandler:))

# requestResponse(resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestResponse(resultHandler: @escaping @Sendable (Result<Int, any Error>) -> Void)
```

```swift
func requestResponse(resultHandler: @escaping (Result<Int, any Error>) -> Void)
```
