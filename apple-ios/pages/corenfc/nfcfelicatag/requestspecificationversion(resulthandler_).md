> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestspecificationversion(resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestspecificationversion(resulthandler:))

# requestSpecificationVersion(resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestSpecificationVersion(resultHandler: @escaping @Sendable (Result<NFCFeliCaRequestSpecificationVersionResponse, any Error>) -> Void)
```

```swift
func requestSpecificationVersion(resultHandler: @escaping (Result<NFCFeliCaRequestSpecificationVersionResponse, any Error>) -> Void)
```
