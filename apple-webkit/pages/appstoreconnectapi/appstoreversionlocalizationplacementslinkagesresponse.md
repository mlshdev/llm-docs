> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionlocalizationplacementslinkagesresponse

# AppStoreVersionLocalizationPlacementsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A response body that contains a list of related resource IDs.

## Declaration

```
object AppStoreVersionLocalizationPlacementsLinkagesResponse
```

## Properties

- `data` — `[AppStoreVersionLocalizationPlacementsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [AppStoreVersionLocalizationPlacementsLinkagesResponse.Data](appstoreversionlocalizationplacementslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [AppStoreVersionLocalization](appstoreversionlocalization.md): The data structure that represent an App Store Version Localizations resource.
- [AppStoreVersionLocalizationCreateRequest](appstoreversionlocalizationcreaterequest.md): The request body you use to create an App Store Version Localization.
- [AppStoreVersionLocalizationResponse](appstoreversionlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized App Store version entry.
- [AppStoreVersionLocalizationsResponse](appstoreversionlocalizationsresponse.md): The response body for endpoints that list localized App Store version entries.
- [AppStoreVersionLocalizationUpdateRequest](appstoreversionlocalizationupdaterequest.md): The request body you use to update an App Store Version Localization
- [AppStoreVersionLocalizationSearchKeywordsLinkagesRequest](appstoreversionlocalizationsearchkeywordslinkagesrequest.md): The request body for updating the list of search keywords linked to an App Store version localization.
- [AppStoreVersionLocalizationSearchKeywordsLinkagesResponse](appstoreversionlocalizationsearchkeywordslinkagesresponse.md): A response containing the resource identifiers of search keywords linked to an App Store version localization.
