> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/1469436-virtual_machine_control_structur-enum](https://developer.apple.com/documentation/hypervisor/1469436-virtual_machine_control_structur-enum)

# Virtual Machine control structure (VMCS) Field IDs (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Identify the fields of the virtual machine control structure.

<a id="overview"></a>

## Overview

Used by the functions [hv_vmx_vcpu_read_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_vmcs%28______%29.md) and [hv_vmx_vcpu_write_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_vmcs%28______%29.md). The VMCS fields are read-only or read-write by the Hypervisor framework, according to the following table:

Readable and Writable VMCS Fields - Guest Fields

| Guest | Field |
| --- | --- |
| RIP, RSP, RFLAGS |  |
| CR3, CR4, DR7 |  |
| Selector | {ES, CS, SS, DS, FS, GS, LDTR, TR} |
| Base | {ES, CS, SS, DS, FS, GS, LDTR, TR, GDTR, IDTR} |
| Limit | {ES, CS, SS, DS, FS, GS, LDTR, TR, GDTR, IDTR} |
| Access Rights | {ES, CS, SS, DS, FS, GS, LDTR, TR} |
| PDPTE | {0, 1, 2, 3} |
| CR3-Target | {0, 1, 2, 3} |
| IA32_SYSENTER_CS |  |
| IA32_SYSENTER_ESP |  |
| IA32_SYSENTER_EIP |  |
| IA32_EFER |  |
| Interruptibility State |  |
| Pending Debug Exceptions |  |

Readable and Writable VMCS Fields - Control Fields

| Control Field |
| --- |
| Exception Bitmap |
| Page-Fault Error-Code Mask |
| VM-Entry Interruption-Information Field |
| VM-Entry Exception Error Code |
| VM-Entry Instruction Length |
| TPR Threshold |
| PLE Gap |
| PLE Window |
| CR0 Guest/Host Mask |
| CR4 Guest/Host Mask |
| CR0 Read Shadow |
| CR4 Read Shadow |

Readable and Conditionally Writable VMCS Fields - Guest Fields

| Guest Field | Condition |
| --- | --- |
| CR0 | CR0.CD and CR0.NW are unset |
| Activity State | ACTIVE or HLT |

Readable and Conditionally Writable VMCS Fields - Control Fields

| Control Field | Condition |
| --- | --- |
| CR0 Guest/Host Mask | CR0.CD and CR0.NW are set |
| Pin-Based VM-Execution Controls | [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md) returns true |
| Primary Processor-Based VM-ExecutionControls | [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md) returns true |
| Secondary Processor-Based VM-ExecutionControls | [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md) returns true |
| VM-Entry Controls | [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md) returns true |

Read-Only VMCS Fields - Control Fields

| Control Field |
| --- |
| TSC Offset |
| APIC-Access Address |

Read-Only VMCS Fields - Data Fields

| Data Fields |
| --- |
| VM-Instruction Error |
| Exit Reason |
| VM-Exit Interruption Information |
| VM-Exit Interruption Error Code |
| IDT-Vectoring Information Field |
| IDT-Vectoring Error Code |
| VM-Exit Instruction Length |
| VM-Exit Instruction Information |
| Guest-Physical Address |
| Exit Qualification |
| Guest-Linear Address |

## Topics

### IDs

- [VMCS_VPID](vmcs_vpid.md)
- [VMCS_CTRL_POSTED_INT_N_VECTOR](vmcs_ctrl_posted_int_n_vector.md)
- [VMCS_CTRL_EPTP_INDEX](vmcs_ctrl_eptp_index.md)
- [VMCS_GUEST_ES](vmcs_guest_es.md)
- [VMCS_GUEST_CS](vmcs_guest_cs.md)
- [VMCS_GUEST_SS](vmcs_guest_ss.md)
- [VMCS_GUEST_DS](vmcs_guest_ds.md)
- [VMCS_GUEST_FS](vmcs_guest_fs.md)
- [VMCS_GUEST_GS](vmcs_guest_gs.md)
- [VMCS_GUEST_LDTR](vmcs_guest_ldtr.md)
- [VMCS_GUEST_TR](vmcs_guest_tr.md)
- [VMCS_GUEST_INT_STATUS](vmcs_guest_int_status.md)
- [VMCS_GUESTPML_INDEX](vmcs_guestpml_index.md)
- [VMCS_HOST_ES](vmcs_host_es.md)
- [VMCS_HOST_CS](vmcs_host_cs.md)
- [VMCS_HOST_SS](vmcs_host_ss.md)
- [VMCS_HOST_DS](vmcs_host_ds.md)
- [VMCS_HOST_FS](vmcs_host_fs.md)
- [VMCS_HOST_GS](vmcs_host_gs.md)
- [VMCS_HOST_TR](vmcs_host_tr.md)
- [VMCS_CTRL_IO_BITMAP_A](vmcs_ctrl_io_bitmap_a.md)
- [VMCS_CTRL_IO_BITMAP_B](vmcs_ctrl_io_bitmap_b.md)
- [VMCS_CTRL_MSR_BITMAPS](vmcs_ctrl_msr_bitmaps.md)
- [VMCS_CTRL_VMEXIT_MSR_STORE_ADDR](vmcs_ctrl_vmexit_msr_store_addr.md)
- [VMCS_CTRL_VMEXIT_MSR_LOAD_ADDR](vmcs_ctrl_vmexit_msr_load_addr.md)
- [VMCS_CTRL_VMENTRY_MSR_LOAD_ADDR](vmcs_ctrl_vmentry_msr_load_addr.md)
- [VMCS_CTRL_EXECUTIVE_VMCS_PTR](vmcs_ctrl_executive_vmcs_ptr.md)
- [VMCS_CTRL_PML_ADDR](vmcs_ctrl_pml_addr.md)
- [VMCS_CTRL_TSC_OFFSET](vmcs_ctrl_tsc_offset.md)
- [VMCS_CTRL_VIRTUAL_APIC](vmcs_ctrl_virtual_apic.md)
- [VMCS_CTRL_APIC_ACCESS](vmcs_ctrl_apic_access.md)
- [VMCS_CTRL_POSTED_INT_DESC_ADDR](vmcs_ctrl_posted_int_desc_addr.md)
- [VMCS_CTRL_VMFUNC_CTRL](vmcs_ctrl_vmfunc_ctrl.md)
- [VMCS_CTRL_EPTP](vmcs_ctrl_eptp.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_0](vmcs_ctrl_eoi_exit_bitmap_0.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_1](vmcs_ctrl_eoi_exit_bitmap_1.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_2](vmcs_ctrl_eoi_exit_bitmap_2.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_3](vmcs_ctrl_eoi_exit_bitmap_3.md)
- [VMCS_CTRL_EPTP_LIST_ADDR](vmcs_ctrl_eptp_list_addr.md)
- [VMCS_CTRL_VMREAD_BITMAP_ADDR](vmcs_ctrl_vmread_bitmap_addr.md)
- [VMCS_CTRL_VMWRITE_BITMAP_ADDR](vmcs_ctrl_vmwrite_bitmap_addr.md)
- [VMCS_CTRL_VIRT_EXC_INFO_ADDR](vmcs_ctrl_virt_exc_info_addr.md)
- [VMCS_CTRL_XSS_EXITING_BITMAP](vmcs_ctrl_xss_exiting_bitmap.md)
- [VMCS_CTRL_ENCLS_EXITING_BITMAP](vmcs_ctrl_encls_exiting_bitmap.md)
- [VMCS_CTRL_SPP_TABLE](vmcs_ctrl_spp_table.md)
- [VMCS_CTRL_TSC_MULTIPLIER](vmcs_ctrl_tsc_multiplier.md)
- [VMCS_GUEST_PHYSICAL_ADDRESS](vmcs_guest_physical_address.md)
- [VMCS_GUEST_LINK_POINTER](vmcs_guest_link_pointer.md)
- [VMCS_GUEST_IA32_DEBUGCTL](vmcs_guest_ia32_debugctl.md)
- [VMCS_GUEST_IA32_PAT](vmcs_guest_ia32_pat.md)
- [VMCS_GUEST_IA32_EFER](vmcs_guest_ia32_efer.md)
- [VMCS_GUEST_IA32_PERF_GLOBAL_CTRL](vmcs_guest_ia32_perf_global_ctrl.md)
- [VMCS_GUEST_PDPTE0](vmcs_guest_pdpte0.md)
- [VMCS_GUEST_PDPTE1](vmcs_guest_pdpte1.md)
- [VMCS_GUEST_PDPTE2](vmcs_guest_pdpte2.md)
- [VMCS_GUEST_PDPTE3](vmcs_guest_pdpte3.md)
- [VMCS_GUEST_IA32_BNDCFGS](vmcs_guest_ia32_bndcfgs.md)
- [VMCS_GUEST_IA32_RTIT_CTL](vmcs_guest_ia32_rtit_ctl.md)
- [VMCS_HOST_IA32_PAT](vmcs_host_ia32_pat.md)
- [VMCS_HOST_IA32_EFER](vmcs_host_ia32_efer.md)
- [VMCS_HOST_IA32_PERF_GLOBAL_CTRL](vmcs_host_ia32_perf_global_ctrl.md)
- [VMCS_CTRL_PIN_BASED](vmcs_ctrl_pin_based.md)
- [VMCS_CTRL_CPU_BASED](vmcs_ctrl_cpu_based.md)
- [VMCS_CTRL_EXC_BITMAP](vmcs_ctrl_exc_bitmap.md)
- [VMCS_CTRL_PF_ERROR_MASK](vmcs_ctrl_pf_error_mask.md)
- [VMCS_CTRL_PF_ERROR_MATCH](vmcs_ctrl_pf_error_match.md)
- [VMCS_CTRL_CR3_COUNT](vmcs_ctrl_cr3_count.md)
- [VMCS_CTRL_VMEXIT_CONTROLS](vmcs_ctrl_vmexit_controls.md)
- [VMCS_CTRL_VMEXIT_MSR_STORE_COUNT](vmcs_ctrl_vmexit_msr_store_count.md)
- [VMCS_CTRL_VMEXIT_MSR_LOAD_COUNT](vmcs_ctrl_vmexit_msr_load_count.md)
- [VMCS_CTRL_VMENTRY_CONTROLS](vmcs_ctrl_vmentry_controls.md)
- [VMCS_CTRL_VMENTRY_MSR_LOAD_COUNT](vmcs_ctrl_vmentry_msr_load_count.md)
- [VMCS_CTRL_VMENTRY_IRQ_INFO](vmcs_ctrl_vmentry_irq_info.md)
- [VMCS_CTRL_VMENTRY_EXC_ERROR](vmcs_ctrl_vmentry_exc_error.md)
- [VMCS_CTRL_VMENTRY_INSTR_LEN](vmcs_ctrl_vmentry_instr_len.md)
- [VMCS_CTRL_TPR_THRESHOLD](vmcs_ctrl_tpr_threshold.md)
- [VMCS_CTRL_CPU_BASED2](vmcs_ctrl_cpu_based2.md)
- [VMCS_CTRL_PLE_GAP](vmcs_ctrl_ple_gap.md)
- [VMCS_CTRL_PLE_WINDOW](vmcs_ctrl_ple_window.md)
- [VMCS_RO_INSTR_ERROR](vmcs_ro_instr_error.md)
- [VMCS_RO_EXIT_REASON](vmcs_ro_exit_reason.md)
- [VMCS_RO_VMEXIT_IRQ_INFO](vmcs_ro_vmexit_irq_info.md)
- [VMCS_RO_VMEXIT_IRQ_ERROR](vmcs_ro_vmexit_irq_error.md)
- [VMCS_RO_IDT_VECTOR_INFO](vmcs_ro_idt_vector_info.md)
- [VMCS_RO_IDT_VECTOR_ERROR](vmcs_ro_idt_vector_error.md)
- [VMCS_RO_VMEXIT_INSTR_LEN](vmcs_ro_vmexit_instr_len.md)
- [VMCS_RO_VMX_INSTR_INFO](vmcs_ro_vmx_instr_info.md)
- [VMCS_GUEST_ES_LIMIT](vmcs_guest_es_limit.md)
- [VMCS_GUEST_CS_LIMIT](vmcs_guest_cs_limit.md)
- [VMCS_GUEST_SS_LIMIT](vmcs_guest_ss_limit.md)
- [VMCS_GUEST_DS_LIMIT](vmcs_guest_ds_limit.md)
- [VMCS_GUEST_FS_LIMIT](vmcs_guest_fs_limit.md)
- [VMCS_GUEST_GS_LIMIT](vmcs_guest_gs_limit.md)
- [VMCS_GUEST_LDTR_LIMIT](vmcs_guest_ldtr_limit.md)
- [VMCS_GUEST_TR_LIMIT](vmcs_guest_tr_limit.md)
- [VMCS_GUEST_GDTR_LIMIT](vmcs_guest_gdtr_limit.md)
- [VMCS_GUEST_IDTR_LIMIT](vmcs_guest_idtr_limit.md)
- [VMCS_GUEST_ES_AR](vmcs_guest_es_ar.md)
- [VMCS_GUEST_CS_AR](vmcs_guest_cs_ar.md)
- [VMCS_GUEST_SS_AR](vmcs_guest_ss_ar.md)
- [VMCS_GUEST_DS_AR](vmcs_guest_ds_ar.md)
- [VMCS_GUEST_FS_AR](vmcs_guest_fs_ar.md)
- [VMCS_GUEST_GS_AR](vmcs_guest_gs_ar.md)
- [VMCS_GUEST_LDTR_AR](vmcs_guest_ldtr_ar.md)
- [VMCS_GUEST_TR_AR](vmcs_guest_tr_ar.md)
- [VMCS_GUEST_INTERRUPTIBILITY](vmcs_guest_interruptibility.md)
- [VMCS_GUEST_IGNORE_IRQ](vmcs_guest_ignore_irq.md)
- [VMCS_GUEST_ACTIVITY_STATE](vmcs_guest_activity_state.md)
- [VMCS_GUEST_SMBASE](vmcs_guest_smbase.md)
- [VMCS_GUEST_IA32_SYSENTER_CS](vmcs_guest_ia32_sysenter_cs.md)
- [VMCS_GUEST_VMX_TIMER_VALUE](vmcs_guest_vmx_timer_value.md)
- [VMCS_HOST_IA32_SYSENTER_CS](vmcs_host_ia32_sysenter_cs.md)
- [VMCS_CTRL_CR0_MASK](vmcs_ctrl_cr0_mask.md)
- [VMCS_CTRL_CR4_MASK](vmcs_ctrl_cr4_mask.md)
- [VMCS_CTRL_CR0_SHADOW](vmcs_ctrl_cr0_shadow.md)
- [VMCS_CTRL_CR4_SHADOW](vmcs_ctrl_cr4_shadow.md)
- [VMCS_CTRL_CR3_VALUE0](vmcs_ctrl_cr3_value0.md)
- [VMCS_CTRL_CR3_VALUE1](vmcs_ctrl_cr3_value1.md)
- [VMCS_CTRL_CR3_VALUE2](vmcs_ctrl_cr3_value2.md)
- [VMCS_CTRL_CR3_VALUE3](vmcs_ctrl_cr3_value3.md)
- [VMCS_RO_EXIT_QUALIFIC](vmcs_ro_exit_qualific.md)
- [VMCS_RO_IO_RCX](vmcs_ro_io_rcx.md)
- [VMCS_RO_IO_RSI](vmcs_ro_io_rsi.md)
- [VMCS_RO_IO_RDI](vmcs_ro_io_rdi.md)
- [VMCS_RO_IO_RIP](vmcs_ro_io_rip.md)
- [VMCS_RO_GUEST_LIN_ADDR](vmcs_ro_guest_lin_addr.md)
- [VMCS_GUEST_CR0](vmcs_guest_cr0.md)
- [VMCS_GUEST_CR3](vmcs_guest_cr3.md)
- [VMCS_GUEST_CR4](vmcs_guest_cr4.md)
- [VMCS_GUEST_ES_BASE](vmcs_guest_es_base.md)
- [VMCS_GUEST_CS_BASE](vmcs_guest_cs_base.md)
- [VMCS_GUEST_SS_BASE](vmcs_guest_ss_base.md)
- [VMCS_GUEST_DS_BASE](vmcs_guest_ds_base.md)
- [VMCS_GUEST_FS_BASE](vmcs_guest_fs_base.md)
- [VMCS_GUEST_GS_BASE](vmcs_guest_gs_base.md)
- [VMCS_GUEST_IDTR_BASE](vmcs_guest_idtr_base.md)
- [VMCS_GUEST_TR_BASE](vmcs_guest_tr_base.md)
- [VMCS_GUEST_GDTR_BASE](vmcs_guest_gdtr_base.md)
- [VMCS_GUEST_LDTR_BASE](vmcs_guest_ldtr_base.md)
- [VMCS_GUEST_DR7](vmcs_guest_dr7.md)
- [VMCS_GUEST_RSP](vmcs_guest_rsp.md)
- [VMCS_GUEST_RIP](vmcs_guest_rip.md)
- [VMCS_GUEST_RFLAGS](vmcs_guest_rflags.md)
- [VMCS_GUEST_DEBUG_EXC](vmcs_guest_debug_exc.md)
- [VMCS_GUEST_SYSENTER_ESP](vmcs_guest_sysenter_esp.md)
- [VMCS_GUEST_SYSENTER_EIP](vmcs_guest_sysenter_eip.md)
- [VMCS_HOST_CR0](vmcs_host_cr0.md)
- [VMCS_HOST_CR3](vmcs_host_cr3.md)
- [VMCS_HOST_CR4](vmcs_host_cr4.md)
- [VMCS_HOST_FS_BASE](vmcs_host_fs_base.md)
- [VMCS_HOST_GS_BASE](vmcs_host_gs_base.md)
- [VMCS_HOST_TR_BASE](vmcs_host_tr_base.md)
- [VMCS_HOST_GDTR_BASE](vmcs_host_gdtr_base.md)
- [VMCS_HOST_IDTR_BASE](vmcs_host_idtr_base.md)
- [VMCS_HOST_IA32_SYSENTER_ESP](vmcs_host_ia32_sysenter_esp.md)
- [VMCS_HOST_IA32_SYSENTER_EIP](vmcs_host_ia32_sysenter_eip.md)
- [VMCS_HOST_RSP](vmcs_host_rsp.md)
- [VMCS_HOST_RIP](vmcs_host_rip.md)
- [VMCS_MAX](vmcs_max.md)

### Interruptibility options

- [GUEST_INTRBILITY_MOVSS_BLOCKING](guest_intrbility_movss_blocking.md)
- [GUEST_INTRBILITY_NMI_BLOCKING](guest_intrbility_nmi_blocking.md)
- [GUEST_INTRBILITY_SMI_BLOCKING](guest_intrbility_smi_blocking.md)
- [GUEST_INTRBILITY_STI_BLOCKING](guest_intrbility_sti_blocking.md)

### Constants

- [VMCS_INVALID](vmcs_invalid.md)
- [VMCS_CTRL_ENCLV_EXITING_BITMAP](vmcs_ctrl_enclv_exiting_bitmap.md)
- [VMCS_GUEST_IA32_INTR_SSP_TABLE_ADDR](vmcs_guest_ia32_intr_ssp_table_addr.md)
- [VMCS_GUEST_IA32_PKRS](vmcs_guest_ia32_pkrs.md)
- [VMCS_GUEST_IA32_S_CET](vmcs_guest_ia32_s_cet.md)
- [VMCS_GUEST_SSP](vmcs_guest_ssp.md)
- [VMCS_HOST_IA32_INTR_SSP_TABLE_ADDR](vmcs_host_ia32_intr_ssp_table_addr.md)
- [VMCS_HOST_IA32_PKRS](vmcs_host_ia32_pkrs.md)
- [VMCS_HOST_IA32_S_CET](vmcs_host_ia32_s_cet.md)
- [VMCS_HOST_SSP](vmcs_host_ssp.md)

## See Also

### Field management

- [Virtual Machine Control Structure (VMCS) Field IDs](virtual-machine-control-structure-vmcs-field-ids.md): Fields you can read or change using the Hypervisor framework’s read and write functions.
- [hv_vmx_vcpu_read_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_vmcs%28______%29.md): Returns, by reference, the current value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_write_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_vmcs%28______%29.md): Sets the value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_get_cap_write_vmcs(\_:\_:\_:\_:)](hv_vmx_vcpu_get_cap_write_vmcs%28________%29.md): Returns the allowed_0 and allowed_1 masks for a VMCS field of a vCPU.
- [hv_vmx_vcpu_set_apic_address(\_:\_:)](hv_vmx_vcpu_set_apic_address%28____%29.md): Sets the address of the guest Advanced Programmable Interrupt Controller (APIC) for a vCPU in the guest physical address space of the VM.

