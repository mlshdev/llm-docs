> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v3-apppricepoints-_id_-relationships-equalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v3-apppricepoints-_id_-relationships-equalizations)

# List equalization price point IDs for an app price point

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of equalization price point IDs for a specific app price point.

## URL

```http
GET https://api.appstoreconnect.apple.com/v3/appPricePoints/{id}/relationships/equalizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppPricePointV3EqualizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting an app’s price points

- [List All Price Points for an App](get-v1-apps-_id_-apppricepoints.md): Get all the available price points for a specific app.
- [List app price point IDs for an app](get-v1-apps-_id_-relationships-apppricepoints.md)
- [Read App Price Point Information](get-v3-apppricepoints-_id_.md): Get details about a specific app price point.
- [List App Price Point Equalizations](get-v3-apppricepoints-_id_-equalizations.md): List all equivalent app prices points to a base price point.
