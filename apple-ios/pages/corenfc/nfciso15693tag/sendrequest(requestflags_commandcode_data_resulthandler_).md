> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/sendrequest(requestflags:commandcode:data:resulthandler:)

# sendRequest(requestFlags:commandCode:data:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func sendRequest(requestFlags flags: Int, commandCode: Int, data: Data?, resultHandler: @escaping @Sendable (Result<(NFCISO15693ResponseFlag, Data?), any Error>) -> Void)
```
