> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/cpagoal](https://developer.apple.com/documentation/apple-ads-platform-api/cpagoal)

# CPAGoal

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.

## Declaration

```
object CPAGoal
```

## Properties

- `value` — `Money`: The target CPA monetary value. Object with `amount` (string) and `currency` (string) properties.

<a id="Discussion"></a>

## Discussion

The `cpaCap` field on `AdGroupCreate` and `AdGroupUpdate` is deprecated in favor of the `BidStrategy` object with `bidStrategyType` set to `MAX_CONVERSIONS`. Use `bidStrategy` to configure automated conversion-maximizing bidding instead of setting a standalone CPA cap.

<a id="Example"></a>

### Example

```json
{
  "value": {
    "amount": "50.00",
    "currency": "USD"
  }
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
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalUpdate](cpagoalupdate.md): The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingData](targetingdata.md): The shared include and exclude pattern for all ad group and campaign targeting dimensions.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.
