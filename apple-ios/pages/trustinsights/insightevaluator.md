> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator](https://developer.apple.com/documentation/trustinsights/insightevaluator)

# InsightEvaluator

**Framework:** Trust Insights  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A class that defines data and methods the framework uses to perform evaluations.

## Declaration

```swift
final class InsightEvaluator
```

## Topics

### Creating an evaluator

- [init()](insightevaluator/init%28%29.md): Creates a new insight evaluator object you use to request insights.

### Requesting and checking authorization status

- [authorizationStatus(for:)](insightevaluator/authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether a person permitted the app to request evaluations for the given context.
- [requestAuthorization(for:)](insightevaluator/requestauthorization%28for_%29.md): Requests authorization from a person to generate evaluations.
- [requestEvaluation(context:)](insightevaluator/requestevaluation%28context_%29.md): Requests the evaluation of insights.
- [InsightEvaluator.AuthorizationStatus](insightevaluator/authorizationstatus.md): Values that indicate the status of the app’s authorization to request evaluations.

### Requesting an evaluation

- [InsightEvaluator.InsightContext](insightevaluator/insightcontext.md): A structure that provides details about the evaluations to request and provides information the framework requires for the evaluation to take place.
- [InsightEvaluator.InsightRequest](insightevaluator/insightrequest.md): A structure you use to make a request for a specific insight.
- [InsightEvaluator.InsightRequestProtocol](insightevaluator/insightrequestprotocol.md): A protocol that insight evaluation types conform to.
- [InsightEvaluator.EvaluationError](insightevaluator/evaluationerror.md): Errors the framework can return if there are errors processing an evaluation request.
- [InsightEvaluator.ModelVersion](insightevaluator/modelversion.md): Values that define the required model version of the insight.
- [InsightEvaluator.OperationCategory](insightevaluator/operationcategory.md): Values that represent the types of operation it’s possible to request evaluations for.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting an evaluation

- [requestEvaluation(context:)](insightevaluator/requestevaluation%28context_%29.md): Requests the evaluation of insights.
- [InsightEvaluation](insightevaluation.md): The insight result that an evaluation request returns.
- [TrustInsight](trustinsight.md): A protocol that describes the trust insight model and the associated evaluation properties.
