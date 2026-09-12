> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/didendliveresizenotification](https://developer.apple.com/documentation/appkit/nswindow/didendliveresizenotification)

# didEndLiveResizeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

A notification that the user resized the window object.

## Declaration

```swift
class let didEndLiveResizeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system sends this only once for a series of window resize operations.

The notification object is the `NSWindow` object that changed size. This notification doesn’t contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSWindow.DidEndLiveResizeMessage](didendliveresizemessage.md).

## See Also

### Notifications

- [didBecomeKeyNotification](didbecomekeynotification.md): A notification that the window object became the key window.
- [didBecomeMainNotification](didbecomemainnotification.md): A notification that the window object became the main window.
- [didChangeScreenNotification](didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [didChangeScreenProfileNotification](didchangescreenprofilenotification.md): A notification that the screen containing the window changed.
- [didDeminiaturizeNotification](diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [didEndSheetNotification](didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [didExposeNotification](didexposenotification.md): A notification that a window exposed a portion of its nonretained content.
- [didMiniaturizeNotification](didminiaturizenotification.md): A notification that the window object minimized.
- [didMoveNotification](didmovenotification.md): A notification that the window object moved.
- [didResignKeyNotification](didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [didResignMainNotification](didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [didResizeNotification](didresizenotification.md): A notification that the window object size changed.
- [didUpdateNotification](didupdatenotification.md): A notification that the window object received an update message.
- [willBeginSheetNotification](willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [willCloseNotification](willclosenotification.md): A notification that the window object is about to close.

# NSWindowDidEndLiveResizeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

A notification that the user resized the window object.

## Declaration

```objectivec
extern NSNotificationName const NSWindowDidEndLiveResizeNotification;
```

<a id="Discussion"></a>

## Discussion

The system sends this only once for a series of window resize operations.

The notification object is the `NSWindow` object that changed size. This notification doesn’t contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSWindow.DidEndLiveResizeMessage](didendliveresizemessage.md).

## See Also

### Notifications

- [NSWindowDidBecomeKeyNotification](didbecomekeynotification.md): A notification that the window object became the key window.
- [NSWindowDidBecomeMainNotification](didbecomemainnotification.md): A notification that the window object became the main window.
- [NSWindowDidChangeScreenNotification](didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [NSWindowDidChangeScreenProfileNotification](didchangescreenprofilenotification.md): A notification that the screen containing the window changed.
- [NSWindowDidDeminiaturizeNotification](diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [NSWindowDidEndSheetNotification](didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [NSWindowDidExposeNotification](didexposenotification.md): A notification that a window exposed a portion of its nonretained content.
- [NSWindowDidMiniaturizeNotification](didminiaturizenotification.md): A notification that the window object minimized.
- [NSWindowDidMoveNotification](didmovenotification.md): A notification that the window object moved.
- [NSWindowDidResignKeyNotification](didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [NSWindowDidResignMainNotification](didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [NSWindowDidResizeNotification](didresizenotification.md): A notification that the window object size changed.
- [NSWindowDidUpdateNotification](didupdatenotification.md): A notification that the window object received an update message.
- [NSWindowWillBeginSheetNotification](willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [NSWindowWillCloseNotification](willclosenotification.md): A notification that the window object is about to close.
