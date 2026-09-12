> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigntargeting/supplyplacement-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigntargeting/supplyplacement-data.dictionary)

# CampaignTargeting.SupplyPlacement

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The specific placement within a supply source where a campaign’s ads are eligible to appear.

## Declaration

```
object CampaignTargeting.SupplyPlacement
```

## Properties

- `include` — `[string]`: Placements to include in targeting. Mutable.
- `exclude` — `[string]`: Not supported at the campaign level. Has no effect if set. Mutable.

<a id="Discussion"></a>

## Discussion

The `supplyPlacement` field is **include-only**; setting `exclude` has no effect. Each placement belongs to exactly one [CampaignTargeting.SupplySource](supplysource-data.dictionary.md):

| Value | Supply source | Placement |
| --- | --- | --- |
| `APPSTORE_SEARCH_RESULTS` | `APPSTORE` | App Store Search results |
| `APPSTORE_SEARCH_TAB` | `APPSTORE` | App Store Search tab |
| `APPSTORE_TODAY_TAB` | `APPSTORE` | App Store Today tab |
| `APPSTORE_PRODUCT_PAGES` | `APPSTORE` | App Store Product pages |
| `MAPS_SEARCH_RESULTS` | `MAPS` | Apple Maps Search results |
| `MAPS_SEARCH_HOME` | `MAPS` | Apple Maps Search home |

Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.
