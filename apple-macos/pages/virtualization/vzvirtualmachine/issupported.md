> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/issupported](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/issupported)

# isSupported (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the system supports virtualization.

## Declaration

```swift
class var isSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If virtualization is unavailable on the current device, no configuration is valid. If you want to know more about why virtualization is unavailable, call the [validate()](../vzvirtualmachineconfiguration/validate%28%29.md) method of [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) and examine the returned error object.

## See Also

### Creating the VM

- [init(configuration:)](init%28configuration_%29.md): Creates the VM and configures it with the specified data.
- [init(configuration:queue:)](init%28configuration_queue_%29.md): Creates and configures the VM with the specified data and dispatch queue.

# supported (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the system supports virtualization.

## Declaration

```objectivec
@property (class, readonly, getter=isSupported) BOOL supported;
```

<a id="Discussion"></a>

## Discussion

If virtualization is unavailable on the current device, no configuration is valid. If you want to know more about why virtualization is unavailable, call the [validateWithError:](../vzvirtualmachineconfiguration/validate%28%29.md) method of [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) and examine the returned error object.

## See Also

### Creating the VM

- [initWithConfiguration:](init%28configuration_%29.md): Creates the VM and configures it with the specified data.
- [initWithConfiguration:queue:](init%28configuration_queue_%29.md): Creates and configures the VM with the specified data and dispatch queue.
