> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vmx_read_capability(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vmx_read_capability(_:_:))

# hv_vmx_read_capability(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Returns, by reference, the VMX virtualization capabilities of the host processor.

## Declaration

```swift
func hv_vmx_read_capability(_ field: hv_vmx_capability_t, _ value: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `field`: The capability of the host processor to return. For a list of field IDs, see [hv_vmx_capability_t](hv_vmx_capability_t.md).
- `value`: The value of the capability `field`, on output. For a list of possible values, see `VMX Capability Field Values`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Capabilities

- [hv_vmx_get_msr_info(\_:\_:)](hv_vmx_get_msr_info%28____%29.md): Returns information about guest MSR configuration.
- [hv_vmx_capability_t](hv_vmx_capability_t.md): The type that describes Virtual Machine Extensions (VMX) capability fields.
- [VMX Capabilities](1469645-vmx-capabilities.md): An enumeration that represents the available VMX capabilities.
- [hv_vmx_msr_info_t](hv_vmx_msr_info_t.md): The type that describes Move to Status Register (MSR) information fields.
- [MSR Information Fields](3567084-msr-information-fields.md): The type that describes Machine Specific Register (MSR) fields.

# hv_vmx_read_capability (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Returns, by reference, the VMX virtualization capabilities of the host processor.

## Declaration

```objectivec
extern hv_return_t hv_vmx_read_capability(hv_vmx_capability_t field, uint64_t *value);
```

## Parameters

- `field`: The capability of the host processor to return. For a list of field IDs, see [hv_vmx_capability_t](hv_vmx_capability_t.md).
- `value`: The value of the capability `field`, on output. For a list of possible values, see `VMX Capability Field Values`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Capabilities

- [hv_vmx_get_msr_info](hv_vmx_get_msr_info%28____%29.md): Returns information about guest MSR configuration.
- [hv_vmx_capability_t](hv_vmx_capability_t.md): The type that describes Virtual Machine Extensions (VMX) capability fields.
- [VMX Capabilities](1469645-vmx-capabilities.md): An enumeration that represents the available VMX capabilities.
- [hv_vmx_msr_info_t](hv_vmx_msr_info_t.md): The type that describes Move to Status Register (MSR) information fields.
- [MSR Information Fields](3567084-msr-information-fields.md): The type that describes Machine Specific Register (MSR) fields.
