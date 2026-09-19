> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readertransceiveerrorsessioninvalidated

# readerTransceiveErrorSessionInvalidated

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The reader session is invalid.

## Declaration

```swift
static var readerTransceiveErrorSessionInvalidated: NFCReaderError.Code { get }
```

## See Also

### Transceive Errors

- [readerTransceiveErrorRetryExceeded](readertransceiveerrorretryexceeded.md): Too many retries have occurred.
- [readerTransceiveErrorTagConnectionLost](readertransceiveerrortagconnectionlost.md): The reader lost the connection to the tag.
- [readerTransceiveErrorTagNotConnected](readertransceiveerrortagnotconnected.md): The tag isn’t in the connected state.
- [readerTransceiveErrorTagResponseError](readertransceiveerrortagresponseerror.md): The tag has responded with an error.
- [readerTransceiveErrorPacketTooLong](readertransceiveerrorpackettoolong.md): The packet length exceeds the limit supported by the tag.
