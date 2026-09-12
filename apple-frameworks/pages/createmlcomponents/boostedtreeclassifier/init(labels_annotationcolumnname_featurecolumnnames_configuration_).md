> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeclassifier/init(labels:annotationcolumnname:featurecolumnnames:configuration:)](https://developer.apple.com/documentation/createmlcomponents/boostedtreeclassifier/init(labels:annotationcolumnname:featurecolumnnames:configuration:))

# init(labels:annotationColumnName:featureColumnNames:configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a boosted tree classifier.

## Declaration

```swift
init(labels: Set<Label?>, annotationColumnName: String, featureColumnNames: [String], configuration: BoostedTreeConfiguration = BoostedTreeConfiguration())
```

<a id="discussion"></a>

## Discussion

- Parameters

  - labels: The set of possible labels.
  - annotationColumnName: The name of the column containing the ground truth labels.
  - featureColumnNames: The names of the feature columns.
  - configuration: The configuration.
