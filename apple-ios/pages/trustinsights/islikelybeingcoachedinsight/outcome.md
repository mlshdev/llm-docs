> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/trustinsights/islikelybeingcoachedinsight/outcome

# outcome

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Result value from a request for this insight.

## Declaration

```swift
let outcome: Result<IsLikelyBeingCoachedInsight.Value, InsightError>
```

## See Also

### Instance Properties - generated

- [insightID](insightid.md): The identifier for this particular result.
- [modelVersion](modelversion.md): The model version used for this particular insight.
- [newestModelVersion](newestmodelversion.md): The newest model that could be requested.
