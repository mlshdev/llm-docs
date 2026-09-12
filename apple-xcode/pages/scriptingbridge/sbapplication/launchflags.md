> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/launchflags](https://developer.apple.com/documentation/scriptingbridge/sbapplication/launchflags)

# launchFlags (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The launch flags for the application represented by the receiver.

## Declaration

```swift
var launchFlags: LSLaunchFlags { get set }
```

<a id="discussion"></a>

## Discussion

For more information, see [Launch Services](https://developer.apple.com/documentation/coreservices/launch_services).

## See Also

### Controlling the Application

- [activate()](activate%28%29.md): Moves the target application to the foreground immediately.
- [isRunning](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.

# launchFlags (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The launch flags for the application represented by the receiver.

## Declaration

```objectivec
@property LSLaunchFlags launchFlags;
```

<a id="discussion"></a>

## Discussion

For more information, see [Launch Services](https://developer.apple.com/documentation/coreservices/launch_services).

## See Also

### Controlling the Application

- [activate](activate%28%29.md): Moves the target application to the foreground immediately.
- [running](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.
