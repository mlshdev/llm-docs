> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/finishsuspend()](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/finishsuspend())

# finishSuspend() (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Notifies the virtualized graphics device to finish suspending graphics activities.

## Declaration

```swift
func finishSuspend() -> Data?
```

<a id="return-value"></a>

## Return Value

The suspend state data, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method may take an arbitrary amount of time as the device needs to complete any unfinished GPU work. After this call completes, you can’t perform any further operations on this device object and must release it.

Typically, your app serializes the suspend state data to persistant storage. Pass the suspend state data to a new device object when you want to resume graphics operations.

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend()](willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [willResume(withSuspendState:error:)](willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume()](didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.

# finishSuspend (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Notifies the virtualized graphics device to finish suspending graphics activities.

## Declaration

```objectivec
- (NSData *) finishSuspend;
```

<a id="return-value"></a>

## Return Value

The suspend state data, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method may take an arbitrary amount of time as the device needs to complete any unfinished GPU work. After this call completes, you can’t perform any further operations on this device object and must release it.

Typically, your app serializes the suspend state data to persistant storage. Pass the suspend state data to a new device object when you want to resume graphics operations.

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend](willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [willResumeWithSuspendState:error:](willresume%28withsuspendstate_error_%29.md): Tells a new device object to load a previously saved device’s suspend state.
- [didResume](didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.
