> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appscreenshotsetappscreenshotslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/appscreenshotsetappscreenshotslinkagesresponse)

# AppScreenshotSetAppScreenshotsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A response body that contains a list of related resource IDs.

## Declaration

```
object AppScreenshotSetAppScreenshotsLinkagesResponse
```

## Properties

- `data` — `[AppScreenshotSetAppScreenshotsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Objects

- [AppScreenshotSetAppScreenshotsLinkagesResponse.Data](appscreenshotsetappscreenshotslinkagesresponse/data-data.dictionary.md): The data element of the response body.

## See Also

### Objects and Data Types

- [AppScreenshotSet](appscreenshotset.md): The data structure that represent an app screenshot set resource.
- [AppScreenshotSetCreateRequest](appscreenshotsetcreaterequest.md): The request body you use to create an app screenshot set.
- [AppScreenshotSetResponse](appscreenshotsetresponse.md): The response body for endpoints that create or read a set of app screenshots for a display size.
- [AppScreenshotSetsResponse](appscreenshotsetsresponse.md): The response body for endpoints that list app screenshot sets for an App Store version localization.
- [AppScreenshotSetAppScreenshotsLinkagesRequest](appscreenshotsetappscreenshotslinkagesrequest.md): A request body you use to reorder the screenshots in a screenshot set.
- [ScreenshotDisplayType](screenshotdisplaytype.md): A string that represents the display type of an app screenshot.
