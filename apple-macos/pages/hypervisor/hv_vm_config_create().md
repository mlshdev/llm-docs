> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_config_create()](https://developer.apple.com/documentation/hypervisor/hv_vm_config_create())

# hv_vm_config_create() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 13.0+

Creates a virtual machine configuration object.

## Declaration

```swift
func hv_vm_config_create() -> hv_vm_config_t
```

<a id="return-value"></a>

## Return Value

A new virtual-machine configuration object. Release this object with `os_release` when no longer used.

## See Also

### Virtual machine management

- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy()](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [OS_hv_vm_config](os_hv_vm_config.md): Creates a virtual machine configuration object.
- [hv_vm_config_t](hv_vm_config_t.md): The type that defines a virtual-machine configuration.

# hv_vm_config_create (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 13.0+

Creates a virtual machine configuration object.

## Declaration

```objectivec
extern hv_vm_config_thv_vm_config_create();
```

<a id="return-value"></a>

## Return Value

A new virtual-machine configuration object. Release this object with `os_release` when no longer used.

## See Also

### Virtual machine management

- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [OS_hv_vm_config](os_hv_vm_config.md): Creates a virtual machine configuration object.
- [hv_vm_config_t](hv_vm_config_t.md): The type that defines a virtual-machine configuration.
