> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventscreenshot](https://developer.apple.com/documentation/appstoreconnectapi/appeventscreenshot)

# AppEventScreenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

A screenshot image used to promote an app event on the App Store product page.

## Declaration

```
object AppEventScreenshot
```

## Properties

- `attributes` — `AppEventScreenshot.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppEventScreenshot.Relationships`:
- `type` — `string` (required): **Allowed values:** `appEventScreenshots`

## Topics

### Objects

- [AppEventScreenshot.Attributes](appeventscreenshot/attributes-data.dictionary.md): Attributes that describe an app event screenshot resource.
- [AppEventScreenshot.Relationships](appeventscreenshot/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppEventScreenshotCreateRequest](appeventscreenshotcreaterequest.md): The request body you use to create an app event screenshot.
- [AppEventScreenshotResponse](appeventscreenshotresponse.md): The response body for endpoints that create, read, or modify an in-app event screenshot.
- [AppEventScreenshotUpdateRequest](appeventscreenshotupdaterequest.md): The request body you use to update an app event screenshot update request.
- [AppEventScreenshotsResponse](appeventscreenshotsresponse.md): The response body for endpoints that list screenshots for an in-app event localization.
