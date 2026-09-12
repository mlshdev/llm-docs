> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/filename](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/filename)

# filename

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The file name of the MMS part.

## Declaration

```swift
var filename: String
```

<a id="discussion"></a>

## Discussion

If the file name is unavailable or doesn’t apply to this kind of content part, use an empty string.

## See Also

### Accessing part properties

- [data](data.md): The raw data used for the MMS content part.
- [disposition](disposition.md): The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- [MMSPartContent.MMSDispositionType](mmsdispositiontype.md): A structure that defines the disposition of the content part when rendered.
- [contentID](contentid.md): A unique identifier for the part.
- [contentType](contenttype.md): The content type of the part, as a Uniform Type Identifier.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
