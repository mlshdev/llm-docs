> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-marketplacesearchdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-marketplacesearchdetails-_id_)

# Delete a marketplace search detail url

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Delete search detail URL for the alternative marketplace.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/marketplaceSearchDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `marketplace search details` resource ID from the [Read the marketplace search detail url](get-v1-apps-_id_-marketplacesearchdetail.md) response.

## Response Codes

- `204` No Content:
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
DELETE https://api.appstoreconnect.apple.com/v1/marketplaceSearchDetails/{id}
```

**Response**

```json
204
```

## See Also

### Managing search URLs

- [Building a searchable catalog for your marketplace app for inclusion in Spotlight](building-a-searchable-catalog-for-your-marketplace-app-for-inclusion-in-spotlight.md): Set up and build your alternative marketplace’s searchable index.
- [Add a marketplace search detail url](post-v1-marketplacesearchdetails.md): Add a search detail URL for the alternative marketplace.
- [Read the marketplace search detail url](get-v1-apps-_id_-marketplacesearchdetail.md): Get search detail URL for the alternative marketplace.
- [Get the marketplace search detail ID for an app](get-v1-apps-_id_-relationships-marketplacesearchdetail.md)
- [Modify a marketplace search detail url](patch-v1-marketplacesearchdetails-_id_.md): Update the search detail URL for the alternative marketplace.
