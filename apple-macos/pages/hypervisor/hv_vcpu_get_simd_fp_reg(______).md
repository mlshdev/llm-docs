> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_get_simd_fp_reg(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_get_simd_fp_reg(_:_:_:))

# hv_vcpu_get_simd_fp_reg(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Gets the current value of a vCPU SIMD and FP register.

## Declaration

```swift
func hv_vcpu_get_simd_fp_reg(_ vcpu: hv_vcpu_t, _ reg: hv_simd_fp_reg_t, _ value: UnsafeMutablePointer<hv_simd_fp_uchar16_t>) -> hv_return_t
```

## Parameters

- `vcpu`: The vCPU instance.
- `reg`: The ID of the SIMD and FP register.
- `value`: The value of the register `reg` on output.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### SIMD & Floating-point registers

- [hv_vcpu_set_simd_fp_reg(\_:\_:\_:)](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_uchar16_t](hv_simd_fp_uchar16_t.md): The value that represents an ARM SIMD and FP register.
- [hv_simd_fp_reg_t](hv_simd_fp_reg_t.md): The type that defines SIMD and floating-point registers.

# hv_vcpu_get_simd_fp_reg (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Gets the current value of a vCPU SIMD and FP register.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_get_simd_fp_reg(hv_vcpu_t vcpu, hv_simd_fp_reg_t reg, hv_simd_fp_uchar16_t *value);
```

## Parameters

- `vcpu`: The vCPU instance.
- `reg`: The ID of the SIMD and FP register.
- `value`: The value of the register `reg` on output.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### SIMD & Floating-point registers

- [hv_vcpu_set_simd_fp_reg](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_uchar16_t](hv_simd_fp_uchar16_t.md): The value that represents an ARM SIMD and FP register.
- [hv_simd_fp_reg_t](hv_simd_fp_reg_t.md): The type that defines SIMD and floating-point registers.
