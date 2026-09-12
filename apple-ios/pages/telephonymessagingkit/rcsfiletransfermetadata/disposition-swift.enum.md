> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsfiletransfermetadata/disposition-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsfiletransfermetadata/disposition-swift.enum)

# RCSFileTransferMetadata.Disposition

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

An enumeration that represents the disposition of the file, indicating how a receiving app should handle it.

## Declaration

```swift
enum Disposition
```

## Topics

### Working with dispositions

- [RCSFileTransferMetadata.Disposition.attachment](disposition-swift.enum/attachment.md): The attachment disposition, directing the receiving app to not automatically render the file.
- [RCSFileTransferMetadata.Disposition.render](disposition-swift.enum/render.md): The render disposition, directing the receiving app to render the file automatically.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with file disposition

- [disposition](disposition-swift.property.md): The disposition of the file, indicating how a recipient needs to handle the file.
