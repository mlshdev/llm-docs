> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/cameraview](https://developer.apple.com/documentation/homekit/cameraview)

# CameraView

**Framework:** HomeKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A SwiftUI view into which a video stream or an image snapshot is rendered.

## Declaration

```swift
@MainActor @preconcurrency struct CameraView
```

## Topics

### Creating a camera view

- [init(source:)](cameraview/init%28source_%29.md): Creates a new camera view using the given source.
- [HMCameraSource](hmcamerasource.md): An abstract class for a camera’s data source.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Managing camera profiles

- [cameraProfiles](hmaccessory/cameraprofiles.md): An array of camera profiles implemented by the accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
- [HMCameraView](hmcameraview.md): The view into which a video stream or an image snapshot is rendered.
