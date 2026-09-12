> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/didexposenotification](https://developer.apple.com/documentation/appkit/nswindow/didexposenotification)

# didExposeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that a window exposed a portion of its nonretained content.

## Declaration

```swift
class let didExposeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when a window moves in front of other windows or when other windows move from in front of it, exposing part of its content.

The notification object is the `NSWindow` object that has exposes its content. In the notification’s `userInfo` dictionary, the key `NSExposedRect` specifies an [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) object that contains the rectangle the window exposed.

To observe this notification using Swift concurrency, use [NSWindow.DidExposeMessage](didexposemessage.md).

## See Also

### Notifications

- [didBecomeKeyNotification](didbecomekeynotification.md): A notification that the window object became the key window.
- [didBecomeMainNotification](didbecomemainnotification.md): A notification that the window object became the main window.
- [didChangeScreenNotification](didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [didChangeScreenProfileNotification](didchangescreenprofilenotification.md): A notification that the screen containing the window changed.
- [didDeminiaturizeNotification](diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [didEndSheetNotification](didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [didEndLiveResizeNotification](didendliveresizenotification.md): A notification that the user resized the window object.
- [didMiniaturizeNotification](didminiaturizenotification.md): A notification that the window object minimized.
- [didMoveNotification](didmovenotification.md): A notification that the window object moved.
- [didResignKeyNotification](didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [didResignMainNotification](didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [didResizeNotification](didresizenotification.md): A notification that the window object size changed.
- [didUpdateNotification](didupdatenotification.md): A notification that the window object received an update message.
- [willBeginSheetNotification](willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [willCloseNotification](willclosenotification.md): A notification that the window object is about to close.

# NSWindowDidExposeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that a window exposed a portion of its nonretained content.

## Declaration

```objectivec
extern NSNotificationName NSWindowDidExposeNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when a window moves in front of other windows or when other windows move from in front of it, exposing part of its content.

The notification object is the `NSWindow` object that has exposes its content. In the notification’s `userInfo` dictionary, the key `NSExposedRect` specifies an [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) object that contains the rectangle the window exposed.

To observe this notification using Swift concurrency, use [NSWindow.DidExposeMessage](didexposemessage.md).

## See Also

### Notifications

- [NSWindowDidBecomeKeyNotification](didbecomekeynotification.md): A notification that the window object became the key window.
- [NSWindowDidBecomeMainNotification](didbecomemainnotification.md): A notification that the window object became the main window.
- [NSWindowDidChangeScreenNotification](didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [NSWindowDidChangeScreenProfileNotification](didchangescreenprofilenotification.md): A notification that the screen containing the window changed.
- [NSWindowDidDeminiaturizeNotification](diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [NSWindowDidEndSheetNotification](didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [NSWindowDidEndLiveResizeNotification](didendliveresizenotification.md): A notification that the user resized the window object.
- [NSWindowDidMiniaturizeNotification](didminiaturizenotification.md): A notification that the window object minimized.
- [NSWindowDidMoveNotification](didmovenotification.md): A notification that the window object moved.
- [NSWindowDidResignKeyNotification](didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [NSWindowDidResignMainNotification](didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [NSWindowDidResizeNotification](didresizenotification.md): A notification that the window object size changed.
- [NSWindowDidUpdateNotification](didupdatenotification.md): A notification that the window object received an update message.
- [NSWindowWillBeginSheetNotification](willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [NSWindowWillCloseNotification](willclosenotification.md): A notification that the window object is about to close.
