> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectdocumentsegmentationrequest/results](https://developer.apple.com/documentation/vision/vndetectdocumentsegmentationrequest/results)

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The results of a document segmentation request.

## Declaration

```swift
var results: [VNRectangleObservation]? { get }
```

## See Also

### Accessing the Results

- [VNRectangleObservation](../vnrectangleobservation.md): An object that represents the four vertices of a detected rectangle.

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The results of a document segmentation request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNRectangleObservation *> * results;
```

## See Also

### Accessing the Results

- [VNRectangleObservation](../vnrectangleobservation.md): An object that represents the four vertices of a detected rectangle.
