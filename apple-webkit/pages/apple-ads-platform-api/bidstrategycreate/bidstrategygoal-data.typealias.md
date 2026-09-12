> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bidstrategycreate/bidstrategygoal-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/bidstrategycreate/bidstrategygoal-data.typealias)

# BidStrategyCreate.BidStrategyGoal

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Optimization objective a bid strategy targets during Apple Ads auction competition.

## Declaration

```
string BidStrategyCreate.BidStrategyGoal
```

## Possible Values

- `IMPRESSION`: The strategy optimizes for maximum ad impressions. Applies to impression-based pricing models such as `MANUAL_CPM`.
- `INSTALL`: The strategy optimizes for app installs. The system bids more aggressively for queries likely to result in a new install.
- `TAP`: The strategy optimizes for taps on the ad. Applies to tap-based pricing models such as `MANUAL_CPT`.

<a id="Discussion"></a>

## Discussion

Set this alongside `bidStrategyType` when creating a bid strategy, matching `IMPRESSION` or `TAP` goals to the corresponding `MANUAL_CPM` or `MANUAL_CPT` type.

<a id="Example"></a>

### Example

```json
{
  "bidStrategyType": "MANUAL_CPT",
  "bidStrategyGoal": "TAP"
}
```
