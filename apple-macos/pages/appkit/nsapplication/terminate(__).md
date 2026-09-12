> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/terminate(_:)](https://developer.apple.com/documentation/appkit/nsapplication/terminate(_:))

# terminate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Terminates the receiver.

## Declaration

```swift
func terminate(_ sender: Any?)
```

## Parameters

- `sender`: Typically, this parameter contains the object that initiated the termination request.

<a id="Discussion"></a>

## Discussion

This method is typically invoked when the user chooses Quit or Exit from the app’s menu.

When invoked, this method performs several steps to process the termination request. First, it asks the app’s document controller (if one exists) to save any unsaved changes in its documents. During this process, the document controller can cancel termination in response to input from the user. If the document controller doesn’t cancel the operation, this method then calls the delegate’s [applicationShouldTerminate(\_:)](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) method. If [applicationShouldTerminate(\_:)](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) returns [NSApplication.TerminateReply.terminateCancel](terminatereply/terminatecancel.md), the termination process is aborted and control is handed back to the main event loop. If the method returns [NSApplication.TerminateReply.terminateLater](terminatereply/terminatelater.md), the app runs its run loop in the [NSModalPanelRunLoopMode](../nsmodalpanelrunloopmode.md) mode until the [reply(toApplicationShouldTerminate:)](reply%28toapplicationshouldterminate_%29.md) method is called with the value [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). If the [applicationShouldTerminate(\_:)](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) method returns [NSApplication.TerminateReply.terminateNow](terminatereply/terminatenow.md), this method posts a [willTerminateNotification](willterminatenotification.md) notification to the default notification center.

Don’t bother to put final cleanup code in your app’s `main()` function—it will never be executed. If cleanup is necessary, perform that cleanup in the delegate’s [applicationWillTerminate(\_:)](../nsapplicationdelegate/applicationwillterminate%28__%29.md) method.

## See Also

### Related Documentation

- [stop(\_:)](stop%28__%29.md): Stops the main event loop.
- [applicationShouldTerminate(\_:)](../nsapplicationdelegate/applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [run()](run%28%29.md): Starts the main event loop.
- [applicationWillTerminate(\_:)](../nsapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.
- [willTerminateNotification](willterminatenotification.md): Sends a notification to terminate the app.

### Terminating the app

- [reply(toApplicationShouldTerminate:)](reply%28toapplicationshouldterminate_%29.md): Responds to `NSTerminateLater` once the app knows whether it can terminate.

# terminate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Terminates the receiver.

## Declaration

```objectivec
- (void) terminate:(id) sender;
```

## Parameters

- `sender`: Typically, this parameter contains the object that initiated the termination request.

<a id="Discussion"></a>

## Discussion

This method is typically invoked when the user chooses Quit or Exit from the app’s menu.

When invoked, this method performs several steps to process the termination request. First, it asks the app’s document controller (if one exists) to save any unsaved changes in its documents. During this process, the document controller can cancel termination in response to input from the user. If the document controller doesn’t cancel the operation, this method then calls the delegate’s [applicationShouldTerminate:](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) method. If [applicationShouldTerminate:](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) returns [NSTerminateCancel](terminatereply/terminatecancel.md), the termination process is aborted and control is handed back to the main event loop. If the method returns [NSTerminateLater](terminatereply/terminatelater.md), the app runs its run loop in the [NSModalPanelRunLoopMode](../nsmodalpanelrunloopmode.md) mode until the [replyToApplicationShouldTerminate:](reply%28toapplicationshouldterminate_%29.md) method is called with the value [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). If the [applicationShouldTerminate:](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) method returns [NSTerminateNow](terminatereply/terminatenow.md), this method posts a [NSApplicationWillTerminateNotification](willterminatenotification.md) notification to the default notification center.

Don’t bother to put final cleanup code in your app’s `main()` function—it will never be executed. If cleanup is necessary, perform that cleanup in the delegate’s [applicationWillTerminate:](../nsapplicationdelegate/applicationwillterminate%28__%29.md) method.

## See Also

### Related Documentation

- [stop:](stop%28__%29.md): Stops the main event loop.
- [applicationShouldTerminate:](../nsapplicationdelegate/applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [run](run%28%29.md): Starts the main event loop.
- [applicationWillTerminate:](../nsapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.
- [NSApplicationWillTerminateNotification](willterminatenotification.md): Sends a notification to terminate the app.

### Terminating the app

- [replyToApplicationShouldTerminate:](reply%28toapplicationshouldterminate_%29.md): Responds to `NSTerminateLater` once the app knows whether it can terminate.
