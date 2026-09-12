> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventlocalization](https://developer.apple.com/documentation/appstoreconnectapi/appeventlocalization)

# AppEventLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The localized name, short description, and long description for an App Store app event in a specific language.

## Declaration

```
object AppEventLocalization
```

## Properties

- `attributes` — `AppEventLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppEventLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `appEventLocalizations`

## Topics

### Objects

- [AppEventLocalization.Attributes](appeventlocalization/attributes-data.dictionary.md): Attributes that describe an app event localization resource.
- [AppEventLocalization.Relationships](appeventlocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppEventLocalizationCreateRequest](appeventlocalizationcreaterequest.md): The request body you use to create an app event localization.
- [AppEventLocalizationResponse](appeventlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized in-app event entry.
- [AppEventLocalizationUpdateRequest](appeventlocalizationupdaterequest.md): The request body you use to update an app event localization update request.
- [AppEventLocalizationsResponse](appeventlocalizationsresponse.md): The response body for endpoints that list localized entries for an in-app event.
- [AppEventLocalizationAppEventScreenshotsLinkagesResponse](appeventlocalizationappeventscreenshotslinkagesresponse.md)
- [AppEventLocalizationAppEventVideoClipsLinkagesResponse](appeventlocalizationappeventvideoclipslinkagesresponse.md)
- [AppEventLocalizationsLinkagesResponse](appeventlocalizationslinkagesresponse.md)
