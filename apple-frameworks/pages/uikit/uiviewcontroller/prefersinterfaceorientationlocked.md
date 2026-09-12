> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/prefersinterfaceorientationlocked](https://developer.apple.com/documentation/uikit/uiviewcontroller/prefersinterfaceorientationlocked)

# prefersInterfaceOrientationLocked (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.

## Declaration

```swift
var prefersInterfaceOrientationLocked: Bool { get }
```

<a id="discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) to indicate the view controller’s preference to lock the scene’s interface orientation. Check `UIWindowScene.effectiveGeometry.isInterfaceOrientationLocked` for the current state of the interface orientation lock. The system will consider locking the interface orientation when these conditions are true:

- The scene is centered on the screen
- The scene is the same size as the screen
- The scene is not occluded by another scene

The system continuously monitors the state and when the app no longer satisfies the requirements, it disables the interface orientation lock.

If you change the value of `prefersInterfaceOrientationLocked`, call [setNeedsUpdateOfPrefersInterfaceOrientationLocked()](setneedsupdateofprefersinterfaceorientationlocked%28%29.md).

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [preferredInterfaceOrientationForPresentation](preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.
- [setNeedsUpdateOfSupportedInterfaceOrientations()](setneedsupdateofsupportedinterfaceorientations%28%29.md): Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.
- [setNeedsUpdateOfPrefersInterfaceOrientationLocked()](setneedsupdateofprefersinterfaceorientationlocked%28%29.md): Indicates that the view controller changed the interface orientation lock preference.
- [childForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.

# prefersInterfaceOrientationLocked (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL prefersInterfaceOrientationLocked;
```

<a id="discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). Set this property to [true](https://developer.apple.com/documentation/swift/true) to indicate the view controller’s preference to lock the scene’s interface orientation. Check `UIWindowScene.effectiveGeometry.isInterfaceOrientationLocked` for the current state of the interface orientation lock. The system will consider locking the interface orientation when these conditions are true:

- The scene is centered on the screen
- The scene is the same size as the screen
- The scene is not occluded by another scene

The system continuously monitors the state and when the app no longer satisfies the requirements, it disables the interface orientation lock.

If you change the value of `prefersInterfaceOrientationLocked`, call [setNeedsUpdateOfPrefersInterfaceOrientationLocked](setneedsupdateofprefersinterfaceorientationlocked%28%29.md).

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [preferredInterfaceOrientationForPresentation](preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.
- [setNeedsUpdateOfSupportedInterfaceOrientations](setneedsupdateofsupportedinterfaceorientations%28%29.md): Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.
- [setNeedsUpdateOfPrefersInterfaceOrientationLocked](setneedsupdateofprefersinterfaceorientationlocked%28%29.md): Indicates that the view controller changed the interface orientation lock preference.
- [childViewControllerForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.
