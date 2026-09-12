> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidunhide(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidunhide(_:))

# applicationDidUnhide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is now visible.

## Declaration

```swift
@MainActor optional func applicationDidUnhide(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didUnhideNotification](../nsapplication/didunhidenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [unhide(\_:)](../nsapplication/unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.

### Hiding Applications

- [applicationWillHide(\_:)](applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.
- [applicationDidHide(\_:)](applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillUnhide(\_:)](applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.

# applicationDidUnhide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is now visible.

## Declaration

```objectivec
- (void) applicationDidUnhide:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidUnhideNotification](../nsapplication/didunhidenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [unhide:](../nsapplication/unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.

### Hiding Applications

- [applicationWillHide:](applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.
- [applicationDidHide:](applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillUnhide:](applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
