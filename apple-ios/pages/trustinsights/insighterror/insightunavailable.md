> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insighterror/insightunavailable](https://developer.apple.com/documentation/trustinsights/insighterror/insightunavailable)

# InsightError.insightUnavailable

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An error that indicate the requested insight isn’t available.

## Declaration

```swift
case insightUnavailable
```

<a id="Discussion"></a>

## Discussion

The insight was potentially withdrawn or no longer supported on the active OS.

## See Also

### Insight errors

- [InsightError.insightEvaluationFailed](insightevaluationfailed.md): An error that indicates that there was a failure in generating the insight.
- [InsightError.insightVersionIncompatible](insightversionincompatible.md): An error that indicates that the version you requested isn’t available on this device and OS combination.
- [InsightError.insightVersionUnavailable](insightversionunavailable.md): An error that indicates that the insight version you requested isn’t available.
- [InsightError.rateLimitError](ratelimiterror.md): An error that indicates that the app has reached the rate limit for the particular insight type.
