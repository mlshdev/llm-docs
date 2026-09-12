> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/didbegintrackingnotification](https://developer.apple.com/documentation/appkit/nsmenu/didbegintrackingnotification)

# didBeginTrackingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when menu tracking begins.

## Declaration

```swift
class let didBeginTrackingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the main menu bar (`[NSApp mainMenu]`) or the root menu of a popup button. This notification does not contain a `userInfo` dictionary.

> **Note**

>  This notification is available in versions 10.3 and 10.4 of macOS, however it is not publicly declared so you must declare the name constant as an `extern`, for example:
>
> ```objc
> extern NSString *NSMenuDidBeginTrackingNotification;
> ```

To observe this notification using Swift concurrency, use [NSMenu.DidBeginTrackingMessage](didbegintrackingmessage.md).

## See Also

### Notifications

- [didAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [didChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [didEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [didSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [willSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.

# NSMenuDidBeginTrackingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when menu tracking begins.

## Declaration

```objectivec
extern NSNotificationName NSMenuDidBeginTrackingNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the main menu bar (`[NSApp mainMenu]`) or the root menu of a popup button. This notification does not contain a `userInfo` dictionary.

> **Note**

>  This notification is available in versions 10.3 and 10.4 of macOS, however it is not publicly declared so you must declare the name constant as an `extern`, for example:
>
> ```objc
> extern NSString *NSMenuDidBeginTrackingNotification;
> ```

To observe this notification using Swift concurrency, use [NSMenu.DidBeginTrackingMessage](didbegintrackingmessage.md).

## See Also

### Notifications

- [NSMenuDidAddItemNotification](didadditemnotification.md): Posted after a menu item is added to the menu.
- [NSMenuDidChangeItemNotification](didchangeitemnotification.md): Posted after a menu item in the menu changes appearance.
- [NSMenuDidEndTrackingNotification](didendtrackingnotification.md): Posted when menu tracking ends, even if no action is sent.
- [NSMenuDidRemoveItemNotification](didremoveitemnotification.md): Posted after a menu item is removed from the menu.
- [NSMenuDidSendActionNotification](didsendactionnotification.md): Posted just after the application dispatches a menu item’s action method to the menu item’s target.
- [NSMenuWillSendActionNotification](willsendactionnotification.md): Posted just before the application dispatches a menu item’s action method to the menu item’s target.
