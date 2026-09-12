> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/didremoveitemnotification](https://developer.apple.com/documentation/appkit/nsmenu/didremoveitemnotification)

# didRemoveItemNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted after a menu item is removed from the menu.

## Declaration

```swift
class let didRemoveItemNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the instance of `NSMenu` that just removed the menu item. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"NSMenuItemIndex"` | An `NSNumber` object containing the integer index of the menu item that was removed. Note that this index may no longer be valid and in any event no longer points to the menu item that was removed. |

To observe this notification using Swift concurrency, use [NSMenu.DidRemoveItemMessage](didremoveitemmessage.md).

## See Also

### Notifications

- [didAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [didChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [didBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [didEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [didSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [willSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

# NSMenuDidRemoveItemNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted after a menu item is removed from the menu.

## Declaration

```objectivec
extern NSNotificationName NSMenuDidRemoveItemNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the instance of `NSMenu` that just removed the menu item. The `userInfo` dictionary contains the following information.

| Key | Value |
| --- | --- |
| `@"NSMenuItemIndex"` | An `NSNumber` object containing the integer index of the menu item that was removed. Note that this index may no longer be valid and in any event no longer points to the menu item that was removed. |

To observe this notification using Swift concurrency, use [NSMenu.DidRemoveItemMessage](didremoveitemmessage.md).

## See Also

### Notifications

- [NSMenuDidAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [NSMenuDidBeginTrackingNotification](didbegintrackingnotification.md): Posted when menu tracking begins.
- [NSMenuDidEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [NSMenuWillSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
