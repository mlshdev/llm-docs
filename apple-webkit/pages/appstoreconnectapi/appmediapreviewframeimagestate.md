> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appmediapreviewframeimagestate](https://developer.apple.com/documentation/appstoreconnectapi/appmediapreviewframeimagestate)

# AppMediaPreviewFrameImageState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.7+

The properties that describe the state of a preview frame image for an app preveiew or app event video.

## Declaration

```
object AppMediaPreviewFrameImageState
```

## Properties

- `errors` — `[AppMediaStateError]`:
- `state` — `string`: **Allowed values:** `PROCESSING`, `COMPLETE`, `FAILED`
- `warnings` — `[AppMediaStateError]`:

## See Also

### Objects

- [AppEventVideoClip](appeventvideoclip.md): A video clip used to promote an app event on the App Store product page.
- [AppEventVideoClipCreateRequest](appeventvideoclipcreaterequest.md): The request body you use to create an app event video clip.
- [AppEventVideoClipResponse](appeventvideoclipresponse.md): The response body for endpoints that create, read, or modify an in-app event video clip.
- [AppEventVideoClipUpdateRequest](appeventvideoclipupdaterequest.md): The request body you use to update an app event video clip update request.
- [AppEventVideoClipsResponse](appeventvideoclipsresponse.md): The response body for endpoints that list video clips for an in-app event localization.
- [PreviewFrameImage](previewframeimage.md): The properties that describe a preview frame image for an app preview or app event video.
- [AppMediaVideoState](appmediavideostate.md): The properties that describe the state of an app preview or app event video.
