> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/reportingbidstrategy/bidstrategytype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/reportingbidstrategy/bidstrategytype-data.typealias)

# ReportingBidStrategy.BidStrategyType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Auction participation approach applied to the campaign or ad group at report time.

## Declaration

```
string ReportingBidStrategy.BidStrategyType
```

## Possible Values

- `MANUAL_CPT`: Manual cost-per-tap strategy. You set the maximum amount you’re willing to pay for each tap on your ad.
- `MANUAL_CPM`: Manual cost-per-thousand-impressions strategy. You set a fixed bid for every 1,000 ad impressions served.
- `MAX_CONVERSIONS`: Automated strategy that maximizes the total number of conversions within the available budget, using Search Match to identify optimal search queries.
- `MAX_ENGAGEMENTS`: Automated bidding strategy that sets bids to maximize taps on your place card using cost-per-tap (CPT) billing.

<a id="Discussion"></a>

## Discussion

The `MANUAL_CPT` and `MANUAL_CPM` values are manual bidding strategies with a fixed bid. The `MAX_CONVERSIONS` and `MAX_ENGAGEMENTS` values are automated strategies that adjust bids to maximize conversions or engagements.
