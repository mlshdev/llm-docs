> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/aaarchivestreamwriteheaderproc](https://developer.apple.com/documentation/applearchive/aaarchivestreamwriteheaderproc)

# AAArchiveStreamWriteHeaderProc

**Interface language:** Objective-C

**Framework:** Apple Archive  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef int (*)(void *, struct AAHeader_impl *) AAArchiveStreamWriteHeaderProc;
```

## See Also

### Data Types

- [AAACEFlagSet](aaaceflagset.md)
- [AAACEPermSet](aaacepermset.md)
- [AAACEQualifierType](aaacequalifiertype.md)
- [AAACEQualifierTypes](aaacequalifiertypes.md)
- [AAACETag](aaacetag.md)
- [AAArchiveStream](aaarchivestream.md)
- [AAArchiveStreamCancelProc](aaarchivestreamcancelproc.md)
- [AAArchiveStreamCloseProc](aaarchivestreamcloseproc.md)
- [AAArchiveStreamReadBlobProc](aaarchivestreamreadblobproc.md)
- [AAArchiveStreamReadHeaderProc](aaarchivestreamreadheaderproc.md)
- [AAArchiveStreamWriteBlobProc](aaarchivestreamwriteblobproc.md)
- [AAByteStream](aabytestream.md)
- [AAByteStreamCancelProc](aabytestreamcancelproc.md)
- [AAByteStreamCloseProc](aabytestreamcloseproc.md)
- [AAByteStreamPReadProc](aabytestreampreadproc.md)
