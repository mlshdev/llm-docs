> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigntargetingcreate/countryorregion-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigntargetingcreate/countryorregion-data.dictionary)

# CampaignTargetingCreate.CountryOrRegion

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The countries or regions where a new campaign’s ads are eligible to serve.

## Declaration

```
object CampaignTargetingCreate.CountryOrRegion
```

## Properties

- `include` — `[string]`: Countries or regions to include in targeting.
- `exclude` — `[string]`: Not supported at the campaign level. Has no effect if set.

<a id="Discussion"></a>

## Discussion

The `countryOrRegion` field uses ISO 3166-1 alpha-2 country codes (for example, `US`, `CA`, `GB`). It’s include-only: the `exclude` array isn’t supported at the campaign level. See [TargetingDataCreate](../targetingdatacreate.md) for the `include`/`exclude` shape.

Only include markets where the promoted app or brand is available. See [CampaignTargetingCreate.SupplySource](supplysource-data.dictionary.md) and [CampaignTargetingCreate.SupplyPlacement](supplyplacement-data.dictionary.md) for the other targeting dimensions.
