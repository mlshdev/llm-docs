> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords)

# Remove search keywords from an app store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Remove search keywords from a specific App Store version localization.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/{id}/relationships/searchKeywords
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version localization resource ID from the [List all app store version localizations for an app store version](get-v1-appstoreversions-_id_-appstoreversionlocalizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionLocalizationSearchKeywordsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Search Keywords

- [List all search keywords for an app store version localization](get-v1-appstoreversionlocalizations-_id_-searchkeywords.md): Get search keywords for a specific App Store version localization.
- [List search keyword IDs for an app store version localization](get-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords.md): Get a list of search keyword IDs for a specific App Store version localization.
- [Add search keywords to an app store version localization](post-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords.md): Add search keywords to a specific App Store version localization.
