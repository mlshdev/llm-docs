> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivestream](https://developer.apple.com/documentation/applearchive/archivestream)

# ArchiveStream

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An archive stream that reads from and writes to data blobs

## Declaration

```swift
class ArchiveStream
```

## Topics

### Creating an Archive Stream

- [init(object:owned:messageProc:)](archivestream/init%28object_owned_messageproc_%29.md): Returns a new archive stream from the specified traits and entry message processing callback.

### Writing Directory Contents

- [writeDirectoryContents(archiveFrom:path:keySet:selectUsing:flags:threadCount:)](archivestream/writedirectorycontents%28archivefrom_path_keyset_selectusing_flags_threadcount_%29.md): Writes all entries from a directory to the archive stream.

### Extracting Data

- [extractStream(extractingTo:selectUsing:flags:threadCount:)](archivestream/extractstream%28extractingto_selectusing_flags_threadcount_%29.md): Opens an extract output archive stream.
- [withExtractStream(extractingTo:selectUsing:flags:threadCount:\_:)](archivestream/withextractstream%28extractingto_selectusing_flags_threadcount___%29.md): Calls the given closure with an extract output archive stream.

### Encoding Data

- [encodeStream(writingTo:selectUsing:flags:threadCount:)](archivestream/encodestream%28writingto_selectusing_flags_threadcount_%29.md): Opens an encode output archive stream.
- [withEncodeStream(writingTo:selectUsing:flags:threadCount:\_:)](archivestream/withencodestream%28writingto_selectusing_flags_threadcount___%29.md): Calls the given closure with an encode output archive stream.

### Decoding Data

- [decodeStream(readingFrom:selectUsing:flags:threadCount:)](archivestream/decodestream%28readingfrom_selectusing_flags_threadcount_%29.md): Opens a decode input archive stream.
- [withDecodeStream(readingFrom:selectUsing:flags:threadCount:\_:)](archivestream/withdecodestream%28readingfrom_selectusing_flags_threadcount___%29.md): Calls the given closure with a decode input archive stream.

### Converting Data

- [convertStream(writingTo:insertKeySet:removeKeySet:selectUsing:flags:threadCount:)](archivestream/convertstream%28writingto_insertkeyset_removekeyset_selectusing_flags_threadcount_%29.md): Opens a convert output archive stream.
- [withConvertStream(writingTo:insertKeySet:removeKeySet:selectUsing:flags:threadCount:\_:)](archivestream/withconvertstream%28writingto_insertkeyset_removekeyset_selectusing_flags_threadcount___%29.md): Calls the given closure with a convert output archive stream.

### Processing Data

- [process(readingFrom:writingTo:selectUsing:flags:threadCount:)](archivestream/process%28readingfrom_writingto_selectusing_flags_threadcount_%29.md): Processes archive elements between two archive streams.

### Using Custom Streams

- [customStream(instance:)](archivestream/customstream%28instance_%29.md): Returns a new archive stream instance mapped to an object that conforms to the archive stream protocol.
- [withStream(wrapping:\_:)](archivestream/withstream%28wrapping___%29.md): Calls the given closure with an archive stream instance mapped to an object that conforms to the archive stream protocol.

## Relationships

### Conforms To

- [ArchiveStreamProtocol](archivestreamprotocol.md)

## See Also

### Apple Archive streams

- [ArchiveStreamProtocol](archivestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to data blobs.
- [ArchiveByteStreamProtocol](archivebytestreamprotocol.md): A set of methods that defines the interface for using an archive stream that reads from and writes to buffers.
- [ArchiveByteStream](archivebytestream.md): An archive stream that reads from and writes to buffers.
