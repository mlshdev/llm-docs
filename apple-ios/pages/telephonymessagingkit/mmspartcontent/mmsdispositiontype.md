> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/mmsdispositiontype](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/mmsdispositiontype)

# MMSPartContent.MMSDispositionType

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

A structure that defines the disposition of the content part when rendered.

## Declaration

```swift
enum MMSDispositionType
```

## Topics

### Working with disposition types

- [MMSPartContent.MMSDispositionType.attachment](mmsdispositiontype/attachment.md): A disposition to render the content part as an attachment to the message.
- [MMSPartContent.MMSDispositionType.inline](mmsdispositiontype/inline.md): A disposition to render the content part in line with the rest of the message.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing part properties

- [data](data.md): The raw data used for the MMS content part.
- [disposition](disposition.md): The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- [filename](filename.md): The file name of the MMS part.
- [contentID](contentid.md): A unique identifier for the part.
- [contentType](contenttype.md): The content type of the part, as a Uniform Type Identifier.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
