> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometry/coordinatespace](https://developer.apple.com/documentation/uikit/uiwindowscene/geometry/coordinatespace)

# coordinateSpace (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The coordinate space of the scene

## Declaration

```swift
var coordinateSpace: any UICoordinateSpace { get }
```

## See Also

### Accessing scene geometry

- [systemFrame](systemframe.md): The current frame of the scene, in system coordinates.
- [interfaceOrientation](interfaceorientation.md): The current interface orientation for the scene.
- [isInterfaceOrientationLocked](isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.

# coordinateSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The coordinate space of the scene

## Declaration

```objectivec
@property (nonatomic, readonly) id<UICoordinateSpace> coordinateSpace;
```

## See Also

### Accessing scene geometry

- [systemFrame](systemframe.md): The current frame of the scene, in system coordinates.
- [interfaceOrientation](interfaceorientation.md): The current interface orientation for the scene.
- [interfaceOrientationLocked](isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.
