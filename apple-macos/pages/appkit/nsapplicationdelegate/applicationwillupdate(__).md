> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationwillupdate(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillupdate(_:))

# applicationWillUpdate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is about to update its windows.

## Declaration

```swift
@MainActor optional func applicationWillUpdate(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willUpdateNotification](../nsapplication/willupdatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [updateWindows()](../nsapplication/updatewindows%28%29.md): Sends an [update()](../nswindow/update%28%29.md) message to each onscreen window.

### Managing Windows

- [applicationDidUpdate(\_:)](applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
- [applicationShouldHandleReopen(\_:hasVisibleWindows:)](applicationshouldhandlereopen%28__hasvisiblewindows_%29.md): Returns a Boolean value that indicates if the app responds to reopen AppleEvents.

# applicationWillUpdate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is about to update its windows.

## Declaration

```objectivec
- (void) applicationWillUpdate:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationWillUpdateNotification](../nsapplication/willupdatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [updateWindows](../nsapplication/updatewindows%28%29.md): Sends an [update](../nswindow/update%28%29.md) message to each onscreen window.

### Managing Windows

- [applicationDidUpdate:](applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
- [applicationShouldHandleReopen:hasVisibleWindows:](applicationshouldhandlereopen%28__hasvisiblewindows_%29.md): Returns a Boolean value that indicates if the app responds to reopen AppleEvents.
