> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appscreenshotresponse](https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotresponse)

# AppScreenshotResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that create, read, or modify an app screenshot.

## Declaration

```
object AppScreenshotResponse
```

## Properties

- `data` — `AppScreenshot` (required):
- `links` — `DocumentLinks` (required):
- `included` — `[AppScreenshotSet]`:

## See Also

### Objects

- [AppScreenshot](appscreenshot.md): The data structure that represent an App Screenshots resource.
- [AppScreenshotCreateRequest](appscreenshotcreaterequest.md): The request body you use to create an App Screenshot.
- [AppScreenshotUpdateRequest](appscreenshotupdaterequest.md): The request body you use to update an App Screenshot.
- [AppScreenshotsResponse](appscreenshotsresponse.md): The response body for endpoints that list screenshots in an app screenshot set.
- [UploadOperation](uploadoperation.md): Upload instructions for assets such as app previews and app screenshots.
