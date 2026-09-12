> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vmx_vcpu_set_apic_address_space(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vmx_vcpu_set_apic_address_space(_:_:_:))

# hv_vmx_vcpu_set_apic_address_space(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```swift
func hv_vmx_vcpu_set_apic_address_space(_ vcpu: hv_vcpuid_t, _ asid: hv_vm_space_t, _ gpa: hv_gpaddr_t) -> hv_return_t
```

## See Also

### Functions

- [hv_sme_config_get_max_svl_bytes(\_:)](hv_sme_config_get_max_svl_bytes%28__%29.md)
- [hv_vcpu_apic_ctrl(\_:\_:)](hv_vcpu_apic_ctrl%28____%29.md)
- [hv_vcpu_apic_get_state(\_:\_:)](hv_vcpu_apic_get_state%28____%29.md)
- [hv_vcpu_apic_lsc_enter_imm32(\_:\_:\_:\_:\_:\_:\_:)](hv_vcpu_apic_lsc_enter_imm32%28______________%29.md)
- [hv_vcpu_apic_lsc_enter_r32(\_:\_:\_:\_:\_:\_:\_:\_:)](hv_vcpu_apic_lsc_enter_r32%28________________%29.md)
- [hv_vcpu_apic_lsc_invalidate(\_:)](hv_vcpu_apic_lsc_invalidate%28__%29.md)
- [hv_vcpu_apic_put_state(\_:\_:)](hv_vcpu_apic_put_state%28____%29.md)
- [hv_vcpu_apic_read(\_:\_:\_:)](hv_vcpu_apic_read%28______%29.md)
- [hv_vcpu_apic_trigger_lvt(\_:\_:)](hv_vcpu_apic_trigger_lvt%28____%29.md)
- [hv_vcpu_apic_write(\_:\_:\_:\_:)](hv_vcpu_apic_write%28________%29.md)
- [hv_vcpu_exit_apic_access_read(\_:\_:)](hv_vcpu_exit_apic_access_read%28____%29.md)
- [hv_vcpu_exit_info(\_:\_:)](hv_vcpu_exit_info%28____%29.md)
- [hv_vcpu_exit_init_ap(\_:\_:\_:)](hv_vcpu_exit_init_ap%28______%29.md)
- [hv_vcpu_exit_inject_excp(\_:\_:\_:\_:\_:)](hv_vcpu_exit_inject_excp%28__________%29.md)
- [hv_vcpu_exit_ioapic_eoi(\_:\_:)](hv_vcpu_exit_ioapic_eoi%28____%29.md)

# hv_vmx_vcpu_set_apic_address_space (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
extern hv_return_t hv_vmx_vcpu_set_apic_address_space(hv_vcpuid_t vcpu, hv_vm_space_t asid, hv_gpaddr_t gpa);
```

## See Also

### Functions

- [hv_sme_config_get_max_svl_bytes](hv_sme_config_get_max_svl_bytes%28__%29.md)
- [hv_vcpu_apic_ctrl](hv_vcpu_apic_ctrl%28____%29.md)
- [hv_vcpu_apic_get_state](hv_vcpu_apic_get_state%28____%29.md)
- [hv_vcpu_apic_lsc_enter_imm32](hv_vcpu_apic_lsc_enter_imm32%28______________%29.md)
- [hv_vcpu_apic_lsc_enter_r32](hv_vcpu_apic_lsc_enter_r32%28________________%29.md)
- [hv_vcpu_apic_lsc_invalidate](hv_vcpu_apic_lsc_invalidate%28__%29.md)
- [hv_vcpu_apic_put_state](hv_vcpu_apic_put_state%28____%29.md)
- [hv_vcpu_apic_read](hv_vcpu_apic_read%28______%29.md)
- [hv_vcpu_apic_trigger_lvt](hv_vcpu_apic_trigger_lvt%28____%29.md)
- [hv_vcpu_apic_write](hv_vcpu_apic_write%28________%29.md)
- [hv_vcpu_exit_apic_access_read](hv_vcpu_exit_apic_access_read%28____%29.md)
- [hv_vcpu_exit_info](hv_vcpu_exit_info%28____%29.md)
- [hv_vcpu_exit_init_ap](hv_vcpu_exit_init_ap%28______%29.md)
- [hv_vcpu_exit_inject_excp](hv_vcpu_exit_inject_excp%28__________%29.md)
- [hv_vcpu_exit_ioapic_eoi](hv_vcpu_exit_ioapic_eoi%28____%29.md)
