> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-gamecenterachievementversions-_id_-relationships-localizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-gamecenterachievementversions-_id_-relationships-localizations)

# Get All Localization IDs for a Game Center Achievement Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Get a list of localization resource IDs for a specific Game Center achievement version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/gameCenterAchievementVersions/{id}/relationships/localizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterAchievementVersionV2LocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- limit:
- 200:
- 400:
- 401:
- 403:
- 404:
- 429:

## See Also

### Reading and creating achievement versions

- [Read Game Center Achievement Version Information](get-v2-gamecenterachievementversions-_id_.md): Get information about a specific Game Center achievement version.
- [List All Localizations for a Game Center Achievement Version](get-v2-gamecenterachievementversions-_id_-localizations.md): Get a list of localizations for a specific Game Center achievement version.
- [Create a Game Center Achievement Version](post-v2-gamecenterachievementversions.md): Create a Game Center achievement version.
