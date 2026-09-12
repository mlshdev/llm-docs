> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_simd_fp_uchar16_t](https://developer.apple.com/documentation/hypervisor/hv_simd_fp_uchar16_t)

# hv_simd_fp_uchar16_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The value that represents an ARM SIMD and FP register.

## Declaration

```swift
typealias hv_simd_fp_uchar16_t = SIMD16<UInt8>
```

## See Also

### SIMD & Floating-point registers

- [hv_vcpu_get_simd_fp_reg(\_:\_:\_:)](hv_vcpu_get_simd_fp_reg%28______%29.md): Gets the current value of a vCPU SIMD and FP register.
- [hv_vcpu_set_simd_fp_reg(\_:\_:\_:)](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_reg_t](hv_simd_fp_reg_t.md): The type that defines SIMD and floating-point registers.

# hv_simd_fp_uchar16_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The value that represents an ARM SIMD and FP register.

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(16))) hv_simd_fp_uchar16_t;
```

## See Also

### SIMD & Floating-point registers

- [hv_vcpu_get_simd_fp_reg](hv_vcpu_get_simd_fp_reg%28______%29.md): Gets the current value of a vCPU SIMD and FP register.
- [hv_vcpu_set_simd_fp_reg](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_reg_t](hv_simd_fp_reg_t.md): The type that defines SIMD and floating-point registers.
