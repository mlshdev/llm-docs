> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/readersessioninvalidationerrorusercanceled

# readerSessionInvalidationErrorUserCanceled

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The user canceled the reader session.

## Declaration

```swift
static var readerSessionInvalidationErrorUserCanceled: NFCReaderError.Code { get }
```

## See Also

### Session Errors

- [readerSessionInvalidationErrorFirstNDEFTagRead](readersessioninvalidationerrorfirstndeftagread.md): The first NDEF tag read by this session is invalid.
- [readerSessionInvalidationErrorSessionTerminatedUnexpectedly](readersessioninvalidationerrorsessionterminatedunexpectedly.md): The reader session terminated unexpectedly.
- [readerSessionInvalidationErrorSessionTimeout](readersessioninvalidationerrorsessiontimeout.md): The reader session timed out.
- [readerSessionInvalidationErrorSystemIsBusy](readersessioninvalidationerrorsystemisbusy.md): The reader session failed because the system is busy.
