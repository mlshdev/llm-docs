> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcmifaretag/sendmifareiso7816command(_:resulthandler:)

# sendMiFareISO7816Command(\_:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func sendMiFareISO7816Command(_ apdu: NFCISO7816APDU, resultHandler: @escaping @Sendable (Result<NFCISO7816ResponseAPDU, any Error>) -> Void)
```
