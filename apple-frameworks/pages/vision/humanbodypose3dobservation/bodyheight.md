> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/humanbodypose3dobservation/bodyheight

# bodyHeight

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The estimated human body height, in meters.

## Declaration

```swift
let bodyHeight: Measurement<UnitLength>
```

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [cameraOriginMatrix](cameraoriginmatrix.md): A transform from the skeleton hip to the camera.
- [HumanBodyPose3DObservation.EstimationTechnique](estimationtechnique.md): Constants that identify body height estimation techniques.
- [heightEstimationTechnique](heightestimationtechnique.md): The technique the framework uses to estimate body height.
