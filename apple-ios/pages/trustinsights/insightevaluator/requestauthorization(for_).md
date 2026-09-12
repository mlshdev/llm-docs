> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/requestauthorization(for:)](https://developer.apple.com/documentation/trustinsights/insightevaluator/requestauthorization(for:))

# requestAuthorization(for:)

**Framework:** Trust Insights  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Requests authorization from a person to generate evaluations.

## Declaration

```swift
final nonisolated(nonsending) func requestAuthorization<each I>(for context: InsightEvaluator.InsightContext<repeat each I>) async throws -> InsightEvaluator.AuthorizationStatus where repeat each I : InsightEvaluator.InsightRequestProtocol
```

## Parameters

- `context`: The [InsightEvaluator.InsightContext](insightcontext.md) to request authorization for.

<a id="return-value"></a>

## Return Value

The [InsightEvaluator.AuthorizationStatus](authorizationstatus.md) after a person has made their decision.

<a id="Discussion"></a>

## Discussion

The method doesn’t return until the UI interaction is complete and a person has made a selection as to whether to allow access to insights.

If access is already available, it returns immediately.

## See Also

### Obtaining permission or checking authorization to perform evaluations

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether a person permitted the app to request evaluations for the given context.
- [InsightEvaluator.AuthorizationStatus](authorizationstatus.md): Values that indicate the status of the app’s authorization to request evaluations.
