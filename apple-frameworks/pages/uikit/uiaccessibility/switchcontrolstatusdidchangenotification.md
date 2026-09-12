> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/switchcontrolstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/switchcontrolstatusdidchangenotification)

# switchControlStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Switch Control setting changes.

## Declaration

```swift
nonisolated static let switchControlStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### UI changes

- [screenChanged](notification/screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [layoutChanged](notification/layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [pageScrolled](notification/pagescrolled.md): A notification that an app posts when a scroll action completes.
- [elementFocusedNotification](elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [reduceTransparencyStatusDidChangeNotification](reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [buttonShapesEnabledStatusDidChangeNotification](buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.

# UIAccessibilitySwitchControlStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Switch Control setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilitySwitchControlStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### UI changes

- [UIAccessibilityScreenChangedNotification](notification/screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [UIAccessibilityLayoutChangedNotification](notification/layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [UIAccessibilityPageScrolledNotification](notification/pagescrolled.md): A notification that an app posts when a scroll action completes.
- [UIAccessibilityElementFocusedNotification](elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [UIAccessibilityReduceTransparencyStatusDidChangeNotification](reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [UIAccessibilityButtonShapesEnabledStatusDidChangeNotification](buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.
