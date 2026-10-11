> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotset

# AppScreenshotSet

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

The data structure that represent an app screenshot set resource.

> This object is deprecated. Use [AppAssetLibraryPlacement](appassetlibraryplacement.md) instead.

## Declaration

```
object AppScreenshotSet
```

## Properties

- `attributes` — `AppScreenshotSet.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppScreenshotSet.Relationships`:
- `type` — `string` (required): **Allowed values:** `appScreenshotSets`

## Topics

### Objects

- [AppScreenshotSet.Attributes](appscreenshotset/attributes-data.dictionary.md): Attributes that describe an App Screenshot Sets resource.
- [AppScreenshotSet.Relationships](appscreenshotset/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and Data Types

- [AppScreenshotSetCreateRequest](appscreenshotsetcreaterequest.md): Deprecated. The request body you use to create an app screenshot set.
- [AppScreenshotSetResponse](appscreenshotsetresponse.md): Deprecated. The response body for endpoints that create or read a set of app screenshots for a display size.
- [AppScreenshotSetsResponse](appscreenshotsetsresponse.md): Deprecated. The response body for endpoints that list app screenshot sets for an App Store version localization.
- [AppScreenshotSetAppScreenshotsLinkagesRequest](appscreenshotsetappscreenshotslinkagesrequest.md): Deprecated. A request body you use to reorder the screenshots in a screenshot set.
- [AppScreenshotSetAppScreenshotsLinkagesResponse](appscreenshotsetappscreenshotslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [ScreenshotDisplayType](screenshotdisplaytype.md): A string that represents the display type of an app screenshot.
