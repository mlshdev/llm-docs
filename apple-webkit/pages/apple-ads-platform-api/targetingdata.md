> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/targetingdata](https://developer.apple.com/documentation/apple-ads-platform-api/targetingdata)

# TargetingData

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The shared include and exclude pattern for all ad group and campaign targeting dimensions.

## Declaration

```
object TargetingData
```

## Properties

- `include` — `[string]`: Criteria to include in targeting. Mutable.
- `exclude` — `[string]`: Criteria to exclude from targeting. Mutable.

<a id="Discussion"></a>

## Discussion

The `TargetingData` object is the shared include/exclude pattern for all ad group targeting dimensions. The `include` array restricts delivery to the specified values. The `exclude` array blocks delivery to those values. When you set both arrays, `include` takes precedence over `exclude` for overlapping values.

- **Not all dimensions support both arrays.** For `AdGroupTargeting`, only `appCategory` and `appDownloader` support both `include` and `exclude`. All other ad group targeting dimensions are include-only.
- For `CampaignTargeting`, all three dimensions (`supplySource`, `supplyPlacement`, `countryOrRegion`) are include-only. See the per-dimension support table in [AdGroupTargeting](adgrouptargeting.md).

This object is embedded within [CampaignTargeting](campaigntargeting.md) fields `supplySource`, `supplyPlacement`, and `countryOrRegion`, which control the ad channel, placement, and geographic markets for a campaign.

The [AdGroupTargeting](adgrouptargeting.md) also embeds `TargetingData` within fields such as `country`, `deviceClass`, `gender`, `minAge`, and others, which refine audience and delivery within that campaign. The valid values for each field depend on the targeting dimension: `supplySource` accepts `APPSTORE` and `MAPS`. The `deviceClass` field accepts `IPHONE` and `IPAD`.

<a id="Example"></a>

### Example

```json
{
  "include": [
    "APPSTORE"
  ],
  "exclude": [
    "MAPS"
  ]
}
```

## See Also

- [AdGroup](adgroup.md): Primary unit governing targeting, bid strategy, pricing model, and scheduling within a campaign.
- [AdGroupCreate](adgroupcreate.md): The request body for creating a new ad group.
- [AdGroupUpdate](adgroupupdate.md): The request body for updating an existing ad group.
- [AdGroupResponse](adgroupresponse.md): The response object for an ad group operation.
- [AdGroupQueryResponse](adgroupqueryresponse.md): The response object for an ad group query, containing matched results and pagination metadata.
- [AdGroupTargeting](adgrouptargeting.md): The comprehensive audience and placement configuration for an ad group.
- [AdGroupTargetingCreate](adgrouptargetingcreate.md): The targeting configuration for creating a new ad group, specifying audience dimensions to include or exclude.
- [AdGroupTargetingUpdate](adgrouptargetingupdate.md): The targeting configuration for updating an existing ad group, specifying audience dimensions to include or exclude.
- [BidStrategy](bidstrategy.md): Defines how an ad group or campaign competes in auctions, including bid type, optimization goal, and bid amount.
- [BidStrategyCreate](bidstrategycreate.md): The creation payload for configuring a bid strategy on an ad group or campaign.
- [BidStrategyUpdate](bidstrategyupdate.md): The request body for updating a bid strategy on an ad group or campaign.
- [CPAGoal](cpagoal.md): A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalUpdate](cpagoalupdate.md): The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.
