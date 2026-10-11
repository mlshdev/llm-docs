> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appeventscreenshotsresponse

# AppEventScreenshotsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

The response body for endpoints that list screenshots for an in-app event localization.

> This object is deprecated. Use [AppAssetLibraryImagesResponse](appassetlibraryimagesresponse.md) instead.

## Declaration

```
object AppEventScreenshotsResponse
```

## Properties

- `data` — `[AppEventScreenshot]` (required):
- `included` — `[AppEventLocalization]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppEventScreenshot](appeventscreenshot.md): Deprecated. A screenshot image used to promote an app event on the App Store product page.
- [AppEventScreenshotCreateRequest](appeventscreenshotcreaterequest.md): Deprecated. The request body you use to create an app event screenshot.
- [AppEventScreenshotResponse](appeventscreenshotresponse.md): Deprecated. The response body for endpoints that create, read, or modify an in-app event screenshot.
- [AppEventScreenshotUpdateRequest](appeventscreenshotupdaterequest.md): Deprecated. The request body you use to update an app event screenshot update request.
