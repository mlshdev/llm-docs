> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/evaluationerror](https://developer.apple.com/documentation/trustinsights/insightevaluator/evaluationerror)

# InsightEvaluator.EvaluationError

**Framework:** Trust Insights  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Errors the framework can return if there are errors processing an evaluation request.

## Declaration

```swift
@nonexhaustive enum EvaluationError
```

## Topics

### Evaluation errors

- [InsightEvaluator.EvaluationError.contextInvalid(\_:)](evaluationerror/contextinvalid%28__%29.md): An error that indicates the framework couldn’t produce an evaluation for the provided context.
- [InsightEvaluator.EvaluationError.denied](evaluationerror/denied.md): An error that indicates evaluations are unavailable due to a person’s options.
- [InsightEvaluator.EvaluationError.localError](evaluationerror/localerror.md): An error that indicates the framework couldn’t complete the evaluation.
- [InsightEvaluator.EvaluationError.notAvailable](evaluationerror/notavailable.md): An error that indicates evaluations are not available on this device.
- [InsightEvaluator.EvaluationError.rateLimitExceeded](evaluationerror/ratelimitexceeded.md): An error that indicates the framework has received too many requests.
- [InsightEvaluator.EvaluationError.serverError](evaluationerror/servererror.md): An error that indicates the framework couldn’t complete the evaluation due to server or network issues.

### Enumeration Cases

- [InsightEvaluator.EvaluationError.payloadSecurityError](evaluationerror/payloadsecurityerror.md): Server returned payload contains security related error and should not be trusted. This may indicate that the payload has been tampered with.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting an evaluation

- [InsightEvaluator.InsightContext](insightcontext.md): A structure that provides details about the evaluations to request and provides information the framework requires for the evaluation to take place.
- [InsightEvaluator.InsightRequest](insightrequest.md): A structure you use to make a request for a specific insight.
- [InsightEvaluator.InsightRequestProtocol](insightrequestprotocol.md): A protocol that insight evaluation types conform to.
- [InsightEvaluator.ModelVersion](modelversion.md): Values that define the required model version of the insight.
- [InsightEvaluator.OperationCategory](operationcategory.md): Values that represent the types of operation it’s possible to request evaluations for.
