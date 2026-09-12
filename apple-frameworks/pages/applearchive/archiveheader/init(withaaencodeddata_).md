> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/init(withaaencodeddata:)](https://developer.apple.com/documentation/applearchive/archiveheader/init(withaaencodeddata:))

# init(withAAEncodedData:)

**Framework:** Apple Archive  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a new archive header from encoded data.

## Declaration

```swift
required init?(withAAEncodedData data: UnsafeBufferPointer<UInt8>)
```

## Parameters

- `data`: The encoded data.

## See Also

### Creating an Archive Header

- [init()](init%28%29.md): Creates a new empty archive header.
- [init(keySet:directory:path:flags:)](init%28keyset_directory_path_flags_%29.md): Creates a new archive header with fields derived from the filesystem object, at the specified directory and path.
- [init(copying:)](init%28copying_%29.md): Creates a copy of an archive header.
