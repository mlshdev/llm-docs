> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestservice(nodecodelist:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestservice(nodecodelist:resulthandler:))

# requestService(nodeCodeList:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestService(nodeCodeList: [Data], resultHandler: @escaping @Sendable (Result<[Data], any Error>) -> Void)
```

```swift
func requestService(nodeCodeList: [Data], resultHandler: @escaping (Result<[Data], any Error>) -> Void)
```
