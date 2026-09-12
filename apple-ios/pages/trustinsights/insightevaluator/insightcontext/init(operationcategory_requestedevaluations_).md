> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/insightcontext/init(operationcategory:requestedevaluations:)](https://developer.apple.com/documentation/trustinsights/insightevaluator/insightcontext/init(operationcategory:requestedevaluations:))

# init(operationCategory:requestedEvaluations:)

**Framework:** Trust Insights  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates the context with which to request insights.

## Declaration

```swift
init(operationCategory: InsightEvaluator.OperationCategory, requestedEvaluations: (repeat each InsightRequest))
```

## Parameters

- `operationCategory`: For use in transparency logs and may affect insight results if data suggests it may be appropriate
- `requestedEvaluations`: Insights types and versions to request. These should all be of type InsightRequest.
