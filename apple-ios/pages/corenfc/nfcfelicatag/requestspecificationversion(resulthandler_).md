> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-baedee40f551; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/requestspecificationversion(resulthandler:)

# requestSpecificationVersion(resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func requestSpecificationVersion(resultHandler: @escaping @Sendable (Result<NFCFeliCaRequestSpecificationVersionResponse, any Error>) -> Void)
```
