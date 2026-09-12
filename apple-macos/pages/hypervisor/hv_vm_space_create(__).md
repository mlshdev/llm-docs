> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_space_create(_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_space_create(_:))

# hv_vm_space_create(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Creates an additional guest address space for the current task.

## Declaration

```swift
func hv_vm_space_create(_ asid: UnsafeMutablePointer<hv_vm_space_t>) -> hv_return_t
```

## Parameters

- `asid`: Pointer to the addresss space ID that Hypervisor writes on success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

The guest address space has the maximum allowable size, with a base IPA of 0 and a 4096-byte page size.

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

# hv_vm_space_create (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Creates an additional guest address space for the current task.

## Declaration

```objectivec
extern hv_return_t hv_vm_space_create(hv_vm_space_t *asid);
```

## Parameters

- `asid`: Pointer to the addresss space ID that Hypervisor writes on success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

The guest address space has the maximum allowable size, with a base IPA of 0 and a 4096-byte page size.

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
