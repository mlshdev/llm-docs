> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/humanbodypose3dobservation/camerarelativeposition(for:)

# cameraRelativePosition(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Returns a position relative to the camera for the body joint you specify.

## Declaration

```swift
func cameraRelativePosition(for jointName: HumanBodyPose3DObservation.JointName) -> simd_float4x4
```
