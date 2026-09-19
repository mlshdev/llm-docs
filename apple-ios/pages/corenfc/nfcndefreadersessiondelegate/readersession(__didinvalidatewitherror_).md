> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/readersession(_:didinvalidatewitherror:)

# readerSession(\_:didInvalidateWithError:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Tells the delegate the reason for invalidating a reader session.

## Declaration

```swift
func readerSession(_ session: NFCNDEFReaderSession, didInvalidateWithError error: any Error)
```

## Parameters

- `session`: The session that has become invalid. Your app should discard any references it has to this session.
- `error`: The error indicating the reason for invalidation of the session.

# readerSession:didInvalidateWithError: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Tells the delegate the reason for invalidating a reader session.

## Declaration

```objectivec
- (void) readerSession:(NFCNDEFReaderSession *) session didInvalidateWithError:(NSError *) error;
```

## Parameters

- `session`: The session that has become invalid. Your app should discard any references it has to this session.
- `error`: The error indicating the reason for invalidation of the session.
