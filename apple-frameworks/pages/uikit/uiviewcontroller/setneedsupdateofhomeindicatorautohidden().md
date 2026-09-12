> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsupdateofhomeindicatorautohidden()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsupdateofhomeindicatorautohidden())

# setNeedsUpdateOfHomeIndicatorAutoHidden() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.

## Declaration

```swift
func setNeedsUpdateOfHomeIndicatorAutoHidden()
```

<a id="Discussion"></a>

## Discussion

When you change the value returned by your view controller’s [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md) or [childForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md) method, call this method to let UIKit know that it should call those methods again.

## See Also

### Coordinating with system gestures

- [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md): The screen edges for which you want your gestures to take precedence over the system gestures.
- [childForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures()](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md): A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.
- [childForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md): Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.

# setNeedsUpdateOfHomeIndicatorAutoHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.

## Declaration

```objectivec
- (void) setNeedsUpdateOfHomeIndicatorAutoHidden;
```

<a id="Discussion"></a>

## Discussion

When you change the value returned by your view controller’s [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md) or [childViewControllerForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md) method, call this method to let UIKit know that it should call those methods again.

## See Also

### Coordinating with system gestures

- [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md): The screen edges for which you want your gestures to take precedence over the system gestures.
- [childViewControllerForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md): A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.
- [childViewControllerForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md): Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.
