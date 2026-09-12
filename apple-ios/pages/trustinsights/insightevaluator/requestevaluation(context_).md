> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/requestevaluation(context:)](https://developer.apple.com/documentation/trustinsights/insightevaluator/requestevaluation(context:))

# requestEvaluation(context:)

**Framework:** Trust Insights  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Requests the evaluation of insights.

## Declaration

```swift
final nonisolated(nonsending) func requestEvaluation<each I>(context: InsightEvaluator.InsightContext<repeat each I>) async throws -> InsightEvaluation<repeat (each I).InsightType> where repeat each I : InsightEvaluator.InsightRequestProtocol
```

## Parameters

- `context`: An [InsightEvaluator.InsightContext](insightcontext.md) object that describes details evaluation request.

<a id="return-value"></a>

## Return Value

The [InsightEvaluation](../insightevaluation.md) that contains the results of the evaluation.

<a id="discussion"></a>

## Discussion

> **Throws**

> An [InsightEvaluator.EvaluationError](evaluationerror.md) if the framework fails to produce an evaluation.

<a id="Discussion"></a>

## Discussion

> **Note**

> The evaluation process includes processing both on device and on Apple’s servers and can take several seconds to perform an evaluation.

To use the Trust Insights framework in your app, add the `com.apple.developer.trustinsights.base` entitlement to your apps capabilities in Xcode. For more information, see  [Trust Insights](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.trustinsights.base).

## See Also

### Requesting an evaluation

- [InsightEvaluator](../insightevaluator.md): A class that defines data and methods the framework uses to perform evaluations.
- [InsightEvaluation](../insightevaluation.md): The insight result that an evaluation request returns.
- [TrustInsight](../trustinsight.md): A protocol that describes the trust insight model and the associated evaluation properties.
