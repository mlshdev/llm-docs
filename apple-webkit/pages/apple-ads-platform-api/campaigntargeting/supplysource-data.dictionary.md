> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigntargeting/supplysource-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigntargeting/supplysource-data.dictionary)

# CampaignTargeting.SupplySource

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The supply source where a campaign’s ads are eligible to appear.

## Declaration

```
object CampaignTargeting.SupplySource
```

## Properties

- `include` — `[string]`: Supply sources to include in targeting. Mutable.
- `exclude` — `[string]`: Not supported at the campaign level. Has no effect if set. Mutable.

<a id="Discussion"></a>

## Discussion

The `supplySource` field is **include-only**; setting `exclude` has no effect. Valid values:

| Value | Ad channel |
| --- | --- |
| `APPSTORE` | App Store ads |
| `MAPS` | Apple Maps |

Each source has its own set of placements. See [CampaignTargeting.SupplyPlacement](supplyplacement-data.dictionary.md) for the full placement list, and [TargetingData](../targetingdata.md) for the `include`/`exclude` shape.
