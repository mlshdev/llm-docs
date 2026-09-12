> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/didchangescreenprofilenotification](https://developer.apple.com/documentation/appkit/nswindow/didchangescreenprofilenotification)

# didChangeScreenProfileNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that the screen containing the window changed.

## Declaration

```swift
class let didChangeScreenProfileNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

NSWindow sends this notification only if the value of [displaysWhenScreenProfileChanges](displayswhenscreenprofilechanges.md) is [true](https://developer.apple.com/documentation/swift/true), and in the following situations:

- When most of the window moves to a screen whose profile is different from the previous screen
- When the ColorSync profile for the current screen changes

The notification object is the `NSWindow` object whose profile changed. This notification doesn’t contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSWindow.DidChangeScreenProfileMessage](didchangescreenprofilemessage.md).

## See Also

### Notifications

- [didBecomeKeyNotification](didbecomekeynotification.md): A notification that the window object became the key window.
- [didBecomeMainNotification](didbecomemainnotification.md): A notification that the window object became the main window.
- [didChangeScreenNotification](didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [didDeminiaturizeNotification](diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [didEndSheetNotification](didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [didEndLiveResizeNotification](didendliveresizenotification.md): A notification that the user resized the window object.
- [didExposeNotification](didexposenotification.md): A notification that a window exposed a portion of its nonretained content.
- [didMiniaturizeNotification](didminiaturizenotification.md): A notification that the window object minimized.
- [didMoveNotification](didmovenotification.md): A notification that the window object moved.
- [didResignKeyNotification](didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [didResignMainNotification](didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [didResizeNotification](didresizenotification.md): A notification that the window object size changed.
- [didUpdateNotification](didupdatenotification.md): A notification that the window object received an update message.
- [willBeginSheetNotification](willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [willCloseNotification](willclosenotification.md): A notification that the window object is about to close.

# NSWindowDidChangeScreenProfileNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that the screen containing the window changed.

## Declaration

```objectivec
extern NSNotificationName NSWindowDidChangeScreenProfileNotification;
```

<a id="Discussion"></a>

## Discussion

NSWindow sends this notification only if the value of [displaysWhenScreenProfileChanges](displayswhenscreenprofilechanges.md) is [true](https://developer.apple.com/documentation/swift/true), and in the following situations:

- When most of the window moves to a screen whose profile is different from the previous screen
- When the ColorSync profile for the current screen changes

The notification object is the `NSWindow` object whose profile changed. This notification doesn’t contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSWindow.DidChangeScreenProfileMessage](didchangescreenprofilemessage.md).

## See Also

### Notifications

- [NSWindowDidBecomeKeyNotification](didbecomekeynotification.md): A notification that the window object became the key window.
- [NSWindowDidBecomeMainNotification](didbecomemainnotification.md): A notification that the window object became the main window.
- [NSWindowDidChangeScreenNotification](didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [NSWindowDidDeminiaturizeNotification](diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [NSWindowDidEndSheetNotification](didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [NSWindowDidEndLiveResizeNotification](didendliveresizenotification.md): A notification that the user resized the window object.
- [NSWindowDidExposeNotification](didexposenotification.md): A notification that a window exposed a portion of its nonretained content.
- [NSWindowDidMiniaturizeNotification](didminiaturizenotification.md): A notification that the window object minimized.
- [NSWindowDidMoveNotification](didmovenotification.md): A notification that the window object moved.
- [NSWindowDidResignKeyNotification](didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [NSWindowDidResignMainNotification](didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [NSWindowDidResizeNotification](didresizenotification.md): A notification that the window object size changed.
- [NSWindowDidUpdateNotification](didupdatenotification.md): A notification that the window object received an update message.
- [NSWindowWillBeginSheetNotification](willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [NSWindowWillCloseNotification](willclosenotification.md): A notification that the window object is about to close.
