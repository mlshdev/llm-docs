> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/accuracy](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/accuracy)

# accuracy

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The number of correctly classified examples out of the total number of examples.

## Declaration

```swift
var accuracy: Double { get set }
```

## See Also

### Getting the properties

- [exampleCount](examplecount.md): The number of examples used to compute the metrics.
- [labels](labels.md): The set of labels.
- [restrictToKnownLabels](restricttoknownlabels.md): A Boolean value indicating whether to restrict metrics to labels in the labels set.
