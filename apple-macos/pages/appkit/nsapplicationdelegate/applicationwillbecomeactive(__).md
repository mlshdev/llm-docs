> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationwillbecomeactive(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillbecomeactive(_:))

# applicationWillBecomeActive(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is about to become active.

## Declaration

```swift
@MainActor optional func applicationWillBecomeActive(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willBecomeActiveNotification](../nsapplication/willbecomeactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [applicationWillFinishLaunching(\_:)](applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.

### Managing Active Status

- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationWillResignActive(\_:)](applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
- [applicationDidResignActive(\_:)](applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.

# applicationWillBecomeActive: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is about to become active.

## Declaration

```objectivec
- (void) applicationWillBecomeActive:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationWillBecomeActiveNotification](../nsapplication/willbecomeactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Related Documentation

- [applicationWillFinishLaunching:](applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.

### Managing Active Status

- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationWillResignActive:](applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
- [applicationDidResignActive:](applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.
