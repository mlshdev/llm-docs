> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreversionlocalizationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstoreversionlocalizationsresponse)

# AppStoreVersionLocalizationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that list localized App Store version entries.

## Declaration

```
object AppStoreVersionLocalizationsResponse
```

## Properties

- `data` — `[AppStoreVersionLocalization]` (required):
- `included` — `[*]`: **Allowed types:** `AppKeyword`, `AppPreviewSet`, `AppScreenshotSet`, `AppStoreVersion`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [AppStoreVersionLocalization](appstoreversionlocalization.md): The data structure that represent an App Store Version Localizations resource.
- [AppStoreVersionLocalizationCreateRequest](appstoreversionlocalizationcreaterequest.md): The request body you use to create an App Store Version Localization.
- [AppStoreVersionLocalizationResponse](appstoreversionlocalizationresponse.md): The response body for endpoints that create, read, or modify a localized App Store version entry.
- [AppStoreVersionLocalizationUpdateRequest](appstoreversionlocalizationupdaterequest.md): The request body you use to update an App Store Version Localization
- [AppStoreVersionLocalizationSearchKeywordsLinkagesRequest](appstoreversionlocalizationsearchkeywordslinkagesrequest.md): The request body for updating the list of search keywords linked to an App Store version localization.
- [AppStoreVersionLocalizationSearchKeywordsLinkagesResponse](appstoreversionlocalizationsearchkeywordslinkagesresponse.md): A response containing the resource identifiers of search keywords linked to an App Store version localization.
