> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/evaluationerror/denied](https://developer.apple.com/documentation/trustinsights/insightevaluator/evaluationerror/denied)

# InsightEvaluator.EvaluationError.denied

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An error that indicates evaluations are unavailable due to a person’s options.

## Declaration

```swift
case denied
```

## See Also

### Evaluation errors

- [InsightEvaluator.EvaluationError.contextInvalid(\_:)](contextinvalid%28__%29.md): An error that indicates the framework couldn’t produce an evaluation for the provided context.
- [InsightEvaluator.EvaluationError.localError](localerror.md): An error that indicates the framework couldn’t complete the evaluation.
- [InsightEvaluator.EvaluationError.notAvailable](notavailable.md): An error that indicates evaluations are not available on this device.
- [InsightEvaluator.EvaluationError.rateLimitExceeded](ratelimitexceeded.md): An error that indicates the framework has received too many requests.
- [InsightEvaluator.EvaluationError.serverError](servererror.md): An error that indicates the framework couldn’t complete the evaluation due to server or network issues.
