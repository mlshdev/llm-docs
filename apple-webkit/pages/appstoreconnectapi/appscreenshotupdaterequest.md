> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotupdaterequest

# AppScreenshotUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The request body you use to update an App Screenshot.

> This object is deprecated. Use [AppAssetLibraryImageUpdateRequest](appassetlibraryimageupdaterequest.md) instead.

## Declaration

```
object AppScreenshotUpdateRequest
```

## Properties

- `data` — `AppScreenshotUpdateRequest.Data` (required):

## Topics

### Objects

- [AppScreenshotUpdateRequest.Data](appscreenshotupdaterequest/data-data.dictionary.md): Deprecated. The data element of the request body.

## See Also

### Objects

- [AppScreenshot](appscreenshot.md): Deprecated. The data structure that represent an App Screenshots resource.
- [AppScreenshotCreateRequest](appscreenshotcreaterequest.md): Deprecated. The request body you use to create an App Screenshot.
- [AppScreenshotResponse](appscreenshotresponse.md): Deprecated. The response body for endpoints that create, read, or modify an app screenshot.
- [AppScreenshotsResponse](appscreenshotsresponse.md): Deprecated. The response body for endpoints that list screenshots in an app screenshot set.
- [UploadOperation](uploadoperation.md): Upload instructions for assets such as app previews and app screenshots.
