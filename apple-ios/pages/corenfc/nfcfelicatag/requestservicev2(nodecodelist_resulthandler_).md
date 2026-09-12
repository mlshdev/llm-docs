> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/requestservicev2(nodecodelist:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestservicev2(nodecodelist:resulthandler:))

# requestServiceV2(nodeCodeList:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestServiceV2(nodeCodeList: [Data], resultHandler: @escaping @Sendable (Result<NFCFeliCaRequsetServiceV2Response, any Error>) -> Void)
```

```swift
func requestServiceV2(nodeCodeList: [Data], resultHandler: @escaping (Result<NFCFeliCaRequsetServiceV2Response, any Error>) -> Void)
```
