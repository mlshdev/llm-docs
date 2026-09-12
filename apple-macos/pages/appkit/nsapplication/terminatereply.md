> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/terminatereply](https://developer.apple.com/documentation/appkit/nsapplication/terminatereply)

# NSApplication.TerminateReply (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that determine whether an app should terminate.

## Declaration

```swift
enum TerminateReply
```

## Topics

### Constants

- [NSApplication.TerminateReply.terminateNow](terminatereply/terminatenow.md): It is OK to proceed with termination.
- [NSApplication.TerminateReply.terminateCancel](terminatereply/terminatecancel.md): The app should not be terminated.
- [NSApplication.TerminateReply.terminateLater](terminatereply/terminatelater.md)

### Initializers

- [init(rawValue:)](terminatereply/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Terminating Applications

- [applicationShouldTerminate(\_:)](../nsapplicationdelegate/applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed(\_:)](../nsapplicationdelegate/applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
- [applicationWillTerminate(\_:)](../nsapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.

# NSApplicationTerminateReply (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that determine whether an app should terminate.

## Declaration

```objectivec
enum NSApplicationTerminateReply : NSUInteger;
```

## Topics

### Constants

- [NSTerminateNow](terminatereply/terminatenow.md): It is OK to proceed with termination.
- [NSTerminateCancel](terminatereply/terminatecancel.md): The app should not be terminated.
- [NSTerminateLater](terminatereply/terminatelater.md)

## See Also

### Terminating Applications

- [applicationShouldTerminate:](../nsapplicationdelegate/applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed:](../nsapplicationdelegate/applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
- [applicationWillTerminate:](../nsapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.
