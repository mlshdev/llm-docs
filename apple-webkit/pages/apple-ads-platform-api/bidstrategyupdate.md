> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bidstrategyupdate](https://developer.apple.com/documentation/apple-ads-platform-api/bidstrategyupdate)

# BidStrategyUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for updating a bid strategy on an ad group or campaign.

## Declaration

```
object BidStrategyUpdate
```

## Properties

- `bidStrategyType` — `BidStrategyUpdate.BidStrategyType`: The bid strategy type to apply. See [BidStrategyType](bidstrategytype.md).
- `bidStrategyGoal` — `BidStrategyUpdate.BidStrategyGoal`: The optimization goal to apply. Must match `bidStrategyType` per the pairings in [BidStrategy](bidstrategy.md). See [BidStrategyUpdate.BidStrategyGoal](bidstrategyupdate/bidstrategygoal-data.typealias.md).
- `bid` — `Money`: The monetary bid amount for manual bid strategies, setting the per-auction monetary ceiling. For `MANUAL_CPT`, this value directly governs auction participation. For automated strategies, it acts as an upper bound. See [Money](money.md).

<a id="Discussion"></a>

## Discussion

Use `BidStrategyUpdate` as the `bidStrategy` field value when updating an ad group (`PUT /v1/adgroups/{id}` ([Update an Ad Group](put-adgroups-_id_.md))) or a campaign (`PUT /v1/campaigns/{id}` ([Update a Campaign](put-campaigns-_id_.md))). Include only the fields you want to change. The `bidStrategyType` must remain compatible with the parent campaign’s `billingEvent`. Changing the type to an incompatible combination returns a 400 error.

The `bidStrategyGoal` field can be changed together with `bidStrategyType`. Omitting one, or sending a goal that doesn’t match the type, returns an error. For ad group-specific behavior when the parent campaign uses an automated `bidStrategyType` (`MAX_CONVERSIONS` or `MAX_ENGAGEMENTS`), see [AdGroupUpdate.BidStrategy](adgroupupdate/bidstrategy-data.dictionary.md).

<a id="Example"></a>

### Example

```json
{
  "bidStrategyType": "MANUAL_CPT",
  "bidStrategyGoal": "TAP",
  "bid": {
    "amount": "2.50",
    "currency": "USD"
  }
}
```

## Topics

### Type Aliases

- [BidStrategyUpdate.BidStrategyGoal](bidstrategyupdate/bidstrategygoal-data.typealias.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
- [BidStrategyUpdate.BidStrategyType](bidstrategyupdate/bidstrategytype-data.typealias.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.

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
- [CPAGoal](cpagoal.md): A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalUpdate](cpagoalupdate.md): The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingData](targetingdata.md): The shared include and exclude pattern for all ad group and campaign targeting dimensions.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.
