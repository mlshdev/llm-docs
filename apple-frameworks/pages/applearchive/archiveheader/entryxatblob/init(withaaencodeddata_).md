> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryxatblob/init(withaaencodeddata:)](https://developer.apple.com/documentation/applearchive/archiveheader/entryxatblob/init(withaaencodeddata:))

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

### Creating an Extended Attributes Blob

- [init()](init%28%29.md): Creates a new empty extended attribute blob.
- [init(directory:path:flags:)](init%28directory_path_flags_%29.md): Creates a new extended attribute blob from the specified directory and path.
