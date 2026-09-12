> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/bidstrategyupdate/bidstrategygoal-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/bidstrategyupdate/bidstrategygoal-data.typealias)

# BidStrategyUpdate.BidStrategyGoal

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Optimization objective a bid strategy targets during Apple Ads auction competition.

## Declaration

```
string BidStrategyUpdate.BidStrategyGoal
```

## Possible Values

- `IMPRESSION`: The strategy optimizes for maximum ad impressions. Applies to impression-based pricing models such as `MANUAL_CPM`.
- `INSTALL`: The strategy optimizes for app installs. The system bids more aggressively for queries likely to result in a new install.
- `TAP`: The strategy optimizes for taps on the ad. Applies to tap-based pricing models such as `MANUAL_CPT`.

<a id="Discussion"></a>

## Discussion

Changing this on an update must keep the goal compatible with the bid strategy’s existing `bidStrategyType`, since `IMPRESSION` and `TAP` map to different pricing models.

<a id="Example"></a>

### Example

```json
{
  "bidStrategyType": "MANUAL_CPT",
  "bidStrategyGoal": "TAP"
}
```
