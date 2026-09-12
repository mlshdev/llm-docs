> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching(_:))

# applicationDidFinishLaunching(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

## Declaration

```swift
@MainActor optional func applicationDidFinishLaunching(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didFinishLaunchingNotification](../nsapplication/didfinishlaunchingnotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

<a id="Discussion"></a>

## Discussion

Delegates can implement this method to perform further initialization. This method is called after the application’s main run loop has been started but before it has processed any events. If the application was launched by the user opening a file, the delegate’s  [application(\_:openFile:)](application%28__openfile_%29.md) method is called before this method. If you want to perform initialization before any files are opened, implement the [applicationWillFinishLaunching(\_:)](applicationwillfinishlaunching%28__%29.md) method in your delegate, which is called before [application(\_:openFile:)](application%28__openfile_%29.md).)

## See Also

### Related Documentation

- [finishLaunching()](../nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [application(\_:openFile:)](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [applicationDidBecomeActive(\_:)](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.

### Launching Applications

- [applicationWillFinishLaunching(\_:)](applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [NSApplicationDidFinishLaunching User Info Keys](../nsapplicationdidfinishlaunching-user-info-keys.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

# applicationDidFinishLaunching: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

## Declaration

```objectivec
- (void) applicationDidFinishLaunching:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidFinishLaunchingNotification](../nsapplication/didfinishlaunchingnotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

<a id="Discussion"></a>

## Discussion

Delegates can implement this method to perform further initialization. This method is called after the application’s main run loop has been started but before it has processed any events. If the application was launched by the user opening a file, the delegate’s  [application:openFile:](application%28__openfile_%29.md) method is called before this method. If you want to perform initialization before any files are opened, implement the [applicationWillFinishLaunching:](applicationwillfinishlaunching%28__%29.md) method in your delegate, which is called before [application:openFile:](application%28__openfile_%29.md).)

## See Also

### Related Documentation

- [finishLaunching](../nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [application:openFile:](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [applicationDidBecomeActive:](applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.

### Launching Applications

- [applicationWillFinishLaunching:](applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [NSApplicationDidFinishLaunching User Info Keys](../nsapplicationdidfinishlaunching-user-info-keys.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
