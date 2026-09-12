> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/willpopupnotification](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/willpopupnotification)

# willPopUpNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

This notification is posted just before a pop-up menu is attached to its window frame.

## Declaration

```swift
class let willPopUpNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

You can use this notification to lazily construct your part’s menus, thus preventing unnecessary calculations until they are needed. The notification object can be either a pop-up button or its enclosed pop-up button cell. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSPopUpButtonCell.WillPopUpMessage](willpopupmessage.md).

# NSPopUpButtonCellWillPopUpNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

This notification is posted just before a pop-up menu is attached to its window frame.

## Declaration

```objectivec
extern NSNotificationName NSPopUpButtonCellWillPopUpNotification;
```

<a id="Discussion"></a>

## Discussion

You can use this notification to lazily construct your part’s menus, thus preventing unnecessary calculations until they are needed. The notification object can be either a pop-up button or its enclosed pop-up button cell. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSPopUpButtonCell.WillPopUpMessage](willpopupmessage.md).
