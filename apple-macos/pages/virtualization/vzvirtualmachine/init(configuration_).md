> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/init(configuration:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/init(configuration:))

# init(configuration:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates the VM and configures it with the specified data.

## Declaration

```swift
convenience init(configuration: VZVirtualMachineConfiguration)
```

## Parameters

- `configuration`: The configuration of the VM. The configuration must be valid, and you can verify that it’s valid by calling its [validate()](../vzvirtualmachineconfiguration/validate%28%29.md) method. The VM stores a copy of the configuration.

<a id="return-value"></a>

## Return Value

An initialized VM object.

<a id="Discussion"></a>

## Discussion

This VM uses your app’s main queue for all operations. You must perform all VM-related operations on the main queue, and the VM executes all callbacks and delegate methods on the main queue.

## See Also

### Creating the VM

- [init(configuration:queue:)](init%28configuration_queue_%29.md): Creates and configures the VM with the specified data and dispatch queue.
- [isSupported](issupported.md): A Boolean value that indicates whether the system supports virtualization.

# initWithConfiguration: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates the VM and configures it with the specified data.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(VZVirtualMachineConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration of the VM. The configuration must be valid, and you can verify that it’s valid by calling its [validateWithError:](../vzvirtualmachineconfiguration/validate%28%29.md) method. The VM stores a copy of the configuration.

<a id="return-value"></a>

## Return Value

An initialized VM object.

<a id="Discussion"></a>

## Discussion

This VM uses your app’s main queue for all operations. You must perform all VM-related operations on the main queue, and the VM executes all callbacks and delegate methods on the main queue.

## See Also

### Creating the VM

- [initWithConfiguration:queue:](init%28configuration_queue_%29.md): Creates and configures the VM with the specified data and dispatch queue.
- [supported](issupported.md): A Boolean value that indicates whether the system supports virtualization.
