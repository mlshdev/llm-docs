> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_exit_exception_t](https://developer.apple.com/documentation/hypervisor/hv_vcpu_exit_exception_t)

# hv_vcpu_exit_exception_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The structure that describes information about an exit from the virtual CPU (vCPU) to the host.

## Declaration

```swift
struct hv_vcpu_exit_exception_t
```

## Topics

### Initializers

- [init()](hv_vcpu_exit_exception_t/init%28%29.md): Creates a new VCPU exit exception instance.
- [init(syndrome:virtual_address:physical_address:)](hv_vcpu_exit_exception_t/init%28syndrome_virtual_address_physical_address_%29.md): Creates a new VCPU exit exception instance.with the parameters you provide.

### Instance Properties

- [physical_address](hv_vcpu_exit_exception_t/physical_address.md): The intermediate physical address of the exception in the client.
- [syndrome](hv_vcpu_exit_exception_t/syndrome.md): The vCPU exception syndrome causing the exception.
- [virtual_address](hv_vcpu_exit_exception_t/virtual_address.md): The vCPU virtual address of the exception.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
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

# hv_vcpu_exit_exception_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The structure that describes information about an exit from the virtual CPU (vCPU) to the host.

## Declaration

```objectivec
typedef struct { ... } hv_vcpu_exit_exception_t;
```

## Topics

### Instance Properties

- [physical_address](hv_vcpu_exit_exception_t/physical_address.md): The intermediate physical address of the exception in the client.
- [syndrome](hv_vcpu_exit_exception_t/syndrome.md): The vCPU exception syndrome causing the exception.
- [virtual_address](hv_vcpu_exit_exception_t/virtual_address.md): The vCPU virtual address of the exception.

## See Also

### Structures

- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
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
