> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-appevents](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-appevents)

# List all in-app events for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Get a list of in-app events for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/appEvents
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[appEventLocalizations]` — `[string]`: Additional fields to include for each app event localization resource returned by the response.
  **Allowed values:** `locale`, `name`, `shortDescription`, `longDescription`, `appEvent`, `appEventScreenshots`, `appEventVideoClips`
- `fields[appEvents]` — `[string]`: Additional fields to include for each app event resource returned by the response.
  **Allowed values:** `referenceName`, `badge`, `eventState`, `deepLink`, `purchaseRequirement`, `primaryLocale`, `priority`, `purpose`, `territorySchedules`, `archivedTerritorySchedules`, `localizations`
- `filter[eventState]` — `[string]`: Filter the returned app events by event state.
  **Allowed values:** `DRAFT`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `REJECTED`, `ACCEPTED`, `APPROVED`, `PUBLISHED`, `PAST`, `ARCHIVED`
- `filter[id]` — `[string]`: Filter the returned app events by ID.
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `localizations`
- `limit` — `integer`: The maximum number of app event resources to return.
  **Maximum:** `200`
- `limit[localizations]` — `integer`: The maximum number of related localizations resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `AppEventsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting app event information

- [List app event IDs for an app](get-v1-apps-_id_-relationships-appevents.md)
