> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine](https://developer.apple.com/documentation/virtualization/vzvirtualmachine)

# VZVirtualMachine (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that manages the overall state and configuration of your VM.

## Declaration

```swift
class VZVirtualMachine
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)
- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

A [VZVirtualMachine](vzvirtualmachine.md) object emulates a complete hardware machine of the same architecture as the underlying Mac computer. Use the VM to execute a guest operating system and any other apps you install. The VM manages the resources that the guest operating system uses, providing access to some hardware resources while emulating others.

Create and configure a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object with details about how you want to configure your VM, and use that object to create the [VZVirtualMachine](vzvirtualmachine.md) object. After creating the VM, call the [start(completionHandler:)](vzvirtualmachine/start%28completionhandler_%29.md) method (Swift)  or the [start()](vzvirtualmachine/start%28%29.md) method (Objective-C) to start the VM and boot the guest operating system.

> **Important**

>  The creation of a virtual machine requires your app to have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

## Topics

### Creating the VM

- [init(configuration:)](vzvirtualmachine/init%28configuration_%29.md): Creates the VM and configures it with the specified data.
- [init(configuration:queue:)](vzvirtualmachine/init%28configuration_queue_%29.md): Creates and configures the VM with the specified data and dispatch queue.
- [isSupported](vzvirtualmachine/issupported.md): A Boolean value that indicates whether the system supports virtualization.

### Responding to a stopped VM

- [delegate](vzvirtualmachine/delegate.md): A custom object you use to determine when the VM stops.
- [VZVirtualMachineDelegate](vzvirtualmachinedelegate.md): The methods you use to respond to changes in the state of the VM.

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
- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.

### Configuring VM attributes at runtime

- [consoleDevices](vzvirtualmachine/consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](vzvirtualmachine/memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](vzvirtualmachine/networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](vzvirtualmachine/socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](vzvirtualmachine/directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](vzvirtualmachine/usbcontrollers.md): The list of runtime USB controller objects.

### Getting the state of the VM

- [state](vzvirtualmachine/state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachine.State](vzvirtualmachine/state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](vzvirtualmachine/graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](vzvirtualmachine/canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](vzvirtualmachine/canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](vzvirtualmachine/canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](vzvirtualmachine/canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](vzvirtualmachine/canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](vzvirtualmachine/queue.md): The queue associated with this virtual machine.

### Saving and restoring the VM state

- [saveMachineStateTo(url:completionHandler:)](vzvirtualmachine/savemachinestateto%28url_completionhandler_%29.md): Saves the state of a VM.
- [restoreMachineStateFrom(url:completionHandler:)](vzvirtualmachine/restoremachinestatefrom%28url_completionhandler_%29.md): Restores a VM from a previously saved state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Runtime

- [VZVirtualMachineView](vzvirtualmachineview.md): A view that allows user interaction with a VM.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZVirtualMachine (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that manages the overall state and configuration of your VM.

## Declaration

```objectivec
@interface VZVirtualMachine : NSObject
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)
- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

A [VZVirtualMachine](vzvirtualmachine.md) object emulates a complete hardware machine of the same architecture as the underlying Mac computer. Use the VM to execute a guest operating system and any other apps you install. The VM manages the resources that the guest operating system uses, providing access to some hardware resources while emulating others.

Create and configure a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object with details about how you want to configure your VM, and use that object to create the [VZVirtualMachine](vzvirtualmachine.md) object. After creating the VM, call the [start(completionHandler:)](vzvirtualmachine/start%28completionhandler_%29.md) method (Swift)  or the [startWithCompletionHandler:](vzvirtualmachine/start%28%29.md) method (Objective-C) to start the VM and boot the guest operating system.

> **Important**

>  The creation of a virtual machine requires your app to have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

## Topics

### Creating the VM

- [initWithConfiguration:](vzvirtualmachine/init%28configuration_%29.md): Creates the VM and configures it with the specified data.
- [initWithConfiguration:queue:](vzvirtualmachine/init%28configuration_queue_%29.md): Creates and configures the VM with the specified data and dispatch queue.
- [supported](vzvirtualmachine/issupported.md): A Boolean value that indicates whether the system supports virtualization.

### Responding to a stopped VM

- [delegate](vzvirtualmachine/delegate.md): A custom object you use to determine when the VM stops.
- [VZVirtualMachineDelegate](vzvirtualmachinedelegate.md): The methods you use to respond to changes in the state of the VM.

### Starting and stopping the VM

- [startWithCompletionHandler:](vzvirtualmachine/start%28%29.md): Starts the VM and notifies the specified completion handler if startup was successful.
- [startWithOptions:completionHandler:](vzvirtualmachine/start%28options_completionhandler_%29.md): Starts the VM with the options and a completion handler you provide.
- [stopWithCompletionHandler:](vzvirtualmachine/stop%28completionhandler_%29.md): Stops a VM that’s in either a running or paused state.
- [requestStopWithError:](vzvirtualmachine/requeststop%28%29.md): Asks the guest operating system to stop running.
- [pauseWithCompletionHandler:](vzvirtualmachine/pause%28%29.md): Pauses a running VM and notifies the specified completion handler of the results.
- [resumeWithCompletionHandler:](vzvirtualmachine/resume%28%29.md): Resumes a paused VM and notifies the specified completion handler of the results.
- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.

### Configuring VM attributes at runtime

- [consoleDevices](vzvirtualmachine/consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](vzvirtualmachine/memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](vzvirtualmachine/networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](vzvirtualmachine/socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](vzvirtualmachine/directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](vzvirtualmachine/usbcontrollers.md): The list of runtime USB controller objects.

### Getting the state of the VM

- [state](vzvirtualmachine/state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachineState](vzvirtualmachine/state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](vzvirtualmachine/graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](vzvirtualmachine/canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](vzvirtualmachine/canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](vzvirtualmachine/canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](vzvirtualmachine/canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](vzvirtualmachine/canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](vzvirtualmachine/queue.md): The queue associated with this virtual machine.

### Saving and restoring the VM state

- [saveMachineStateToURL:completionHandler:](vzvirtualmachine/savemachinestateto%28url_completionhandler_%29.md): Saves the state of a VM.
- [restoreMachineStateFromURL:completionHandler:](vzvirtualmachine/restoremachinestatefrom%28url_completionhandler_%29.md): Restores a VM from a previously saved state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Runtime

- [VZVirtualMachineView](vzvirtualmachineview.md): A view that allows user interaction with a VM.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
