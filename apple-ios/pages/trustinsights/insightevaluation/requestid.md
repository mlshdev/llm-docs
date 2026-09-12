> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluation/requestid](https://developer.apple.com/documentation/trustinsights/insightevaluation/requestid)

# requestID

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An app defined identifier.

## Declaration

```swift
final var requestID: String? { get }
```

<a id="Discussion"></a>

## Discussion

Provide this as the [requestID](../insightevaluator/insightcontext/requestid.md) in the [InsightEvaluator.InsightContext](../insightevaluator/insightcontext.md) for the evaluation request

If provided in the [InsightEvaluator.InsightContext](../insightevaluator/insightcontext.md) this is non-`nil` and should match the value included in the context for the request. Any mismatch indicates that your app shouldn’t trust the payload and may have been injected by an attacker in some way.

An app can also use this ID to link requests or as a wider app specific ID for the active operation.

## See Also

### Evaluation properties

- [additionalInfo](additionalinfo.md): Additional information about the evaluation.
- [generationTimestamp](generationtimestamp.md): The timestamp that indicates when the framework created the on-device portion of the assessment, in UTC.
- [insight](insight.md): Result values and errors for the requested insights.
- [serverTimestamp](servertimestamp.md): The server-side timestamp that indicates when the server processed the evaluation, in UTC.
- [signedPayload](signedpayload.md): A signed data object that contains details about the insight.
