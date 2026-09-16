> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/bidstrategy/bidstrategygoal-data.typealias

# BidStrategy.BidStrategyGoal

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Optimization objective a bid strategy targets during Apple Ads auction competition.

## Declaration

```
string BidStrategy.BidStrategyGoal
```

## Possible Values

- `IMPRESSION`: The strategy optimizes for maximum ad impressions. Applies to impression-based pricing models such as `MANUAL_CPM`.
- `INSTALL`: The strategy optimizes for app installs. The system bids more aggressively for queries likely to result in a new install.
- `TAP`: The strategy optimizes for taps on the ad. Applies to tap-based pricing models such as `MANUAL_CPT`.

<a id="Discussion"></a>

## Discussion

The goal must match the ad group’s pricing model, since `IMPRESSION` and `TAP` goals apply only under `MANUAL_CPM` and `MANUAL_CPT` respectively.

<a id="Example"></a>

### Example

```json
{
  "bidStrategyType": "MANUAL_CPT",
  "bidStrategyGoal": "TAP"
}
```
