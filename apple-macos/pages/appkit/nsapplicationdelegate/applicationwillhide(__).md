> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationwillhide(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillhide(_:))

# applicationWillHide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is about to be hidden.

## Declaration

```swift
@MainActor optional func applicationWillHide(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willHideNotification](../nsapplication/willhidenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [hide(\_:)](../nsapplication/hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.

### Hiding Applications

- [applicationDidHide(\_:)](applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillUnhide(\_:)](applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
- [applicationDidUnhide(\_:)](applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.

# applicationWillHide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is about to be hidden.

## Declaration

```objectivec
- (void) applicationWillHide:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationWillHideNotification](../nsapplication/willhidenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [hide:](../nsapplication/hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.

### Hiding Applications

- [applicationDidHide:](applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillUnhide:](applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
- [applicationDidUnhide:](applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.
