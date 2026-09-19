> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readertransceiveerrorpackettoolong

# readerTransceiveErrorPacketTooLong

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The packet length exceeds the limit supported by the tag.

## Declaration

```swift
static var readerTransceiveErrorPacketTooLong: NFCReaderError.Code { get }
```

## See Also

### Transceive Errors

- [readerTransceiveErrorRetryExceeded](readertransceiveerrorretryexceeded.md): Too many retries have occurred.
- [readerTransceiveErrorTagConnectionLost](readertransceiveerrortagconnectionlost.md): The reader lost the connection to the tag.
- [readerTransceiveErrorTagNotConnected](readertransceiveerrortagnotconnected.md): The tag isn’t in the connected state.
- [readerTransceiveErrorTagResponseError](readertransceiveerrortagresponseerror.md): The tag has responded with an error.
- [readerTransceiveErrorSessionInvalidated](readertransceiveerrorsessioninvalidated.md): The reader session is invalid.
