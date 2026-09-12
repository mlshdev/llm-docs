> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/init(configuration:queue:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/init(configuration:queue:))

# init(configuration:queue:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates and configures the VM with the specified data and dispatch queue.

## Declaration

```swift
init(configuration: VZVirtualMachineConfiguration, queue: dispatch_queue_t)
```

## Parameters

- `configuration`: The configuration of the VM. The configuration must be valid, and you can verify that it’s valid by calling its [validate()](../vzvirtualmachineconfiguration/validate%28%29.md) method. The VM stores a copy of the configuration.
- `queue`: The serial dispatch queue for the VM. You must perform all VM-related operations on the specified queue, and the VM executes callbacks and delegate methods on the queue. If the queue isn’t serial, the behavior isn’t defined.

<a id="return-value"></a>

## Return Value

An initialized VM object.

## See Also

### Creating the VM

- [init(configuration:)](init%28configuration_%29.md): Creates the VM and configures it with the specified data.
- [isSupported](issupported.md): A Boolean value that indicates whether the system supports virtualization.

# initWithConfiguration:queue: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates and configures the VM with the specified data and dispatch queue.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(VZVirtualMachineConfiguration *) configuration queue:(dispatch_queue_t) queue;
```

## Parameters

- `configuration`: The configuration of the VM. The configuration must be valid, and you can verify that it’s valid by calling its [validateWithError:](../vzvirtualmachineconfiguration/validate%28%29.md) method. The VM stores a copy of the configuration.
- `queue`: The serial dispatch queue for the VM. You must perform all VM-related operations on the specified queue, and the VM executes callbacks and delegate methods on the queue. If the queue isn’t serial, the behavior isn’t defined.

<a id="return-value"></a>

## Return Value

An initialized VM object.

## See Also

### Creating the VM

- [initWithConfiguration:](init%28configuration_%29.md): Creates the VM and configures it with the specified data.
- [supported](issupported.md): A Boolean value that indicates whether the system supports virtualization.
