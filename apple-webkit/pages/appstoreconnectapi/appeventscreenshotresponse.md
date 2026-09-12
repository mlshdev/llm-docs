> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventscreenshotresponse](https://developer.apple.com/documentation/appstoreconnectapi/appeventscreenshotresponse)

# AppEventScreenshotResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify an in-app event screenshot.

## Declaration

```
object AppEventScreenshotResponse
```

## Properties

- `data` — `AppEventScreenshot` (required):
- `included` — `[AppEventLocalization]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppEventScreenshot](appeventscreenshot.md): A screenshot image used to promote an app event on the App Store product page.
- [AppEventScreenshotCreateRequest](appeventscreenshotcreaterequest.md): The request body you use to create an app event screenshot.
- [AppEventScreenshotUpdateRequest](appeventscreenshotupdaterequest.md): The request body you use to update an app event screenshot update request.
- [AppEventScreenshotsResponse](appeventscreenshotsresponse.md): The response body for endpoints that list screenshots for an in-app event localization.
