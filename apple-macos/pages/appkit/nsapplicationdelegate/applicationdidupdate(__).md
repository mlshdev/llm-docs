> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidupdate(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidupdate(_:))

# applicationDidUpdate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app’s windows did update.

## Declaration

```swift
@MainActor optional func applicationDidUpdate(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didUpdateNotification](../nsapplication/didupdatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [updateWindows()](../nsapplication/updatewindows%28%29.md): Sends an [update()](../nswindow/update%28%29.md) message to each onscreen window.

### Managing Windows

- [applicationWillUpdate(\_:)](applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [applicationShouldHandleReopen(\_:hasVisibleWindows:)](applicationshouldhandlereopen%28__hasvisiblewindows_%29.md): Returns a Boolean value that indicates if the app responds to reopen AppleEvents.

# applicationDidUpdate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app’s windows did update.

## Declaration

```objectivec
- (void) applicationDidUpdate:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidUpdateNotification](../nsapplication/didupdatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [updateWindows](../nsapplication/updatewindows%28%29.md): Sends an [update](../nswindow/update%28%29.md) message to each onscreen window.

### Managing Windows

- [applicationWillUpdate:](applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [applicationShouldHandleReopen:hasVisibleWindows:](applicationshouldhandlereopen%28__hasvisiblewindows_%29.md): Returns a Boolean value that indicates if the app responds to reopen AppleEvents.
