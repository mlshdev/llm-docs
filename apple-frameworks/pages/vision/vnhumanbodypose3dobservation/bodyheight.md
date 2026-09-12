> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhumanbodypose3dobservation/bodyheight](https://developer.apple.com/documentation/vision/vnhumanbodypose3dobservation/bodyheight)

# bodyHeight (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The estimated human body height, in meters.

## Declaration

```swift
var bodyHeight: Float { get }
```

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

<a id="Discussion"></a>

## Discussion

The framework returns an accurate height if [heightEstimation](heightestimation-swift.property.md) is [VNHumanBodyPose3DObservation.HeightEstimation.measured](heightestimation-swift.enum/measured.md); otherwise, it returns a [VNHumanBodyPose3DObservation.HeightEstimation.reference](heightestimation-swift.enum/reference.md) height.

## See Also

### Getting the Body Height

- [heightEstimation](heightestimation-swift.property.md): The technique the framework uses to estimate body height.
- [VNHumanBodyPose3DObservation.HeightEstimation](heightestimation-swift.enum.md): Constants that identify body height estimation techniques.

# bodyHeight (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The estimated human body height, in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) float bodyHeight;
```

## Mentioned In

- [Identifying 3D human body poses in images](../identifying-3d-human-body-poses-in-images.md)

<a id="Discussion"></a>

## Discussion

The framework returns an accurate height if [heightEstimation](heightestimation-swift.property.md) is [VNHumanBodyPose3DObservationHeightEstimationMeasured](heightestimation-swift.enum/measured.md); otherwise, it returns a [VNHumanBodyPose3DObservationHeightEstimationReference](heightestimation-swift.enum/reference.md) height.

## See Also

### Getting the Body Height

- [heightEstimation](heightestimation-swift.property.md): The technique the framework uses to estimate body height.
- [VNHumanBodyPose3DObservationHeightEstimation](heightestimation-swift.enum.md): Constants that identify body height estimation techniques.
