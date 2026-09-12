> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-endappavailabilitypreorders](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-endappavailabilitypreorders)

# End an app pre-order

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

End the pre-order for your app and release to store immediately.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/endAppAvailabilityPreOrders
```

## HTTP Body

Content type: `application/json`

Type: `EndAppAvailabilityPreOrderCreateRequest`

## Response Codes

- `201` Created — `EndAppAvailabilityPreOrderResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing app and territory availability

- [Read app availability](get-v2-appavailabilities-_id_.md): Get information about your app’s availalbility.
- [Read app availablity territories](get-v2-appavailabilities-_id_-territoryavailabilities.md): Read the territory availablity for a specific app.
- [List territory availability IDs for an app availability](get-v2-appavailabilities-_id_-relationships-territoryavailabilities.md): Get a list of territory availability IDs for a specific app availability.
- [Create an app pre-order](post-v2-appavailabilities.md): Create an app pre-order and set the expected app release date.
- [Modify the territory availability for an app pre-order](patch-v1-territoryavailabilities-_id_.md): Update the release territories for your app pre-order.
