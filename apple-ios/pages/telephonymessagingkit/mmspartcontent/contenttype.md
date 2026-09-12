> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/contenttype](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/contenttype)

# contentType

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The content type of the part, as a Uniform Type Identifier.

## Declaration

```swift
var contentType: UTType?
```

<a id="discussion"></a>

## Discussion

Most MMS clients support the following content types:

- `text/x-vcalendar`
- `text/vcalendar`
- `text/x-calendar`
- `text/calendar`
- `text/x-vlocation`
- `text/x-location`
- `text/x-vcard`
- `text/vcard`
- `text/plain`
- `image/jpg`
- `image/bmp`
- `image/x-bmp`
- `image/png`
- `image/gif`
- `audio/x-aac`
- `audio/aac`
- `video/3gp`
- `video/3gp`

You can also use custom content types, such as a [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct) based on a custom MIME type.

## See Also

### Accessing part properties

- [data](data.md): The raw data used for the MMS content part.
- [disposition](disposition.md): The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- [MMSPartContent.MMSDispositionType](mmsdispositiontype.md): A structure that defines the disposition of the content part when rendered.
- [filename](filename.md): The file name of the MMS part.
- [contentID](contentid.md): A unique identifier for the part.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
