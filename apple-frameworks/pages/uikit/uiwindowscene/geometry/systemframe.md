> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/geometry/systemframe](https://developer.apple.com/documentation/uikit/uiwindowscene/geometry/systemframe)

# systemFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+

The current frame of the scene, in system coordinates.

## Declaration

```swift
var systemFrame: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the current frame of the scene in the system coordinate space, where an origin of `(0, 0)` corresponds to the top-left corner of the main display.

## See Also

### Accessing scene geometry

- [coordinateSpace](coordinatespace.md): The coordinate space of the scene
- [interfaceOrientation](interfaceorientation.md): The current interface orientation for the scene.
- [isInterfaceOrientationLocked](isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.

# systemFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+

The current frame of the scene, in system coordinates.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect systemFrame;
```

<a id="Discussion"></a>

## Discussion

This property represents the current frame of the scene in the system coordinate space, where an origin of `(0, 0)` corresponds to the top-left corner of the main display.

## See Also

### Accessing scene geometry

- [coordinateSpace](coordinatespace.md): The coordinate space of the scene
- [interfaceOrientation](interfaceorientation.md): The current interface orientation for the scene.
- [interfaceOrientationLocked](isinterfaceorientationlocked.md): If the scene’s interface orientation is locked and preventing changes. To express a preference for this value, override `UIViewController`’s `prefersInterfaceOrientationLocked`.
