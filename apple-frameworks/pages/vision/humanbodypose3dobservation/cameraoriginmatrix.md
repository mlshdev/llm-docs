> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/humanbodypose3dobservation/cameraoriginmatrix](https://developer.apple.com/documentation/vision/humanbodypose3dobservation/cameraoriginmatrix)

# cameraOriginMatrix

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A transform from the skeleton hip to the camera.

## Declaration

```swift
let cameraOriginMatrix: simd_float4x4
```

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [bodyHeight](bodyheight.md): The estimated human body height, in meters.
- [HumanBodyPose3DObservation.EstimationTechnique](estimationtechnique.md): Constants that identify body height estimation techniques.
- [heightEstimationTechnique](heightestimationtechnique.md): The technique the framework uses to estimate body height.
