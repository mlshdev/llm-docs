> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/readwithoutencryption(servicecodelist:blocklist:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/readwithoutencryption(servicecodelist:blocklist:resulthandler:))

# readWithoutEncryption(serviceCodeList:blockList:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func readWithoutEncryption(serviceCodeList: [Data], blockList: [Data], resultHandler: @escaping @Sendable (Result<(NFCFeliCaStatusFlag, [Data]), any Error>) -> Void)
```

```swift
func readWithoutEncryption(serviceCodeList: [Data], blockList: [Data], resultHandler: @escaping (Result<(NFCFeliCaStatusFlag, [Data]), any Error>) -> Void)
```
