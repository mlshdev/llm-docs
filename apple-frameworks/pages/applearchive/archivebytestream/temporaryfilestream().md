> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applearchive/archivebytestream/temporaryfilestream()

# temporaryFileStream()

**Framework:** Apple Archive  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a new temporary file stream.

## Declaration

```swift
static func temporaryFileStream() -> ArchiveByteStream?
```

## See Also

### File Streaming

- [fileStream(fd:automaticClose:)](filestream%28fd_automaticclose_%29.md): Creates a stream from an open file descriptor.
- [withFileStream(fd:automaticClose:\_:)](withfilestream%28fd_automaticclose___%29.md): Calls the given closure with a file stream created from the specified file descriptor.
- [fileStream(path:mode:options:permissions:)](filestream%28path_mode_options_permissions_%29.md): Opens a new file descriptor using the given path and parameters, and creates a stream from the file descriptor.
- [withFileStream(path:mode:options:permissions:\_:)](withfilestream%28path_mode_options_permissions___%29.md): Calls the given closure with a file stream.
- [withTemporaryFileStream(\_:)](withtemporaryfilestream%28__%29.md): Calls the given closure with a temporary file stream.
