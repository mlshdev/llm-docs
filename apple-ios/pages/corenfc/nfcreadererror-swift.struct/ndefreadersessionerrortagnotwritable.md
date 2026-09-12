> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadererror-swift.struct/ndefreadersessionerrortagnotwritable](https://developer.apple.com/documentation/corenfc/nfcreadererror-swift.struct/ndefreadersessionerrortagnotwritable)

# ndefReaderSessionErrorTagNotWritable

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The NDEF tag isn’t writable.

## Declaration

```swift
static var ndefReaderSessionErrorTagNotWritable: NFCReaderError.Code { get }
```

## See Also

### NDEF Tag Errors

- [ndefReaderSessionErrorTagSizeTooSmall](ndefreadersessionerrortagsizetoosmall.md): The NDEF tag memory size is too small to store the data.
- [ndefReaderSessionErrorTagUpdateFailure](ndefreadersessionerrortagupdatefailure.md): The reader session failed to update the NDEF tag.
- [ndefReaderSessionErrorZeroLengthMessage](ndefreadersessionerrorzerolengthmessage.md): The NDEF tag doesn’t contain an NDEF message.
