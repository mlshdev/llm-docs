> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersessiondelegate-5gxiw/tagreadersession:didinvalidatewitherror:](https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-5gxiw/tagreadersession:didinvalidatewitherror:)

# tagReaderSession:didInvalidateWithError:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate the reason for invalidating a reader session.

## Declaration

```objectivec
- (void) tagReaderSession:(NFCTagReaderSession *) session didInvalidateWithError:(NSError *) error;
```

## Parameters

- `session`: The session that has become invalid. Your app should discard any references it has to this session.
- `error`: The error indicating the reason for invalidation of the session.
