> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/aaarchivestreamprocess](https://developer.apple.com/documentation/applearchive/aaarchivestreamprocess)

# AAArchiveStreamProcess

**Interface language:** Objective-C

**Framework:** Apple Archive  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
ssize_t AAArchiveStreamProcess(AAArchiveStream istream, AAArchiveStream ostream, void *msg_data, AAEntryMessageProc msg_proc, AAFlagSet flags, int n_threads);
```

## See Also

### Functions

- [AAArchiveStreamAbort](aaarchivestreamabort.md): Deprecated.
- [AAArchiveStreamCancel](aaarchivestreamcancel.md)
- [AAArchiveStreamClose](aaarchivestreamclose.md)
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
- [AAByteStreamRead](aabytestreamread.md)
