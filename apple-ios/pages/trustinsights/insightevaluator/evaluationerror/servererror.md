> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/evaluationerror/servererror](https://developer.apple.com/documentation/trustinsights/insightevaluator/evaluationerror/servererror)

# InsightEvaluator.EvaluationError.serverError

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An error that indicates the framework couldn’t complete the evaluation due to server or network issues.

## Declaration

```swift
case serverError
```

<a id="Discussion"></a>

## Discussion

It may be possible to retry the request.

## See Also

### Evaluation errors

- [InsightEvaluator.EvaluationError.contextInvalid(\_:)](contextinvalid%28__%29.md): An error that indicates the framework couldn’t produce an evaluation for the provided context.
- [InsightEvaluator.EvaluationError.denied](denied.md): An error that indicates evaluations are unavailable due to a person’s options.
- [InsightEvaluator.EvaluationError.localError](localerror.md): An error that indicates the framework couldn’t complete the evaluation.
- [InsightEvaluator.EvaluationError.notAvailable](notavailable.md): An error that indicates evaluations are not available on this device.
- [InsightEvaluator.EvaluationError.rateLimitExceeded](ratelimitexceeded.md): An error that indicates the framework has received too many requests.
