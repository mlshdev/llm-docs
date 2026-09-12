> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delete-asset-by-id](https://developer.apple.com/documentation/apple-ads-platform-api/delete-asset-by-id)

# Delete Asset

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Soft-delete an asset by its UUID.

## URL

```http
DELETE https://api.ads.apple.com/v1/assets/{id}
```

## Path Parameters

- `id` — `uuid` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `Response`:
- `400` Bad Request — `Error`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `Error`:
- `404` Not Found — `Response`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint soft-deletes an asset. You can delete only assets that have been uploaded. The [Query Assets](query-assets.md) excludes deleted assets from results by default, but [Get Asset](get-asset-by-id.md) can still retrieve them with `deleted: true`. Attempting to delete an asset that’s already deleted returns 404.

<a id="Payload-Examples"></a>

## Payload Examples

**Delete Asset**

<a id="Request"></a>

### Request

Soft-deletes an asset. Query results exclude the asset by default, but Get Asset by ID can still retrieve it.

```
DELETE https://api.ads.apple.com/v1/assets/770e8400-e29b-41d4-a716-446655440002
```

<a id="Response"></a>

### Response

```json
{
 "result": {}
}
```

## See Also

- [Upload Asset](upload-asset.md): Upload a binary image file to create a new asset.
- [Query Assets](query-assets.md): Retrieve a paginated list of creative assets using filters and sorting.
- [Get Asset](get-asset-by-id.md): Retrieve a single asset by its UUID.
