> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/campaigntargetingcreate/supplysource-data.dictionary

# CampaignTargetingCreate.SupplySource

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The supply source where a new campaign’s ads are eligible to appear.

## Declaration

```
object CampaignTargetingCreate.SupplySource
```

## Properties

- `include` — `[string]`: Supply sources to include in targeting.
- `exclude` — `[string]`: Not supported at the campaign level. Has no effect if set.

<a id="Discussion"></a>

## Discussion

The `supplySource` field is **include-only**; setting `exclude` has no effect. Valid values:

| Value | Ad channel |
| --- | --- |
| `APPSTORE` | App Store ads |
| `MAPS` | Apple Maps |

Each source has its own set of placements. See [CampaignTargetingCreate.SupplyPlacement](supplyplacement-data.dictionary.md) for the full placement list, and [TargetingDataCreate](../targetingdatacreate.md) for the `include`/`exclude` shape.
