> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessiondelegate/readersessiondidbecomeactive:](https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate/readersessiondidbecomeactive:)

# readerSessionDidBecomeActive:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Tells you when radio-frequency polling is enabled and the reader session has become active and is scanning for tags.

## Declaration

```objectivec
- (void) readerSessionDidBecomeActive:(NFCReaderSession *) session;
```

## Parameters

- `session`: The reader session that is active.

## See Also

### Getting the Status of a Reader Session

- [readerSession:didDetectTags:](readersession_diddetecttags_.md): Provides an array of tags detected by the reader session.
- [readerSession:didInvalidateWithError:](readersession_didinvalidatewitherror_.md): Provides information about the error that invalidated the reader session.
