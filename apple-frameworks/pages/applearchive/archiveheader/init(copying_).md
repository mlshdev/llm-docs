> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applearchive/archiveheader/init(copying:)

# init(copying:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a copy of an archive header.

## Declaration

```swift
init(copying s: ArchiveHeader)
```

## Parameters

- `s`: The source header.

## See Also

### Creating an Archive Header

- [init()](init%28%29.md): Creates a new empty archive header.
- [init(keySet:directory:path:flags:)](init%28keyset_directory_path_flags_%29.md): Creates a new archive header with fields derived from the filesystem object, at the specified directory and path.
- [init(withAAEncodedData:)](init%28withaaencodeddata_%29.md): Creates a new archive header from encoded data.
