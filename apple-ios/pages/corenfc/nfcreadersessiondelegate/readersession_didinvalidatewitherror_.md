> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessiondelegate/readersession:didinvalidatewitherror:](https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate/readersession:didinvalidatewitherror:)

# readerSession:didInvalidateWithError:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Provides information about the error that invalidated the reader session.

## Declaration

```objectivec
- (void) readerSession:(NFCReaderSession *) session didInvalidateWithError:(NSError *) error;
```

## Parameters

- `session`: The reader session that is invalid.
- `error`: A value that indicates the reason for invalidation.

<a id="Discussion"></a>

## Discussion

This method is called when the reader session becomes invalid, at which time the client should discard the returned reader session object.

## See Also

### Getting the Status of a Reader Session

- [readerSession:didDetectTags:](readersession_diddetecttags_.md): Provides an array of tags detected by the reader session.
- [readerSessionDidBecomeActive:](readersessiondidbecomeactive_.md): Tells you when radio-frequency polling is enabled and the reader session has become active and is scanning for tags.
