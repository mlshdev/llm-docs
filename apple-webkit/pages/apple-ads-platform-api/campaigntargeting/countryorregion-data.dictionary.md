> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigntargeting/countryorregion-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigntargeting/countryorregion-data.dictionary)

# CampaignTargeting.CountryOrRegion

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The countries or regions where a campaign’s ads are eligible to serve.

## Declaration

```
object CampaignTargeting.CountryOrRegion
```

## Properties

- `include` — `[string]`: Countries or regions to include in targeting. Mutable.
- `exclude` — `[string]`: Not supported at the campaign level. Has no effect if set. Mutable.

<a id="Discussion"></a>

## Discussion

The `countryOrRegion` field uses ISO 3166-1 alpha-2 country codes (for example, `US`, `CA`, `GB`). It’s include-only: the `exclude` array isn’t supported at the campaign level. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

Only include markets where the promoted app or brand is available. See [CampaignTargeting.SupplySource](supplysource-data.dictionary.md) and [CampaignTargeting.SupplyPlacement](supplyplacement-data.dictionary.md) for the other targeting dimensions.
