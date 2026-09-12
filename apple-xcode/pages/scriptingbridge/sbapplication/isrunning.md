> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/isrunning](https://developer.apple.com/documentation/scriptingbridge/sbapplication/isrunning)

# isRunning (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

A Boolean that indicates whether the target application represented by the receiver is running.

## Declaration

```swift
var isRunning: Bool { get }
```

<a id="discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the application is running, [false](https://developer.apple.com/documentation/swift/false) otherwise.

This may be [true](https://developer.apple.com/documentation/swift/true) for instances initialized with a bundle identifier or URL because `SBApplication` launches the application only when it’s necessary to send it an event.

## See Also

### Controlling the Application

- [activate()](activate%28%29.md): Moves the target application to the foreground immediately.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.

# running (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

A Boolean that indicates whether the target application represented by the receiver is running.

## Declaration

```objectivec
@property (readonly, getter=isRunning) BOOL running;
```

<a id="discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the application is running, [false](https://developer.apple.com/documentation/swift/false) otherwise.

This may be [true](https://developer.apple.com/documentation/swift/true) for instances initialized with a bundle identifier or URL because `SBApplication` launches the application only when it’s necessary to send it an event.

## See Also

### Controlling the Application

- [activate](activate%28%29.md): Moves the target application to the foreground immediately.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.
