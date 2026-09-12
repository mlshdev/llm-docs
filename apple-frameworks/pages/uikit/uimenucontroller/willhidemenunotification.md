> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenucontroller/willhidemenunotification](https://developer.apple.com/documentation/uikit/uimenucontroller/willhidemenunotification)

# willHideMenuNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Posted by the menu controller just before it hides the menu.

> Use [UIEditMenuInteraction](../uieditmenuinteraction.md) instead.

## Declaration

```swift
nonisolated class let willHideMenuNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

There is no `userInfo` dictionary.

## See Also

### Notifications

- [willShowMenuNotification](willshowmenunotification.md): Deprecated. Posted by the menu controller just before it shows the menu.
- [didShowMenuNotification](didshowmenunotification.md): Deprecated. Posted by the menu controller just after it shows the menu.
- [didHideMenuNotification](didhidemenunotification.md): Deprecated. Posted by the menu controller just after it hides the menu.
- [menuFrameDidChangeNotification](menuframedidchangenotification.md): Deprecated. Posted when the frame of a visible menu changes.

# UIMenuControllerWillHideMenuNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Posted by the menu controller just before it hides the menu.

> Use [UIEditMenuInteraction](../uieditmenuinteraction.md) instead.

## Declaration

```objectivec
extern NSNotificationName const UIMenuControllerWillHideMenuNotification;
```

<a id="Discussion"></a>

## Discussion

There is no `userInfo` dictionary.

## See Also

### Notifications

- [UIMenuControllerWillShowMenuNotification](willshowmenunotification.md): Deprecated. Posted by the menu controller just before it shows the menu.
- [UIMenuControllerDidShowMenuNotification](didshowmenunotification.md): Deprecated. Posted by the menu controller just after it shows the menu.
- [UIMenuControllerDidHideMenuNotification](didhidemenunotification.md): Deprecated. Posted by the menu controller just after it hides the menu.
- [UIMenuControllerMenuFrameDidChangeNotification](menuframedidchangenotification.md): Deprecated. Posted when the frame of a visible menu changes.
