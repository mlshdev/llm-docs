> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/filetransfer/init(filemetadata:thumbnailmetadata:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/filetransfer/init(filemetadata:thumbnailmetadata:))

# init(fileMetadata:thumbnailMetadata:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates a file transfer content instance with the given metadata.

## Declaration

```swift
init(fileMetadata: RCSFileTransferMetadata, thumbnailMetadata: RCSFileTransferMetadata? = nil)
```

## Parameters

- `fileMetadata`: Metadata for the transferred file.
- `thumbnailMetadata`: Metadata for the transferred thumbnail.

## See Also

### Creating a file transfer instance

- [RCSFileTransferMetadata](../../rcsfiletransfermetadata.md): A structure that contains metadata about an RCS file transfer.
