> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/willsendactionnotification](https://developer.apple.com/documentation/appkit/nsmenu/willsendactionnotification)

# willSendActionNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted just before the application dispatches a menu item’s action method to the menu item’s target.

## Declaration

```swift
class let willSendActionNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the instance of `NSMenu` containing the chosen menu item. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"MenuItem"` | The menu item that was chosen. |

To observe this notification using Swift concurrency, use [NSMenu.WillSendActionMessage](willsendactionmessage.md).

## See Also

### Notifications

- [didAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [didChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [didBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [didEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [didSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.

# NSMenuWillSendActionNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted just before the application dispatches a menu item’s action method to the menu item’s target.

## Declaration

```objectivec
extern NSNotificationName NSMenuWillSendActionNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the instance of `NSMenu` containing the chosen menu item. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"MenuItem"` | The menu item that was chosen. |

To observe this notification using Swift concurrency, use [NSMenu.WillSendActionMessage](willsendactionmessage.md).

## See Also

### Notifications

- [NSMenuDidAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [NSMenuDidBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [NSMenuDidEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [NSMenuDidSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
