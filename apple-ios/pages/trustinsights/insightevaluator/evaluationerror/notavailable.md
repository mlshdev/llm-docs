> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/trustinsights/insightevaluator/evaluationerror/notavailable

# InsightEvaluator.EvaluationError.notAvailable

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An error that indicates evaluations are not available on this device.

## Declaration

```swift
case notAvailable
```

## See Also

### Evaluation errors

- [InsightEvaluator.EvaluationError.contextInvalid(\_:)](contextinvalid%28__%29.md): An error that indicates the framework couldn’t produce an evaluation for the provided context.
- [InsightEvaluator.EvaluationError.denied](denied.md): An error that indicates evaluations are unavailable due to a person’s options.
- [InsightEvaluator.EvaluationError.localError](localerror.md): An error that indicates the framework couldn’t complete the evaluation.
- [InsightEvaluator.EvaluationError.rateLimitExceeded](ratelimitexceeded.md): An error that indicates the framework has received too many requests.
- [InsightEvaluator.EvaluationError.serverError](servererror.md): An error that indicates the framework couldn’t complete the evaluation due to server or network issues.
