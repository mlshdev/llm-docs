> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/contentid](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/contentid)

# contentID

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

A unique identifier for the part.

## Declaration

```swift
var contentID: String
```

<a id="discussion"></a>

## Discussion

You can use this value for ordering or debugging.

## See Also

### Accessing part properties

- [data](data.md): The raw data used for the MMS content part.
- [disposition](disposition.md): The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- [MMSPartContent.MMSDispositionType](mmsdispositiontype.md): A structure that defines the disposition of the content part when rendered.
- [filename](filename.md): The file name of the MMS part.
- [contentType](contenttype.md): The content type of the part, as a Uniform Type Identifier.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
