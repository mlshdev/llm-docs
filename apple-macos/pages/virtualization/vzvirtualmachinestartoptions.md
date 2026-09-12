> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachinestartoptions](https://developer.apple.com/documentation/virtualization/vzvirtualmachinestartoptions)

# VZVirtualMachineStartOptions (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The abstract class for VM start options.

## Declaration

```swift
class VZVirtualMachineStartOptions
```

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.

### Starting and stopping the VM

- [start(completionHandler:)](vzvirtualmachine/start%28completionhandler_%29.md): Starts the VM and notifies the specified completion handler if startup is successful.
- [start()](vzvirtualmachine/start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [start(options:completionHandler:)](vzvirtualmachine/start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stop(completionHandler:)](vzvirtualmachine/stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [pause(completionHandler:)](vzvirtualmachine/pause%28completionhandler_%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [requestStop()](vzvirtualmachine/requeststop%28%29.md): Asks the guest operating system to stop running.
- [resume(completionHandler:)](vzvirtualmachine/resume%28completionhandler_%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [pause()](vzvirtualmachine/pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resume()](vzvirtualmachine/resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.

# VZVirtualMachineStartOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The abstract class for VM start options.

## Declaration

```objectivec
@interface VZVirtualMachineStartOptions : NSObject
```

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md)

## See Also

### Related Documentation

- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.

### Starting and stopping the VM

- [startWithCompletionHandler:](vzvirtualmachine/start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [startWithOptions:completionHandler:](vzvirtualmachine/start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stopWithCompletionHandler:](vzvirtualmachine/stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [requestStopWithError:](vzvirtualmachine/requeststop%28%29.md): Asks the guest operating system to stop running.
- [pauseWithCompletionHandler:](vzvirtualmachine/pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resumeWithCompletionHandler:](vzvirtualmachine/resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
