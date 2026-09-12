> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionlocalization](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionlocalization)

# AppStoreVersionLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Store Version Localizations resource.

## Declaration

```
object AppStoreVersionLocalization
```

## Properties

- `attributes` — `AppStoreVersionLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreVersionLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreVersionLocalizations`

## Topics

### Objects

- [AppStoreVersionLocalization.Attributes](appstoreversionlocalization/attributes-data.dictionary.md): Attributes that describe an App Store Version Localizations resource.
- [AppStoreVersionLocalization.Relationships](appstoreversionlocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppStoreVersionLocalizationCreateRequest](appstoreversionlocalizationcreaterequest.md): The request body you use to create an App Store Version Localization.
- [AppStoreVersionLocalizationResponse](appstoreversionlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized App Store version entry.
- [AppStoreVersionLocalizationsResponse](appstoreversionlocalizationsresponse.md): The response body for endpoints that list localized App Store version entries.
- [AppStoreVersionLocalizationUpdateRequest](appstoreversionlocalizationupdaterequest.md): The request body you use to update an App Store Version Localization
- [AppStoreVersionLocalizationSearchKeywordsLinkagesRequest](appstoreversionlocalizationsearchkeywordslinkagesrequest.md): The request body for updating the list of search keywords linked to an App Store version localization.
- [AppStoreVersionLocalizationSearchKeywordsLinkagesResponse](appstoreversionlocalizationsearchkeywordslinkagesresponse.md): A response containing the resource identifiers of search keywords linked to an App Store version localization.
