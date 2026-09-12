> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluation](https://developer.apple.com/documentation/trustinsights/insightevaluation)

# InsightEvaluation

**Framework:** Trust Insights  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The insight result that an evaluation request returns.

## Declaration

```swift
final class InsightEvaluation<each InsightResult> where repeat each InsightResult : TrustInsight
```

<a id="Discussion"></a>

## Discussion

This is the object that [requestEvaluation(context:)](insightevaluator/requestevaluation%28context_%29.md)method returns. It includes the insight result, metadata about the ID and server timestamps you can use to track and match requests, as well as a signed payload which contains additional information about the evaluation.

There are two ways to access the information in the `signedPayload`. The most secure approach is to send the [signedPayload](insightevaluation/signedpayload.md) to a server that’s making the access decision where the your service can validate the signature and read the results directly. The alternative, when making and on device decision, is to read from the [insight](insightevaluation/insight.md) property and incorporate that summary result into decision logic within your app.

However your decide to process the result, your app needs to call [reportConsumption(\_:insightsUsed:)](insightevaluation/reportconsumption%28__insightsused_%29.md) to indicate how the app made use of the insights.

## Topics

### Evaluation properties

- [additionalInfo](insightevaluation/additionalinfo.md): Additional information about the evaluation.
- [generationTimestamp](insightevaluation/generationtimestamp.md): The timestamp that indicates when the framework created the on-device portion of the assessment, in UTC.
- [insight](insightevaluation/insight.md): Result values and errors for the requested insights.
- [requestID](insightevaluation/requestid.md): An app defined identifier.
- [serverTimestamp](insightevaluation/servertimestamp.md): The server-side timestamp that indicates when the server processed the evaluation, in UTC.
- [signedPayload](insightevaluation/signedpayload.md): A signed data object that contains details about the insight.

### Providing feedback on insights

- [reportConsumption(\_:insightIDsUsed:)](insightevaluation/reportconsumption%28__insightidsused_%29.md): Reports the consumption status, and optionally provides one or more associated insight identifiers.
- [reportConsumption(\_:insightsUsed:)](insightevaluation/reportconsumption%28__insightsused_%29.md): Reports the consumption status, and optionally provide one or more associated insights.

### Instance Properties

- [eventID](insightevaluation/eventid.md): Identifier for this evaluation result that can be recorded with other transaction records so that in the event that fraud or abuse is later discovered associated with the transaction it can be reported to Apple as Offline feedback via Apple Business Register

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting an evaluation

- [InsightEvaluator](insightevaluator.md): A class that defines data and methods the framework uses to perform evaluations.
- [requestEvaluation(context:)](insightevaluator/requestevaluation%28context_%29.md): Requests the evaluation of insights.
- [TrustInsight](trustinsight.md): A protocol that describes the trust insight model and the associated evaluation properties.
