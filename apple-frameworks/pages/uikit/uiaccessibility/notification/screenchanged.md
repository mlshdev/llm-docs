> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/notification/screenchanged](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/screenchanged)

# screenChanged (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

A notification that an app posts when a new view appears that occupies a major portion of the screen.

## Declaration

```swift
nonisolated static let screenChanged: UIAccessibility.Notification
```

<a id="Discussion"></a>

## Discussion

Post this notification using the [post(notification:argument:)](../post%28notification_argument_%29.md) function. Optionally, include a parameter that contains the accessibility element for VoiceOver to move to after processing the notification.

## See Also

### UI changes

- [layoutChanged](layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [pageScrolled](pagescrolled.md): A notification that an app posts when a scroll action completes.
- [switchControlStatusDidChangeNotification](../switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [elementFocusedNotification](../elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [reduceTransparencyStatusDidChangeNotification](../reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [buttonShapesEnabledStatusDidChangeNotification](../buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.

# UIAccessibilityScreenChangedNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

A notification that an app posts when a new view appears that occupies a major portion of the screen.

## Declaration

```objectivec
extern const UIAccessibilityNotifications UIAccessibilityScreenChangedNotification;
```

<a id="Discussion"></a>

## Discussion

Post this notification using the [UIAccessibilityPostNotification](../post%28notification_argument_%29.md) function. Optionally, include a parameter that contains the accessibility element for VoiceOver to move to after processing the notification.

## See Also

### UI changes

- [UIAccessibilityLayoutChangedNotification](layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [UIAccessibilityPageScrolledNotification](pagescrolled.md): A notification that an app posts when a scroll action completes.
- [UIAccessibilitySwitchControlStatusDidChangeNotification](../switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [UIAccessibilityElementFocusedNotification](../elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [UIAccessibilityReduceTransparencyStatusDidChangeNotification](../reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [UIAccessibilityButtonShapesEnabledStatusDidChangeNotification](../buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.
