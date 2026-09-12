> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationshouldterminate(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationshouldterminate(_:))

# applicationShouldTerminate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a value that indicates if the app should terminate.

## Declaration

```swift
@MainActor optional func applicationShouldTerminate(_ sender: NSApplication) -> NSApplication.TerminateReply
```

## Parameters

- `sender`: The application object that is about to be terminated.

<a id="return-value"></a>

## Return Value

One of the values defined in [NSApplication.TerminateReply](../nsapplication/terminatereply.md) constants indicating whether the application should terminate. For compatibility reasons, a return value of [false](https://developer.apple.com/documentation/swift/false) is equivalent to [NSApplication.TerminateReply.terminateCancel](../nsapplication/terminatereply/terminatecancel.md), and a return value of [true](https://developer.apple.com/documentation/swift/true) is equivalent to [NSApplication.TerminateReply.terminateNow](../nsapplication/terminatereply/terminatenow.md).

<a id="Discussion"></a>

## Discussion

This method is called after the application’s Quit menu item has been selected, or after the [terminate(\_:)](../nsapplication/terminate%28__%29.md) method has been called. Generally, you should return [NSApplication.TerminateReply.terminateNow](../nsapplication/terminatereply/terminatenow.md) to allow the termination to complete, but you can cancel the termination process or delay it somewhat as needed. For example, you might delay termination to finish processing some critical data but then terminate the application as soon as you are done by calling the [reply(toApplicationShouldTerminate:)](../nsapplication/reply%28toapplicationshouldterminate_%29.md) method.

## See Also

### Related Documentation

- [terminate(\_:)](../nsapplication/terminate%28__%29.md): Terminates the receiver.

### Terminating Applications

- [NSApplication.TerminateReply](../nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed(\_:)](applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
- [applicationWillTerminate(\_:)](applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.

# applicationShouldTerminate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a value that indicates if the app should terminate.

## Declaration

```objectivec
- (NSApplicationTerminateReply) applicationShouldTerminate:(NSApplication *) sender;
```

## Parameters

- `sender`: The application object that is about to be terminated.

<a id="return-value"></a>

## Return Value

One of the values defined in [NSApplicationTerminateReply](../nsapplication/terminatereply.md) constants indicating whether the application should terminate. For compatibility reasons, a return value of [false](https://developer.apple.com/documentation/swift/false) is equivalent to [NSTerminateCancel](../nsapplication/terminatereply/terminatecancel.md), and a return value of [true](https://developer.apple.com/documentation/swift/true) is equivalent to [NSTerminateNow](../nsapplication/terminatereply/terminatenow.md).

<a id="Discussion"></a>

## Discussion

This method is called after the application’s Quit menu item has been selected, or after the [terminate:](../nsapplication/terminate%28__%29.md) method has been called. Generally, you should return [NSTerminateNow](../nsapplication/terminatereply/terminatenow.md) to allow the termination to complete, but you can cancel the termination process or delay it somewhat as needed. For example, you might delay termination to finish processing some critical data but then terminate the application as soon as you are done by calling the [replyToApplicationShouldTerminate:](../nsapplication/reply%28toapplicationshouldterminate_%29.md) method.

## See Also

### Related Documentation

- [terminate:](../nsapplication/terminate%28__%29.md): Terminates the receiver.

### Terminating Applications

- [NSApplicationTerminateReply](../nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed:](applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
- [applicationWillTerminate:](applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.
