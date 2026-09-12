> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferredinterfaceorientationforpresentation](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredinterfaceorientationforpresentation)

# preferredInterfaceOrientationForPresentation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface orientation to use when presenting the view controller.

## Declaration

```swift
var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation { get }
```

<a id="return-value"></a>

## Return Value

The interface orientation with which to present the view controller.

<a id="Discussion"></a>

## Discussion

The system calls this method when presenting the view controller full screen. When your view controller supports two or more orientations but the content appears best in one of those orientations, override this method and return the preferred orientation.

If your view controller implements this method, your view controller’s view is shown in the preferred orientation (although it can later be rotated to another supported rotation). If you do not implement this method, the system presents the view controller using the current orientation of the status bar.

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [setNeedsUpdateOfSupportedInterfaceOrientations()](setneedsupdateofsupportedinterfaceorientations%28%29.md): Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.
- [prefersInterfaceOrientationLocked](prefersinterfaceorientationlocked.md): A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.
- [setNeedsUpdateOfPrefersInterfaceOrientationLocked()](setneedsupdateofprefersinterfaceorientationlocked%28%29.md): Indicates that the view controller changed the interface orientation lock preference.
- [childForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.

# preferredInterfaceOrientationForPresentation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The interface orientation to use when presenting the view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UIInterfaceOrientation preferredInterfaceOrientationForPresentation;
```

<a id="return-value"></a>

## Return Value

The interface orientation with which to present the view controller.

<a id="Discussion"></a>

## Discussion

The system calls this method when presenting the view controller full screen. When your view controller supports two or more orientations but the content appears best in one of those orientations, override this method and return the preferred orientation.

If your view controller implements this method, your view controller’s view is shown in the preferred orientation (although it can later be rotated to another supported rotation). If you do not implement this method, the system presents the view controller using the current orientation of the status bar.

## See Also

### Configuring the view rotation settings

- [supportedInterfaceOrientations](supportedinterfaceorientations.md): The interface orientations that the view controller supports.
- [setNeedsUpdateOfSupportedInterfaceOrientations](setneedsupdateofsupportedinterfaceorientations%28%29.md): Notifies the view controller about a change in supported interface orientations or preferred interface orientation for presentation.
- [prefersInterfaceOrientationLocked](prefersinterfaceorientationlocked.md): A Boolean value that indicates whether the view controller prefers to lock the scene’s interface orientation when the scene is visible.
- [setNeedsUpdateOfPrefersInterfaceOrientationLocked](setneedsupdateofprefersinterfaceorientationlocked%28%29.md): Indicates that the view controller changed the interface orientation lock preference.
- [childViewControllerForInterfaceOrientationLock](childforinterfaceorientationlock.md): A child view controller to query for the interface orientation lock preference.
