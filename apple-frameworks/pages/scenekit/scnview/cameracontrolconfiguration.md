> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/cameracontrolconfiguration](https://developer.apple.com/documentation/scenekit/scnview/cameracontrolconfiguration)

# cameraControlConfiguration (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The current configuration for the camera controller’s event-handling behavior.

## Declaration

```swift
var cameraControlConfiguration: any SCNCameraControlConfiguration { get }
```

## See Also

### Managing Camera Controls

- [allowsCameraControl](allowscameracontrol.md): A Boolean value that determines whether the user can manipulate the current point of view that is used to render the scene.
- [SCNCameraControlConfiguration](../scncameracontrolconfiguration.md): Properties affecting the behavior of a camera controller.
- [defaultCameraController](defaultcameracontroller.md)
- [SCNCameraController](../scncameracontroller.md)

# cameraControlConfiguration (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The current configuration for the camera controller’s event-handling behavior.

## Declaration

```objectivec
@property (nonatomic, readonly) id<SCNCameraControlConfiguration> cameraControlConfiguration;
```

## See Also

### Managing Camera Controls

- [allowsCameraControl](allowscameracontrol.md): A Boolean value that determines whether the user can manipulate the current point of view that is used to render the scene.
- [SCNCameraControlConfiguration](../scncameracontrolconfiguration.md): Properties affecting the behavior of a camera controller.
- [defaultCameraController](defaultcameracontroller.md)
- [SCNCameraController](../scncameracontroller.md)
