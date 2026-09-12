> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/activate()](https://developer.apple.com/documentation/scriptingbridge/sbapplication/activate())

# activate() (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Moves the target application to the foreground immediately.

## Declaration

```swift
func activate()
```

<a id="discussion"></a>

## Discussion

If the target application is not already running, this method launches it.

## See Also

### Controlling the Application

- [isRunning](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.

# activate (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Moves the target application to the foreground immediately.

## Declaration

```objectivec
- (void) activate;
```

<a id="discussion"></a>

## Discussion

If the target application is not already running, this method launches it.

## See Also

### Controlling the Application

- [running](isrunning.md): A Boolean that indicates whether the target application represented by the receiver is running.
- [launchFlags](launchflags.md): The launch flags for the application represented by the receiver.
- [sendMode](sendmode.md): The mode for sending Apple events to the target application.
- [timeout](timeout.md): The period the application will wait to receive reply Apple events.
