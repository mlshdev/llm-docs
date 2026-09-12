> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifiermodel/init(coefficients:labels:)](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifiermodel/init(coefficients:labels:))

# init(coefficients:labels:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a logistic regression model.

## Declaration

```swift
init(coefficients: some Sequence<Scalar>, labels: Set<Label>)
```

<a id="discussion"></a>

## Discussion

- coefficients: The linear coefficients.
- labels: The set of labels.