# Virtual Machine control structure (VMCS) Field IDs (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Identify the fields of the virtual machine control structure.

<a id="overview"></a>

## Overview

Used by the functions [hv_vmx_vcpu_read_vmcs](hv_vmx_vcpu_read_vmcs%28______%29.md) and [hv_vmx_vcpu_write_vmcs](hv_vmx_vcpu_write_vmcs%28______%29.md). The VMCS fields are read-only or read-write by the Hypervisor framework, according to the following table:

Readable and Writable VMCS Fields - Guest Fields

| Guest | Field |
| --- | --- |
| RIP, RSP, RFLAGS |  |
| CR3, CR4, DR7 |  |
| Selector | {ES, CS, SS, DS, FS, GS, LDTR, TR} |
| Base | {ES, CS, SS, DS, FS, GS, LDTR, TR, GDTR, IDTR} |
| Limit | {ES, CS, SS, DS, FS, GS, LDTR, TR, GDTR, IDTR} |
| Access Rights | {ES, CS, SS, DS, FS, GS, LDTR, TR} |
| PDPTE | {0, 1, 2, 3} |
| CR3-Target | {0, 1, 2, 3} |
| IA32_SYSENTER_CS |  |
| IA32_SYSENTER_ESP |  |
| IA32_SYSENTER_EIP |  |
| IA32_EFER |  |
| Interruptibility State |  |
| Pending Debug Exceptions |  |

