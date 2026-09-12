> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagekeypointrangeinfo](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagekeypointrangeinfo)

# MPSImageKeypointRangeInfo (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies information to find the keypoints in an image.

## Declaration

```swift
struct MPSImageKeypointRangeInfo
```

## Topics

### Instance Properties

- [maximumKeypoints](mpsimagekeypointrangeinfo/maximumkeypoints.md)
- [minimumThresholdValue](mpsimagekeypointrangeinfo/minimumthresholdvalue.md)

### Initializers

- [init()](mpsimagekeypointrangeinfo/init%28%29.md)
- [init(maximumKeypoints:minimumThresholdValue:)](mpsimagekeypointrangeinfo/init%28maximumkeypoints_minimumthresholdvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Keypoints

- [MPSImageFindKeypoints](mpsimagefindkeypoints.md): A kernel that is used to find a list of keypoints.
- [MPSImageKeypointData](mpsimagekeypointdata.md): A structure that specifies keypoint information.

# MPSImageKeypointRangeInfo (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that specifies information to find the keypoints in an image.

## Declaration

```objectivec
typedef struct { ... } MPSImageKeypointRangeInfo;
```

## Topics

### Instance Properties

- [maximumKeypoints](mpsimagekeypointrangeinfo/maximumkeypoints.md)
- [minimumThresholdValue](mpsimagekeypointrangeinfo/minimumthresholdvalue.md)

## See Also

### Keypoints

- [MPSImageFindKeypoints](mpsimagefindkeypoints.md): A kernel that is used to find a list of keypoints.
- [MPSImageKeypointData](mpsimagekeypointdata.md): A structure that specifies keypoint information.
