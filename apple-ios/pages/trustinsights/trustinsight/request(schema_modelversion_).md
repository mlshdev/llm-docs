> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/trustinsight/request(schema:modelversion:)](https://developer.apple.com/documentation/trustinsights/trustinsight/request(schema:modelversion:))

# request(schema:modelVersion:)

**Framework:** Trust Insights  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates an insight request for the given insight type.

## Declaration

```swift
static func request(schema: Self.SchemaVersion, modelVersion: InsightEvaluator.ModelVersion = .current) -> InsightEvaluator.InsightRequest<Self>
```

## Parameters

- `schema`: The required [SchemaVersion](schemaversion.md).
- `modelVersion`: The required [InsightEvaluator.ModelVersion](../insightevaluator/modelversion.md).

<a id="return-value"></a>

## Return Value

An [InsightEvaluator.InsightRequest](../insightevaluator/insightrequest.md) to incorporate into an [InsightEvaluator.InsightContext](../insightevaluator/insightcontext.md) that you can use to make an evaluation request.
