> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidresignactive(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidresignactive(_:))

# applicationDidResignActive(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is no longer active and doesn’t have focus.

## Declaration

```swift
@MainActor optional func applicationDidResignActive(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didResignActiveNotification](../nsapplication/didresignactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Managing Active Status

- [applicationWillBecomeActive(\_:)](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.

# applicationDidResignActive: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is no longer active and doesn’t have focus.

## Declaration

```objectivec
- (void) applicationDidResignActive:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidResignActiveNotification](../nsapplication/didresignactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Managing Active Status

- [applicationWillBecomeActive:](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
