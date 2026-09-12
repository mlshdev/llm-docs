> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidbecomeactive(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidbecomeactive(_:))

# applicationDidBecomeActive(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is now active.

## Declaration

```swift
@MainActor optional func applicationDidBecomeActive(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didBecomeActiveNotification](../nsapplication/didbecomeactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [applicationDidFinishLaunching(\_:)](applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

### Managing Active Status

- [applicationWillBecomeActive(\_:)](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
- [applicationDidResignActive(\_:)](applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.

# applicationDidBecomeActive: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is now active.

## Declaration

```objectivec
- (void) applicationDidBecomeActive:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidBecomeActiveNotification](../nsapplication/didbecomeactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [applicationDidFinishLaunching:](applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

### Managing Active Status

- [applicationWillBecomeActive:](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
- [applicationDidResignActive:](applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.
