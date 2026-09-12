> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryxatblob/apply(directory:path:flags:)](https://developer.apple.com/documentation/applearchive/archiveheader/entryxatblob/apply(directory:path:flags:))

# apply(directory:path:flags:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies extended attributes to a filesystem object.

## Declaration

```swift
func apply(directory: FilePath, path: FilePath, flags: ArchiveFlags = []) throws
```

## Parameters

- `directory`: The base directory of the filesystem object.
- `path`: The path, relative to `directory`, to target filesystem object.
- `flags`: Flags that control the behavior of the operation.
