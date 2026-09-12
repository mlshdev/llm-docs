> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessiondelegate/readersession:diddetecttags:](https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate/readersession:diddetecttags:)

# readerSession:didDetectTags:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Provides an array of tags detected by the reader session.

## Declaration

```objectivec
- (void) readerSession:(NFCReaderSession *) session didDetectTags:(NSArray<__kindof id<NFCTag>> *) tags;
```

## Parameters

- `session`: The reader session detecting tags.
- `tags`: An array of [NFCTag](../nfctag-swift.enum.md) objects that were detected.

<a id="Discussion"></a>

## Discussion

This method is called when the reader session detects NFC tags in a polling sequence.

## See Also

### Getting the Status of a Reader Session

- [readerSession:didInvalidateWithError:](readersession_didinvalidatewitherror_.md): Provides information about the error that invalidated the reader session.
- [readerSessionDidBecomeActive:](readersessiondidbecomeactive_.md): Tells you when radio-frequency polling is enabled and the reader session has become active and is scanning for tags.
