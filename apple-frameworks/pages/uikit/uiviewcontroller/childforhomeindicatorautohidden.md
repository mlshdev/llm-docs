> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/childforhomeindicatorautohidden](https://developer.apple.com/documentation/uikit/uiviewcontroller/childforhomeindicatorautohidden)

# childForHomeIndicatorAutoHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.

## Declaration

```swift
var childForHomeIndicatorAutoHidden: UIViewController? { get }
```

<a id="return-value"></a>

## Return Value

The child view controller to consult. The default implementation of this method returns `nil`.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

When implementing a container view controller, override this method if you want one your child view controllers to determine whether to display the visual indicator. If you do, the system calls the [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md) method of the returned view controller. If the method returns `nil`, the system calls the [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md) method of the current view controller.

## See Also

### Coordinating with system gestures

- [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md): The screen edges for which you want your gestures to take precedence over the system gestures.
- [childForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures()](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md): A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.
- [setNeedsUpdateOfHomeIndicatorAutoHidden()](setneedsupdateofhomeindicatorautohidden%28%29.md): Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.

# childViewControllerForHomeIndicatorAutoHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * childViewControllerForHomeIndicatorAutoHidden;
```

<a id="return-value"></a>

## Return Value

The child view controller to consult. The default implementation of this method returns `nil`.

## Mentioned In

- [Creating a custom container view controller](../creating-a-custom-container-view-controller.md)

<a id="Discussion"></a>

## Discussion

When implementing a container view controller, override this method if you want one your child view controllers to determine whether to display the visual indicator. If you do, the system calls the [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md) method of the returned view controller. If the method returns `nil`, the system calls the [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md) method of the current view controller.

## See Also

### Coordinating with system gestures

- [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md): The screen edges for which you want your gestures to take precedence over the system gestures.
- [childViewControllerForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md): A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.
- [setNeedsUpdateOfHomeIndicatorAutoHidden](setneedsupdateofhomeindicatorautohidden%28%29.md): Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.