Readable and Writable VMCS Fields - Control Fields

| Control Field |
| --- |
| Exception Bitmap |
| Page-Fault Error-Code Mask |
| VM-Entry Interruption-Information Field |
| VM-Entry Exception Error Code |
| VM-Entry Instruction Length |
| TPR Threshold |
| PLE Gap |
| PLE Window |
| CR0 Guest/Host Mask |
| CR4 Guest/Host Mask |
| CR0 Read Shadow |
| CR4 Read Shadow |

Readable and Conditionally Writable VMCS Fields - Guest Fields

| Guest Field | Condition |
| --- | --- |
| CR0 | CR0.CD and CR0.NW are unset |
| Activity State | ACTIVE or HLT |

Readable and Conditionally Writable VMCS Fields - Control Fields

| Control Field | Condition |
| --- | --- |
| CR0 Guest/Host Mask | CR0.CD and CR0.NW are set |
| Pin-Based VM-Execution Controls | [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md) returns true |
| Primary Processor-Based VM-ExecutionControls | [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md) returns true |
| Secondary Processor-Based VM-ExecutionControls | [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md) returns true |
| VM-Entry Controls | [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md) returns true |

Read-Only VMCS Fields - Control Fields

| Control Field |
| --- |
| TSC Offset |
| APIC-Access Address |

