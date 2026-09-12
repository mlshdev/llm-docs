> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/insightrequest](https://developer.apple.com/documentation/trustinsights/insightevaluator/insightrequest)

# InsightEvaluator.InsightRequest

**Framework:** Trust Insights  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A structure you use to make a request for a specific insight.

## Declaration

```swift
struct InsightRequest<InsightType> where InsightType : TrustInsight
```

<a id="Discussion"></a>

## Discussion

You can include one or more in the [InsightEvaluator.InsightContext](insightcontext.md) for an evaluation request.

## Topics

### Creating an insight request

- [init(insightType:schema:model:)](insightrequest/init%28insighttype_schema_model_%29.md): Initializes a new insight request with the provided insight type, schema, and model versions.

### Insight request properties

- [insightTypeIdentifier](insightrequest/insighttypeidentifier.md): The identifier for the type of insight requested.
- [modelVersion](insightrequest/modelversion.md): The requested model version.
- [schemaVersion](insightrequest/schemaversion.md): An integer that indicates the schema version the framework should use to perform the evaluation.
- [schemaVersionNumber](insightrequest/schemaversionnumber.md): The requested schema version.

## Relationships

### Conforms To

- [InsightEvaluator.InsightRequestProtocol](insightrequestprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting an evaluation

- [InsightEvaluator.InsightContext](insightcontext.md): A structure that provides details about the evaluations to request and provides information the framework requires for the evaluation to take place.
- [InsightEvaluator.InsightRequestProtocol](insightrequestprotocol.md): A protocol that insight evaluation types conform to.
- [InsightEvaluator.EvaluationError](evaluationerror.md): Errors the framework can return if there are errors processing an evaluation request.
- [InsightEvaluator.ModelVersion](modelversion.md): Values that define the required model version of the insight.
- [InsightEvaluator.OperationCategory](operationcategory.md): Values that represent the types of operation it’s possible to request evaluations for.
