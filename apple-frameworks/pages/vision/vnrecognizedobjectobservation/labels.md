> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedobjectobservation/labels](https://developer.apple.com/documentation/vision/vnrecognizedobjectobservation/labels)

# labels (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An array of observations that classify the recognized object.

## Declaration

```swift
var labels: [VNClassificationObservation] { get }
```

## See Also

### Classifying a Recognized Object

- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.

# labels (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An array of observations that classify the recognized object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<VNClassificationObservation *> * labels;
```

## See Also

### Classifying a Recognized Object

- [VNClassificationObservation](../vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.
