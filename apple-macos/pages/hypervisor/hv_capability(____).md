> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_capability(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_capability(_:_:))

# hv_capability(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Gets the value of capabilities of the system.

## Declaration

```swift
func hv_capability(_ capability: hv_capability_t, _ value: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `capability`: The capability to request.
- `value`: The value for `capability`, on output.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Intel-based Mac only.

## See Also

### Virtual machine management

- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy()](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_vm_options_t](hv_vm_options_t.md): Options you use when creating a virtual machine.
- [hv_capability_t](hv_capability_t.md): The type of system capabilities.

# hv_capability (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Gets the value of capabilities of the system.

## Declaration

```objectivec
extern hv_return_t hv_capability(hv_capability_t capability, uint64_t *value);
```

## Parameters

- `capability`: The capability to request.
- `value`: The value for `capability`, on output.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Intel-based Mac only.

## See Also

### Virtual machine management

- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_vm_options_t](hv_vm_options_t.md): Options you use when creating a virtual machine.
- [hv_capability_t](hv_capability_t.md): The type of system capabilities.
