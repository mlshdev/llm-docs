> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/sendmode](https://developer.apple.com/documentation/scriptingbridge/sbapplication/sendmode)

# sendMode (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The mode for sending Apple events to the target application.

## Declaration

```swift
var sendMode: AESendMode { get set }
```

<a id="discussion"></a>

## Discussion

For more information, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

The default send mode is [kAEWaitReply](https://developer.apple.com/documentation/coreservices/1542914-anonymous/kaewaitreply). If the send mode is something other than `kAEWaitReply`, the receiver might not correctly handle reply events from the target application.

## See Also

### Controlling the Application

- [activate()](activate%28%29.md): Moves the target application to the foreground immediately.
- [isRunning](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.

# sendMode (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The mode for sending Apple events to the target application.

## Declaration

```objectivec
@property AESendMode sendMode;
```

<a id="discussion"></a>

## Discussion

For more information, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

The default send mode is [kAEWaitReply](https://developer.apple.com/documentation/coreservices/1542914-anonymous/kaewaitreply). If the send mode is something other than `kAEWaitReply`, the receiver might not correctly handle reply events from the target application.

## See Also

### Controlling the Application

- [activate](activate%28%29.md): Moves the target application to the foreground immediately.
- [running](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.
