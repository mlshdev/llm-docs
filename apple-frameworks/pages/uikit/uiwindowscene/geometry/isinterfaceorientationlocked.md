> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometry/isinterfaceorientationlocked](https://developer.apple.com/documentation/uikit/uiwindowscene/geometry/isinterfaceorientationlocked)

# isInterfaceOrientationLocked (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override  `UIViewController`’s `prefersInterfaceOrientationLocked`.

## Declaration

```swift
var isInterfaceOrientationLocked: Bool { get }
```

## See Also

### Accessing scene geometry

- [systemFrame](systemframe.md): The current frame of the scene, in system coordinates.
- [coordinateSpace](coordinatespace.md): The coordinate space of the scene
- [interfaceOrientation](interfaceorientation.md): The current interface orientation for the scene.

# interfaceOrientationLocked (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override  `UIViewController`’s `prefersInterfaceOrientationLocked`.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInterfaceOrientationLocked) BOOL interfaceOrientationLocked;
```

## See Also

### Accessing scene geometry

- [systemFrame](systemframe.md): The current frame of the scene, in system coordinates.
- [coordinateSpace](coordinatespace.md): The coordinate space of the scene
- [interfaceOrientation](interfaceorientation.md): The current interface orientation for the scene.
