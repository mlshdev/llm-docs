> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/didendtrackingnotification](https://developer.apple.com/documentation/appkit/nsmenu/didendtrackingnotification)

# didEndTrackingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when menu tracking ends, even if no action is sent.

## Declaration

```swift
class let didEndTrackingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the main menu bar (`[NSApp mainMenu]`) or the root menu of a popup button. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSMenu.DidEndTrackingMessage](didendtrackingmessage.md).

## See Also

### Notifications

- [didAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [didChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [didBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [didSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [willSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

# NSMenuDidEndTrackingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when menu tracking ends, even if no action is sent.

## Declaration

```objectivec
extern NSNotificationName NSMenuDidEndTrackingNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the main menu bar (`[NSApp mainMenu]`) or the root menu of a popup button. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSMenu.DidEndTrackingMessage](didendtrackingmessage.md).

## See Also

### Notifications

- [NSMenuDidAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [NSMenuDidBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [NSMenuDidRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [NSMenuDidSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [NSMenuWillSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
