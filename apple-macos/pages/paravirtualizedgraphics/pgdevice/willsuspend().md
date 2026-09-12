> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/willsuspend()](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/willsuspend())

# willSuspend() (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Notifies the virtual graphics device to start suspending graphics activities.

## Declaration

```swift
func willSuspend()
```

<a id="Discussion"></a>

## Discussion

The virtualized device stops generating interrupts and won’t accept new commands from the guest. You must halt any guest CPUs within a short interval after you call this method.

## See Also

### Suspending and Resuming Graphics Processing

- [finishSuspend()](finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResume(withSuspendState:error:)](willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume()](didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.

# willSuspend (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Notifies the virtual graphics device to start suspending graphics activities.

## Declaration

```objectivec
- (void) willSuspend;
```

<a id="Discussion"></a>

## Discussion

The virtualized device stops generating interrupts and won’t accept new commands from the guest. You must halt any guest CPUs within a short interval after you call this method.

## See Also

### Suspending and Resuming Graphics Processing

- [finishSuspend](finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResumeWithSuspendState:error:](willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume](didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.
