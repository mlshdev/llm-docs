> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_reg_t](https://developer.apple.com/documentation/hypervisor/hv_reg_t)

# hv_reg_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The type that defines general registers.

## Declaration

```swift
struct hv_reg_t
```

## Topics

### General registers

- [HV_REG_CPSR](hv_reg_cpsr.md): The value that identifies the current program status register (CPSR).
- [HV_REG_LR](hv_reg_lr.md): The value that identifies the link register (LR).
- [HV_REG_PC](hv_reg_pc.md): The value that identifies the program counter (PC).
- [HV_REG_FP](hv_reg_fp.md): The value that identifies the frame pointer (FP).
- [HV_REG_FPCR](hv_reg_fpcr.md): The value that identifies the floating-point control register (FPCR).
- [HV_REG_FPSR](hv_reg_fpsr.md): The value that identifies the floating-point status register (FPSR).
- [HV_REG_X0](hv_reg_x0.md): The value that identifies register X0.
- [HV_REG_X1](hv_reg_x1.md): The value that identifies register X1.
- [HV_REG_X2](hv_reg_x2.md): The value that identifies register X2.
- [HV_REG_X3](hv_reg_x3.md): The value that identifies register X3.
- [HV_REG_X4](hv_reg_x4.md): The value that identifies register X4.
- [HV_REG_X5](hv_reg_x5.md): The value that identifies register X5.
- [HV_REG_X6](hv_reg_x6.md): The value that identifies register X6.
- [HV_REG_X7](hv_reg_x7.md): The value that identifies register X7.
- [HV_REG_X8](hv_reg_x8.md): The value that identifies register X8.
- [HV_REG_X9](hv_reg_x9.md): The value that identifies register X9.
- [HV_REG_X10](hv_reg_x10.md): The value that identifies register X10.
- [HV_REG_X11](hv_reg_x11.md): The value that identifies register X11.
- [HV_REG_X12](hv_reg_x12.md): The value that identifies register X12.
- [HV_REG_X13](hv_reg_x13.md): The value that identifies register X13.
- [HV_REG_X14](hv_reg_x14.md): The value that identifies register X14.
- [HV_REG_X15](hv_reg_x15.md): The value that identifies register X15.
- [HV_REG_X16](hv_reg_x16.md): The value that identifies register X16.
- [HV_REG_X17](hv_reg_x17.md): The value that identifies register X17.
- [HV_REG_X18](hv_reg_x18.md): The value that identifies register X18.
- [HV_REG_X19](hv_reg_x19.md): The value that identifies register X19.
- [HV_REG_X20](hv_reg_x20.md): The value that identifies register X20.
- [HV_REG_X21](hv_reg_x21.md): The value that identifies register X21.
- [HV_REG_X22](hv_reg_x22.md): The value that identifies register X22.
- [HV_REG_X23](hv_reg_x23.md): The value that identifies register X23.
- [HV_REG_X24](hv_reg_x24.md): The value that identifies register X24.
- [HV_REG_X25](hv_reg_x25.md): The value that identifies register X25.
- [HV_REG_X26](hv_reg_x26.md): The value that identifies register X26.
- [HV_REG_X27](hv_reg_x27.md): The value that identifies register X27.
- [HV_REG_X28](hv_reg_x28.md): The value that identifies register X28.
- [HV_REG_X29](hv_reg_x29.md): The value that identifies register X29.
- [HV_REG_X30](hv_reg_x30.md): The value that identifies register X30.

### Instance properties

- [rawValue](hv_reg_t/rawvalue.md): A 32-bit unsigned integer that represents the general registers.

### Initializers

- [init(\_:)](hv_reg_t/init%28__%29.md): Creates a new general register instance initialized with the value you provide.
- [init(rawValue:)](hv_reg_t/init%28rawvalue_%29.md): Creates a new general register instance initialized with the value you provide.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### General registers

- [hv_vcpu_get_reg(\_:\_:\_:)](hv_vcpu_get_reg%28______%29.md): Gets the current value of a vCPU register.
- [hv_vcpu_set_reg(\_:\_:\_:)](hv_vcpu_set_reg%28______%29.md): Sets the value of a vCPU register.

# hv_reg_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The type that defines general registers.

## Declaration

```objectivec
typedef enum { ... } hv_reg_t;
```

## Topics

### General registers

- [HV_REG_CPSR](hv_reg_cpsr.md): The value that identifies the current program status register (CPSR).
- [HV_REG_LR](hv_reg_lr.md): The value that identifies the link register (LR).
- [HV_REG_PC](hv_reg_pc.md): The value that identifies the program counter (PC).
- [HV_REG_FP](hv_reg_fp.md): The value that identifies the frame pointer (FP).
- [HV_REG_FPCR](hv_reg_fpcr.md): The value that identifies the floating-point control register (FPCR).
- [HV_REG_FPSR](hv_reg_fpsr.md): The value that identifies the floating-point status register (FPSR).
- [HV_REG_X0](hv_reg_x0.md): The value that identifies register X0.
- [HV_REG_X1](hv_reg_x1.md): The value that identifies register X1.
- [HV_REG_X2](hv_reg_x2.md): The value that identifies register X2.
- [HV_REG_X3](hv_reg_x3.md): The value that identifies register X3.
- [HV_REG_X4](hv_reg_x4.md): The value that identifies register X4.
- [HV_REG_X5](hv_reg_x5.md): The value that identifies register X5.
- [HV_REG_X6](hv_reg_x6.md): The value that identifies register X6.
- [HV_REG_X7](hv_reg_x7.md): The value that identifies register X7.
- [HV_REG_X8](hv_reg_x8.md): The value that identifies register X8.
- [HV_REG_X9](hv_reg_x9.md): The value that identifies register X9.
- [HV_REG_X10](hv_reg_x10.md): The value that identifies register X10.
- [HV_REG_X11](hv_reg_x11.md): The value that identifies register X11.
- [HV_REG_X12](hv_reg_x12.md): The value that identifies register X12.
- [HV_REG_X13](hv_reg_x13.md): The value that identifies register X13.
- [HV_REG_X14](hv_reg_x14.md): The value that identifies register X14.
- [HV_REG_X15](hv_reg_x15.md): The value that identifies register X15.
- [HV_REG_X16](hv_reg_x16.md): The value that identifies register X16.
- [HV_REG_X17](hv_reg_x17.md): The value that identifies register X17.
- [HV_REG_X18](hv_reg_x18.md): The value that identifies register X18.
- [HV_REG_X19](hv_reg_x19.md): The value that identifies register X19.
- [HV_REG_X20](hv_reg_x20.md): The value that identifies register X20.
- [HV_REG_X21](hv_reg_x21.md): The value that identifies register X21.
- [HV_REG_X22](hv_reg_x22.md): The value that identifies register X22.
- [HV_REG_X23](hv_reg_x23.md): The value that identifies register X23.
- [HV_REG_X24](hv_reg_x24.md): The value that identifies register X24.
- [HV_REG_X25](hv_reg_x25.md): The value that identifies register X25.
- [HV_REG_X26](hv_reg_x26.md): The value that identifies register X26.
- [HV_REG_X27](hv_reg_x27.md): The value that identifies register X27.
- [HV_REG_X28](hv_reg_x28.md): The value that identifies register X28.
- [HV_REG_X29](hv_reg_x29.md): The value that identifies register X29.
- [HV_REG_X30](hv_reg_x30.md): The value that identifies register X30.

## See Also

### General registers

- [hv_vcpu_get_reg](hv_vcpu_get_reg%28______%29.md): Gets the current value of a vCPU register.
- [hv_vcpu_set_reg](hv_vcpu_set_reg%28______%29.md): Sets the value of a vCPU register.
