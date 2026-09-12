> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ioapic_state](https://developer.apple.com/documentation/hypervisor/hv_ioapic_state)

# hv_ioapic_state (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct hv_ioapic_state
```

## Topics

### Initializers

- [init()](hv_ioapic_state/init%28%29.md)
- [init(rtbl:irr:ioa_id:ioregsel:)](hv_ioapic_state/init%28rtbl_irr_ioa_id_ioregsel_%29.md)

### Instance Properties

- [ioa_id](hv_ioapic_state/ioa_id.md)
- [ioregsel](hv_ioapic_state/ioregsel.md)
- [irr](hv_ioapic_state/irr.md)
- [rtbl](hv_ioapic_state/rtbl.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
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

# hv_ioapic_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```objectivec
struct hv_ioapic_state;
```

## Topics

### Instance Properties

- [ioa_id](hv_ioapic_state/ioa_id.md)
- [ioregsel](hv_ioapic_state/ioregsel.md)
- [irr](hv_ioapic_state/irr.md)
- [rtbl](hv_ioapic_state/rtbl.md)

## See Also

### Structures

- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
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
