> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/stop(completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/stop(completionhandler:))

# stop(completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Stops a VM that’s in either a running or paused state.

## Declaration

```swift
func stop(completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func stop() async throws
```

## Parameters

- `completionHandler`: A block called after the VM stopped successfully, or on error. The error parameter passed to the block is `nil` if the stop was successful.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This is a destructive operation. It stops the VM without giving the guest a chance to stop cleanly.

To determine if a VM is in a state that allows you to stop it, check the VM’s [canStop](canstop.md) or [canRequestStop](canrequeststop.md) properties.

## See Also

### Starting and stopping the VM

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the VM and notifies the specified completion handler if startup is successful.
- [start()](start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [start(options:completionHandler:)](start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [pause(completionHandler:)](pause%28completionhandler_%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [requestStop()](requeststop%28%29.md): Asks the guest operating system to stop running.
- [resume(completionHandler:)](resume%28completionhandler_%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [pause()](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resume()](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.

# stopWithCompletionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Stops a VM that’s in either a running or paused state.

## Declaration

```objectivec
- (void) stopWithCompletionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `completionHandler`: A block called after the VM stopped successfully, or on error. The error parameter passed to the block is `nil` if the stop was successful.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This is a destructive operation. It stops the VM without giving the guest a chance to stop cleanly.

To determine if a VM is in a state that allows you to stop it, check the VM’s [canStop](canstop.md) or [canRequestStop](canrequeststop.md) properties.

## See Also

### Starting and stopping the VM

- [startWithCompletionHandler:](start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [startWithOptions:completionHandler:](start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [requestStopWithError:](requeststop%28%29.md): Asks the guest operating system to stop running.
- [pauseWithCompletionHandler:](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resumeWithCompletionHandler:](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.
