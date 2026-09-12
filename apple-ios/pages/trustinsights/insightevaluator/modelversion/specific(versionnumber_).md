> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/modelversion/specific(versionnumber:)](https://developer.apple.com/documentation/trustinsights/insightevaluator/modelversion/specific(versionnumber:))

# InsightEvaluator.ModelVersion.specific(versionNumber:)

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A value that defines a specific model version intended to be run in parallel with the latest version.

## Declaration

```swift
case specific(versionNumber: String)
```

<a id="Discussion"></a>

## Discussion

You can use this to enable validation of or update your your internal server-side risk model to adapt to changes to weights that incorporate this insight.

## See Also

### Enumeration Cases - generated

- [InsightEvaluator.ModelVersion.current](current.md): A value that defines the latest version and includes adjustments as fraud patterns change.
