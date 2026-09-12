> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/start(options:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/start(options:completionhandler:))

# start(options:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Starts the VM with the options and a completion handler you provide.

## Declaration

```swift
func start(options: VZVirtualMachineStartOptions, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func start(options: VZVirtualMachineStartOptions) async throws
```

## Parameters

- `options`: A [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md) object that describes controlling startup behavior of a VM using [VZMacOSBootLoader](../vzmacosbootloader.md).
- `completionHandler`: The block to call with the results of the startup attempt. This block has no return value and has one [NSError](https://developer.apple.com/documentation/foundation/nserror) object as its parameter:

  - **error**: A result type that contains an error object when the VM fails to start.

## See Also

### Related Documentation

- [VZMacOSVirtualMachineStartOptions](../vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.

### Starting and stopping the VM

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the VM and notifies the specified completion handler if startup is successful.
- [start()](start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [stop(completionHandler:)](stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [pause(completionHandler:)](pause%28completionhandler_%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [requestStop()](requeststop%28%29.md): Asks the guest operating system to stop running.
- [resume(completionHandler:)](resume%28completionhandler_%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [pause()](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resume()](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.

# startWithOptions:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Starts the VM with the options and a completion handler you provide.

## Declaration

```objectivec
- (void) startWithOptions:(VZVirtualMachineStartOptions *) options completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `options`: A [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md) object that describes controlling startup behavior of a VM using [VZMacOSBootLoader](../vzmacosbootloader.md).
- `completionHandler`: The block to call with the results of the startup attempt. This block has no return value and has one [NSError](https://developer.apple.com/documentation/foundation/nserror) object as its parameter:

  - **error**: A result type that contains an error object when the VM fails to start.

## See Also

### Related Documentation

- [VZMacOSVirtualMachineStartOptions](../vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.

### Starting and stopping the VM

- [startWithCompletionHandler:](start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [stopWithCompletionHandler:](stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [requestStopWithError:](requeststop%28%29.md): Asks the guest operating system to stop running.
- [pauseWithCompletionHandler:](pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resumeWithCompletionHandler:](resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](../vzvirtualmachinestartoptions.md): The abstract class for VM start options.