Read-Only VMCS Fields - Data Fields

| Data Fields |
| --- |
| VM-Instruction Error |
| Exit Reason |
| VM-Exit Interruption Information |
| VM-Exit Interruption Error Code |
| IDT-Vectoring Information Field |
| IDT-Vectoring Error Code |
| VM-Exit Instruction Length |
| VM-Exit Instruction Information |
| Guest-Physical Address |
| Exit Qualification |
| Guest-Linear Address |

## Topics

### IDs

- [VMCS_VPID](vmcs_vpid.md)
- [VMCS_CTRL_POSTED_INT_N_VECTOR](vmcs_ctrl_posted_int_n_vector.md)
- [VMCS_CTRL_EPTP_INDEX](vmcs_ctrl_eptp_index.md)
- [VMCS_GUEST_ES](vmcs_guest_es.md)
- [VMCS_GUEST_CS](vmcs_guest_cs.md)
- [VMCS_GUEST_SS](vmcs_guest_ss.md)
- [VMCS_GUEST_DS](vmcs_guest_ds.md)
- [VMCS_GUEST_FS](vmcs_guest_fs.md)
- [VMCS_GUEST_GS](vmcs_guest_gs.md)
- [VMCS_GUEST_LDTR](vmcs_guest_ldtr.md)
- [VMCS_GUEST_TR](vmcs_guest_tr.md)
- [VMCS_GUEST_INT_STATUS](vmcs_guest_int_status.md)
- [VMCS_GUESTPML_INDEX](vmcs_guestpml_index.md)
- [VMCS_HOST_ES](vmcs_host_es.md)
- [VMCS_HOST_CS](vmcs_host_cs.md)
- [VMCS_HOST_SS](vmcs_host_ss.md)
- [VMCS_HOST_DS](vmcs_host_ds.md)
- [VMCS_HOST_FS](vmcs_host_fs.md)
- [VMCS_HOST_GS](vmcs_host_gs.md)
- [VMCS_HOST_TR](vmcs_host_tr.md)
- [VMCS_CTRL_IO_BITMAP_A](vmcs_ctrl_io_bitmap_a.md)
- [VMCS_CTRL_IO_BITMAP_B](vmcs_ctrl_io_bitmap_b.md)
- [VMCS_CTRL_MSR_BITMAPS](vmcs_ctrl_msr_bitmaps.md)
- [VMCS_CTRL_VMEXIT_MSR_STORE_ADDR](vmcs_ctrl_vmexit_msr_store_addr.md)
- [VMCS_CTRL_VMEXIT_MSR_LOAD_ADDR](vmcs_ctrl_vmexit_msr_load_addr.md)
- [VMCS_CTRL_VMENTRY_MSR_LOAD_ADDR](vmcs_ctrl_vmentry_msr_load_addr.md)
- [VMCS_CTRL_EXECUTIVE_VMCS_PTR](vmcs_ctrl_executive_vmcs_ptr.md)
- [VMCS_CTRL_PML_ADDR](vmcs_ctrl_pml_addr.md)
- [VMCS_CTRL_TSC_OFFSET](vmcs_ctrl_tsc_offset.md)
- [VMCS_CTRL_VIRTUAL_APIC](vmcs_ctrl_virtual_apic.md)
- [VMCS_CTRL_APIC_ACCESS](vmcs_ctrl_apic_access.md)
- [VMCS_CTRL_POSTED_INT_DESC_ADDR](vmcs_ctrl_posted_int_desc_addr.md)
- [VMCS_CTRL_VMFUNC_CTRL](vmcs_ctrl_vmfunc_ctrl.md)
- [VMCS_CTRL_EPTP](vmcs_ctrl_eptp.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_0](vmcs_ctrl_eoi_exit_bitmap_0.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_1](vmcs_ctrl_eoi_exit_bitmap_1.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_2](vmcs_ctrl_eoi_exit_bitmap_2.md)
- [VMCS_CTRL_EOI_EXIT_BITMAP_3](vmcs_ctrl_eoi_exit_bitmap_3.md)
- [VMCS_CTRL_EPTP_LIST_ADDR](vmcs_ctrl_eptp_list_addr.md)
- [VMCS_CTRL_VMREAD_BITMAP_ADDR](vmcs_ctrl_vmread_bitmap_addr.md)
- [VMCS_CTRL_VMWRITE_BITMAP_ADDR](vmcs_ctrl_vmwrite_bitmap_addr.md)
- [VMCS_CTRL_VIRT_EXC_INFO_ADDR](vmcs_ctrl_virt_exc_info_addr.md)
- [VMCS_CTRL_XSS_EXITING_BITMAP](vmcs_ctrl_xss_exiting_bitmap.md)
- [VMCS_CTRL_ENCLS_EXITING_BITMAP](vmcs_ctrl_encls_exiting_bitmap.md)
- [VMCS_CTRL_SPP_TABLE](vmcs_ctrl_spp_table.md)
- [VMCS_CTRL_TSC_MULTIPLIER](vmcs_ctrl_tsc_multiplier.md)
- [VMCS_GUEST_PHYSICAL_ADDRESS](vmcs_guest_physical_address.md)
- [VMCS_GUEST_LINK_POINTER](vmcs_guest_link_pointer.md)
- [VMCS_GUEST_IA32_DEBUGCTL](vmcs_guest_ia32_debugctl.md)
- [VMCS_GUEST_IA32_PAT](vmcs_guest_ia32_pat.md)
- [VMCS_GUEST_IA32_EFER](vmcs_guest_ia32_efer.md)
- [VMCS_GUEST_IA32_PERF_GLOBAL_CTRL](vmcs_guest_ia32_perf_global_ctrl.md)
- [VMCS_GUEST_PDPTE0](vmcs_guest_pdpte0.md)
- [VMCS_GUEST_PDPTE1](vmcs_guest_pdpte1.md)
- [VMCS_GUEST_PDPTE2](vmcs_guest_pdpte2.md)
- [VMCS_GUEST_PDPTE3](vmcs_guest_pdpte3.md)
- [VMCS_GUEST_IA32_BNDCFGS](vmcs_guest_ia32_bndcfgs.md)
- [VMCS_GUEST_IA32_RTIT_CTL](vmcs_guest_ia32_rtit_ctl.md)
- [VMCS_HOST_IA32_PAT](vmcs_host_ia32_pat.md)
- [VMCS_HOST_IA32_EFER](vmcs_host_ia32_efer.md)
- [VMCS_HOST_IA32_PERF_GLOBAL_CTRL](vmcs_host_ia32_perf_global_ctrl.md)
- [VMCS_CTRL_PIN_BASED](vmcs_ctrl_pin_based.md)
- [VMCS_CTRL_CPU_BASED](vmcs_ctrl_cpu_based.md)
- [VMCS_CTRL_EXC_BITMAP](vmcs_ctrl_exc_bitmap.md)
- [VMCS_CTRL_PF_ERROR_MASK](vmcs_ctrl_pf_error_mask.md)
- [VMCS_CTRL_PF_ERROR_MATCH](vmcs_ctrl_pf_error_match.md)
- [VMCS_CTRL_CR3_COUNT](vmcs_ctrl_cr3_count.md)
- [VMCS_CTRL_VMEXIT_CONTROLS](vmcs_ctrl_vmexit_controls.md)
- [VMCS_CTRL_VMEXIT_MSR_STORE_COUNT](vmcs_ctrl_vmexit_msr_store_count.md)
- [VMCS_CTRL_VMEXIT_MSR_LOAD_COUNT](vmcs_ctrl_vmexit_msr_load_count.md)
- [VMCS_CTRL_VMENTRY_CONTROLS](vmcs_ctrl_vmentry_controls.md)
- [VMCS_CTRL_VMENTRY_MSR_LOAD_COUNT](vmcs_ctrl_vmentry_msr_load_count.md)
- [VMCS_CTRL_VMENTRY_IRQ_INFO](vmcs_ctrl_vmentry_irq_info.md)
- [VMCS_CTRL_VMENTRY_EXC_ERROR](vmcs_ctrl_vmentry_exc_error.md)
- [VMCS_CTRL_VMENTRY_INSTR_LEN](vmcs_ctrl_vmentry_instr_len.md)
- [VMCS_CTRL_TPR_THRESHOLD](vmcs_ctrl_tpr_threshold.md)
- [VMCS_CTRL_CPU_BASED2](vmcs_ctrl_cpu_based2.md)
- [VMCS_CTRL_PLE_GAP](vmcs_ctrl_ple_gap.md)
- [VMCS_CTRL_PLE_WINDOW](vmcs_ctrl_ple_window.md)
- [VMCS_RO_INSTR_ERROR](vmcs_ro_instr_error.md)
- [VMCS_RO_EXIT_REASON](vmcs_ro_exit_reason.md)
- [VMCS_RO_VMEXIT_IRQ_INFO](vmcs_ro_vmexit_irq_info.md)
- [VMCS_RO_VMEXIT_IRQ_ERROR](vmcs_ro_vmexit_irq_error.md)
- [VMCS_RO_IDT_VECTOR_INFO](vmcs_ro_idt_vector_info.md)
- [VMCS_RO_IDT_VECTOR_ERROR](vmcs_ro_idt_vector_error.md)
- [VMCS_RO_VMEXIT_INSTR_LEN](vmcs_ro_vmexit_instr_len.md)
- [VMCS_RO_VMX_INSTR_INFO](vmcs_ro_vmx_instr_info.md)
- [VMCS_GUEST_ES_LIMIT](vmcs_guest_es_limit.md)
- [VMCS_GUEST_CS_LIMIT](vmcs_guest_cs_limit.md)
- [VMCS_GUEST_SS_LIMIT](vmcs_guest_ss_limit.md)
- [VMCS_GUEST_DS_LIMIT](vmcs_guest_ds_limit.md)
- [VMCS_GUEST_FS_LIMIT](vmcs_guest_fs_limit.md)
- [VMCS_GUEST_GS_LIMIT](vmcs_guest_gs_limit.md)
- [VMCS_GUEST_LDTR_LIMIT](vmcs_guest_ldtr_limit.md)
- [VMCS_GUEST_TR_LIMIT](vmcs_guest_tr_limit.md)
- [VMCS_GUEST_GDTR_LIMIT](vmcs_guest_gdtr_limit.md)
- [VMCS_GUEST_IDTR_LIMIT](vmcs_guest_idtr_limit.md)
- [VMCS_GUEST_ES_AR](vmcs_guest_es_ar.md)
- [VMCS_GUEST_CS_AR](vmcs_guest_cs_ar.md)
- [VMCS_GUEST_SS_AR](vmcs_guest_ss_ar.md)
- [VMCS_GUEST_DS_AR](vmcs_guest_ds_ar.md)
- [VMCS_GUEST_FS_AR](vmcs_guest_fs_ar.md)
- [VMCS_GUEST_GS_AR](vmcs_guest_gs_ar.md)
- [VMCS_GUEST_LDTR_AR](vmcs_guest_ldtr_ar.md)
- [VMCS_GUEST_TR_AR](vmcs_guest_tr_ar.md)
- [VMCS_GUEST_INTERRUPTIBILITY](vmcs_guest_interruptibility.md)
- [VMCS_GUEST_IGNORE_IRQ](vmcs_guest_ignore_irq.md)
- [VMCS_GUEST_ACTIVITY_STATE](vmcs_guest_activity_state.md)
- [VMCS_GUEST_SMBASE](vmcs_guest_smbase.md)
- [VMCS_GUEST_IA32_SYSENTER_CS](vmcs_guest_ia32_sysenter_cs.md)
- [VMCS_GUEST_VMX_TIMER_VALUE](vmcs_guest_vmx_timer_value.md)
- [VMCS_HOST_IA32_SYSENTER_CS](vmcs_host_ia32_sysenter_cs.md)
- [VMCS_CTRL_CR0_MASK](vmcs_ctrl_cr0_mask.md)
- [VMCS_CTRL_CR4_MASK](vmcs_ctrl_cr4_mask.md)
- [VMCS_CTRL_CR0_SHADOW](vmcs_ctrl_cr0_shadow.md)
- [VMCS_CTRL_CR4_SHADOW](vmcs_ctrl_cr4_shadow.md)
- [VMCS_CTRL_CR3_VALUE0](vmcs_ctrl_cr3_value0.md)
- [VMCS_CTRL_CR3_VALUE1](vmcs_ctrl_cr3_value1.md)
- [VMCS_CTRL_CR3_VALUE2](vmcs_ctrl_cr3_value2.md)
- [VMCS_CTRL_CR3_VALUE3](vmcs_ctrl_cr3_value3.md)
- [VMCS_RO_EXIT_QUALIFIC](vmcs_ro_exit_qualific.md)
- [VMCS_RO_IO_RCX](vmcs_ro_io_rcx.md)
- [VMCS_RO_IO_RSI](vmcs_ro_io_rsi.md)
- [VMCS_RO_IO_RDI](vmcs_ro_io_rdi.md)
- [VMCS_RO_IO_RIP](vmcs_ro_io_rip.md)
- [VMCS_RO_GUEST_LIN_ADDR](vmcs_ro_guest_lin_addr.md)
- [VMCS_GUEST_CR0](vmcs_guest_cr0.md)
- [VMCS_GUEST_CR3](vmcs_guest_cr3.md)
- [VMCS_GUEST_CR4](vmcs_guest_cr4.md)
- [VMCS_GUEST_ES_BASE](vmcs_guest_es_base.md)
- [VMCS_GUEST_CS_BASE](vmcs_guest_cs_base.md)
- [VMCS_GUEST_SS_BASE](vmcs_guest_ss_base.md)
- [VMCS_GUEST_DS_BASE](vmcs_guest_ds_base.md)
- [VMCS_GUEST_FS_BASE](vmcs_guest_fs_base.md)
- [VMCS_GUEST_GS_BASE](vmcs_guest_gs_base.md)
- [VMCS_GUEST_IDTR_BASE](vmcs_guest_idtr_base.md)
- [VMCS_GUEST_TR_BASE](vmcs_guest_tr_base.md)
- [VMCS_GUEST_GDTR_BASE](vmcs_guest_gdtr_base.md)
- [VMCS_GUEST_LDTR_BASE](vmcs_guest_ldtr_base.md)
- [VMCS_GUEST_DR7](vmcs_guest_dr7.md)
- [VMCS_GUEST_RSP](vmcs_guest_rsp.md)
- [VMCS_GUEST_RIP](vmcs_guest_rip.md)
- [VMCS_GUEST_RFLAGS](vmcs_guest_rflags.md)
- [VMCS_GUEST_DEBUG_EXC](vmcs_guest_debug_exc.md)
- [VMCS_GUEST_SYSENTER_ESP](vmcs_guest_sysenter_esp.md)
- [VMCS_GUEST_SYSENTER_EIP](vmcs_guest_sysenter_eip.md)
- [VMCS_HOST_CR0](vmcs_host_cr0.md)
- [VMCS_HOST_CR3](vmcs_host_cr3.md)
- [VMCS_HOST_CR4](vmcs_host_cr4.md)
- [VMCS_HOST_FS_BASE](vmcs_host_fs_base.md)
- [VMCS_HOST_GS_BASE](vmcs_host_gs_base.md)
- [VMCS_HOST_TR_BASE](vmcs_host_tr_base.md)
- [VMCS_HOST_GDTR_BASE](vmcs_host_gdtr_base.md)
- [VMCS_HOST_IDTR_BASE](vmcs_host_idtr_base.md)
- [VMCS_HOST_IA32_SYSENTER_ESP](vmcs_host_ia32_sysenter_esp.md)
- [VMCS_HOST_IA32_SYSENTER_EIP](vmcs_host_ia32_sysenter_eip.md)
- [VMCS_HOST_RSP](vmcs_host_rsp.md)
- [VMCS_HOST_RIP](vmcs_host_rip.md)
- [VMCS_MAX](vmcs_max.md)

