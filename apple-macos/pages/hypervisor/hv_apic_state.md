> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_apic_state](https://developer.apple.com/documentation/hypervisor/hv_apic_state)

# hv_apic_state (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct hv_apic_state
```

## Topics

### Initializers

- [init()](hv_apic_state/init%28%29.md)
- [init(apic_gpa:apic_controls:tsc_deadline:apic_id:ver:tpr:apr:ldr:dfr:svr:isr:tmr:irr:esr:lvt:icr:icr_timer:dcr_timer:ccr_timer:esr_pending:boot_state:aeoi:)](hv_apic_state/init%28apic_gpa_apic_controls_tsc_deadline_apic_id_ver_tpr_apr_ldr_dfr_svr_isr_tmr_irr_esr_lvt_icr_icr_timer_dcr_timer_ccr_timer_esr_pending_boot_state_aeoi_%29.md)

### Instance Properties

- [aeoi](hv_apic_state/aeoi.md)
- [apic_controls](hv_apic_state/apic_controls.md)
- [apic_gpa](hv_apic_state/apic_gpa.md)
- [apic_id](hv_apic_state/apic_id.md)
- [apr](hv_apic_state/apr.md)
- [boot_state](hv_apic_state/boot_state.md)
- [ccr_timer](hv_apic_state/ccr_timer.md)
- [dcr_timer](hv_apic_state/dcr_timer.md)
- [dfr](hv_apic_state/dfr.md)
- [esr](hv_apic_state/esr.md)
- [esr_pending](hv_apic_state/esr_pending.md)
- [icr](hv_apic_state/icr.md)
- [icr_timer](hv_apic_state/icr_timer.md)
- [irr](hv_apic_state/irr.md)
- [isr](hv_apic_state/isr.md)
- [ldr](hv_apic_state/ldr.md)
- [lvt](hv_apic_state/lvt.md)
- [svr](hv_apic_state/svr.md)
- [tmr](hv_apic_state/tmr.md)
- [tpr](hv_apic_state/tpr.md)
- [tsc_deadline](hv_apic_state/tsc_deadline.md)
- [ver](hv_apic_state/ver.md)

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

# hv_apic_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```objectivec
struct hv_apic_state;
```

## Topics

### Instance Properties

- [aeoi](hv_apic_state/aeoi.md)
- [apic_controls](hv_apic_state/apic_controls.md)
- [apic_gpa](hv_apic_state/apic_gpa.md)
- [apic_id](hv_apic_state/apic_id.md)
- [apr](hv_apic_state/apr.md)
- [boot_state](hv_apic_state/boot_state.md)
- [ccr_timer](hv_apic_state/ccr_timer.md)
- [dcr_timer](hv_apic_state/dcr_timer.md)
- [dfr](hv_apic_state/dfr.md)
- [esr](hv_apic_state/esr.md)
- [esr_pending](hv_apic_state/esr_pending.md)
- [icr](hv_apic_state/icr.md)
- [icr_timer](hv_apic_state/icr_timer.md)
- [irr](hv_apic_state/irr.md)
- [isr](hv_apic_state/isr.md)
- [ldr](hv_apic_state/ldr.md)
- [lvt](hv_apic_state/lvt.md)
- [svr](hv_apic_state/svr.md)
- [tmr](hv_apic_state/tmr.md)
- [tpr](hv_apic_state/tpr.md)
- [tsc_deadline](hv_apic_state/tsc_deadline.md)
- [ver](hv_apic_state/ver.md)

## See Also

### Structures

- [hv_cache_type_t](hv_cache_type_t.md): The structure that describes an instruction or data cache element.
- [hv_vcpu_exit_exception_t](hv_vcpu_exit_exception_t.md): The structure that describes information about an exit from the virtual CPU (vCPU) to the host.
- [hv_apic_ctrl_t](hv_apic_ctrl_t.md)
- [hv_apic_intr_trigger_t](hv_apic_intr_trigger_t.md)
- [hv_apic_lvt_flavor_t](hv_apic_lvt_flavor_t.md)
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
