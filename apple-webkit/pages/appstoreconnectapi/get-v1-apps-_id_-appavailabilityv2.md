> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-appavailabilityv2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-appavailabilityv2)

# List Availability for an App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

The data structure that represents a get-v1-apps-{id}-app availability v2 resource.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/appAvailabilityV2
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[appAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `territoryAvailabilities`
- `include` — `[string]`: **Allowed values:** `territoryAvailabilities`
- `fields[territoryAvailabilities]` — `[string]`: **Allowed values:** `available`, `releaseDate`, `preOrderEnabled`, `preOrderPublishDate`, `contentStatuses`, `territory`
- `limit[territoryAvailabilities]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `AppAvailabilityV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

Get a list of availabilities for a specific app.

## See Also

### Getting and managing an app’s availability

- [Get the app availability ID for an app](get-v1-apps-_id_-relationships-appavailabilityv2.md)
