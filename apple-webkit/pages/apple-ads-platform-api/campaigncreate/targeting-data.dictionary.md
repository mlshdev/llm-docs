> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigncreate/targeting-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigncreate/targeting-data.dictionary)

# CampaignCreate.Targeting

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Targeting configuration supplied when creating a campaign.

## Declaration

```
object CampaignCreate.Targeting
```

## Properties

- `supplySource` — `CampaignTargetingCreate.SupplySource`: The supply source(s) where ads are eligible to appear (for example, `APPSTORE`, `MAPS`). See [TargetingDataCreate](../targetingdatacreate.md) for details.
- `supplyPlacement` — `CampaignTargetingCreate.SupplyPlacement`: The specific placements within a supply source. See [CampaignTargetingCreate.SupplyPlacement](../campaigntargetingcreate/supplyplacement-data.dictionary.md) for possible values and which supply source each belongs to. See [TargetingDataCreate](../targetingdatacreate.md) for details.
- `countryOrRegion` — `CampaignTargetingCreate.CountryOrRegion`: The countries or regions where the campaign serves ads. Uses ISO 3166-1 alpha-2 country codes. See [TargetingDataCreate](../targetingdatacreate.md) for details.

<a id="Discussion"></a>

## Discussion

Sets the supply source, placement, and geographic markets a new campaign is eligible to serve on. These values establish the campaign-level targeting boundary within which ad group targeting must operate.

See [CampaignTargetingCreate](../campaigntargetingcreate.md) for the full field reference.
