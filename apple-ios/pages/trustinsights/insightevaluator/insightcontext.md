> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/insightcontext](https://developer.apple.com/documentation/trustinsights/insightevaluator/insightcontext)

# InsightEvaluator.InsightContext

**Framework:** Trust Insights  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A structure that provides details about the evaluations to request and provides information the framework requires for the evaluation to take place.

## Declaration

```swift
struct InsightContext<each InsightRequest> where repeat each InsightRequest : InsightEvaluator.InsightRequestProtocol
```

## Topics

### Creating an insight context

- [init(operationCategory:requestedEvaluations:)](insightcontext/init%28operationcategory_requestedevaluations_%29.md): Creates the context with which to request insights.

### insight context properties

- [operationCategory](insightcontext/operationcategory.md): The type of operation you’re requesting the evaluation for.
- [requestID](insightcontext/requestid.md): An optional identifier you can use to tie an assessment to a specific transaction.
- [requestedInsight](insightcontext/requestedinsight.md): The insight you’re requesting.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting an evaluation

- [InsightEvaluator.InsightRequest](insightrequest.md): A structure you use to make a request for a specific insight.
- [InsightEvaluator.InsightRequestProtocol](insightrequestprotocol.md): A protocol that insight evaluation types conform to.
- [InsightEvaluator.EvaluationError](evaluationerror.md): Errors the framework can return if there are errors processing an evaluation request.
- [InsightEvaluator.ModelVersion](modelversion.md): Values that define the required model version of the insight.
- [InsightEvaluator.OperationCategory](operationcategory.md): Values that represent the types of operation it’s possible to request evaluations for.
