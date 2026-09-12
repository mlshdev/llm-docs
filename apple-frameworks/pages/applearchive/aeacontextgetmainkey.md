> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/aeacontextgetmainkey](https://developer.apple.com/documentation/applearchive/aeacontextgetmainkey)

# AEAContextGetMainKey

**Interface language:** Objective-C

**Framework:** Apple Archive  
**Kind:** Function  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

## Declaration

```objectivec
static int AEAContextGetMainKey(AEAContext context, size_t key_capacity, uint8_t *key, size_t *key_size);
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
