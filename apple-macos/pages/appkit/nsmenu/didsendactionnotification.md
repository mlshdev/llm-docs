> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/didsendactionnotification](https://developer.apple.com/documentation/appkit/nsmenu/didsendactionnotification)

# didSendActionNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted just after the application dispatches a menu item’s action method to the menu item’s target.

## Declaration

```swift
class let didSendActionNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the instance of `NSMenu` containing the chosen menu item. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"MenuItem"` | The menu item that was chosen. |

To observe this notification using Swift concurrency, use [NSMenu.DidSendActionMessage](didsendactionmessage.md).

## See Also

### Notifications

- [didAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [didChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [didBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [didEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [willSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

# NSMenuDidSendActionNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted just after the application dispatches a menu item’s action method to the menu item’s target.

## Declaration

```objectivec
extern NSNotificationName NSMenuDidSendActionNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the instance of `NSMenu` containing the chosen menu item. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"MenuItem"` | The menu item that was chosen. |

To observe this notification using Swift concurrency, use [NSMenu.DidSendActionMessage](didsendactionmessage.md).

## See Also

### Notifications

- [NSMenuDidAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [NSMenuDidBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [NSMenuDidEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [NSMenuWillSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
