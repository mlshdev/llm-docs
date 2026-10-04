> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/campaignupdate/targeting-data.dictionary

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

- `supplySource` — `CampaignTargetingUpdate.SupplySource`: The supply source(s) where ads are eligible to appear. Fixed at creation. Don’t include this field in an update request, since doing so is unsupported regardless of the value sent.
- `supplyPlacement` — `CampaignTargetingUpdate.SupplyPlacement`: The specific placements within a supply source. Omit to leave unchanged. See [TargetingDataUpdate](../targetingdataupdate.md).
- `countryOrRegion` — `CampaignTargetingUpdate.CountryOrRegion`: The countries or regions where the campaign serves ads. Omit to leave unchanged. See [TargetingDataUpdate](../targetingdataupdate.md).

<a id="Discussion"></a>

## Discussion

Omit `supplyPlacement` or `countryOrRegion` to leave its current value unchanged. `supplySource` is fixed at creation; don’t include it in an update request.

See [CampaignTargetingUpdate](../campaigntargetingupdate.md) for the full field reference.
