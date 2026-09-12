> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/objectdetectionmetrics/extractlabels(from:)](https://developer.apple.com/documentation/createmlcomponents/objectdetectionmetrics/extractlabels(from:))

# extractLabels(from:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Extracts all the labels from a list of annotations.

## Declaration

```swift
static func extractLabels(from annotations: [ObjectDetectionAnnotation<Label>]) -> Set<Label>
```

## Parameters

- `annotations`: A list of annotations.

<a id="return-value"></a>

## Return Value

A set of all the labels present in the annotations.
