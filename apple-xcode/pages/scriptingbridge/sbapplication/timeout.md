> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/timeout](https://developer.apple.com/documentation/scriptingbridge/sbapplication/timeout)

# timeout (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The period the application will wait to receive reply Apple events.

## Declaration

```swift
var timeout: Int { get set }
```

<a id="discussion"></a>

## Discussion

For more information, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

The default timeout value is [kAEDefaultTimeout](https://developer.apple.com/documentation/coreservices/1542814-timeout_constants/kaedefaulttimeout), which is about a minute. If you want the receiver to wait indefinitely for reply Apple events, use [kNoTimeOut](https://developer.apple.com/documentation/coreservices/1542814-timeout_constants/knotimeout). For more information, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

## See Also

### Controlling the Application

- [activate()](activate%28%29.md): Moves the target application to the foreground immediately.
- [isRunning](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.

# timeout (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The period the application will wait to receive reply Apple events.

## Declaration

```objectivec
@property long timeout;
```

<a id="discussion"></a>

## Discussion

For more information, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

The default timeout value is [kAEDefaultTimeout](https://developer.apple.com/documentation/coreservices/1542814-timeout_constants/kaedefaulttimeout), which is about a minute. If you want the receiver to wait indefinitely for reply Apple events, use [kNoTimeOut](https://developer.apple.com/documentation/coreservices/1542814-timeout_constants/knotimeout). For more information, see [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).

## See Also

### Controlling the Application

- [activate](activate%28%29.md): Moves the target application to the foreground immediately.
- [running](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
