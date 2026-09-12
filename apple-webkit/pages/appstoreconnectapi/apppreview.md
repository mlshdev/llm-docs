> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/apppreview](https://developer.apple.com/documentation/appstoreconnectapi/apppreview)

# AppPreview

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Previews resource.

## Declaration

```
object AppPreview
```

## Properties

- `attributes` — `AppPreview.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppPreview.Relationships`:
- `type` — `string` (required): **Allowed values:** `appPreviews`

## Topics

### Objects

- [AppPreview.Attributes](apppreview/attributes-data.dictionary.md): Attributes that describe an App Previews resource.
- [AppPreview.Relationships](apppreview/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and Data Types

- [AppPreviewCreateRequest](apppreviewcreaterequest.md): The request body you use to create an App Preview.
- [AppPreviewUpdateRequest](apppreviewupdaterequest.md): The request body you use to update an App Preview.
- [AppPreviewResponse](apppreviewresponse.md): The response body for endpoints that create, read, or modify an app preview video.
- [AppPreviewsResponse](apppreviewsresponse.md): The response body for endpoints that list app preview videos in a preview set.
- [UploadOperation](uploadoperation.md): Upload instructions for assets such as app previews and app screenshots.
- [PreviewType](previewtype.md): String that represents the display type of an app preview.
- [PreviewFrameImage](previewframeimage.md): The properties that describe a preview frame image for an app preview or app event video.
- [AppMediaVideoState](appmediavideostate.md): The properties that describe the state of an app preview or app event video.
- [AppMediaPreviewFrameImageState](appmediapreviewframeimagestate.md): The properties that describe the state of a preview frame image for an app preveiew or app event video.
