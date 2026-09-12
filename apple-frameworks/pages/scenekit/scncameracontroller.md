> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncameracontroller](https://developer.apple.com/documentation/scenekit/scncameracontroller)

# SCNCameraController (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
class SCNCameraController
```

## Topics

### Responding to Control Events

- [delegate](scncameracontroller/delegate.md)
- [SCNCameraControllerDelegate](scncameracontrollerdelegate.md)

### Supporting Types

- [SCNInteractionMode](scninteractionmode.md)

### Instance Properties

- [automaticTarget](scncameracontroller/automatictarget.md)
- [inertiaEnabled](scncameracontroller/inertiaenabled.md)
- [inertiaFriction](scncameracontroller/inertiafriction.md)
- [interactionMode](scncameracontroller/interactionmode.md)
- [isInertiaRunning](scncameracontroller/isinertiarunning.md)
- [maximumHorizontalAngle](scncameracontroller/maximumhorizontalangle.md)
- [maximumVerticalAngle](scncameracontroller/maximumverticalangle.md)
- [minimumHorizontalAngle](scncameracontroller/minimumhorizontalangle.md)
- [minimumVerticalAngle](scncameracontroller/minimumverticalangle.md)
- [pointOfView](scncameracontroller/pointofview.md)
- [target](scncameracontroller/target.md)
- [worldUp](scncameracontroller/worldup.md)

### Instance Methods

- [beginInteraction(\_:withViewport:)](scncameracontroller/begininteraction%28__withviewport_%29.md)
- [clearRoll()](scncameracontroller/clearroll%28%29.md)
- [continueInteraction(\_:withViewport:sensitivity:)](scncameracontroller/continueinteraction%28__withviewport_sensitivity_%29.md)
- [dolly(by:onScreenPoint:viewport:)](scncameracontroller/dolly%28by_onscreenpoint_viewport_%29.md)
- [dolly(toTarget:)](scncameracontroller/dolly%28totarget_%29.md)
- [endInteraction(\_:withViewport:velocity:)](scncameracontroller/endinteraction%28__withviewport_velocity_%29.md)
- [frameNodes(\_:)](scncameracontroller/framenodes%28__%29.md)
- [roll(by:aroundScreenPoint:viewport:)](scncameracontroller/roll%28by_aroundscreenpoint_viewport_%29.md)
- [rollAroundTarget(\_:)](scncameracontroller/rollaroundtarget%28__%29.md)
- [rotateBy(x:y:)](scncameracontroller/rotateby%28x_y_%29.md)
- [stopInertia()](scncameracontroller/stopinertia%28%29.md)
- [translateInCameraSpaceBy(x:y:z:)](scncameracontroller/translateincameraspaceby%28x_y_z_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Camera Controls

- [allowsCameraControl](scnview/allowscameracontrol.md): A Boolean value that determines whether the user can manipulate the current point of view that is used to render the scene.
- [cameraControlConfiguration](scnview/cameracontrolconfiguration.md): The current configuration for the camera controller’s event-handling behavior.
- [SCNCameraControlConfiguration](scncameracontrolconfiguration.md): Properties affecting the behavior of a camera controller.
- [defaultCameraController](scnview/defaultcameracontroller.md)

# SCNCameraController (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
@interface SCNCameraController : NSObject
```

## Topics

### Responding to Control Events

- [delegate](scncameracontroller/delegate.md)
- [SCNCameraControllerDelegate](scncameracontrollerdelegate.md)

### Supporting Types

- [SCNInteractionMode](scninteractionmode.md)

### Instance Properties

- [automaticTarget](scncameracontroller/automatictarget.md)
- [inertiaEnabled](scncameracontroller/inertiaenabled.md)
- [inertiaFriction](scncameracontroller/inertiafriction.md)
- [interactionMode](scncameracontroller/interactionmode.md)
- [inertiaRunning](scncameracontroller/isinertiarunning.md)
- [maximumHorizontalAngle](scncameracontroller/maximumhorizontalangle.md)
- [maximumVerticalAngle](scncameracontroller/maximumverticalangle.md)
- [minimumHorizontalAngle](scncameracontroller/minimumhorizontalangle.md)
- [minimumVerticalAngle](scncameracontroller/minimumverticalangle.md)
- [pointOfView](scncameracontroller/pointofview.md)
- [target](scncameracontroller/target.md)
- [worldUp](scncameracontroller/worldup.md)

### Instance Methods

- [beginInteraction:withViewport:](scncameracontroller/begininteraction%28__withviewport_%29.md)
- [clearRoll](scncameracontroller/clearroll%28%29.md)
- [continueInteraction:withViewport:sensitivity:](scncameracontroller/continueinteraction%28__withviewport_sensitivity_%29.md)
- [dollyBy:onScreenPoint:viewport:](scncameracontroller/dolly%28by_onscreenpoint_viewport_%29.md)
- [dollyToTarget:](scncameracontroller/dolly%28totarget_%29.md)
- [endInteraction:withViewport:velocity:](scncameracontroller/endinteraction%28__withviewport_velocity_%29.md)
- [frameNodes:](scncameracontroller/framenodes%28__%29.md)
- [rollBy:aroundScreenPoint:viewport:](scncameracontroller/roll%28by_aroundscreenpoint_viewport_%29.md)
- [rollAroundTarget:](scncameracontroller/rollaroundtarget%28__%29.md)
- [rotateByX:Y:](scncameracontroller/rotateby%28x_y_%29.md)
- [stopInertia](scncameracontroller/stopinertia%28%29.md)
- [translateInCameraSpaceByX:Y:Z:](scncameracontroller/translateincameraspaceby%28x_y_z_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managing Camera Controls

- [allowsCameraControl](scnview/allowscameracontrol.md): A Boolean value that determines whether the user can manipulate the current point of view that is used to render the scene.
- [cameraControlConfiguration](scnview/cameracontrolconfiguration.md): The current configuration for the camera controller’s event-handling behavior.
- [SCNCameraControlConfiguration](scncameracontrolconfiguration.md): Properties affecting the behavior of a camera controller.
- [defaultCameraController](scnview/defaultcameracontroller.md)
