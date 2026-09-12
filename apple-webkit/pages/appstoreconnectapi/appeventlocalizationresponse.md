> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventlocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/appeventlocalizationresponse)

# AppEventLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify a localized in-app event entry.

## Declaration

```
object AppEventLocalizationResponse
```

## Properties

- `data` — `AppEventLocalization` (required):
- `included` — `[*]`: **Allowed types:** `AppEventScreenshot`, `AppEventVideoClip`, `AppEvent`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppEventLocalization](appeventlocalization.md): The localized name, short description, and long description for an App Store app event in a specific language.
- [AppEventLocalizationCreateRequest](appeventlocalizationcreaterequest.md): The request body you use to create an app event localization.
- [AppEventLocalizationUpdateRequest](appeventlocalizationupdaterequest.md): The request body you use to update an app event localization update request.
- [AppEventLocalizationsResponse](appeventlocalizationsresponse.md): The response body for endpoints that list localized entries for an in-app event.
- [AppEventLocalizationAppEventScreenshotsLinkagesResponse](appeventlocalizationappeventscreenshotslinkagesresponse.md)
- [AppEventLocalizationAppEventVideoClipsLinkagesResponse](appeventlocalizationappeventvideoclipslinkagesresponse.md)
- [AppEventLocalizationsLinkagesResponse](appeventlocalizationslinkagesresponse.md)
