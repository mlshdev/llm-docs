> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/resetmode(resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/resetmode(resulthandler:))

# resetMode(resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func resetMode(resultHandler: @escaping @Sendable (Result<NFCFeliCaStatusFlag, any Error>) -> Void)
```

```swift
func resetMode(resultHandler: @escaping (Result<NFCFeliCaStatusFlag, any Error>) -> Void)
```
