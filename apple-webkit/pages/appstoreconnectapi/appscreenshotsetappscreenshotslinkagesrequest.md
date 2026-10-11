> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotsetappscreenshotslinkagesrequest

# AppScreenshotSetAppScreenshotsLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

A request body you use to reorder the screenshots in a screenshot set.

> This object is deprecated. Use [AppAssetLibraryPlacement](appassetlibraryplacement.md) instead.

## Declaration

```
object AppScreenshotSetAppScreenshotsLinkagesRequest
```

## Properties

- `data` — `[AppScreenshotSetAppScreenshotsLinkagesRequest.Data]` (required):

## Topics

### Objects

- [AppScreenshotSetAppScreenshotsLinkagesRequest.Data](appscreenshotsetappscreenshotslinkagesrequest/data-data.dictionary.md): Deprecated. The data element of the request body.

## See Also

### Objects and Data Types

- [AppScreenshotSet](appscreenshotset.md): Deprecated. The data structure that represent an app screenshot set resource.
- [AppScreenshotSetCreateRequest](appscreenshotsetcreaterequest.md): Deprecated. The request body you use to create an app screenshot set.
- [AppScreenshotSetResponse](appscreenshotsetresponse.md): Deprecated. The response body for endpoints that create or read a set of app screenshots for a display size.
- [AppScreenshotSetsResponse](appscreenshotsetsresponse.md): Deprecated. The response body for endpoints that list app screenshot sets for an App Store version localization.
- [AppScreenshotSetAppScreenshotsLinkagesResponse](appscreenshotsetappscreenshotslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [ScreenshotDisplayType](screenshotdisplaytype.md): A string that represents the display type of an app screenshot.
