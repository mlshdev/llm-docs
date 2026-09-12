> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appinfolocalization](https://developer.apple.com/documentation/appstoreconnectapi/appinfolocalization)

# AppInfoLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Info Localizations resource.

## Declaration

```
object AppInfoLocalization
```

## Properties

- `attributes` — `AppInfoLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppInfoLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `appInfoLocalizations`

## Topics

### Objects

- [AppInfoLocalization.Attributes](appinfolocalization/attributes-data.dictionary.md): Attributes that describe an App Info Localizations resource.
- [AppInfoLocalization.Relationships](appinfolocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppInfoLocalizationCreateRequest](appinfolocalizationcreaterequest.md): The request body you use to create an App Info Localization.
- [AppInfoLocalizationResponse](appinfolocalizationresponse.md): The response body for endpoints that create, read, or modify a localized app info entry.
- [AppInfoLocalizationUpdateRequest](appinfolocalizationupdaterequest.md): The request body you use to update an App Info Localization.
- [AppInfoLocalizationsResponse](appinfolocalizationsresponse.md): The response body for endpoints that list localized app info entries for an app.
