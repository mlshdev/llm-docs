> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/didchangeitemnotification](https://developer.apple.com/documentation/appkit/nsmenu/didchangeitemnotification)

# didChangeItemNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted after a menu item in the menu changes appearance.

## Declaration

```swift
class let didChangeItemNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Changes include enabling/disabling, changes in state, and changes to title. The notification object is the instance of `NSMenu` with the menu item that changed. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"NSMenuItemIndex"` | An `NSNumber` object containing the integer index of the menu item that changed. |

To observe this notification using Swift concurrency, use [NSMenu.DidChangeItemMessage](didchangeitemmessage.md).

## See Also

### Notifications

- [didAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [didBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [didEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [didSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [willSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

# NSMenuDidChangeItemNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted after a menu item in the menu changes appearance.

## Declaration

```objectivec
extern NSNotificationName NSMenuDidChangeItemNotification;
```

<a id="Discussion"></a>

## Discussion

Changes include enabling/disabling, changes in state, and changes to title. The notification object is the instance of `NSMenu` with the menu item that changed. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"NSMenuItemIndex"` | An `NSNumber` object containing the integer index of the menu item that changed. |

To observe this notification using Swift concurrency, use [NSMenu.DidChangeItemMessage](didchangeitemmessage.md).

## See Also

### Notifications

- [NSMenuDidAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [NSMenuDidEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [NSMenuDidSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [NSMenuWillSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
