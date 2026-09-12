> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/trustinsight/outcome](https://developer.apple.com/documentation/trustinsights/trustinsight/outcome)

# outcome

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The result value from a request for this insight.

## Declaration

```swift
var outcome: Result<Self.Value, InsightError> { get }
```

## See Also

### Instance Properties - generated

- [insightID](insightid.md): The insight ID.
- [isUsingCurrentModel](isusingcurrentmodel.md): A Boolean value that indicates whether the framework created the insight with the newest available model version.
- [modelVersion](modelversion.md): The model version the framework used for this insight.
- [newestModelVersion](newestmodelversion.md): The newest model that’s available to request.
