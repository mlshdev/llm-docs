> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationwillresignactive(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillresignactive(_:))

# applicationWillResignActive(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is about to become inactive and will lose focus.

## Declaration

```swift
@MainActor optional func applicationWillResignActive(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willResignActiveNotification](../nsapplication/willresignactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Managing Active Status

- [applicationWillBecomeActive(\_:)](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationDidResignActive(\_:)](applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.

# applicationWillResignActive: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is about to become inactive and will lose focus.

## Declaration

```objectivec
- (void) applicationWillResignActive:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationWillResignActiveNotification](../nsapplication/willresignactivenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## See Also

### Managing Active Status

- [applicationWillBecomeActive:](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationDidResignActive:](applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.
