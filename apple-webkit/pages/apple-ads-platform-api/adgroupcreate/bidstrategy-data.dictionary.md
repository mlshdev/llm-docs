> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupcreate/bidstrategy-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupcreate/bidstrategy-data.dictionary)

# AdGroupCreate.BidStrategy

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The creation payload for configuring a bid strategy on an ad group or campaign.

## Declaration

```
object AdGroupCreate.BidStrategy
```

## Properties

- `bid` — `Money`: The bid amount for this bid strategy. See [Money](../money.md).
- `bidStrategyGoal` — `BidStrategyCreate.BidStrategyGoal`: The optimization goal for the bid strategy. Must match `bidStrategyType` per the pairings above. See [BidStrategyGoal](../bidstrategygoal.md). Required when `bidStrategyType` is set. Mutable after creation via [BidStrategyUpdate](../bidstrategyupdate.md).
- `bidStrategyType` — `BidStrategyCreate.BidStrategyType`: The type of bid strategy. See [BidStrategyType](../bidstrategytype.md). Required when `bidStrategyGoal` is set. Mutable after creation via [BidStrategyUpdate](../bidstrategyupdate.md).

<a id="Discussion"></a>

## Discussion

Whenever you include `bidStrategyType`, you must also include the matching `bidStrategyGoal` (and vice versa): `MANUAL_CPT` pairs with `TAP`, `MANUAL_CPM` pairs with `IMPRESSION`, `MAX_CONVERSIONS` pairs with `INSTALL`, and `MAX_ENGAGEMENTS` pairs with `TAP`. Omitting one, or sending a goal that doesn’t match the type, returns an error.

See [BidStrategyCreate](../bidstrategycreate.md) for the full field reference.
