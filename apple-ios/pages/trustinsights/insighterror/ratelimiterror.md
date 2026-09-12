> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insighterror/ratelimiterror](https://developer.apple.com/documentation/trustinsights/insighterror/ratelimiterror)

# InsightError.rateLimitError

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An error that indicates that the app has reached the rate limit for the particular insight type.

## Declaration

```swift
case rateLimitError
```

## See Also

### Insight errors

- [InsightError.insightEvaluationFailed](insightevaluationfailed.md): An error that indicates that there was a failure in generating the insight.
- [InsightError.insightUnavailable](insightunavailable.md): An error that indicate the requested insight isn’t available.
- [InsightError.insightVersionIncompatible](insightversionincompatible.md): An error that indicates that the version you requested isn’t available on this device and OS combination.
- [InsightError.insightVersionUnavailable](insightversionunavailable.md): An error that indicates that the insight version you requested isn’t available.
