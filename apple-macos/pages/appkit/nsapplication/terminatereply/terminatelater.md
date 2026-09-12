> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/terminatereply/terminatelater](https://developer.apple.com/documentation/appkit/nsapplication/terminatereply/terminatelater)

# NSApplication.TerminateReply.terminateLater (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

## Declaration

```swift
case terminateLater
```

<a id="Discussion"></a>

## Discussion

It may be OK to proceed with termination later. Returning this value causes Cocoa to run the run loop in the [NSModalPanelRunLoopMode](../../nsmodalpanelrunloopmode.md) until your app subsequently calls [reply(toApplicationShouldTerminate:)](../reply%28toapplicationshouldterminate_%29.md) with the value [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). This return value is for delegates that need to provide document modal alerts (sheets) in order to decide whether to quit.

## See Also

### Constants

- [NSApplication.TerminateReply.terminateNow](terminatenow.md): It is OK to proceed with termination.
- [NSApplication.TerminateReply.terminateCancel](terminatecancel.md): The app should not be terminated.

# NSTerminateLater (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

## Declaration

```objectivec
NSTerminateLater
```

<a id="Discussion"></a>

## Discussion

It may be OK to proceed with termination later. Returning this value causes Cocoa to run the run loop in the [NSModalPanelRunLoopMode](../../nsmodalpanelrunloopmode.md) until your app subsequently calls [replyToApplicationShouldTerminate:](../reply%28toapplicationshouldterminate_%29.md) with the value [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). This return value is for delegates that need to provide document modal alerts (sheets) in order to decide whether to quit.

## See Also

### Constants

- [NSTerminateNow](terminatenow.md): It is OK to proceed with termination.
- [NSTerminateCancel](terminatecancel.md): The app should not be terminated.
