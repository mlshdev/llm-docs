> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsupdateofprefersinterfaceorientationlocked()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsupdateofprefersinterfaceorientationlocked())

# setNeedsUpdateOfPrefersInterfaceOrientationLocked() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Indicates that the view controller changed the interface orientation lock preference.

## Declaration

```swift
func setNeedsUpdateOfPrefersInterfaceOrientationLocked()
```

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [preferredInterfaceOrientationForPresentation](preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.
- [setNeedsUpdateOfSupportedInterfaceOrientations()](setneedsupdateofsupportedinterfaceorientations%28%29.md): Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.
- [prefersInterfaceOrientationLocked](prefersinterfaceorientationlocked.md): A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.
- [childForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.

# setNeedsUpdateOfPrefersInterfaceOrientationLocked (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Indicates that the view controller changed the interface orientation lock preference.

## Declaration

```objectivec
- (void) setNeedsUpdateOfPrefersInterfaceOrientationLocked;
```

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [preferredInterfaceOrientationForPresentation](preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.
- [setNeedsUpdateOfSupportedInterfaceOrientations](setneedsupdateofsupportedinterfaceorientations%28%29.md): Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.
- [prefersInterfaceOrientationLocked](prefersinterfaceorientationlocked.md): A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.
- [childViewControllerForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.
