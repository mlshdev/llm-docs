> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apppriceschedules-_id_-baseterritory](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apppriceschedules-_id_-baseterritory)

# Read the Base Territory for an App's Price Schedule

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+

Read the base territory and currency for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appPriceSchedules/{id}/baseTerritory
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[territories]` — `[string]`: Additional fields to include for each territory resource returned by the response.
  **Allowed values:** `currency`

## Response Codes

- `200` OK — `TerritoryResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/appPriceSchedules/6447402192/baseTerritory
```

**Response**

```json
{
  "data" : {
    "type" : "territories",
    "id" : "CAN",
    "attributes" : {
      "currency" : "CAD"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/territories/CAN"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appPriceSchedules/6447402192/baseTerritory"
  }
}
```

## See Also

### Getting and managing an app’s price schedules

- [Read Price Schedule Information for an App](get-v1-apps-_id_-apppriceschedule.md): Read price schedule details for a specific app.
- [Get the app price schedule ID for an app](get-v1-apps-_id_-relationships-apppriceschedule.md)
- [Read an App's Price Schedule Information](get-v1-apppriceschedules-_id_.md): List the price schedule details for a specific app.
- [List Automatically Generated Prices for an App](get-v1-apppriceschedules-_id_-automaticprices.md): List the automatically calculated prices for an app generated from a base territory.
- [List Manually Chosen Prices for an App](get-v1-apppriceschedules-_id_-manualprices.md): List the prices you chose for a specific app.
- [List automatic price IDs for an app price schedule](get-v1-apppriceschedules-_id_-relationships-automaticprices.md)
- [Get the base territory ID for an app price schedule](get-v1-apppriceschedules-_id_-relationships-baseterritory.md)
- [List manual price IDs for an app price schedule](get-v1-apppriceschedules-_id_-relationships-manualprices.md)
- [Add a Scheduled Price Change to an App](post-v1-apppriceschedules.md): Create a scheduled price change for an app.
