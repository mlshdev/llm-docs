> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsfiletransfermetadata](https://developer.apple.com/documentation/telephonymessagingkit/rcsfiletransfermetadata)

# RCSFileTransferMetadata

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains metadata about an RCS file transfer.

## Declaration

```swift
struct RCSFileTransferMetadata
```

## Topics

### Accessing file metadata

- [url](rcsfiletransfermetadata/url.md): The URL for the file.
- [fileName](rcsfiletransfermetadata/filename.md): The original name of file.
- [fileSize](rcsfiletransfermetadata/filesize.md): The size of the file in bytes.
- [contentType](rcsfiletransfermetadata/contenttype.md): The content type of the file.
- [expirationDate](rcsfiletransfermetadata/expirationdate.md): The expiration date of the file.
- [playbackLength](rcsfiletransfermetadata/playbacklength.md): Playback length of RCS Recorded Audio Message (RRAM).

### Working with file disposition

- [disposition](rcsfiletransfermetadata/disposition-swift.property.md): The disposition of the file, indicating how a recipient needs to handle the file.
- [RCSFileTransferMetadata.Disposition](rcsfiletransfermetadata/disposition-swift.enum.md): An enumeration that represents the disposition of the file, indicating how a receiving app should handle it.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSGroupContext](rcsgroupcontext.md): Structure containing information about a message’s group.
