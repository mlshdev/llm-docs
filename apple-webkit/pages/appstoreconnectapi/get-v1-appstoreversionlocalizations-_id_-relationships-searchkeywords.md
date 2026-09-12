> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords)

# List search keyword IDs for an app store version localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of search keyword IDs for a specific App Store version localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersionLocalizations/{id}/relationships/searchKeywords
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version localization resource ID from the [List all app store version localizations for an app store version](get-v1-appstoreversions-_id_-appstoreversionlocalizations.md) response.

## Query Parameters

- `limit` — `integer`: The maximum number of app keyword resource identifiers to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AppStoreVersionLocalizationSearchKeywordsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Search Keywords

- [List all search keywords for an app store version localization](get-v1-appstoreversionlocalizations-_id_-searchkeywords.md): Get search keywords for a specific App Store version localization.
- [Add search keywords to an app store version localization](post-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords.md): Add search keywords to a specific App Store version localization.
- [Remove search keywords from an app store version localization](delete-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords.md): Remove search keywords from a specific App Store version localization.
