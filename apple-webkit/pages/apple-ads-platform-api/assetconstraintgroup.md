> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/assetconstraintgroup](https://developer.apple.com/documentation/apple-ads-platform-api/assetconstraintgroup)

# AssetConstraintGroup

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A constraint group defining the supply placements and countries or regions where an asset is blocked or allowed to serve.

## Declaration

```
object AssetConstraintGroup
```

## Properties

- `supplyPlacement` — `[string]`: Supply placement identifiers scoped by this constraint. Example values: `SEARCH_TAB`, `TODAY_TAB`, `SEARCH_RESULTS`.
- `countryOrRegion` — `[string]`: ISO 3166-1 alpha-2 country or region codes scoped by this constraint. Example values: `US`, `GB`, `CN`.

<a id="Discussion"></a>

## Discussion

The `AssetConstraintGroup` object defines a pairing of supply placements and geographic markets that collectively describe where an asset eligibility rule applies. The [AssetEligibility](asseteligibility.md) objects embed it to specify the exact scope of a blocking or allowing rule for an asset.

When both `supplyPlacement` and `countryOrRegion` are populated, the constraint applies to the intersection of those placements and markets.

<a id="Example"></a>

### Example

```json
{
  "supplyPlacement": [
    "SEARCH_TAB",
    "TODAY_TAB"
  ],
  "countryOrRegion": [
    "US",
    "GB"
  ]
}
```

## See Also

- [Asset](asset.md): Unified asset entity containing product-agnostic asset metadata and references.
- [AssetResponse](assetresponse.md): The Get Asset and Upload Asset endpoints return this response object.
- [AssetQueryResponse](assetqueryresponse.md): Paginated response object for asset queries.
- [AssetEligibility](asseteligibility.md): Eligibility status and constraint details for an asset.
