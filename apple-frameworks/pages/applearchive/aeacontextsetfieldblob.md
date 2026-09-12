> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/aeacontextsetfieldblob](https://developer.apple.com/documentation/applearchive/aeacontextsetfieldblob)

# AEAContextSetFieldBlob

**Interface language:** Objective-C

**Framework:** Apple Archive  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
int AEAContextSetFieldBlob(AEAContext context, AEAContextField field, AEAContextFieldRepresentation representation, const uint8_t *buf, size_t buf_size);
```

## See Also

### Functions

- [AAArchiveStreamAbort](aaarchivestreamabort.md): Deprecated.
- [AAArchiveStreamCancel](aaarchivestreamcancel.md)
- [AAArchiveStreamClose](aaarchivestreamclose.md)
- [AAArchiveStreamProcess](aaarchivestreamprocess.md)
- [AAArchiveStreamReadBlob](aaarchivestreamreadblob.md)
- [AAArchiveStreamReadHeader](aaarchivestreamreadheader.md)
- [AAArchiveStreamWriteBlob](aaarchivestreamwriteblob.md)
- [AAArchiveStreamWriteHeader](aaarchivestreamwriteheader.md)
- [AAArchiveStreamWritePathList](aaarchivestreamwritepathlist.md)
- [AAByteStreamAbort](aabytestreamabort.md): Deprecated.
- [AAByteStreamCancel](aabytestreamcancel.md)
- [AAByteStreamClose](aabytestreamclose.md)
- [AAByteStreamPRead](aabytestreampread.md)
- [AAByteStreamPWrite](aabytestreampwrite.md)
- [AAByteStreamProcess](aabytestreamprocess.md)
