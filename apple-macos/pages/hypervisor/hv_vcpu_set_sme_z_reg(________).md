> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_sme_z_reg(_:_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_sme_z_reg(_:_:_:_:))

# hv_vcpu_set_sme_z_reg(\_:\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.2+

Sets the value of a vCPU Z vector register in streaming Scalable Vector Extension (SVE) mode.

## Declaration

```swift
func hv_vcpu_set_sme_z_reg(_ vcpu: hv_vcpu_t, _ reg: hv_sme_z_reg_t, _ value: UnsafePointer<UInt8>, _ length: Int) -> hv_return_t
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `reg`: The ID of the Z vector register.
- `value`: The pointer to the register value to set.
- `length`: The length of the Z register value, in bytes.

<a id="return-value"></a>

## Return Value

`HV_SUCCESS` on success, an error code otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You need to call this on the owning thread.

Returns an error if not in streaming SVE mode (for example, when [streaming_sve_mode_enabled](hv_vcpu_sme_state_t/streaming_sve_mode_enabled.md) is `false`), or if the provided `value` storage isn’t the maximum of `SVL / 8` bytes.

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

# hv_vcpu_set_sme_z_reg (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.2+

Sets the value of a vCPU Z vector register in streaming Scalable Vector Extension (SVE) mode.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_sme_z_reg(hv_vcpu_t vcpu, hv_sme_z_reg_t reg, const uint8_t *value, size_t length);
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `reg`: The ID of the Z vector register.
- `value`: The pointer to the register value to set.
- `length`: The length of the Z register value, in bytes.

<a id="return-value"></a>

## Return Value

`HV_SUCCESS` on success, an error code otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You need to call this on the owning thread.

Returns an error if not in streaming SVE mode (for example, when [streaming_sve_mode_enabled](hv_vcpu_sme_state_t/streaming_sve_mode_enabled.md) is `false`), or if the provided `value` storage isn’t the maximum of `SVL / 8` bytes.

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
