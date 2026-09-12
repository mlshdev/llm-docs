> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/prefershomeindicatorautohidden](https://developer.apple.com/documentation/uikit/uiviewcontroller/prefershomeindicatorautohidden)

# prefersHomeIndicatorAutoHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.

## Declaration

```swift
var prefersHomeIndicatorAutoHidden: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your view controller lets the system determine when to hide the indicator, or [false](https://developer.apple.com/documentation/swift/false) if you want the indicator to show at all times. The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Override this method to signal your preference for displaying the visual indicator. The system takes your preference into account, but returning [true](https://developer.apple.com/documentation/swift/true) is no guarantee that the indicator will be hidden.

For information on allowing app-defined gestures to take precedence over system gestures for certain screen edges, see [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md).

## See Also

### Coordinating with system gestures

- [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md): The screen edges for which you want your gestures to take precedence over the system gestures.
- [childForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures()](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [childForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md): Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.
- [setNeedsUpdateOfHomeIndicatorAutoHidden()](setneedsupdateofhomeindicatorautohidden%28%29.md): Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.

# prefersHomeIndicatorAutoHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL prefersHomeIndicatorAutoHidden;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your view controller lets the system determine when to hide the indicator, or [false](https://developer.apple.com/documentation/swift/false) if you want the indicator to show at all times. The default implementation of this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Override this method to signal your preference for displaying the visual indicator. The system takes your preference into account, but returning [true](https://developer.apple.com/documentation/swift/true) is no guarantee that the indicator will be hidden.

For information on allowing app-defined gestures to take precedence over system gestures for certain screen edges, see [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md).

## See Also

### Coordinating with system gestures

- [preferredScreenEdgesDeferringSystemGestures](preferredscreenedgesdeferringsystemgestures.md): The screen edges for which you want your gestures to take precedence over the system gestures.
- [childViewControllerForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [childViewControllerForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md): Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.
- [setNeedsUpdateOfHomeIndicatorAutoHidden](setneedsupdateofhomeindicatorautohidden%28%29.md): Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.
