> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationwillterminate(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationwillterminate(_:))

# applicationWillTerminate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the app is about to terminate.

## Declaration

```swift
@MainActor optional func applicationWillTerminate(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willTerminateNotification](../nsapplication/willterminatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to perform any final cleanup before the app terminates.  The app will terminate after this method returns.

> **Note**

> This method isn’t called during sudden termination of an app. For more information about sudden termination, see the section  [ProcessInfo](https://developer.apple.com/documentation/foundation/processinfo) of [ProcessInfo](https://developer.apple.com/documentation/foundation/processinfo).

## See Also

### Related Documentation

- [terminate(\_:)](../nsapplication/terminate%28__%29.md): Terminates the receiver.

### Terminating Applications

- [applicationShouldTerminate(\_:)](applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [NSApplication.TerminateReply](../nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed(\_:)](applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.

# applicationWillTerminate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the app is about to terminate.

## Declaration

```objectivec
- (void) applicationWillTerminate:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationWillTerminateNotification](../nsapplication/willterminatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

<a id="Discussion"></a>

## Discussion

Your delegate can use this method to perform any final cleanup before the app terminates.  The app will terminate after this method returns.

> **Note**

> This method isn’t called during sudden termination of an app. For more information about sudden termination, see the section  [NSProcessInfo](https://developer.apple.com/documentation/foundation/processinfo) of [NSProcessInfo](https://developer.apple.com/documentation/foundation/processinfo).

## See Also

### Related Documentation

- [terminate:](../nsapplication/terminate%28__%29.md): Terminates the receiver.

### Terminating Applications

- [applicationShouldTerminate:](applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [NSApplicationTerminateReply](../nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed:](applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
