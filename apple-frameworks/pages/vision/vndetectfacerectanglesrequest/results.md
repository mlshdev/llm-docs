> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectfacerectanglesrequest/results](https://developer.apple.com/documentation/vision/vndetectfacerectanglesrequest/results)

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The results of the face detection request.

## Declaration

```swift
var results: [VNFaceObservation]? { get }
```

## See Also

### Accessing the Results

- [VNFaceObservation](../vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The results of the face detection request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNFaceObservation *> * results;
```

## See Also

### Accessing the Results

- [VNFaceObservation](../vnfaceobservation.md): Face or facial-feature information that an image analysis request detects.
