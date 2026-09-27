> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/readbuffer(requestflags:resulthandler:)

# readBuffer(requestFlags:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func readBuffer(requestFlags flags: NFCISO15693RequestFlag, resultHandler: @escaping @Sendable (Result<(NFCISO15693ResponseFlag, Data), any Error>) -> Void)
```
