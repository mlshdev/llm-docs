> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/init(data:contenttype:contentid:disposition:filename:)](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/init(data:contenttype:contentid:disposition:filename:))

# init(data:contentType:contentID:disposition:fileName:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates an MMS part with the provided values.

## Declaration

```swift
init(data: Data, contentType: UTType?, contentID: String, disposition: MMSPartContent.MMSDispositionType, fileName: String)
```

## Parameters

- `data`: The raw data of the MMS part.
- `contentType`: The content type of the MMS part, as a [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct).
- `contentID`: The identifier of the MMS part.
- `disposition`: The disposition of the MMS part, indicating whether the part renders inline or as an attachment.
- `fileName`: The file name of the MMS part.
