> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationshouldterminateafterlastwindowclosed(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationshouldterminateafterlastwindowclosed(_:))

# applicationShouldTerminateAfterLastWindowClosed(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app terminates once the last window closes.

## Declaration

```swift
@MainActor optional func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool
```

## Parameters

- `sender`: The application object whose last window was closed.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the application should not be terminated when its last window is closed; otherwise, [true](https://developer.apple.com/documentation/swift/true) to terminate the application.

<a id="Discussion"></a>

## Discussion

The application sends this message to your delegate when the application’s last window is closed. It sends this message regardless of whether there are still panels open. (A panel in this case is defined as being an instance of `NSPanel` or one of its subclasses.)

If your implementation returns [false](https://developer.apple.com/documentation/swift/false), control returns to the main event loop and the application is not terminated. If you return [true](https://developer.apple.com/documentation/swift/true), your delegate’s [applicationShouldTerminate(\_:)](applicationshouldterminate%28__%29.md) method is subsequently invoked to confirm that the application should be terminated.

## See Also

### Related Documentation

- [terminate(\_:)](../nsapplication/terminate%28__%29.md): Terminates the receiver.

### Terminating Applications

- [applicationShouldTerminate(\_:)](applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [NSApplication.TerminateReply](../nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationWillTerminate(\_:)](applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.

# applicationShouldTerminateAfterLastWindowClosed: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app terminates once the last window closes.

## Declaration

```objectivec
- (BOOL) applicationShouldTerminateAfterLastWindowClosed:(NSApplication *) sender;
```

## Parameters

- `sender`: The application object whose last window was closed.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the application should not be terminated when its last window is closed; otherwise, [true](https://developer.apple.com/documentation/swift/true) to terminate the application.

<a id="Discussion"></a>

## Discussion

The application sends this message to your delegate when the application’s last window is closed. It sends this message regardless of whether there are still panels open. (A panel in this case is defined as being an instance of `NSPanel` or one of its subclasses.)

If your implementation returns [false](https://developer.apple.com/documentation/swift/false), control returns to the main event loop and the application is not terminated. If you return [true](https://developer.apple.com/documentation/swift/true), your delegate’s [applicationShouldTerminate:](applicationshouldterminate%28__%29.md) method is subsequently invoked to confirm that the application should be terminated.

## See Also

### Related Documentation

- [terminate:](../nsapplication/terminate%28__%29.md): Terminates the receiver.

### Terminating Applications

- [applicationShouldTerminate:](applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [NSApplicationTerminateReply](../nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationWillTerminate:](applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.
