> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_sys_reg(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_sys_reg(_:_:_:))

# hv_vcpu_set_sys_reg(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets the value of a vCPU system register.

## Declaration

```swift
func hv_vcpu_set_sys_reg(_ vcpu: hv_vcpu_t, _ reg: hv_sys_reg_t, _ value: UInt64) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `reg`: The ID of the system register.
- `value`: The new value of the register.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### System registers

- [hv_vcpu_get_sys_reg(\_:\_:\_:)](hv_vcpu_get_sys_reg%28______%29.md): Gets the current value of a vCPU system register.
- [hv_sys_reg_t](hv_sys_reg_t.md): The type of system registers.

# hv_vcpu_set_sys_reg (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets the value of a vCPU system register.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_sys_reg(hv_vcpu_t vcpu, hv_sys_reg_t reg, uint64_t value);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `reg`: The ID of the system register.
- `value`: The new value of the register.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### System registers

- [hv_vcpu_get_sys_reg](hv_vcpu_get_sys_reg%28______%29.md): Gets the current value of a vCPU system register.
- [hv_sys_reg_t](hv_sys_reg_t.md): The type of system registers.
