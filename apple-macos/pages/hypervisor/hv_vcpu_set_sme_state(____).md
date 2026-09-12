> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_sme_state(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_sme_state(_:_:))

# hv_vcpu_set_sme_state(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.2+

Sets the SME state consisting of the streaming Scalable Vector Extension (SVE) mode and ZA storage enable.

## Declaration

```swift
func hv_vcpu_set_sme_state(_ vcpu: hv_vcpu_t, _ sme_state: UnsafePointer<hv_vcpu_sme_state_t>) -> hv_return_t
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `sme_state`: The pointer to the SME state to set.

<a id="return-value"></a>

## Return Value

`HV_SUCCESS` on success, `HV_UNSUPPORTED` if SME is not supported on the platform, or an error code otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You need to call this on the owning thread

For any entry or exit from streaming SVE mode, all Z vector and P predicate registers are set to zero, and all FPSR flags are set; you need to save this state if you need to retain it across streaming SVE mode transitions.

In streaming SVE mode, the system aliases the SIMD Q registers to the bottom `128` bits of the corresponding Z register, and any modification reflects on the Z register state.

If the optional `FEAT_SME_FA64` is implemented, the full SIMD instruction set is supported in streaming SVE mode; otherwise many legacy SIMD instructions are illegal in this mode.

When finished, disable streaming SVE mode and ZA storage; this serves as a power-down hint for SME-related hardware.

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

# hv_vcpu_set_sme_state (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.2+

Sets the SME state consisting of the streaming Scalable Vector Extension (SVE) mode and ZA storage enable.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_sme_state(hv_vcpu_t vcpu, const hv_vcpu_sme_state_t *sme_state);
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `sme_state`: The pointer to the SME state to set.

<a id="return-value"></a>

## Return Value

`HV_SUCCESS` on success, `HV_UNSUPPORTED` if SME is not supported on the platform, or an error code otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You need to call this on the owning thread

For any entry or exit from streaming SVE mode, all Z vector and P predicate registers are set to zero, and all FPSR flags are set; you need to save this state if you need to retain it across streaming SVE mode transitions.

In streaming SVE mode, the system aliases the SIMD Q registers to the bottom `128` bits of the corresponding Z register, and any modification reflects on the Z register state.

If the optional `FEAT_SME_FA64` is implemented, the full SIMD instruction set is supported in streaming SVE mode; otherwise many legacy SIMD instructions are illegal in this mode.

When finished, disable streaming SVE mode and ZA storage; this serves as a power-down hint for SME-related hardware.

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
