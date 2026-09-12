> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bidstrategycreate](https://developer.apple.com/documentation/apple-ads-platform-api/bidstrategycreate)

# BidStrategyCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The creation payload for configuring a bid strategy on an ad group or campaign.

## Declaration

```
object BidStrategyCreate
```

## Properties

- `bid` — `Money`: The bid amount for this bid strategy. See [Money](money.md).
- `bidStrategyGoal` — `BidStrategyCreate.BidStrategyGoal`: The optimization goal for the bid strategy. Must match `bidStrategyType` per [BidStrategy](bidstrategy.md). See [BidStrategyGoal](bidstrategygoal.md). Required when `bidStrategyType` is set. Mutable after creation via [BidStrategyUpdate](bidstrategyupdate.md).
- `bidStrategyType` — `BidStrategyCreate.BidStrategyType`: The type of bid strategy. See [BidStrategyType](bidstrategytype.md). Required when `bidStrategyGoal` is set. Mutable after creation via [BidStrategyUpdate](bidstrategyupdate.md).

<a id="Discussion"></a>

## Discussion

The `BidStrategyCreate` object is the creation payload for configuring a bid strategy on an ad group or campaign.

Whenever you include `bidStrategyType`, you must also include the matching `bidStrategyGoal` (and vice versa), using the pairings in [BidStrategy](bidstrategy.md). Omitting one, or sending a goal that doesn’t match the type, returns an error. This pairing is always required on campaign creation. On ad group creation, you can omit `bidStrategy` entirely to inherit the parent campaign’s defaults, but the same pairing rule applies if you include it.

For manual CPT strategies, set `bidStrategyType` to `MANUAL_CPT` and supply a `bid` value that represents the maximum you’re willing to pay per tap. For automated strategies, set `bidStrategyType` to `MAX_CONVERSIONS` and optionally set a `bid` ceiling.

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

- [BidStrategyCreate.BidStrategyGoal](bidstrategycreate/bidstrategygoal-data.typealias.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
- [BidStrategyCreate.BidStrategyType](bidstrategycreate/bidstrategytype-data.typealias.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.

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
- [BidStrategyUpdate](bidstrategyupdate.md): The request body for updating a bid strategy on an ad group or campaign.
- [CPAGoal](cpagoal.md): A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalUpdate](cpagoalupdate.md): The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingData](targetingdata.md): The shared include and exclude pattern for all ad group and campaign targeting dimensions.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.
