> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestservicev2(nodecodelist:resulthandler:)

# requestServiceV2(nodeCodeList:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestServiceV2(nodeCodeList: [Data], resultHandler: @escaping @Sendable (Result<NFCFeliCaRequsetServiceV2Response, any Error>) -> Void)
```
