> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/3727856-model-specific-registers](https://developer.apple.com/documentation/hypervisor/3727856-model-specific-registers)

# Model-Specific Registers (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

## Topics

### Constants

- [HV_MSR_IA32_ARCH_CAPABILITIES](hv_msr_ia32_arch_capabilities.md): The value that represents the Model-Specific Register (MSR) that you use to enumerate processor capabilities.
- [HV_MSR_IA32_A_PMC0](hv_msr_ia32_a_pmc0.md): The value that represents support for address performance-counter register 0.
- [HV_MSR_IA32_A_PMC7](hv_msr_ia32_a_pmc7.md): The value that represents support for address performance-counter register 7.
- [HV_MSR_IA32_CSTAR](hv_msr_ia32_cstar.md): The value that represents the address of IA-32e Mode System Call Target Address.
- [HV_MSR_IA32_DEBUGCTL](hv_msr_ia32_debugctl.md): The value that represents the address of the Debug Control Register.
- [HV_MSR_IA32_EFER](hv_msr_ia32_efer.md): The value that represents the address of the Entended Feature Enable Register (EFER).
- [HV_MSR_IA32_FIXED_CTR0](hv_msr_ia32_fixed_ctr0.md): The value that represents the address of Fixed-Function Performance Counter Register 0.
- [HV_MSR_IA32_FIXED_CTR1](hv_msr_ia32_fixed_ctr1.md): The value that represents the address of Fixed-Function Performance Counter Register 1.
- [HV_MSR_IA32_FIXED_CTR2](hv_msr_ia32_fixed_ctr2.md): The value that represents the address of Fixed-Function Performance Counter Register 2.
- [HV_MSR_IA32_FIXED_CTR3](hv_msr_ia32_fixed_ctr3.md): The value that represents the address of Fixed-Function Performance Counter Register 3.
- [HV_MSR_IA32_FIXED_CTR_CTRL](hv_msr_ia32_fixed_ctr_ctrl.md): The value that represents the address of the Fixed-Function Counter Control Register.
- [HV_MSR_IA32_FLUSH_CMD](hv_msr_ia32_flush_cmd.md): The value that represents the address of the Flush Command Register.
- [HV_MSR_IA32_FMASK](hv_msr_ia32_fmask.md): The value that represents the address of the System Call Flag Mask (FMASK) Register.
- [HV_MSR_IA32_FS_BASE](hv_msr_ia32_fs_base.md): The value that represents the address of the map for the base address of the FS segment register.
- [HV_MSR_IA32_GS_BASE](hv_msr_ia32_gs_base.md): The value that represents the address of the map for the base address of the GS segment register.
- [HV_MSR_IA32_KERNEL_GS_BASE](hv_msr_ia32_kernel_gs_base.md): The value that represents the address swap target for the base address of the GS segment register.
- [HV_MSR_IA32_LSTAR](hv_msr_ia32_lstar.md): The value that represents the address of the IA-32e Mode System Call Target Address.
- [HV_MSR_IA32_PERFEVNTSEL0](hv_msr_ia32_perfevntsel0.md): The value that represents the address of Performance Event Select Counter 0.
- [HV_MSR_IA32_PERFEVNTSEL7](hv_msr_ia32_perfevntsel7.md): The value that represents the address of Performance Event Select Counter 7.
- [HV_MSR_IA32_PERF_GLOBAL_CTRL](hv_msr_ia32_perf_global_ctrl.md): The value that represents the address of the Global Performance Counter Control Register.
- [HV_MSR_IA32_PERF_GLOBAL_INUSE](hv_msr_ia32_perf_global_inuse.md): The value that represents the address of the register that indicates whether the core performance monitor interface is in use.
- [HV_MSR_IA32_PERF_GLOBAL_STATUS](hv_msr_ia32_perf_global_status.md): The value that represents the address of the Global Performance Status Register.
- [HV_MSR_IA32_PERF_GLOBAL_STATUS_RESET](hv_msr_ia32_perf_global_status_reset.md): The value that represents the address of the Global Performance Counter Overflow Reset Control Register.
- [HV_MSR_IA32_PERF_GLOBAL_STATUS_SET](hv_msr_ia32_perf_global_status_set.md): The value that represents the address of the Global Performance Counter Overflow Set Control Register.
- [HV_MSR_IA32_PMC0](hv_msr_ia32_pmc0.md): The value that represents the address of Performance Counter Register 0.
- [HV_MSR_IA32_PMC7](hv_msr_ia32_pmc7.md): The value that represents the address of Performance Counter Register 7.
- [HV_MSR_IA32_PRED_CMD](hv_msr_ia32_pred_cmd.md): The value that represents the address of the Prediction Command Register.
- [HV_MSR_IA32_SPEC_CTRL](hv_msr_ia32_spec_ctrl.md): The value that represents the address of Speculation Control Register.
- [HV_MSR_IA32_STAR](hv_msr_ia32_star.md): The value that represents the address of the System Call Target Address Register.
- [HV_MSR_IA32_SYSENTER_CS](hv_msr_ia32_sysenter_cs.md): The value that represents the address of the CS Register target for Current Privilege Level (CPL) 0 code.
- [HV_MSR_IA32_SYSENTER_EIP](hv_msr_ia32_sysenter_eip.md): The value that represents the address of the Extended Instruction Pointer (EIP) Register target for Current Privilege Level (CPL) 0 code.
- [HV_MSR_IA32_SYSENTER_ESP](hv_msr_ia32_sysenter_esp.md): The value that represents the address of the Extended Stack Pointer (ESP) Register target for Current Privilege Level (CPL) 0 code.
- [HV_MSR_IA32_TSC](hv_msr_ia32_tsc.md): The value that represents the address of the Time-Stamp Counter Register.
- [HV_MSR_IA32_TSC_AUX](hv_msr_ia32_tsc_aux.md): The value that represents the address of the Auxiliary Time-Stamp Counter Register.
- [HV_MSR_IA32_XSS](hv_msr_ia32_xss.md): The value that represents the address of the Extended Supervisors State Mask (XSS) Register.
- [HV_MSR_LASTBRANCH_0_FROM_IP](hv_msr_lastbranch_0_from_ip.md): The value that represents the address of the Last Branch Record 0 from Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_0_TO_IP](hv_msr_lastbranch_0_to_ip.md): The value that represents the address of the Last Branch Record 0 to Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_31_FROM_IP](hv_msr_lastbranch_31_from_ip.md): The value that represents the address of the Last Branch Record 31 from Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_31_TO_IP](hv_msr_lastbranch_31_to_ip.md): The value that represents the address of the Last Branch Record 31 to Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_INFO_0](hv_msr_lastbranch_info_0.md): The value that represents the address of the Last Branch Record 0 additional information register.
- [HV_MSR_LASTBRANCH_INFO_31](hv_msr_lastbranch_info_31.md): The value that represents the address of the Last Branch Record 31 additional information register.
- [HV_MSR_LASTBRANCH_TOS](hv_msr_lastbranch_tos.md): The value that represents the address of the Last Branch Record Top of Stack (TOS) Register.
- [HV_MSR_LASTINT_FROM_IP](hv_msr_lastint_from_ip.md): The value that represents the address of the Last Interrupt from Instruction Pointer (IP) Register.
- [HV_MSR_LASTINT_TO_IP](hv_msr_lastint_to_ip.md): The value that represents the address of the Last Interrupt to Instruction Pointer (IP) Register.
- [HV_MSR_LBR_SELECT](hv_msr_lbr_select.md): The value that represents the address of the Last Branch Record Filtering Select Register.
- [HV_MSR_PERF_METRICS](hv_msr_perf_metrics.md): The value that represents the address of the Performance Metrics Register.

