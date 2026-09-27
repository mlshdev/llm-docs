> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/writewithoutencryption(servicecodelist:blocklist:blockdata:resulthandler:)

# writeWithoutEncryption(serviceCodeList:blockList:blockData:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func writeWithoutEncryption(serviceCodeList: [Data], blockList: [Data], blockData: [Data], resultHandler: @escaping @Sendable (Result<NFCFeliCaStatusFlag, any Error>) -> Void)
```
