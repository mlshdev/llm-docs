> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppreviewresponse](https://developer.apple.com/documentation/appstoreconnectapi/apppreviewresponse)

# AppPreviewResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that create, read, or modify an app preview video.

## Declaration

```
object AppPreviewResponse
```

## Properties

- `data` — `AppPreview` (required):
- `links` — `DocumentLinks` (required):
- `included` — `[AppPreviewSet]`:

## See Also

### Objects and Data Types

- [AppPreview](apppreview.md): The data structure that represent an App Previews resource.
- [AppPreviewCreateRequest](apppreviewcreaterequest.md): The request body you use to create an App Preview.
- [AppPreviewUpdateRequest](apppreviewupdaterequest.md): The request body you use to update an App Preview.
- [AppPreviewsResponse](apppreviewsresponse.md): The response body for endpoints that list app preview videos in a preview set.
- [UploadOperation](uploadoperation.md): Upload instructions for assets such as app previews and app screenshots.
- [PreviewType](previewtype.md): String that represents the display type of an app preview.
- [PreviewFrameImage](previewframeimage.md): The properties that describe a preview frame image for an app preview or app event video.
- [AppMediaVideoState](appmediavideostate.md): The properties that describe the state of an app preview or app event video.
- [AppMediaPreviewFrameImageState](appmediapreviewframeimagestate.md): The properties that describe the state of a preview frame image for an app preveiew or app event video.
