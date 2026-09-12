> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_write_register(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_write_register(_:_:_:))

# hv_vcpu_write_register(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Sets the value of an architectural x86 register of a vCPU.

## Declaration

```swift
func hv_vcpu_write_register(_ vcpu: hv_vcpuid_t, _ reg: hv_x86_reg_t, _ value: UInt64) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `reg`: The ID of the register. For possible values, see [hv_x86_reg_t](hv_x86_reg_t.md).
- `value`: The new value of the register `reg`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### CPU Registers

- [hv_vcpu_read_register(\_:\_:\_:)](hv_vcpu_read_register%28______%29.md): Returns, by reference, the current value of an architectural x86 register of a vCPU.
- [hv_x86_reg_t](hv_x86_reg_t.md): The type that defines x86 architectural registers.

# hv_vcpu_write_register (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Sets the value of an architectural x86 register of a vCPU.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_write_register(hv_vcpuid_t vcpu, hv_x86_reg_t reg, uint64_t value);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `reg`: The ID of the register. For possible values, see [hv_x86_reg_t](hv_x86_reg_t.md).
- `value`: The new value of the register `reg`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### CPU Registers

- [hv_vcpu_read_register](hv_vcpu_read_register%28______%29.md): Returns, by reference, the current value of an architectural x86 register of a vCPU.
- [hv_x86_reg_t](hv_x86_reg_t.md): The type that defines x86 architectural registers.
