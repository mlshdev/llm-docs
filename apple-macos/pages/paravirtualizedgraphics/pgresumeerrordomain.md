> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgresumeerrordomain](https://developer.apple.com/documentation/paravirtualizedgraphics/pgresumeerrordomain)

# PGResumeErrorDomain (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The error domain for suspend-resume actions.

## Declaration

```swift
let PGResumeErrorDomain: String
```

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend()](pgdevice/willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend()](pgdevice/finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResume(withSuspendState:error:)](pgdevice/willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume()](pgdevice/didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorCode](pgresumeerrorcode.md): Error codes for suspend-resume actions.

# PGResumeErrorDomain (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The error domain for suspend-resume actions.

## Declaration

```objectivec
extern NSErrorDomain const PGResumeErrorDomain;
```

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend](pgdevice/willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend](pgdevice/finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [willResumeWithSuspendState:error:](pgdevice/willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume](pgdevice/didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorCode](pgresumeerrorcode.md): Error codes for suspend-resume actions.
