> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appscreenshotsetresponse](https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotsetresponse)

# AppScreenshotSetResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that create or read a set of app screenshots for a display size.

## Declaration

```
object AppScreenshotSetResponse
```

## Properties

- `data` — `AppScreenshotSet` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageLocalization`, `AppScreenshot`, `AppStoreVersionExperimentTreatmentLocalization`, `AppStoreVersionLocalization`
- `links` — `DocumentLinks` (required):

## See Also

### Objects and Data Types

- [AppScreenshotSet](appscreenshotset.md): The data structure that represent an app screenshot set resource.
- [AppScreenshotSetCreateRequest](appscreenshotsetcreaterequest.md): The request body you use to create an app screenshot set.
- [AppScreenshotSetsResponse](appscreenshotsetsresponse.md): The response body for endpoints that list app screenshot sets for an App Store version localization.
- [AppScreenshotSetAppScreenshotsLinkagesRequest](appscreenshotsetappscreenshotslinkagesrequest.md): A request body you use to reorder the screenshots in a screenshot set.
- [AppScreenshotSetAppScreenshotsLinkagesResponse](appscreenshotsetappscreenshotslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [ScreenshotDisplayType](screenshotdisplaytype.md): A string that represents the display type of an app screenshot.
