> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestservice(nodecodelist:resulthandler:)

# requestService(nodeCodeList:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestService(nodeCodeList: [Data], resultHandler: @escaping @Sendable (Result<[Data], any Error>) -> Void)
```
