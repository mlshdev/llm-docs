> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693tag/keyupdate(requestflags:keyidentifier:message:)

# keyUpdate(requestFlags:keyIdentifier:message:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
func keyUpdate(requestFlags flags: NFCISO15693RequestFlag, keyIdentifier: Int, message: Data) async throws -> (NFCISO15693ResponseFlag, Data)
```
