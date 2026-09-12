> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/cameraprofiles](https://developer.apple.com/documentation/homekit/hmaccessory/cameraprofiles)

# cameraProfiles (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of camera profiles implemented by the accessory.

## Declaration

```swift
var cameraProfiles: [HMCameraProfile]? { get }
```

<a id="Discussion"></a>

## Discussion

An accessory can contain one or more cameras. Each camera is represented as a an [HMCameraProfile](../hmcameraprofile.md) instance. If the accessory doesn’t contain a camera, this property is `nil`.

## See Also

### Managing camera profiles

- [CameraView](../cameraview.md): A SwiftUI view into which a video stream or an image snapshot is rendered.
- [HMCameraProfile](../hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
- [HMCameraView](../hmcameraview.md): The view into which a video stream or an image snapshot is rendered.

# cameraProfiles (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of camera profiles implemented by the accessory.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<HMCameraProfile *> * cameraProfiles;
```

<a id="Discussion"></a>

## Discussion

An accessory can contain one or more cameras. Each camera is represented as a an [HMCameraProfile](../hmcameraprofile.md) instance. If the accessory doesn’t contain a camera, this property is `nil`.

## See Also

### Managing camera profiles

- [HMCameraProfile](../hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
- [HMCameraView](../hmcameraview.md): The view into which a video stream or an image snapshot is rendered.
