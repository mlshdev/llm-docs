> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsupdateofsupportedinterfaceorientations()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsupdateofsupportedinterfaceorientations())

# setNeedsUpdateOfSupportedInterfaceOrientations() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.

## Declaration

```swift
func setNeedsUpdateOfSupportedInterfaceOrientations()
```

<a id="Discussion"></a>

## Discussion

By default, this method animates any changes to orientation. To perform a nonanimated update, call this method from [performWithoutAnimation(\_:)](../uiview/performwithoutanimation%28__%29.md).

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [preferredInterfaceOrientationForPresentation](preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.
- [prefersInterfaceOrientationLocked](prefersinterfaceorientationlocked.md): A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.
- [setNeedsUpdateOfPrefersInterfaceOrientationLocked()](setneedsupdateofprefersinterfaceorientationlocked%28%29.md): Indicates that the view controller changed the interface orientation lock preference.
- [childForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.

# setNeedsUpdateOfSupportedInterfaceOrientations (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.

## Declaration

```objectivec
- (void) setNeedsUpdateOfSupportedInterfaceOrientations;
```

<a id="Discussion"></a>

## Discussion

By default, this method animates any changes to orientation. To perform a nonanimated update, call this method from [performWithoutAnimation:](../uiview/performwithoutanimation%28__%29.md).

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [preferredInterfaceOrientationForPresentation](preferredinterfaceorientationforpresentation.md): The interface orientation to use when presenting the view controller.
- [prefersInterfaceOrientationLocked](prefersinterfaceorientationlocked.md): A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.
- [setNeedsUpdateOfPrefersInterfaceOrientationLocked](setneedsupdateofprefersinterfaceorientationlocked%28%29.md): Indicates that the view controller changed the interface orientation lock preference.
- [childViewControllerForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.
