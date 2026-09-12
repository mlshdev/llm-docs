> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryxatblob/init(directory:path:flags:)](https://developer.apple.com/documentation/applearchive/archiveheader/entryxatblob/init(directory:path:flags:))

# init(directory:path:flags:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a new extended attribute blob from the specified directory and path.

## Declaration

```swift
init?(directory: FilePath, path: FilePath, flags: ArchiveFlags)
```

## Parameters

- `directory`: The base directory of the filesystem object.
- `path`: The path, relative to `directory`, to target filesystem object.
- `flags`: Flags that control the behavior of the operation.

## See Also

### Creating an Extended Attributes Blob

- [init()](init%28%29.md): Creates a new empty extended attribute blob.
- [init(withAAEncodedData:)](init%28withaaencodeddata_%29.md): Creates a new archive header from encoded data.
