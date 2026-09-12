> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appcustomproductpagelocalizations-_id_-relationships-searchkeywords](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appcustomproductpagelocalizations-_id_-relationships-searchkeywords)

# Remove a Search Keyword From a Custom Product Page Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Unassign a search keyword from a specific custom product page localization.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/{id}/relationships/searchKeywords
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app custom product page localization resource ID from the [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest`

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

### Managing search keywords

- [List keywords for a custom product page localization](get-v1-appcustomproductpagelocalizations-_id_-searchkeywords.md): List the search keywords for a specific custom product page localization.
- [List all search keywords for a custom product page localization](get-v1-appcustomproductpagelocalizations-_id_-relationships-searchkeywords.md): Get a list of search keyword IDs for a custom product page localization.
- [Add a Search Keyword to a Custom Product Page Localization](post-v1-appcustomproductpagelocalizations-_id_-relationships-searchkeywords.md): Assign one or more search keywords to a specific custom product page localization.
