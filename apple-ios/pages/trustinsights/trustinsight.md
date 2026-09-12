> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/trustinsight](https://developer.apple.com/documentation/trustinsights/trustinsight)

# TrustInsight

**Framework:** Trust Insights  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A protocol that describes the trust insight model and the associated evaluation properties.

## Declaration

```swift
protocol TrustInsight : Sendable
```

<a id="Discussion"></a>

## Discussion

Don’t instantiate this type directly, use one of its concrete insight types, such as  [IsLikelyBeingCoachedInsight](islikelybeingcoachedinsight.md) instead.

## Topics

### Associated Types - generated

- [SchemaVersion](trustinsight/schemaversion.md): A value that represents one of the available schema versions for the particular insight.
- [Value](trustinsight/value.md): The result type for this particular insight which will typically be an enumeration value.

### Instance Properties - generated

- [insightID](trustinsight/insightid.md): The insight ID.
- [isUsingCurrentModel](trustinsight/isusingcurrentmodel.md): A Boolean value that indicates whether the framework created the insight with the newest available model version.
- [modelVersion](trustinsight/modelversion.md): The model version the framework used for this insight.
- [newestModelVersion](trustinsight/newestmodelversion.md): The newest model that’s available to request.
- [outcome](trustinsight/outcome.md): The result value from a request for this insight.

### Type Properties - generated

- [typeIdentifier](trustinsight/typeidentifier.md): The identifier string for the type of insight this represents.

### Type Methods - generated

- [request(schema:modelVersion:)](trustinsight/request%28schema_modelversion_%29.md): Creates an insight request for the given insight type.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [IsLikelyBeingCoachedInsight](islikelybeingcoachedinsight.md)

## See Also

### Requesting an evaluation

- [InsightEvaluator](insightevaluator.md): A class that defines data and methods the framework uses to perform evaluations.
- [requestEvaluation(context:)](insightevaluator/requestevaluation%28context_%29.md): Requests the evaluation of insights.
- [InsightEvaluation](insightevaluation.md): The insight result that an evaluation request returns.
