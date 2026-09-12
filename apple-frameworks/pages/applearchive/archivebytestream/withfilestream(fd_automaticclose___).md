> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/withfilestream(fd:automaticclose:_:)](https://developer.apple.com/documentation/applearchive/archivebytestream/withfilestream(fd:automaticclose:_:))

# withFileStream(fd:automaticClose:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with a file stream created from the specified file descriptor.

## Declaration

```swift
static func withFileStream<E>(fd: FileDescriptor, automaticClose: Bool = true, _ body: (ArchiveByteStream) throws -> E) throws -> E
```

## Parameters

- `fd`: The file descriptor that you have previously opened with `open(2)`.
- `automaticClose`: A Boolean value that specifies whether to close the file descriptor when you close the stream.
- `body`: A closure with the archive byte stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### File Streaming

- [fileStream(fd:automaticClose:)](filestream%28fd_automaticclose_%29.md): Creates a stream from an open file descriptor.
- [fileStream(path:mode:options:permissions:)](filestream%28path_mode_options_permissions_%29.md): Opens a new file descriptor using the given path and parameters, and creates a stream from the file descriptor.
- [withFileStream(path:mode:options:permissions:\_:)](withfilestream%28path_mode_options_permissions___%29.md): Calls the given closure with a file stream.
- [temporaryFileStream()](temporaryfilestream%28%29.md): Creates a new temporary file stream.
- [withTemporaryFileStream(\_:)](withtemporaryfilestream%28__%29.md): Calls the given closure with a temporary file stream.
