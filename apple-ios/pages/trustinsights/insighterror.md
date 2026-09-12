> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insighterror](https://developer.apple.com/documentation/trustinsights/insighterror)

# InsightError

**Framework:** Trust Insights  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Error values the framework returns for specific insights within the overall evaluation.

## Declaration

```swift
@nonexhaustive enum InsightError
```

## Topics

### Insight errors

- [InsightError.insightEvaluationFailed](insighterror/insightevaluationfailed.md): An error that indicates that there was a failure in generating the insight.
- [InsightError.insightUnavailable](insighterror/insightunavailable.md): An error that indicate the requested insight isn’t available.
- [InsightError.insightVersionIncompatible](insighterror/insightversionincompatible.md): An error that indicates that the version you requested isn’t available on this device and OS combination.
- [InsightError.insightVersionUnavailable](insighterror/insightversionunavailable.md): An error that indicates that the insight version you requested isn’t available.
- [InsightError.rateLimitError](insighterror/ratelimiterror.md): An error that indicates that the app has reached the rate limit for the particular insight type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving evaluation notifications and handling errors

- [InsightEvaluationConsumptionStatus](insightevaluationconsumptionstatus.md): Values describing the usage of insight evaluation.
