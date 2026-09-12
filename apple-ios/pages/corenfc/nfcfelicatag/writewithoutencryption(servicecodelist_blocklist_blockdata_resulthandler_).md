> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/writewithoutencryption(servicecodelist:blocklist:blockdata:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/writewithoutencryption(servicecodelist:blocklist:blockdata:resulthandler:))

# writeWithoutEncryption(serviceCodeList:blockList:blockData:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func writeWithoutEncryption(serviceCodeList: [Data], blockList: [Data], blockData: [Data], resultHandler: @escaping @Sendable (Result<NFCFeliCaStatusFlag, any Error>) -> Void)
```

```swift
func writeWithoutEncryption(serviceCodeList: [Data], blockList: [Data], blockData: [Data], resultHandler: @escaping (Result<NFCFeliCaStatusFlag, any Error>) -> Void)
```
