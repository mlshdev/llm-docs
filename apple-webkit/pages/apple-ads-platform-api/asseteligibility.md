> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/asseteligibility](https://developer.apple.com/documentation/apple-ads-platform-api/asseteligibility)

# AssetEligibility

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Eligibility status and constraint details for an asset.

## Declaration

```
object AssetEligibility
```

## Properties

- `status` — `AssetEligibilityStatus`: Overall eligibility status. Read-only.
- `blockedGroups` — `[AssetConstraintGroup]`: Constraint groups where the asset is blocked from serving. See [AssetConstraintGroup](assetconstraintgroup.md). Read-only.
- `allowedGroups` — `[AssetConstraintGroup]`: Constraint groups where the asset is explicitly allowed to serve. See [AssetConstraintGroup](assetconstraintgroup.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `AssetEligibility` object captures the policy evaluation result for an asset. The `Asset` responses always include it (unless excluded via the `fields` parameter), and it describes whether and where the asset can be used for ad serving.

Check `AssetEligibility` before including an asset in a creative. You can’t use assets with `INELIGIBLE` or `PENDING` status in any ad unit. Assets with `LIMITED` status can serve in some placements or markets. See [AssetEligibilityStatus](asseteligibilitystatus.md) for the full list of status values.

<a id="Example"></a>

### Example

```json
{
  "status": "LIMITED",
  "blockedGroups": [
    {
      "supplyPlacement": ["SEARCH_TAB"],
      "countryOrRegion": ["CN"]
    }
  ],
  "allowedGroups": [
    {
      "supplyPlacement": ["SEARCH_TAB", "TODAY_TAB", "SEARCH_RESULTS"],
      "countryOrRegion": ["US", "GB"]
    }
  ]
}
```

## See Also

- [Asset](asset.md): Unified asset entity containing product-agnostic asset metadata and references.
- [AssetResponse](assetresponse.md): The Get Asset and Upload Asset endpoints return this response object.
- [AssetQueryResponse](assetqueryresponse.md): Paginated response object for asset queries.
- [AssetConstraintGroup](assetconstraintgroup.md): A constraint group defining the supply placements and countries or regions where an asset is blocked or allowed to serve.
