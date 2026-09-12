> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-marketplacesearchdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-marketplacesearchdetail)

# Read the marketplace search detail url

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Get search detail URL for the alternative marketplace.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/marketplaceSearchDetail
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[marketplaceSearchDetails]` — `[string]`: Additional fields to include for each marketplace search detail resource returned by the response.
  **Allowed values:** `catalogUrl`

## Response Codes

- `200` OK — `MarketplaceSearchDetailResponse`:
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
https://api.appstoreconnect.apple.com/v1/apps/6476788026/marketplaceSearchDetail
```

**Response**

```json
{
  "data" : {
    "type" : "marketplaceSearchDetails",
    "id" : "cfcfc44f-8291-4b75-84f0-4d9a55e8b878",
    "attributes" : {
      "catalogUrl" : "https://example.com/crawler-site/sitemap.xml"
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/marketplaceSearchDetails/cfcfc44f-8291-4b75-84f0-4d9a55e8b878"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/apps/6476788026/marketplaceSearchDetail"
  }
}
```

## See Also

### Managing search URLs

- [Building a searchable catalog for your marketplace app for inclusion in Spotlight](building-a-searchable-catalog-for-your-marketplace-app-for-inclusion-in-spotlight.md): Set up and build your alternative marketplace’s searchable index.
- [Add a marketplace search detail url](post-v1-marketplacesearchdetails.md): Add a search detail URL for the alternative marketplace.
- [Get the marketplace search detail ID for an app](get-v1-apps-_id_-relationships-marketplacesearchdetail.md)
- [Modify a marketplace search detail url](patch-v1-marketplacesearchdetails-_id_.md): Update the search detail URL for the alternative marketplace.
- [Delete a marketplace search detail url](delete-v1-marketplacesearchdetails-_id_.md): Delete search detail URL for the alternative marketplace.
