> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignupdate/targeting-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaignupdate/targeting-data.dictionary)

# CampaignUpdate.Targeting

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Targeting configuration for updating an existing campaign’s supply source, placement, and geographic markets.

## Declaration

```
object CampaignUpdate.Targeting
```

## Properties

- `supplySource` — `CampaignTargetingUpdate.SupplySource`: The supply source(s) where ads are eligible to appear. Omit to leave unchanged. See [TargetingDataUpdate](../targetingdataupdate.md).
- `supplyPlacement` — `CampaignTargetingUpdate.SupplyPlacement`: The specific placements within a supply source. Omit to leave unchanged. See [TargetingDataUpdate](../targetingdataupdate.md).
- `countryOrRegion` — `CampaignTargetingUpdate.CountryOrRegion`: The countries or regions where the campaign serves ads. Omit to leave unchanged. See [TargetingDataUpdate](../targetingdataupdate.md).

<a id="Discussion"></a>

## Discussion

Omit a field to leave its current value unchanged.

See [CampaignTargetingUpdate](../campaigntargetingupdate.md) for the full field reference.
