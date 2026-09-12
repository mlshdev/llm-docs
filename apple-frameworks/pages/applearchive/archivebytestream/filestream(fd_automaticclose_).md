> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/filestream(fd:automaticclose:)](https://developer.apple.com/documentation/applearchive/archivebytestream/filestream(fd:automaticclose:))

# fileStream(fd:automaticClose:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a stream from an open file descriptor.

## Declaration

```swift
static func fileStream(fd: FileDescriptor, automaticClose: Bool = true) -> ArchiveByteStream?
```

## Parameters

- `fd`: The file descriptor that you have previously opened with `open(2)`.
- `automaticClose`: A Boolean value that specifies whether to close the file descriptor when you close the stream.

<a id="return-value"></a>

## Return Value

A new archive byte stream.

## See Also

### File Streaming

- [withFileStream(fd:automaticClose:\_:)](withfilestream%28fd_automaticclose___%29.md): Calls the given closure with a file stream created from the specified file descriptor.
- [fileStream(path:mode:options:permissions:)](filestream%28path_mode_options_permissions_%29.md): Opens a new file descriptor using the given path and parameters, and creates a stream from the file descriptor.
- [withFileStream(path:mode:options:permissions:\_:)](withfilestream%28path_mode_options_permissions___%29.md): Calls the given closure with a file stream.
- [temporaryFileStream()](temporaryfilestream%28%29.md): Creates a new temporary file stream.
- [withTemporaryFileStream(\_:)](withtemporaryfilestream%28__%29.md): Calls the given closure with a temporary file stream.
