> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/assetresponse](https://developer.apple.com/documentation/apple-ads-platform-api/assetresponse)

# AssetResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The Get Asset and Upload Asset endpoints return this response object.

## Declaration

```
object AssetResponse
```

## Properties

- `result` — `Asset`: The retrieved asset. Absent if no asset was found. See [Asset](asset.md). Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The [Get Asset](get-asset-by-id.md) and [Upload Asset](upload-asset.md) return `AssetResponse` as the top-level envelope. On success, `result` contains the [Asset](asset.md) object. On failure, `result` is absent and `error` describes the problem.

<a id="Example"></a>

### Example

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

- [Asset](asset.md): Unified asset entity containing product-agnostic asset metadata and references.
- [AssetQueryResponse](assetqueryresponse.md): Paginated response object for asset queries.
- [AssetEligibility](asseteligibility.md): Eligibility status and constraint details for an asset.
- [AssetConstraintGroup](assetconstraintgroup.md): A constraint group defining the supply placements and countries or regions where an asset is blocked or allowed to serve.
