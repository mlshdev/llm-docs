> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersessiondelegate-2joku/tagreadersession(_:didinvalidatewitherror:)](https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-2joku/tagreadersession(_:didinvalidatewitherror:))

# tagReaderSession(\_:didInvalidateWithError:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Tells the delegate the reason for invalidating a reader session.

## Declaration

```swift
func tagReaderSession(_ session: NFCTagReaderSession, didInvalidateWithError error: any Error)
```

## Parameters

- `session`: The session that has become invalid. Your app should discard any references it has to this session.
- `error`: The error indicating the reason for invalidation of the session.
