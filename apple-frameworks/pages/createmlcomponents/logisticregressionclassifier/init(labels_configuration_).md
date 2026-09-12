> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifier/init(labels:configuration:)](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier/init(labels:configuration:))

# init(labels:configuration:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a logistic regression classifier.

## Declaration

```swift
init(labels: Set<Label>, configuration: LogisticRegressionClassifier<Scalar, Label>.Configuration = Configuration())
```

## Parameters

- `labels`: The labels used to train the classifier.
- `configuration`: The configuration.

## See Also

### Creating a classifier

- [LogisticRegressionClassifier.Configuration](configuration-swift.struct.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`, `Scalar` conforms to `BinaryFloatingPoint`, `Label` conforms to `Comparable`, `Label` conforms to `Decodable`, `Label` conforms to `Encodable`, and `Label` conforms to `Hashable`. A logistic regression classifier configuration.
