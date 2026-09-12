> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/willresume(withsuspendstate:error:)](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/willresume(withsuspendstate:error:))

# willResume(withSuspendState:error:) (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Tells a new device object to load a previously saved device’s suspend state.

## Declaration

```swift
func willResume(withSuspendState suspendState: Data, error: NSErrorPointer) -> Bool
```

## Parameters

- `suspendState`: The suspend data that you previously saved when you suspended an earlier device object.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the framework was able to start restoring the graphics data.

<a id="Discussion"></a>

## Discussion

This method sets up the device to appear in the same state it was in before the suspend. The device object doesn’t access guest memory during the call to this method.

When resuming from an earlier suspended device, this must be the first method that you call on the newly created device object. When you call this method, ensure that the guest CPUs aren’t running.

After you call this method, reattach any suspended displays before calling [didResume()](didresume%28%29.md).

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend()](willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend()](finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [didResume()](didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.

# willResumeWithSuspendState:error: (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Tells a new device object to load a previously saved device’s suspend state.

## Declaration

```objectivec
- (bool) willResumeWithSuspendState:(NSData *) suspendState error:(NSError **) error;
```

## Parameters

- `suspendState`: The suspend data that you previously saved when you suspended an earlier device object.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the framework was able to start restoring the graphics data.

<a id="Discussion"></a>

## Discussion

This method sets up the device to appear in the same state it was in before the suspend. The device object doesn’t access guest memory during the call to this method.

When resuming from an earlier suspended device, this must be the first method that you call on the newly created device object. When you call this method, ensure that the guest CPUs aren’t running.

After you call this method, reattach any suspended displays before calling [didResume](didresume%28%29.md).

## See Also

### Suspending and Resuming Graphics Processing

- [willSuspend](willsuspend%28%29.md): Notifies the virtual graphics device to start suspending graphics activities.
- [finishSuspend](finishsuspend%28%29.md): Notifies the virtualized graphics device to finish suspending graphics activities.
- [didResume](didresume%28%29.md): Tells the device object to finish any remaining work to resume processing of a previously saved device’s suspend state.
- [PGResumeErrorDomain](../pgresumeerrordomain.md): The error domain for suspend-resume actions.
- [PGResumeErrorCode](../pgresumeerrorcode.md): Error codes for suspend-resume actions.
