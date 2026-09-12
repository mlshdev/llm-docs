> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-appavailabilityv2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-appavailabilityv2)

# Get the app availability ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/appAvailabilityV2
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppAppAvailabilityV2LinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting and managing an app’s availability

- [List Availability for an App](get-v1-apps-_id_-appavailabilityv2.md): The data structure that represents a get-v1-apps-{id}-app availability v2 resource.
