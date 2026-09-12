> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-asset-by-id](https://developer.apple.com/documentation/apple-ads-platform-api/get-asset-by-id)

# Get Asset

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieve a single asset by its UUID.

## URL

```http
GET https://api.ads.apple.com/v1/assets/{id}
```

## Path Parameters

- `id` — `uuid` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `AssetResponse`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `AssetResponse`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint retrieves a single asset by its UUID. Use it after uploading an asset to check its `eligibility` status before referencing it in a creative.

This endpoint still returns deleted assets, with `deleted: true`. Responses always include the `eligibility` field unless excluded via a `fields` projection parameter.

<a id="Payload-Examples"></a>

## Payload Examples

**Get Asset**

<a id="Request"></a>

### Request

Retrieves a single asset by its UUID.

```
GET https://api.ads.apple.com/v1/assets/770e8400-e29b-41d4-a716-446655440002
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "770e8400-e29b-41d4-a716-446655440002",
   "name": "awayfinder_hero.png",
   "assetType": "IMAGE",
   "providerAssetId": "abc123-provider-id",
   "promotedObjectId": "987654321",
   "promotedObjectType": "BUSINESS_BRAND",
   "providerAssetMetadata": {},
   "assetDetails": {
     "width": 1920,
     "height": 1080,
     "format": "PNG",
     "sizeBytes": 2097152,
     "orientation": "LANDSCAPE"
   },
   "parentAssetId": null,
   "variantIds": [],
   "creationTime": "2026-03-01T12:00:00.000",
   "modificationTime": "2026-03-01T12:00:00.000",
   "eligibility": {
     "status": "ELIGIBLE",
     "blockedGroups": [],
     "allowedGroups": []
   }
 }
}
```

## See Also

- [Upload Asset](upload-asset.md): Upload a binary image file to create a new asset.
- [Query Assets](query-assets.md): Retrieve a paginated list of creative assets using filters and sorting.
- [Delete Asset](delete-asset-by-id.md): Soft-delete an asset by its UUID.
