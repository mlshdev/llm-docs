> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/requeststop()](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/requeststop())

# requestStop() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Asks the guest operating system to stop running.

## Declaration

```swift
func requestStop() throws
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  In Objective-C, this function returns a value that indicates if the VM was in a stoppable state when you made the request. It doesn’t reflect whether the VM will exit or has exited.

## See Also

### Starting and stopping the VM

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the VM and notifies the specified completion handler if startup is successful.
- [start()](start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [start(options:completionHandler:)](start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stop(completionHandler:)](stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [pause(completionHandler:)](pause%28completionhandler_%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resume(completionHandler:)](resume%28completionhandler_%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [pause()](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resume()](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.

# requestStopWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Asks the guest operating system to stop running.

## Declaration

```objectivec
- (BOOL) requestStopWithError:(NSError **) error;
```

## Parameters

- `error`: A pointer to an error object that the framework sets to an [NSError](https://developer.apple.com/documentation/foundation/nserror) instance if an error occurs.

<a id="return-value"></a>

## Return Value

When you call this method from Objective-C, it returns [true](https://developer.apple.com/documentation/swift/true) if the VM is in a stoppable state and the framework sent a request to stop, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

> **Note**

>  In Objective-C, this function returns a value that indicates if the VM was in a stoppable state when you made the request. It doesn’t reflect whether the VM will exit or has exited.

## See Also

### Starting and stopping the VM

- [startWithCompletionHandler:](start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [startWithOptions:completionHandler:](start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stopWithCompletionHandler:](stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [pauseWithCompletionHandler:](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resumeWithCompletionHandler:](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.
