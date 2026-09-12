> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-marketplacesearchdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-marketplacesearchdetail)

# Get the marketplace search detail ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/marketplaceSearchDetail
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppMarketplaceSearchDetailLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing search URLs

- [Building a searchable catalog for your marketplace app for inclusion in Spotlight](building-a-searchable-catalog-for-your-marketplace-app-for-inclusion-in-spotlight.md): Set up and build your alternative marketplace’s searchable index.
- [Add a marketplace search detail url](post-v1-marketplacesearchdetails.md): Add a search detail URL for the alternative marketplace.
- [Read the marketplace search detail url](get-v1-apps-_id_-marketplacesearchdetail.md): Get search detail URL for the alternative marketplace.
- [Modify a marketplace search detail url](patch-v1-marketplacesearchdetails-_id_.md): Update the search detail URL for the alternative marketplace.
- [Delete a marketplace search detail url](delete-v1-marketplacesearchdetails-_id_.md): Delete search detail URL for the alternative marketplace.
