> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/start()](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/start())

# start() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Starts the VM and notifies the specified completion handler if startup was successful.

## Declaration

```swift
func start() async throws
```

<a id="Discussion"></a>

## Discussion

Call this method to start a VM that’s in the [VZVirtualMachine.State.stopped](state-swift.enum/stopped.md) or [VZVirtualMachine.State.error](state-swift.enum/error.md) state.

## See Also

### Starting and stopping the VM

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the VM and notifies the specified completion handler if startup is successful.
- [start(options:completionHandler:)](start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stop(completionHandler:)](stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [pause(completionHandler:)](pause%28completionhandler_%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [requestStop()](requeststop%28%29.md): Asks the guest operating system to stop running.
- [resume(completionHandler:)](resume%28completionhandler_%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [pause()](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resume()](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.

# startWithCompletionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Starts the VM and notifies the specified completion handler if startup was successful.

## Declaration

```objectivec
- (void) startWithCompletionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `completionHandler`: The block to call with the results of the startup attempt. This block has no return value and has one [NSError](https://developer.apple.com/documentation/foundation/nserror) object as its parameter:

  - **errorOrNil**: An error object when the VM fails to start. If the VM starts successfully, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to start a VM that’s in the [VZVirtualMachineStateStopped](state-swift.enum/stopped.md) or [VZVirtualMachineStateError](state-swift.enum/error.md) state.

## See Also

### Starting and stopping the VM

- [startWithOptions:completionHandler:](start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stopWithCompletionHandler:](stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [requestStopWithError:](requeststop%28%29.md): Asks the guest operating system to stop running.
- [pauseWithCompletionHandler:](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resumeWithCompletionHandler:](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.