### Interruptibility options

- [GUEST_INTRBILITY_MOVSS_BLOCKING](guest_intrbility_movss_blocking.md)
- [GUEST_INTRBILITY_NMI_BLOCKING](guest_intrbility_nmi_blocking.md)
- [GUEST_INTRBILITY_SMI_BLOCKING](guest_intrbility_smi_blocking.md)
- [GUEST_INTRBILITY_STI_BLOCKING](guest_intrbility_sti_blocking.md)

### Constants

- [VMCS_INVALID](vmcs_invalid.md)
- [VMCS_CTRL_ENCLV_EXITING_BITMAP](vmcs_ctrl_enclv_exiting_bitmap.md)
- [VMCS_GUEST_IA32_INTR_SSP_TABLE_ADDR](vmcs_guest_ia32_intr_ssp_table_addr.md)
- [VMCS_GUEST_IA32_PKRS](vmcs_guest_ia32_pkrs.md)
- [VMCS_GUEST_IA32_S_CET](vmcs_guest_ia32_s_cet.md)
- [VMCS_GUEST_SSP](vmcs_guest_ssp.md)
- [VMCS_HOST_IA32_INTR_SSP_TABLE_ADDR](vmcs_host_ia32_intr_ssp_table_addr.md)
- [VMCS_HOST_IA32_PKRS](vmcs_host_ia32_pkrs.md)
- [VMCS_HOST_IA32_S_CET](vmcs_host_ia32_s_cet.md)
- [VMCS_HOST_SSP](vmcs_host_ssp.md)

## See Also

### Field management

- [Virtual Machine Control Structure (VMCS) Field IDs](virtual-machine-control-structure-vmcs-field-ids.md): Fields you can read or change using the Hypervisor framework’s read and write functions.
- [hv_vmx_vcpu_read_vmcs](hv_vmx_vcpu_read_vmcs%28______%29.md): Returns, by reference, the current value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_write_vmcs](hv_vmx_vcpu_write_vmcs%28______%29.md): Sets the value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_get_cap_write_vmcs](hv_vmx_vcpu_get_cap_write_vmcs%28________%29.md): Returns the allowed_0 and allowed_1 masks for a VMCS field of a vCPU.
- [hv_vmx_vcpu_set_apic_address](hv_vmx_vcpu_set_apic_address%28____%29.md): Sets the address of the guest Advanced Programmable Interrupt Controller (APIC) for a vCPU in the guest physical address space of the VM.
