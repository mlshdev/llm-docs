> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluation/reportconsumption(_:insightsused:)](https://developer.apple.com/documentation/trustinsights/insightevaluation/reportconsumption(_:insightsused:))

# reportConsumption(\_:insightsUsed:)

**Framework:** Trust Insights  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Reports the consumption status, and optionally provide one or more associated insights.

## Declaration

```swift
final func reportConsumption(_ status: InsightEvaluationConsumptionStatus, insightsUsed: [any TrustInsight] = [])
```

## Parameters

- `status`: A label that indicates how the app consumed the provided insights.
- `insightsUsed`: An array of specific[TrustInsight](../trustinsight.md)  objects, that your app used in making a decision. These values are optional.

<a id="Discussion"></a>

## Discussion

Before releasing an [InsightEvaluation](../insightevaluation.md), call this to report how your app used the results. The system may present this value in transparency reporting and also helps with model improvement.

> **Important**

> Failure to call this method to report how your app used the insight before releasing an [InsightEvaluation](../insightevaluation.md) may result in rate limiting or revocation of you access to the service.

## See Also

### Providing feedback

- [reportConsumption(\_:insightIDsUsed:)](reportconsumption%28__insightidsused_%29.md): Reports the consumption status, and optionally provides one or more associated insight identifiers.
