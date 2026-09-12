> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appscreenshot](https://developer.apple.com/documentation/appstoreconnectapi/appscreenshot)

# AppScreenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Screenshots resource.

## Declaration

```
object AppScreenshot
```

## Properties

- `attributes` — `AppScreenshot.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppScreenshot.Relationships`:
- `type` — `string` (required): **Allowed values:** `appScreenshots`

## Topics

### Objects

- [AppScreenshot.Attributes](appscreenshot/attributes-data.dictionary.md): Attributes that describe an App Screenshots resource.
- [AppScreenshot.Relationships](appscreenshot/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppScreenshotCreateRequest](appscreenshotcreaterequest.md): The request body you use to create an App Screenshot.
- [AppScreenshotUpdateRequest](appscreenshotupdaterequest.md): The request body you use to update an App Screenshot.
- [AppScreenshotResponse](appscreenshotresponse.md): The response body for endpoints that create, read, or modify an app screenshot.
- [AppScreenshotsResponse](appscreenshotsresponse.md): The response body for endpoints that list screenshots in an app screenshot set.
- [UploadOperation](uploadoperation.md): Upload instructions for assets such as app previews and app screenshots.
