> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_simd_fp_reg_t](https://developer.apple.com/documentation/hypervisor/hv_simd_fp_reg_t)

# hv_simd_fp_reg_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The type that defines SIMD and floating-point registers.

## Declaration

```swift
struct hv_simd_fp_reg_t
```

## Topics

### SIMD and Floating-point registers

- [HV_SIMD_FP_REG_Q0](hv_simd_fp_reg_q0.md): The value representing SIMD register Q0.
- [HV_SIMD_FP_REG_Q1](hv_simd_fp_reg_q1.md): The value representing SIMD register Q1.
- [HV_SIMD_FP_REG_Q2](hv_simd_fp_reg_q2.md): The value representing SIMD register Q2.
- [HV_SIMD_FP_REG_Q3](hv_simd_fp_reg_q3.md): The value representing SIMD register Q3.
- [HV_SIMD_FP_REG_Q4](hv_simd_fp_reg_q4.md): The value representing SIMD register Q4.
- [HV_SIMD_FP_REG_Q5](hv_simd_fp_reg_q5.md): The value representing SIMD register Q5.
- [HV_SIMD_FP_REG_Q6](hv_simd_fp_reg_q6.md): The value representing SIMD register Q6.
- [HV_SIMD_FP_REG_Q7](hv_simd_fp_reg_q7.md): The value representing SIMD register Q7.
- [HV_SIMD_FP_REG_Q8](hv_simd_fp_reg_q8.md): The value representing SIMD register Q8.
- [HV_SIMD_FP_REG_Q9](hv_simd_fp_reg_q9.md): The value representing SIMD register Q9.
- [HV_SIMD_FP_REG_Q10](hv_simd_fp_reg_q10.md): The value representing SIMD register Q10.
- [HV_SIMD_FP_REG_Q11](hv_simd_fp_reg_q11.md): The value representing SIMD register Q11.
- [HV_SIMD_FP_REG_Q12](hv_simd_fp_reg_q12.md): The value representing SIMD register Q12.
- [HV_SIMD_FP_REG_Q13](hv_simd_fp_reg_q13.md): The value representing SIMD register Q13.
- [HV_SIMD_FP_REG_Q14](hv_simd_fp_reg_q14.md): The value representing SIMD register Q14.
- [HV_SIMD_FP_REG_Q15](hv_simd_fp_reg_q15.md): The value representing SIMD register Q15.
- [HV_SIMD_FP_REG_Q16](hv_simd_fp_reg_q16.md): The value representing SIMD register Q16.
- [HV_SIMD_FP_REG_Q17](hv_simd_fp_reg_q17.md): The value representing SIMD register Q17.
- [HV_SIMD_FP_REG_Q18](hv_simd_fp_reg_q18.md): The value representing SIMD register Q18.
- [HV_SIMD_FP_REG_Q19](hv_simd_fp_reg_q19.md): The value representing SIMD register Q19.
- [HV_SIMD_FP_REG_Q20](hv_simd_fp_reg_q20.md): The value representing SIMD register Q20.
- [HV_SIMD_FP_REG_Q21](hv_simd_fp_reg_q21.md): The value representing SIMD register Q21.
- [HV_SIMD_FP_REG_Q22](hv_simd_fp_reg_q22.md): The value representing SIMD register Q22.
- [HV_SIMD_FP_REG_Q23](hv_simd_fp_reg_q23.md): The value representing SIMD register Q23.
- [HV_SIMD_FP_REG_Q24](hv_simd_fp_reg_q24.md): The value representing SIMD register Q24.
- [HV_SIMD_FP_REG_Q25](hv_simd_fp_reg_q25.md): The value representing SIMD register Q25.
- [HV_SIMD_FP_REG_Q26](hv_simd_fp_reg_q26.md): The value representing SIMD register Q26.
- [HV_SIMD_FP_REG_Q27](hv_simd_fp_reg_q27.md): The value representing SIMD register Q27.
- [HV_SIMD_FP_REG_Q28](hv_simd_fp_reg_q28.md): The value representing SIMD register Q28.
- [HV_SIMD_FP_REG_Q29](hv_simd_fp_reg_q29.md): The value representing SIMD register Q29.
- [HV_SIMD_FP_REG_Q30](hv_simd_fp_reg_q30.md): The value representing SIMD register Q30.
- [HV_SIMD_FP_REG_Q31](hv_simd_fp_reg_q31.md): The value representing SIMD register Q31.

### Instance properties

- [rawValue](hv_simd_fp_reg_t/rawvalue.md): An unsigned 32-bit integer that represents SIMD and floating-point registers.

### Initializers

- [init(\_:)](hv_simd_fp_reg_t/init%28__%29.md): Creates a new SIMD and floating-point register instance.
- [init(rawValue:)](hv_simd_fp_reg_t/init%28rawvalue_%29.md): Creates a new SIMD and floating-point register instance.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### SIMD & Floating-point registers

- [hv_vcpu_get_simd_fp_reg(\_:\_:\_:)](hv_vcpu_get_simd_fp_reg%28______%29.md): Gets the current value of a vCPU SIMD and FP register.
- [hv_vcpu_set_simd_fp_reg(\_:\_:\_:)](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_uchar16_t](hv_simd_fp_uchar16_t.md): The value that represents an ARM SIMD and FP register.

# hv_simd_fp_reg_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The type that defines SIMD and floating-point registers.

## Declaration

```objectivec
typedef enum { ... } hv_simd_fp_reg_t;
```

## Topics

### SIMD and Floating-point registers

- [HV_SIMD_FP_REG_Q0](hv_simd_fp_reg_q0.md): The value representing SIMD register Q0.
- [HV_SIMD_FP_REG_Q1](hv_simd_fp_reg_q1.md): The value representing SIMD register Q1.
- [HV_SIMD_FP_REG_Q2](hv_simd_fp_reg_q2.md): The value representing SIMD register Q2.
- [HV_SIMD_FP_REG_Q3](hv_simd_fp_reg_q3.md): The value representing SIMD register Q3.
- [HV_SIMD_FP_REG_Q4](hv_simd_fp_reg_q4.md): The value representing SIMD register Q4.
- [HV_SIMD_FP_REG_Q5](hv_simd_fp_reg_q5.md): The value representing SIMD register Q5.
- [HV_SIMD_FP_REG_Q6](hv_simd_fp_reg_q6.md): The value representing SIMD register Q6.
- [HV_SIMD_FP_REG_Q7](hv_simd_fp_reg_q7.md): The value representing SIMD register Q7.
- [HV_SIMD_FP_REG_Q8](hv_simd_fp_reg_q8.md): The value representing SIMD register Q8.
- [HV_SIMD_FP_REG_Q9](hv_simd_fp_reg_q9.md): The value representing SIMD register Q9.
- [HV_SIMD_FP_REG_Q10](hv_simd_fp_reg_q10.md): The value representing SIMD register Q10.
- [HV_SIMD_FP_REG_Q11](hv_simd_fp_reg_q11.md): The value representing SIMD register Q11.
- [HV_SIMD_FP_REG_Q12](hv_simd_fp_reg_q12.md): The value representing SIMD register Q12.
- [HV_SIMD_FP_REG_Q13](hv_simd_fp_reg_q13.md): The value representing SIMD register Q13.
- [HV_SIMD_FP_REG_Q14](hv_simd_fp_reg_q14.md): The value representing SIMD register Q14.
- [HV_SIMD_FP_REG_Q15](hv_simd_fp_reg_q15.md): The value representing SIMD register Q15.
- [HV_SIMD_FP_REG_Q16](hv_simd_fp_reg_q16.md): The value representing SIMD register Q16.
- [HV_SIMD_FP_REG_Q17](hv_simd_fp_reg_q17.md): The value representing SIMD register Q17.
- [HV_SIMD_FP_REG_Q18](hv_simd_fp_reg_q18.md): The value representing SIMD register Q18.
- [HV_SIMD_FP_REG_Q19](hv_simd_fp_reg_q19.md): The value representing SIMD register Q19.
- [HV_SIMD_FP_REG_Q20](hv_simd_fp_reg_q20.md): The value representing SIMD register Q20.
- [HV_SIMD_FP_REG_Q21](hv_simd_fp_reg_q21.md): The value representing SIMD register Q21.
- [HV_SIMD_FP_REG_Q22](hv_simd_fp_reg_q22.md): The value representing SIMD register Q22.
- [HV_SIMD_FP_REG_Q23](hv_simd_fp_reg_q23.md): The value representing SIMD register Q23.
- [HV_SIMD_FP_REG_Q24](hv_simd_fp_reg_q24.md): The value representing SIMD register Q24.
- [HV_SIMD_FP_REG_Q25](hv_simd_fp_reg_q25.md): The value representing SIMD register Q25.
- [HV_SIMD_FP_REG_Q26](hv_simd_fp_reg_q26.md): The value representing SIMD register Q26.
- [HV_SIMD_FP_REG_Q27](hv_simd_fp_reg_q27.md): The value representing SIMD register Q27.
- [HV_SIMD_FP_REG_Q28](hv_simd_fp_reg_q28.md): The value representing SIMD register Q28.
- [HV_SIMD_FP_REG_Q29](hv_simd_fp_reg_q29.md): The value representing SIMD register Q29.
- [HV_SIMD_FP_REG_Q30](hv_simd_fp_reg_q30.md): The value representing SIMD register Q30.
- [HV_SIMD_FP_REG_Q31](hv_simd_fp_reg_q31.md): The value representing SIMD register Q31.

## See Also

### SIMD & Floating-point registers

- [hv_vcpu_get_simd_fp_reg](hv_vcpu_get_simd_fp_reg%28______%29.md): Gets the current value of a vCPU SIMD and FP register.
- [hv_vcpu_set_simd_fp_reg](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_uchar16_t](hv_simd_fp_uchar16_t.md): The value that represents an ARM SIMD and FP register.
