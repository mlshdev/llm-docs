> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/elementfocusednotification](https://developer.apple.com/documentation/uikit/uiaccessibility/elementfocusednotification)

# elementFocusedNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that UIKit posts when an assistive app focuses on an accessibility element.

## Declaration

```swift
nonisolated static let elementFocusedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Retrieve the [focusedElementUserInfoKey](focusedelementuserinfokey.md) key from the [userInfo](../../foundation/nsnotification/userinfo.md) dictionary to get the identity of the focused accessibility element.

## See Also

### UI changes

- [screenChanged](notification/screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [layoutChanged](notification/layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [pageScrolled](notification/pagescrolled.md): A notification that an app posts when a scroll action completes.
- [switchControlStatusDidChangeNotification](switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [reduceTransparencyStatusDidChangeNotification](reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [buttonShapesEnabledStatusDidChangeNotification](buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.

# UIAccessibilityElementFocusedNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that UIKit posts when an assistive app focuses on an accessibility element.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityElementFocusedNotification;
```

<a id="Discussion"></a>

## Discussion

Retrieve the [UIAccessibilityFocusedElementKey](focusedelementuserinfokey.md) key from the [userInfo](../../foundation/nsnotification/userinfo.md) dictionary to get the identity of the focused accessibility element.

## See Also

### UI changes

- [UIAccessibilityScreenChangedNotification](notification/screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [UIAccessibilityLayoutChangedNotification](notification/layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [UIAccessibilityPageScrolledNotification](notification/pagescrolled.md): A notification that an app posts when a scroll action completes.
- [UIAccessibilitySwitchControlStatusDidChangeNotification](switchcontrolstatusdidchangenotification.md): A notification that UIKit posts when the system’s Switch Control setting changes.
- [UIAccessibilityReduceTransparencyStatusDidChangeNotification](reducetransparencystatusdidchangenotification.md): A notification that UIKit posts when the system’s Reduce Transparency setting changes.
- [UIAccessibilityButtonShapesEnabledStatusDidChangeNotification](buttonshapesenabledstatusdidchangenotification.md): Deprecated. A notification that UIKit posts when the system’s Button Shapes setting changes.
