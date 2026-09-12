> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectrectanglesrequest/results](https://developer.apple.com/documentation/vision/vndetectrectanglesrequest/results)

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The results of the request to detect rectangles.

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
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The results of the request to detect rectangles.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNRectangleObservation *> * results;
```

## See Also

### Accessing the Results

- [VNRectangleObservation](../vnrectangleobservation.md): An object that represents the four vertices of a detected rectangle.
