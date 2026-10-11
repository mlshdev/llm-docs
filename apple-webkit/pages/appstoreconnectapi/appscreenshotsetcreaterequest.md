> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotsetcreaterequest

# AppScreenshotSetCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The request body you use to create an app screenshot set.

> This object is deprecated. Use [AppAssetLibraryPlacementCreateRequest](appassetlibraryplacementcreaterequest.md) instead.

## Declaration

```
object AppScreenshotSetCreateRequest
```

## Properties

- `data` — `AppScreenshotSetCreateRequest.Data` (required):

## Topics

### Objects

- [AppScreenshotSetCreateRequest.Data](appscreenshotsetcreaterequest/data-data.dictionary.md): Deprecated. The data element of the request body.

## See Also

### Objects and Data Types

- [AppScreenshotSet](appscreenshotset.md): Deprecated. The data structure that represent an app screenshot set resource.
- [AppScreenshotSetResponse](appscreenshotsetresponse.md): Deprecated. The response body for endpoints that create or read a set of app screenshots for a display size.
- [AppScreenshotSetsResponse](appscreenshotsetsresponse.md): Deprecated. The response body for endpoints that list app screenshot sets for an App Store version localization.
- [AppScreenshotSetAppScreenshotsLinkagesRequest](appscreenshotsetappscreenshotslinkagesrequest.md): Deprecated. A request body you use to reorder the screenshots in a screenshot set.
- [AppScreenshotSetAppScreenshotsLinkagesResponse](appscreenshotsetappscreenshotslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [ScreenshotDisplayType](screenshotdisplaytype.md): A string that represents the display type of an app screenshot.
