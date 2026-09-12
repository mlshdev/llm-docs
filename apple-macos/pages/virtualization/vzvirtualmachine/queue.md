> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/queue](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/queue)

# queue (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The queue associated with this virtual machine.

## Declaration

```swift
nonisolated var queue: dispatch_queue_t { get }
```

<a id="Discussion"></a>

## Discussion

This property is a reference to the queue the framework used to create the virtual machine when initialized using [init(configuration:queue:)](init%28configuration_queue_%29.md). If not specified, the default is the main queue.

The property is accessible from any queue or actor.

Other properties or function calls on [VZVirtualMachine](../vzvirtualmachine.md) must happen on this queue. The framework also invokes any completion handlers from asynchronous functions on this queue.

The following example shows use of the `VZVirtualMachine.queue` property to check to see if it’s possible to start a VM.

**Swift**

```swift
let canStart = virtualMachine.queue.sync {
    virtualMachine.canStart
}
```

**Objective-C**

```objective-c
    BOOL canStart = NO;
    dispatch_sync(virtualMachine.queue, ^{
        canStart = virtualMachine.canStart;
    });
```

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachine.State](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.

# queue (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The queue associated with this virtual machine.

## Declaration

```objectivec
@property (nonatomic, readonly) dispatch_queue_t queue;
```

<a id="Discussion"></a>

## Discussion

This property is a reference to the queue the framework used to create the virtual machine when initialized using [initWithConfiguration:queue:](init%28configuration_queue_%29.md). If not specified, the default is the main queue.

The property is accessible from any queue or actor.

Other properties or function calls on [VZVirtualMachine](../vzvirtualmachine.md) must happen on this queue. The framework also invokes any completion handlers from asynchronous functions on this queue.

The following example shows use of the `VZVirtualMachine.queue` property to check to see if it’s possible to start a VM.

**Swift**

```swift
let canStart = virtualMachine.queue.sync {
    virtualMachine.canStart
}
```

**Objective-C**

```objective-c
    BOOL canStart = NO;
    dispatch_sync(virtualMachine.queue, ^{
        canStart = virtualMachine.canStart;
    });
```

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachineState](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