## See Also

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr(\_:\_:\_:)](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr(\_:\_:\_:)](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr(\_:\_:\_:)](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_set_msr_access(\_:\_:\_:)](hv_vcpu_set_msr_access%28______%29.md): Controls the guest access of a managed Model-Specific Register (MSR).
- [hv_vcpu_enable_managed_msr(\_:\_:\_:)](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [hv_msr_flags_t](hv_msr_flags_t.md): The type representing the native Model-Specific Register (MSR) permissions.
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.

# Model-Specific Registers (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

## Topics

### Constants

- [HV_MSR_IA32_ARCH_CAPABILITIES](hv_msr_ia32_arch_capabilities.md): The value that represents the Model-Specific Register (MSR) that you use to enumerate processor capabilities.
- [HV_MSR_IA32_A_PMC0](hv_msr_ia32_a_pmc0.md): The value that represents support for address performance-counter register 0.
- [HV_MSR_IA32_A_PMC7](hv_msr_ia32_a_pmc7.md): The value that represents support for address performance-counter register 7.
- [HV_MSR_IA32_CSTAR](hv_msr_ia32_cstar.md): The value that represents the address of IA-32e Mode System Call Target Address.
- [HV_MSR_IA32_DEBUGCTL](hv_msr_ia32_debugctl.md): The value that represents the address of the Debug Control Register.
- [HV_MSR_IA32_EFER](hv_msr_ia32_efer.md): The value that represents the address of the Entended Feature Enable Register (EFER).
- [HV_MSR_IA32_FIXED_CTR0](hv_msr_ia32_fixed_ctr0.md): The value that represents the address of Fixed-Function Performance Counter Register 0.
- [HV_MSR_IA32_FIXED_CTR1](hv_msr_ia32_fixed_ctr1.md): The value that represents the address of Fixed-Function Performance Counter Register 1.
- [HV_MSR_IA32_FIXED_CTR2](hv_msr_ia32_fixed_ctr2.md): The value that represents the address of Fixed-Function Performance Counter Register 2.
- [HV_MSR_IA32_FIXED_CTR3](hv_msr_ia32_fixed_ctr3.md): The value that represents the address of Fixed-Function Performance Counter Register 3.
- [HV_MSR_IA32_FIXED_CTR_CTRL](hv_msr_ia32_fixed_ctr_ctrl.md): The value that represents the address of the Fixed-Function Counter Control Register.
- [HV_MSR_IA32_FLUSH_CMD](hv_msr_ia32_flush_cmd.md): The value that represents the address of the Flush Command Register.
- [HV_MSR_IA32_FMASK](hv_msr_ia32_fmask.md): The value that represents the address of the System Call Flag Mask (FMASK) Register.
- [HV_MSR_IA32_FS_BASE](hv_msr_ia32_fs_base.md): The value that represents the address of the map for the base address of the FS segment register.
- [HV_MSR_IA32_GS_BASE](hv_msr_ia32_gs_base.md): The value that represents the address of the map for the base address of the GS segment register.
- [HV_MSR_IA32_KERNEL_GS_BASE](hv_msr_ia32_kernel_gs_base.md): The value that represents the address swap target for the base address of the GS segment register.
- [HV_MSR_IA32_LSTAR](hv_msr_ia32_lstar.md): The value that represents the address of the IA-32e Mode System Call Target Address.
- [HV_MSR_IA32_PERFEVNTSEL0](hv_msr_ia32_perfevntsel0.md): The value that represents the address of Performance Event Select Counter 0.
- [HV_MSR_IA32_PERFEVNTSEL7](hv_msr_ia32_perfevntsel7.md): The value that represents the address of Performance Event Select Counter 7.
- [HV_MSR_IA32_PERF_GLOBAL_CTRL](hv_msr_ia32_perf_global_ctrl.md): The value that represents the address of the Global Performance Counter Control Register.
- [HV_MSR_IA32_PERF_GLOBAL_INUSE](hv_msr_ia32_perf_global_inuse.md): The value that represents the address of the register that indicates whether the core performance monitor interface is in use.
- [HV_MSR_IA32_PERF_GLOBAL_STATUS](hv_msr_ia32_perf_global_status.md): The value that represents the address of the Global Performance Status Register.
- [HV_MSR_IA32_PERF_GLOBAL_STATUS_RESET](hv_msr_ia32_perf_global_status_reset.md): The value that represents the address of the Global Performance Counter Overflow Reset Control Register.
- [HV_MSR_IA32_PERF_GLOBAL_STATUS_SET](hv_msr_ia32_perf_global_status_set.md): The value that represents the address of the Global Performance Counter Overflow Set Control Register.
- [HV_MSR_IA32_PMC0](hv_msr_ia32_pmc0.md): The value that represents the address of Performance Counter Register 0.
- [HV_MSR_IA32_PMC7](hv_msr_ia32_pmc7.md): The value that represents the address of Performance Counter Register 7.
- [HV_MSR_IA32_PRED_CMD](hv_msr_ia32_pred_cmd.md): The value that represents the address of the Prediction Command Register.
- [HV_MSR_IA32_SPEC_CTRL](hv_msr_ia32_spec_ctrl.md): The value that represents the address of Speculation Control Register.
- [HV_MSR_IA32_STAR](hv_msr_ia32_star.md): The value that represents the address of the System Call Target Address Register.
- [HV_MSR_IA32_SYSENTER_CS](hv_msr_ia32_sysenter_cs.md): The value that represents the address of the CS Register target for Current Privilege Level (CPL) 0 code.
- [HV_MSR_IA32_SYSENTER_EIP](hv_msr_ia32_sysenter_eip.md): The value that represents the address of the Extended Instruction Pointer (EIP) Register target for Current Privilege Level (CPL) 0 code.
- [HV_MSR_IA32_SYSENTER_ESP](hv_msr_ia32_sysenter_esp.md): The value that represents the address of the Extended Stack Pointer (ESP) Register target for Current Privilege Level (CPL) 0 code.
- [HV_MSR_IA32_TSC](hv_msr_ia32_tsc.md): The value that represents the address of the Time-Stamp Counter Register.
- [HV_MSR_IA32_TSC_AUX](hv_msr_ia32_tsc_aux.md): The value that represents the address of the Auxiliary Time-Stamp Counter Register.
- [HV_MSR_IA32_XSS](hv_msr_ia32_xss.md): The value that represents the address of the Extended Supervisors State Mask (XSS) Register.
- [HV_MSR_LASTBRANCH_0_FROM_IP](hv_msr_lastbranch_0_from_ip.md): The value that represents the address of the Last Branch Record 0 from Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_0_TO_IP](hv_msr_lastbranch_0_to_ip.md): The value that represents the address of the Last Branch Record 0 to Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_31_FROM_IP](hv_msr_lastbranch_31_from_ip.md): The value that represents the address of the Last Branch Record 31 from Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_31_TO_IP](hv_msr_lastbranch_31_to_ip.md): The value that represents the address of the Last Branch Record 31 to Instruction Pointer (IP) register.
- [HV_MSR_LASTBRANCH_INFO_0](hv_msr_lastbranch_info_0.md): The value that represents the address of the Last Branch Record 0 additional information register.
- [HV_MSR_LASTBRANCH_INFO_31](hv_msr_lastbranch_info_31.md): The value that represents the address of the Last Branch Record 31 additional information register.
- [HV_MSR_LASTBRANCH_TOS](hv_msr_lastbranch_tos.md): The value that represents the address of the Last Branch Record Top of Stack (TOS) Register.
- [HV_MSR_LASTINT_FROM_IP](hv_msr_lastint_from_ip.md): The value that represents the address of the Last Interrupt from Instruction Pointer (IP) Register.
- [HV_MSR_LASTINT_TO_IP](hv_msr_lastint_to_ip.md): The value that represents the address of the Last Interrupt to Instruction Pointer (IP) Register.
- [HV_MSR_LBR_SELECT](hv_msr_lbr_select.md): The value that represents the address of the Last Branch Record Filtering Select Register.
- [HV_MSR_PERF_METRICS](hv_msr_perf_metrics.md): The value that represents the address of the Performance Metrics Register.

## See Also

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_set_msr_access](hv_vcpu_set_msr_access%28______%29.md): Controls the guest access of a managed Model-Specific Register (MSR).
- [hv_vcpu_enable_managed_msr](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [hv_msr_flags_t](hv_msr_flags_t.md): The type representing the native Model-Specific Register (MSR) permissions.
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.
