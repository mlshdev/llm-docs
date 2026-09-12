> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-appinfolocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_-relationships-appinfolocalizations)

# List app info localization IDs for an app info

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}/relationships/appInfoLocalizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppInfoAppInfoLocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Localization Information

- [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md): Get a list of localized, app-level information for an app.
