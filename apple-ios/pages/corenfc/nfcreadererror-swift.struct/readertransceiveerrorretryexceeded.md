> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readertransceiveerrorretryexceeded

# readerTransceiveErrorRetryExceeded

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Too many retries have occurred.

## Declaration

```swift
static var readerTransceiveErrorRetryExceeded: NFCReaderError.Code { get }
```

## See Also

### Transceive Errors

- [readerTransceiveErrorTagConnectionLost](readertransceiveerrortagconnectionlost.md): The reader lost the connection to the tag.
- [readerTransceiveErrorTagNotConnected](readertransceiveerrortagnotconnected.md): The tag isn’t in the connected state.
- [readerTransceiveErrorTagResponseError](readertransceiveerrortagresponseerror.md): The tag has responded with an error.
- [readerTransceiveErrorSessionInvalidated](readertransceiveerrorsessioninvalidated.md): The reader session is invalid.
- [readerTransceiveErrorPacketTooLong](readertransceiveerrorpackettoolong.md): The packet length exceeds the limit supported by the tag.
