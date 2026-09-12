> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/cpagoalupdate](https://developer.apple.com/documentation/apple-ads-platform-api/cpagoalupdate)

# CPAGoalUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.

## Declaration

```
object CPAGoalUpdate
```

## Properties

- `value` — `Money`: The updated target CPA monetary value as a `Money` object. See [Money](money.md).

<a id="Discussion"></a>

## Discussion

The `cpaCap` field is deprecated on `AdGroupUpdate`. Use `BidStrategyUpdate` with `bidStrategyType` set to `MAX_CONVERSIONS` instead of `CPAGoalUpdate` to configure automated conversion-maximizing bidding.

<a id="Example"></a>

### Example

```json
{
  "value": {
    "amount": "25.00",
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
- [CPAGoal](cpagoal.md): A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingData](targetingdata.md): The shared include and exclude pattern for all ad group and campaign targeting dimensions.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.
