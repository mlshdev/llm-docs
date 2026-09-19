> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readertransceiveerrortagnotconnected

# readerTransceiveErrorTagNotConnected

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The tag isn’t in the connected state.

## Declaration

```swift
static var readerTransceiveErrorTagNotConnected: NFCReaderError.Code { get }
```

## See Also

### Transceive Errors

- [readerTransceiveErrorRetryExceeded](readertransceiveerrorretryexceeded.md): Too many retries have occurred.
- [readerTransceiveErrorTagConnectionLost](readertransceiveerrortagconnectionlost.md): The reader lost the connection to the tag.
- [readerTransceiveErrorTagResponseError](readertransceiveerrortagresponseerror.md): The tag has responded with an error.
- [readerTransceiveErrorSessionInvalidated](readertransceiveerrorsessioninvalidated.md): The reader session is invalid.
- [readerTransceiveErrorPacketTooLong](readertransceiveerrorpackettoolong.md): The packet length exceeds the limit supported by the tag.
