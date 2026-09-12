> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/data](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/data)

# data

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The raw data used for the MMS content part.

## Declaration

```swift
var data: Data
```

<a id="discussion"></a>

## Discussion

Interpreting this value depends on the part’s [contentType](contenttype.md). For example, the data for a file attachment can be the file’s contents in binary. For file attachments, this can be the file contents in binary.

> **Tip**

> When sending an MMS message that includes text, convert the text string to a [Data](https://developer.apple.com/documentation/foundation/data) instance; for example, `let textData = myString.data(using: .utf8)`.

## See Also

### Accessing part properties

- [disposition](disposition.md): The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- [MMSPartContent.MMSDispositionType](mmsdispositiontype.md): A structure that defines the disposition of the content part when rendered.
- [filename](filename.md): The file name of the MMS part.
- [contentID](contentid.md): A unique identifier for the part.
- [contentType](contenttype.md): The content type of the part, as a Uniform Type Identifier.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
