> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspopupbutton/willpopupnotification

# willPopUpNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when an `NSPopUpButton` object receives a mouse-down event—that is, when the user is about to select an item from the menu.

## Declaration

```swift
class let willPopUpNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the selected `NSPopUpButton` object. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSPopUpButton.WillPopUpMessage](willpopupmessage.md).

# NSPopUpButtonWillPopUpNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when an `NSPopUpButton` object receives a mouse-down event—that is, when the user is about to select an item from the menu.

## Declaration

```objectivec
extern NSNotificationName NSPopUpButtonWillPopUpNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the selected `NSPopUpButton` object. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSPopUpButton.WillPopUpMessage](willpopupmessage.md).
