> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_boot_state](https://developer.apple.com/documentation/hypervisor/hv_boot_state)

# hv_boot_state (Swift)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```swift
@frozen enum hv_boot_state
```

## Topics

### Enumeration Cases

- [hv_boot_state.HV_BS_INIT](hv_boot_state/hv_bs_init.md)
- [hv_boot_state.HV_BS_RUNNING](hv_boot_state/hv_bs_running.md)
- [hv_boot_state.HV_BS_SIPI](hv_boot_state/hv_bs_sipi.md)

### Initializers

- [init(rawValue:)](hv_boot_state/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [VM Creation Options](1447306-vm-creation-options.md): Constants that describe the creation options for a virtual machine.
- [VM Capabilities](3181560-vm-capabilities.md): An enumeration that describes the capabilities of the system.
- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
- [hv_apic_ctrl_t](hv_apic_ctrl_t.md)
- [hv_apic_intr_trigger_t](hv_apic_intr_trigger_t.md)
- [hv_apic_lvt_flavor_t](hv_apic_lvt_flavor_t.md)
- [hv_gic_distributor_reg_t](hv_gic_distributor_reg_t.md)
- [hv_gic_icc_reg_t](hv_gic_icc_reg_t.md)
- [hv_gic_ich_reg_t](hv_gic_ich_reg_t.md)
- [hv_gic_icv_reg_t](hv_gic_icv_reg_t.md)
- [hv_gic_intid_t](hv_gic_intid_t.md)
- [hv_gic_msi_reg_t](hv_gic_msi_reg_t.md)
- [hv_gic_redistributor_reg_t](hv_gic_redistributor_reg_t.md)
- [hv_sme_p_reg_t](hv_sme_p_reg_t.md)
- [hv_sme_z_reg_t](hv_sme_z_reg_t.md)

# hv_boot_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
enum hv_boot_state : uint32_t;
```

## Topics

### Enumeration Cases

- [HV_BS_INIT](hv_boot_state/hv_bs_init.md)
- [HV_BS_RUNNING](hv_boot_state/hv_bs_running.md)
- [HV_BS_SIPI](hv_boot_state/hv_bs_sipi.md)

## See Also

### Enumerations

- [VM Creation Options](1447306-vm-creation-options.md): Constants that describe the creation options for a virtual machine.
- [VM Capabilities](3181560-vm-capabilities.md): An enumeration that describes the capabilities of the system.
- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
- [hv_apic_ctrl_t](hv_apic_ctrl_t.md)
- [hv_apic_intr_trigger_t](hv_apic_intr_trigger_t.md)
- [hv_apic_lvt_flavor_t](hv_apic_lvt_flavor_t.md)
- [hv_gic_distributor_reg_t](hv_gic_distributor_reg_t.md)
- [hv_gic_icc_reg_t](hv_gic_icc_reg_t.md)
- [hv_gic_ich_reg_t](hv_gic_ich_reg_t.md)
- [hv_gic_icv_reg_t](hv_gic_icv_reg_t.md)
- [hv_gic_intid_t](hv_gic_intid_t.md)
- [hv_gic_msi_reg_t](hv_gic_msi_reg_t.md)
- [hv_gic_redistributor_reg_t](hv_gic_redistributor_reg_t.md)
- [hv_sme_p_reg_t](hv_sme_p_reg_t.md)
- [hv_sme_z_reg_t](hv_sme_z_reg_t.md)
