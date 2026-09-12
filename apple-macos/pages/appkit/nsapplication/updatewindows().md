> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/updatewindows()](https://developer.apple.com/documentation/appkit/nsapplication/updatewindows())

# updateWindows() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends an [update()](../nswindow/update%28%29.md) message to each onscreen window.

## Declaration

```swift
func updateWindows()
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically in the main event loop after each event when running in `NSDefaultRunLoopMode` or `NSModalRunLoopMode`. This method is not invoked automatically when running in `NSEventTrackingRunLoopMode`.

When this method begins, it posts an [willUpdateNotification](willupdatenotification.md) to the default notification center. When it successfully completes, it posts an [didUpdateNotification](didupdatenotification.md).

## See Also

### Related Documentation

- [applicationDidUpdate(\_:)](../nsapplicationdelegate/applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
- [applicationWillUpdate(\_:)](../nsapplicationdelegate/applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [update()](../nswindow/update%28%29.md): Updates the window.

### Updating Windows

- [setWindowsNeedUpdate(\_:)](setwindowsneedupdate%28__%29.md): Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

# updateWindows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sends an [update](../nswindow/update%28%29.md) message to each onscreen window.

## Declaration

```objectivec
- (void) updateWindows;
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically in the main event loop after each event when running in `NSDefaultRunLoopMode` or `NSModalRunLoopMode`. This method is not invoked automatically when running in `NSEventTrackingRunLoopMode`.

When this method begins, it posts an [NSApplicationWillUpdateNotification](willupdatenotification.md) to the default notification center. When it successfully completes, it posts an [NSApplicationDidUpdateNotification](didupdatenotification.md).

## See Also

### Related Documentation

- [applicationDidUpdate:](../nsapplicationdelegate/applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
- [applicationWillUpdate:](../nsapplicationdelegate/applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [update](../nswindow/update%28%29.md): Updates the window.

### Updating Windows

- [setWindowsNeedUpdate:](setwindowsneedupdate%28__%29.md): Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.
