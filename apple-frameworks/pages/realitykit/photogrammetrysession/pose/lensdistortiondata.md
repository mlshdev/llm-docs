> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/pose/lensdistortiondata](https://developer.apple.com/documentation/realitykit/photogrammetrysession/pose/lensdistortiondata)

# lensDistortionData

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

If available, the estimated lens distortion data for the associated input image.  This can be used to rectify the image for computer vision applications.  If not available, this is nil.

## Declaration

```swift
var lensDistortionData: LensDistortionData? { get }
```
