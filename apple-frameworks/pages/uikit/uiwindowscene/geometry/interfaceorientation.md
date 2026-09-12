> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometry/interfaceorientation](https://developer.apple.com/documentation/uikit/uiwindowscene/geometry/interfaceorientation)

# interfaceOrientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The current interface orientation for the scene.

## Declaration

```swift
var interfaceOrientation: UIInterfaceOrientation { get }
```

## See Also

### Accessing scene geometry

- [systemFrame](systemframe.md): The current frame of the scene, in system coordinates.
- [coordinateSpace](coordinatespace.md): The coordinate space of the scene
- [isInterfaceOrientationLocked](isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.

# interfaceOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The current interface orientation for the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) UIInterfaceOrientation interfaceOrientation;
```

## See Also

### Accessing scene geometry

- [systemFrame](systemframe.md): The current frame of the scene, in system coordinates.
- [coordinateSpace](coordinatespace.md): The coordinate space of the scene
- [interfaceOrientationLocked](isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.
