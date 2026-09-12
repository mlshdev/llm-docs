> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/didresume()](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/didresume())

# didResume() (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.

## Declaration

```swift
func didResume()
```

<a id="Discussion"></a>

## Discussion

After you call this method, the virtualized device can generate new interrupts immediately, even before the call completes. Similarly, guest memory must also be accessible before you call this method.

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend()](willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend()](finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResume(withSuspendState:error:)](willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.

# didResume (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.

## Declaration

```objectivec
- (void) didResume;
```

<a id="Discussion"></a>

## Discussion

After you call this method, the virtualized device can generate new interrupts immediately, even before the call completes. Similarly, guest memory must also be accessible before you call this method.

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend](willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend](finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResumeWithSuspendState:error:](willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.
