> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestream/withfilestream(path:mode:options:permissions:_:)](https://developer.apple.com/documentation/applearchive/archivebytestream/withfilestream(path:mode:options:permissions:_:))

# withFileStream(path:mode:options:permissions:\_:)

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Calls the given closure with a file stream.

## Declaration

```swift
static func withFileStream<E>(path: FilePath, mode: FileDescriptor.AccessMode, options: FileDescriptor.OpenOptions, permissions: FilePermissions, _ body: (ArchiveByteStream) throws -> E) throws -> E
```

## Parameters

- `path`: The file path.
- `mode`: The file descriptor access mode.
- `options`: The file descriptor options that specify behavior on opening a file.
- `permissions`: The file permission bits that govern access to a file.
- `body`: A closure with the archive byte stream passed as a parameter.

<a id="return-value"></a>

## Return Value

The result of the closure.

## See Also

### File Streaming

- [fileStream(fd:automaticClose:)](filestream%28fd_automaticclose_%29.md): Creates a stream from an open file descriptor.
- [withFileStream(fd:automaticClose:\_:)](withfilestream%28fd_automaticclose___%29.md): Calls the given closure with a file stream created from the specified file descriptor.
- [fileStream(path:mode:options:permissions:)](filestream%28path_mode_options_permissions_%29.md): Opens a new file descriptor using the given path and parameters, and creates a stream from the file descriptor.
- [temporaryFileStream()](temporaryfilestream%28%29.md): Creates a new temporary file stream.
- [withTemporaryFileStream(\_:)](withtemporaryfilestream%28__%29.md): Calls the given closure with a temporary file stream.
