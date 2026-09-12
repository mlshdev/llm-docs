> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_atpic_state](https://developer.apple.com/documentation/hypervisor/hv_atpic_state)

# hv_atpic_state (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct hv_atpic_state
```

## Topics

### Initializers

- [init()](hv_atpic_state/init%28%29.md)
- [init(ready:icw_num:rd_cmd_reg:aeoi:poll:rotate:sfn:irq_base:request:service:mask:smm:last_request:lowprio:intr_raised:elc:)](hv_atpic_state/init%28ready_icw_num_rd_cmd_reg_aeoi_poll_rotate_sfn_irq_base_request_service_mask_smm_last_request_lowprio_intr_raised_elc_%29.md)

### Instance Properties

- [aeoi](hv_atpic_state/aeoi.md)
- [elc](hv_atpic_state/elc.md)
- [icw_num](hv_atpic_state/icw_num.md)
- [intr_raised](hv_atpic_state/intr_raised.md)
- [irq_base](hv_atpic_state/irq_base.md)
- [last_request](hv_atpic_state/last_request.md)
- [lowprio](hv_atpic_state/lowprio.md)
- [mask](hv_atpic_state/mask.md)
- [poll](hv_atpic_state/poll.md)
- [rd_cmd_reg](hv_atpic_state/rd_cmd_reg.md)
- [ready](hv_atpic_state/ready.md)
- [request](hv_atpic_state/request.md)
- [rotate](hv_atpic_state/rotate.md)
- [service](hv_atpic_state/service.md)
- [sfn](hv_atpic_state/sfn.md)
- [smm](hv_atpic_state/smm.md)

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
- [hv_atpic_state_ext_t](hv_atpic_state_ext_t.md)
- [hv_gic_distributor_reg_t](hv_gic_distributor_reg_t.md)
- [hv_gic_icc_reg_t](hv_gic_icc_reg_t.md)
- [hv_gic_ich_reg_t](hv_gic_ich_reg_t.md)
- [hv_gic_icv_reg_t](hv_gic_icv_reg_t.md)
- [hv_gic_intid_t](hv_gic_intid_t.md)
- [hv_gic_msi_reg_t](hv_gic_msi_reg_t.md)
- [hv_gic_redistributor_reg_t](hv_gic_redistributor_reg_t.md)

# hv_atpic_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```objectivec
struct hv_atpic_state;
```

## Topics

### Instance Properties

- [aeoi](hv_atpic_state/aeoi.md)
- [elc](hv_atpic_state/elc.md)
- [icw_num](hv_atpic_state/icw_num.md)
- [intr_raised](hv_atpic_state/intr_raised.md)
- [irq_base](hv_atpic_state/irq_base.md)
- [last_request](hv_atpic_state/last_request.md)
- [lowprio](hv_atpic_state/lowprio.md)
- [mask](hv_atpic_state/mask.md)
- [poll](hv_atpic_state/poll.md)
- [rd_cmd_reg](hv_atpic_state/rd_cmd_reg.md)
- [ready](hv_atpic_state/ready.md)
- [request](hv_atpic_state/request.md)
- [rotate](hv_atpic_state/rotate.md)
- [service](hv_atpic_state/service.md)
- [sfn](hv_atpic_state/sfn.md)
- [smm](hv_atpic_state/smm.md)

## See Also

### Structures

- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
- [hv_vcpu_exit_exception_t](hv_vcpu_exit_exception_t.md): The structure that describes information about an exit from the virtual CPU (vCPU) to the host.
- [hv_apic_ctrl_t](hv_apic_ctrl_t.md)
- [hv_apic_intr_trigger_t](hv_apic_intr_trigger_t.md)
- [hv_apic_lvt_flavor_t](hv_apic_lvt_flavor_t.md)
- [hv_apic_state](hv_apic_state.md)
- [hv_apic_state_ext_t](hv_apic_state_ext_t.md)
- [hv_atpic_state_ext_t](hv_atpic_state_ext_t.md)
- [hv_gic_distributor_reg_t](hv_gic_distributor_reg_t.md)
- [hv_gic_icc_reg_t](hv_gic_icc_reg_t.md)
- [hv_gic_ich_reg_t](hv_gic_ich_reg_t.md)
- [hv_gic_icv_reg_t](hv_gic_icv_reg_t.md)
- [hv_gic_intid_t](hv_gic_intid_t.md)
- [hv_gic_msi_reg_t](hv_gic_msi_reg_t.md)
- [hv_gic_redistributor_reg_t](hv_gic_redistributor_reg_t.md)
