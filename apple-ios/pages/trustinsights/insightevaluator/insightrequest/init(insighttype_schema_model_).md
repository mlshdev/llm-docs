> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/trustinsights/insightevaluator/insightrequest/init(insighttype:schema:model:)

# init(insightType:schema:model:)

**Framework:** Trust Insights  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Initializes a new insight request with the provided insight type, schema, and model versions.

## Declaration

```swift
init(insightType: InsightType.Type, schema: InsightType.SchemaVersion, model: InsightEvaluator.ModelVersion = .current)
```
