> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/preferredscreenedgesdeferringsystemgestures](https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredscreenedgesdeferringsystemgestures)

# preferredScreenEdgesDeferringSystemGestures (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The screen edges for which you want your gestures to take precedence over the system gestures.

## Declaration

```swift
var preferredScreenEdgesDeferringSystemGestures: UIRectEdge { get }
```

<a id="Discussion"></a>

## Discussion

Normally, the screen-edge gestures defined by the system take precedence over any gesture recognizers that you define. The system uses its gestures to implement system-level behaviors, such as to display Control Center.

Whenever possible, you should allow the system gestures to take precedence. However, immersive apps can use this property to allow app-defined gestures to take precedence over the system gestures. You do that by overriding this property and returning the screen edges for which your gestures should take precedence.

If you change the edges preferred by your view controller, update the value of this property and call the [setNeedsUpdateOfScreenEdgesDeferringSystemGestures()](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md) method to notify the system that the edges have changed.

For information on showing and hiding the visual indicator for returning to the Home Screen, see [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md).

## See Also

### Coordinating with system gestures

- [childForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures()](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md): A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.
- [childForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md): Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.
- [setNeedsUpdateOfHomeIndicatorAutoHidden()](setneedsupdateofhomeindicatorautohidden%28%29.md): Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.

# preferredScreenEdgesDeferringSystemGestures (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The screen edges for which you want your gestures to take precedence over the system gestures.

## Declaration

```objectivec
@property (nonatomic, readonly) UIRectEdge preferredScreenEdgesDeferringSystemGestures;
```

<a id="Discussion"></a>

## Discussion

Normally, the screen-edge gestures defined by the system take precedence over any gesture recognizers that you define. The system uses its gestures to implement system-level behaviors, such as to display Control Center.

Whenever possible, you should allow the system gestures to take precedence. However, immersive apps can use this property to allow app-defined gestures to take precedence over the system gestures. You do that by overriding this property and returning the screen edges for which your gestures should take precedence.

If you change the edges preferred by your view controller, update the value of this property and call the [setNeedsUpdateOfScreenEdgesDeferringSystemGestures](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md) method to notify the system that the edges have changed.

For information on showing and hiding the visual indicator for returning to the Home Screen, see [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md).

## See Also

### Coordinating with system gestures

- [childViewControllerForScreenEdgesDeferringSystemGestures](childforscreenedgesdeferringsystemgestures.md): Returns the child view controller that should be queried to see if its gestures should take precedence.
- [setNeedsUpdateOfScreenEdgesDeferringSystemGestures](setneedsupdateofscreenedgesdeferringsystemgestures%28%29.md): Notifies the system of changes to the screen edges that defer system gestures.
- [prefersHomeIndicatorAutoHidden](prefershomeindicatorautohidden.md): A Boolean that indicates whether the system is allowed to hide the visual indicator for returning to the Home Screen.
- [childViewControllerForHomeIndicatorAutoHidden](childforhomeindicatorautohidden.md): Returns the child view controller that is consulted about its preference for displaying a visual indicator for returning to the Home screen.
- [setNeedsUpdateOfHomeIndicatorAutoHidden](setneedsupdateofhomeindicatorautohidden%28%29.md): Notifies UIKit that your view controller updated its preference regarding the visual indicator for returning to the Home screen.
