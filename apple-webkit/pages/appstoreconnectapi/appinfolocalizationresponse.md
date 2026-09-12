> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appinfolocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/appinfolocalizationresponse)

# AppInfoLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that create, read, or modify a localized app info entry.

## Declaration

```
object AppInfoLocalizationResponse
```

## Properties

- `data` — `AppInfoLocalization` (required):
- `links` — `DocumentLinks` (required):
- `included` — `[AppInfo]`:

## See Also

### Objects

- [AppInfoLocalization](appinfolocalization.md): The data structure that represent an App Info Localizations resource.
- [AppInfoLocalizationCreateRequest](appinfolocalizationcreaterequest.md): The request body you use to create an App Info Localization.
- [AppInfoLocalizationUpdateRequest](appinfolocalizationupdaterequest.md): The request body you use to update an App Info Localization.
- [AppInfoLocalizationsResponse](appinfolocalizationsresponse.md): The response body for endpoints that list localized app info entries for an app.
