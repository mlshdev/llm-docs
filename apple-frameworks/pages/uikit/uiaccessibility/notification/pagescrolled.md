> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/notification/pagescrolled](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/pagescrolled)

# pageScrolled (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that an app posts when a scroll action completes.

## Declaration

```swift
nonisolated static let pageScrolled: UIAccessibility.Notification
```

<a id="Discussion"></a>

## Discussion

This notification includes a parameter that is an [NSString](../../../foundation/nsstring.md) object that contains a description of the new scroll position. An assistive app outputs the description string in the parameter.

Use this notification to provide custom information about the contents of the screen after a user performs a VoiceOver scroll gesture. For example, a tab-based app might provide a string like `Tab 3 of 5`, or an app that displays information in pages might provide a string like `Page 19 of 27`.

When an assistive app repeatedly receives the same scroll position string, it indicates to users that scrolling can’t continue due to a border or boundary.

Post this notification after the [accessibilityScroll(\_:)](../../../objectivec/nsobject-swift.class/accessibilityscroll%28__%29.md) method using the [post(notification:argument:)](../post%28notification_argument_%29.md) function.

## See Also

### UI changes

- [screenChanged](screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [layoutChanged](layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [switchControlStatusDidChangeNotification](../switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [elementFocusedNotification](../elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [reduceTransparencyStatusDidChangeNotification](../reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [buttonShapesEnabledStatusDidChangeNotification](../buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.

# UIAccessibilityPageScrolledNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that an app posts when a scroll action completes.

## Declaration

```objectivec
extern const UIAccessibilityNotifications UIAccessibilityPageScrolledNotification;
```

<a id="Discussion"></a>

## Discussion

This notification includes a parameter that is an [NSString](../../../foundation/nsstring.md) object that contains a description of the new scroll position. An assistive app outputs the description string in the parameter.

Use this notification to provide custom information about the contents of the screen after a user performs a VoiceOver scroll gesture. For example, a tab-based app might provide a string like `Tab 3 of 5`, or an app that displays information in pages might provide a string like `Page 19 of 27`.

When an assistive app repeatedly receives the same scroll position string, it indicates to users that scrolling can’t continue due to a border or boundary.

Post this notification after the [accessibilityScroll:](../../../objectivec/nsobject-swift.class/accessibilityscroll%28__%29.md) method using the [UIAccessibilityPostNotification](../post%28notification_argument_%29.md) function.

## See Also

### UI changes

- [UIAccessibilityScreenChangedNotification](screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [UIAccessibilityLayoutChangedNotification](layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [UIAccessibilitySwitchControlStatusDidChangeNotification](../switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [UIAccessibilityElementFocusedNotification](../elementfocusednotification.md): A notification that UIKit posts when an assistive app focuses on an accessibility element.
- [UIAccessibilityReduceTransparencyStatusDidChangeNotification](../reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [UIAccessibilityButtonShapesEnabledStatusDidChangeNotification](../buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.
