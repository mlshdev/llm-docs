> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/insightrequestprotocol](https://developer.apple.com/documentation/trustinsights/insightevaluator/insightrequestprotocol)

# InsightEvaluator.InsightRequestProtocol

**Framework:** Trust Insights  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A protocol that insight evaluation types conform to.

## Declaration

```swift
protocol InsightRequestProtocol : Sendable
```

## Topics

### Associated Types

- [InsightType](insightrequestprotocol/insighttype.md): An associated type that represents an insight.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [InsightEvaluator.InsightRequest](insightrequest.md)

## See Also

### Requesting an evaluation

- [InsightEvaluator.InsightContext](insightcontext.md): A structure that provides details about the evaluations to request and provides information the framework requires for the evaluation to take place.
- [InsightEvaluator.InsightRequest](insightrequest.md): A structure you use to make a request for a specific insight.
- [InsightEvaluator.EvaluationError](evaluationerror.md): Errors the framework can return if there are errors processing an evaluation request.
- [InsightEvaluator.ModelVersion](modelversion.md): Values that define the required model version of the insight.
- [InsightEvaluator.OperationCategory](operationcategory.md): Values that represent the types of operation it’s possible to request evaluations for.
