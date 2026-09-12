> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidhide(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidhide(_:))

# applicationDidHide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is now hidden.

## Declaration

```swift
@MainActor optional func applicationDidHide(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didHideNotification](../nsapplication/didhidenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [unhide(\_:)](../nsapplication/unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.

### Hiding Applications

- [applicationWillHide(\_:)](applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.
- [applicationWillUnhide(\_:)](applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
- [applicationDidUnhide(\_:)](applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.

# applicationDidHide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is now hidden.

## Declaration

```objectivec
- (void) applicationDidHide:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidHideNotification](../nsapplication/didhidenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [unhide:](../nsapplication/unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.

### Hiding Applications

- [applicationWillHide:](applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.
- [applicationWillUnhide:](applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
- [applicationDidUnhide:](applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.
