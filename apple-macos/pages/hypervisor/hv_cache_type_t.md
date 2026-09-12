> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_cache_type_t](https://developer.apple.com/documentation/hypervisor/hv_cache_type_t)

# hv_cache_type_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The structure that describes an instruction or data cache element.

## Declaration

```swift
struct hv_cache_type_t
```

## Topics

### Initializers

- [init(\_:)](hv_cache_type_t/init%28__%29.md): Creates a new 32-bit integer that describes a cache element.
- [init(rawValue:)](hv_cache_type_t/init%28rawvalue_%29.md): Creates a new cache element with the unsigned 32-bit integer you provide.

### Instance Properties

- [rawValue](hv_cache_type_t/rawvalue.md): An unsigned 32-bit integer that represents a cache element.

### Constants

- [HV_CACHE_TYPE_DATA](hv_cache_type_data.md): The value that describes a cached data value.
- [HV_CACHE_TYPE_INSTRUCTION](hv_cache_type_instruction.md): The value that describes a cached instuction value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [hv_vcpu_exit_exception_t](hv_vcpu_exit_exception_t.md): The structure that describes information about an exit from the virtual CPU (vCPU) to the host.
- [hv_apic_ctrl_t](hv_apic_ctrl_t.md)
- [hv_apic_intr_trigger_t](hv_apic_intr_trigger_t.md)
- [hv_apic_lvt_flavor_t](hv_apic_lvt_flavor_t.md)
- [hv_apic_state](hv_apic_state.md)
- [hv_apic_state_ext_t](hv_apic_state_ext_t.md)
- [hv_atpic_state](hv_atpic_state.md)
- [hv_atpic_state_ext_t](hv_atpic_state_ext_t.md)
- [hv_gic_distributor_reg_t](hv_gic_distributor_reg_t.md)
- [hv_gic_icc_reg_t](hv_gic_icc_reg_t.md)
- [hv_gic_ich_reg_t](hv_gic_ich_reg_t.md)
- [hv_gic_icv_reg_t](hv_gic_icv_reg_t.md)
- [hv_gic_intid_t](hv_gic_intid_t.md)
- [hv_gic_msi_reg_t](hv_gic_msi_reg_t.md)
- [hv_gic_redistributor_reg_t](hv_gic_redistributor_reg_t.md)

# hv_cache_type_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The structure that describes an instruction or data cache element.

## Declaration

```objectivec
typedef enum { ... } hv_cache_type_t;
```

## Topics

### Constants

- [HV_CACHE_TYPE_DATA](hv_cache_type_data.md): The value that describes a cached data value.
- [HV_CACHE_TYPE_INSTRUCTION](hv_cache_type_instruction.md): The value that describes a cached instuction value.

## See Also

### Structures

- [hv_vcpu_exit_exception_t](hv_vcpu_exit_exception_t.md): The structure that describes information about an exit from the virtual CPU (vCPU) to the host.
- [hv_apic_ctrl_t](hv_apic_ctrl_t.md)
- [hv_apic_intr_trigger_t](hv_apic_intr_trigger_t.md)
- [hv_apic_lvt_flavor_t](hv_apic_lvt_flavor_t.md)
- [hv_apic_state](hv_apic_state.md)
- [hv_apic_state_ext_t](hv_apic_state_ext_t.md)
- [hv_atpic_state](hv_atpic_state.md)
- [hv_atpic_state_ext_t](hv_atpic_state_ext_t.md)
- [hv_gic_distributor_reg_t](hv_gic_distributor_reg_t.md)
- [hv_gic_icc_reg_t](hv_gic_icc_reg_t.md)
- [hv_gic_ich_reg_t](hv_gic_ich_reg_t.md)
- [hv_gic_icv_reg_t](hv_gic_icv_reg_t.md)
- [hv_gic_intid_t](hv_gic_intid_t.md)
- [hv_gic_msi_reg_t](hv_gic_msi_reg_t.md)
- [hv_gic_redistributor_reg_t](hv_gic_redistributor_reg_t.md)
