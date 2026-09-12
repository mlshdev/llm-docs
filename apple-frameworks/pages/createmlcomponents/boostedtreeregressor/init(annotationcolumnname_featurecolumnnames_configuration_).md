> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeregressor/init(annotationcolumnname:featurecolumnnames:configuration:)](https://developer.apple.com/documentation/createmlcomponents/boostedtreeregressor/init(annotationcolumnname:featurecolumnnames:configuration:))

# init(annotationColumnName:featureColumnNames:configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a boosted tree regressor.

## Declaration

```swift
init(annotationColumnName: String, featureColumnNames: [String], configuration: BoostedTreeConfiguration = BoostedTreeConfiguration())
```

<a id="discussion"></a>

## Discussion

- Parameters

  - annotationColumnName: The name of the column containing the ground truth values.
  - featureColumnNames: The names of the feature columns.
  - configuration: The configuration.
