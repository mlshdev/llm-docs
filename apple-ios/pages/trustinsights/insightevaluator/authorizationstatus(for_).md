> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/authorizationstatus(for:)](https://developer.apple.com/documentation/trustinsights/insightevaluator/authorizationstatus(for:))

# authorizationStatus(for:)

**Framework:** Trust Insights  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Returns an authorization status that indicates whether a person permitted the app to request evaluations for the given context.

## Declaration

```swift
final nonisolated(nonsending) func authorizationStatus<each I>(for context: InsightEvaluator.InsightContext<repeat each I>) async throws -> InsightEvaluator.AuthorizationStatus where repeat each I : InsightEvaluator.InsightRequestProtocol
```

## Parameters

- `context`: The [InsightEvaluator.InsightContext](insightcontext.md) to request evaluations for.

<a id="return-value"></a>

## Return Value

An [InsightEvaluator.AuthorizationStatus](authorizationstatus.md) that indicates whether someone authorized the app to request evaluations.

<a id="discussion"></a>

## Discussion

> **Throws**

> Errors in cases where there is a system failure.

## See Also

### Obtaining permission or checking authorization to perform evaluations

- [requestAuthorization(for:)](requestauthorization%28for_%29.md): Requests authorization from a person to generate evaluations.
- [InsightEvaluator.AuthorizationStatus](authorizationstatus.md): Values that indicate the status of the app’s authorization to request evaluations.
