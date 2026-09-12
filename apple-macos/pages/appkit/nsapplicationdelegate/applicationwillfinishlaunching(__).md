> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationwillfinishlaunching(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillfinishlaunching(_:))

# applicationWillFinishLaunching(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app’s initialization is about to complete.

## Declaration

```swift
@MainActor optional func applicationWillFinishLaunching(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willFinishLaunchingNotification](../nsapplication/willfinishlaunchingnotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## Mentioned In

- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)

## See Also

### Related Documentation

- [applicationWillBecomeActive(\_:)](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [finishLaunching()](../nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [NSApplication](../nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.

### Launching Applications

- [applicationDidFinishLaunching(\_:)](applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.
- [NSApplicationDidFinishLaunching User Info Keys](../nsapplicationdidfinishlaunching-user-info-keys.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

# applicationWillFinishLaunching: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app’s initialization is about to complete.

## Declaration

```objectivec
- (void) applicationWillFinishLaunching:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationWillFinishLaunchingNotification](../nsapplication/willfinishlaunchingnotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

## Mentioned In

- [Supporting Continuity Camera in Your Mac App](../supporting-continuity-camera-in-your-mac-app.md)

## See Also

### Related Documentation

- [applicationWillBecomeActive:](applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [finishLaunching](../nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [NSApplication](../nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.

### Launching Applications

- [applicationDidFinishLaunching:](applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.
- [NSApplicationDidFinishLaunching User Info Keys](../nsapplicationdidfinishlaunching-user-info-keys.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
