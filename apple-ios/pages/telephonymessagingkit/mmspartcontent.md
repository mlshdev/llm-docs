> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent)

# MMSPartContent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that defines custom headers within MMS content.

## Declaration

```swift
struct MMSPartContent
```

## Topics

### Creating a content part

- [init(data:contentType:contentID:disposition:fileName:)](mmspartcontent/init%28data_contenttype_contentid_disposition_filename_%29.md): Creates an MMS part with the provided values.

### Accessing part properties

- [data](mmspartcontent/data.md): The raw data used for the MMS content part.
- [disposition](mmspartcontent/disposition.md): The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- [MMSPartContent.MMSDispositionType](mmspartcontent/mmsdispositiontype.md): A structure that defines the disposition of the content part when rendered.
- [filename](mmspartcontent/filename.md): The file name of the MMS part.
- [contentID](mmspartcontent/contentid.md): A unique identifier for the part.
- [contentType](mmspartcontent/contenttype.md): The content type of the part, as a Uniform Type Identifier.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.

### Working with custom headers

- [customHeaders](mmspartcontent/customheaders.md): A dictionary of custom headers to send in the MMS message.
- [addCustomHeader(\_:)](mmspartcontent/addcustomheader%28__%29.md): A helper function to add custom headers.
- [MMSPartContent.MMSCustomHeader](mmspartcontent/mmscustomheader.md): A structure that defines a custom header as a key-value pair.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing content properties

- [parts](mmscontent/parts.md): The individual parts of the MMS message.
- [subject](mmscontent/subject.md): The subject of the MMS message.
- [headers](mmscontent/headers.md): Additional headers in a received MMS message, as a key-value dictionary of strings.
