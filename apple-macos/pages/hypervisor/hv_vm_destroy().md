> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_destroy()](https://developer.apple.com/documentation/hypervisor/hv_vm_destroy())

# hv_vm_destroy() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Destroys the VM instance associated with the current process.

## Declaration

```swift
func hv_vm_destroy() -> hv_return_t
```

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Virtual machine management

- [hv_vm_config_create()](hv_vm_config_create%28%29.md): Creates a virtual machine configuration object.
- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [OS_hv_vm_config](os_hv_vm_config.md): Creates a virtual machine configuration object.
- [hv_vm_config_t](hv_vm_config_t.md): The type that defines a virtual-machine configuration.

# hv_vm_destroy (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Destroys the VM instance associated with the current process.

## Declaration

```objectivec
extern hv_return_t hv_vm_destroy();
```

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Virtual machine management

- [hv_vm_config_create](hv_vm_config_create%28%29.md): Creates a virtual machine configuration object.
- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [OS_hv_vm_config](os_hv_vm_config.md): Creates a virtual machine configuration object.
- [hv_vm_config_t](hv_vm_config_t.md): The type that defines a virtual-machine configuration.
