> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/1469645-vmx-capabilities](https://developer.apple.com/documentation/hypervisor/1469645-vmx-capabilities)

# VMX Capabilities (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration that represents the available VMX capabilities.

<a id="overview"></a>

## Overview

The capabilites available to the hypervisor can vary depending on the specific hardware platform or OS release. Use the [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md) API at run time to determine the capabilities that can you can select.

The example below demonstrates the process for checking for the availability a specific capability, here checking for the avaiability of timestamp-counter scaling (TSC scaling):

```objc
static uint64_t canonicalize(uint64_t ctrl, uint64_t mask) {
    return (ctrl | (mask & 0xffffffff)) & (mask >> 32);
}

main() {
    
    // Fetch the supported capabilities for the PROCBASED2 field
    if (hv_vmx_read_capability(HV_VMX_CAP_PROCBASED2, &proc2_cap) != 0)
        errx(1, "vcpu_read_capability(%u, CAP_VMX_PROCBASED2) failed", vcpu);
    
    // Apply the constraints to our request to use TSC scaling
    const uint64_t newcap = canonicalize(CPU_BASED2_TSC_SCALING, proc2_cap);
    
    // Test to see if that bit is supported on this platform
    if ((newcap & CPU_BASED2_TSC_SCALING) == 0) {
        warnx(“TSC scaling not supported on this platform”);
    }
    
    // Continue, but without TSC scaling ...
    write_vmcs(vcpu, VMCS_CTRL_CPU_BASED2, newcap);

    // ...
}

```

## Topics

### Capabilities

- [PIN_BASED_INTR](pin_based_intr.md): The value that controls whether external interrupts cause VM exits.
- [PIN_BASED_NMI](pin_based_nmi.md): The value that controls whether external non-maskable interrupts cause VM exits.
- [PIN_BASED_VIRTUAL_NMI](pin_based_virtual_nmi.md): The value that controls blocking of non-maskable interrupts.
- [PIN_BASED_PREEMPTION_TIMER](pin_based_preemption_timer.md): The value that controls whether the VMX-preemption timer counts down in VMX non-root operation.
- [PIN_BASED_POSTED_INTR](pin_based_posted_intr.md): The value that controls whether the processor gives special treatment to interrupts with posted-interrupt notification vectors.
- [CPU_BASED_IRQ_WND](cpu_based_irq_wnd.md): The value that controls whether a VM exits at the beginning of any instruction where there’s no blocking of interrupts and the interrupt flag is 1.
- [CPU_BASED_TSC_OFFSET](cpu_based_tsc_offset.md): The value that controls whether reading the timestamp-counter MSRs changes depending on the value of the timestamp-counter offset field.
- [CPU_BASED_HLT](cpu_based_hlt.md): The value that controls whether the execution of HALT instructions cause VM exits.
- [CPU_BASED_INVLPG](cpu_based_invlpg.md): The value that controls whether the execution of invalid page instructions (INVLPG) cause VM exits.
- [CPU_BASED_MWAIT](cpu_based_mwait.md): The value that controls whether the execution of Monitor Wait instructions (MWAIT) cause VM exits.
- [CPU_BASED_RDPMC](cpu_based_rdpmc.md): The value that controls whether the execution of Read Performance Monitoring Counters instructions (RDPMC) cause VM exits.
- [CPU_BASED_RDTSC](cpu_based_rdtsc.md): The value that controls whether the execution of Read Timestamp-Counter instructions (RDTSC) cause VM exits.
- [CPU_BASED_CR3_LOAD](cpu_based_cr3_load.md): The value that controls whether executions of MOV to Control Register 3 (CR3) cause VM exits.
- [CPU_BASED_CR3_STORE](cpu_based_cr3_store.md): The value that controls whether executions of MOV from Control Register 3 (CR3) cause VM exits.
- [CPU_BASED_CR8_LOAD](cpu_based_cr8_load.md): The value that controls whether executions of MOV to Control Register 8 (CR8) cause VM exits.
- [CPU_BASED_CR8_STORE](cpu_based_cr8_store.md): The value that controls whether executions of MOV from Control Register 8 (CR8) cause VM exits.
- [CPU_BASED_TPR_SHADOW](cpu_based_tpr_shadow.md): The value that controls enabling Task Priority Register (TPR) virtualization and other APIC-virtualization features.
- [CPU_BASED_VIRTUAL_NMI_WND](cpu_based_virtual_nmi_wnd.md): The value that controls if a VM exit occurs at the beginning of any instruction if there’s no virtual-NMI blocking.
- [CPU_BASED_MOV_DR](cpu_based_mov_dr.md): The value that controls whether executions of MOV to or from Debug Registers (DR) cause VM exits.
- [CPU_BASED_UNCOND_IO](cpu_based_uncond_io.md): The value that controls whether executions of various I/O instructions cause VM exits.
- [CPU_BASED_IO_BITMAPS](cpu_based_io_bitmaps.md): The value that controls whether to use I/O bitmaps to restrict executions of I/O instructions.
- [CPU_BASED_MTF](cpu_based_mtf.md): The value that controls enabling the monitor trap flag debugging feature.
- [CPU_BASED_MSR_BITMAPS](cpu_based_msr_bitmaps.md): The value that controls use of whether Model Specific Register (MSR) bitmaps to control execution of the read-from and write-to MSR instructions.
- [CPU_BASED_MONITOR](cpu_based_monitor.md): The value that controls whether executions of the Set Up Monitor Address instruction (MONITOR) cause VM exits.
- [CPU_BASED_PAUSE](cpu_based_pause.md): The value that controls whether executions of spin-wait loop (PAUSE) instruction causes VM exits.
- [CPU_BASED_SECONDARY_CTLS](cpu_based_secondary_ctls.md): The value that conntrols use of the secondary processor-based VM-execution controls.
- [CPU_BASED2_VIRTUAL_APIC](cpu_based2_virtual_apic.md): The value that controls whether the logical processor provides special treatment for access to the Advanced Programmable Interrupt Controller (APIC).
- [CPU_BASED2_EPT](cpu_based2_ept.md): The value that controls enabling extended page tables (EPT).
- [CPU_BASED2_DESC_TABLE](cpu_based2_desc_table.md): The value that controls whether executions of descriptor table instructions cause VM exits.
- [CPU_BASED2_RDTSCP](cpu_based2_rdtscp.md): The value that controls whether any execution of read timestamp-counter and processor ID instruction (RDTSCP) causes an invalid-opcode exception.
- [CPU_BASED2_X2APIC](cpu_based2_x2apic.md): The value that controls the logical processor’s treatment of reading/writing of Model Specific Registers to APIC MSRs.
- [CPU_BASED2_VPID](cpu_based2_vpid.md): The value that controls the association of cached translations of linear addresses with a virtual processor identifier (VPID).
- [CPU_BASED2_WBINVD](cpu_based2_wbinvd.md): The value that controls whether executions of the Invalidate Cache with Writeback instruction (WBINVD) cause VM exits.
- [CPU_BASED2_UNRESTRICTED](cpu_based2_unrestricted.md): The value that controls whether guest software may run in unpaged protected mode or in real address mode.
- [CPU_BASED2_APIC_REG_VIRT](cpu_based2_apic_reg_virt.md): This value controls whether the logical processor virtualizes certain advanced programmable interrupt controller (APIC) accesses.
- [CPU_BASED2_VIRT_INTR_DELIVERY](cpu_based2_virt_intr_delivery.md): The value that enables evaluation and delivery of pending virtual interrupts and emulation of writes to the APIC registers that control interrupt prioritization.
- [CPU_BASED2_PAUSE_LOOP](cpu_based2_pause_loop.md): The value that controls whether a series of executions of the PAUSE instruction can cause a VM exit.
- [CPU_BASED2_RDRAND](cpu_based2_rdrand.md): The value that controls whether executions of the hardware random number generator instruction (RDRAND) cause VM exits.
- [CPU_BASED2_INVPCID](cpu_based2_invpcid.md): The value that controls whether any execution of the Invalidate Process-Context Identifier instruction (INVPCID) causes an invalid opcode exception.
- [CPU_BASED2_VMFUNC](cpu_based2_vmfunc.md): The value that enables use of the “Invoke VM function” (VMFUNC) instruction in VMX non-root operation.
- [CPU_BASED2_VMCS_SHADOW](cpu_based2_vmcs_shadow.md): The value that controls whether execution of VMREAD and VMWRITE in VMX non-root operation may access a shadow VMCS instead of causing a VM exit.
- [CPU_BASED2_ENCLS_EXIT_MAP](cpu_based2_encls_exit_map.md): The value that controls whether executions of Enclave Instruction Leaf Functions (ENCLS) cause examination of the ENCLS-exiting bitmap to determine whether the instruction causes a VM exit.
- [CPU_BASED2_RDSEED](cpu_based2_rdseed.md): The value that controls whether executions of random number generator instructions (RDSEED) cause VM exits.
- [CPU_BASED2_PML](cpu_based2_pml.md): The value that controls whether an access to a guest-physical address that sets an extended page table (EPT) dirty bit also adds an entry to the page-modification log.
- [CPU_BASED2_EPT_VE](cpu_based2_ept_ve.md): The value that controls whether extended page table (EPT) violations cause virtualization exceptions instead of VM exits.
- [CPU_BASED2_PT_CONCEAL_VMX](cpu_based2_pt_conceal_vmx.md): The value that controls whether the processor trace facility suppresses information that the processor was in VMX non-root operation.
- [CPU_BASED2_XSAVES_XRSTORS](cpu_based2_xsaves_xrstors.md): The value that controls whether any execution of save or restore state instructions (XSAVES or XRSTORS) causes an invalid opcode exception.
- [CPU_BASED2_EPT_MODE_BASED_EXEC](cpu_based2_ept_mode_based_exec.md): The value that controls whether to base extended page table (EPT) execute permissions on whether access to a linear address is supervisor or user mode.
- [CPU_BASED2_EPT_SUBPAGE_WRITE](cpu_based2_ept_subpage_write.md): The value that controls whether extended page table (EPT) write permissions specify granularity of 128 bytes.
- [CPU_BASED2_PT_GUEST_PHYSICAL](cpu_based2_pt_guest_physical.md): The value that controls whether to treat all output addresses used by Intel Processor Trace as guest-physical addresses and translated using the extended page table.
- [CPU_BASED2_TSC_SCALING](cpu_based2_tsc_scaling.md): The value that controls whether the execution of various read time stamp counters and read model-specific registers that read from the IA32 timestamp counter model specific register return a value modified by the TSC multiplier field.
- [CPU_BASED2_USER_WAIT_PAUSE](cpu_based2_user_wait_pause.md): The value that controls whether any execution of TPAUSE, UMONITOR, or UMWAIT instrucitons generate an illegal opcode exception.
- [CPU_BASED2_ENCLV_EXIT_MAP](cpu_based2_enclv_exit_map.md): The value that controls whether executions of an enclave VMM function instruction (ENCLV) checks the ENCLV-exiting bitmap to determine whether the instruction causes a VM exit.
- [VMX_EPT_VPID_SUPPORT_AD](vmx_ept_vpid_support_ad.md): The value that controls if extended page tables (EPT) support accessed and dirty flags.
- [VMX_EPT_VPID_SUPPORT_EXONLY](vmx_ept_vpid_support_exonly.md): The value that controls whether extended page tables (EPT) support execute-only translations.
- [VMEXIT_SAVE_DBG_CONTROLS](vmexit_save_dbg_controls.md): Thievalue that controls whether to save debug register 7 DR7 and the IA32 debug control DEBUGCTL MSR on VM exit.
- [VMEXIT_HOST_IA32E](vmexit_host_ia32e.md): This value controls, on processors that support Intel 64 architecture, whether a logical processor is in 64-bit mode after the next VM exit.
- [VMEXIT_LOAD_IA32_PERF_GLOBAL_CTRL](vmexit_load_ia32_perf_global_ctrl.md): The value that controls whether to load the IA32_PERF_GLOBAL_CTRL model specific register on VM exit.
- [VMEXIT_ACK_INTR](vmexit_ack_intr.md): The value that controls whether the logical processor sends an acknowledgement to the interrupt controller when the VM exits.
- [VMEXIT_SAVE_IA32_PAT](vmexit_save_ia32_pat.md): The value that controls whether to save the IA32_EFER model specific register on VM exit.
- [VMEXIT_LOAD_IA32_PAT](vmexit_load_ia32_pat.md): The value that controls whether to load the IA32_EFER mode specific register on VM exit.
- [VMEXIT_SAVE_EFER](vmexit_save_efer.md): The value that controls whether to save the IA32_EFER MSR on VM exit.
- [VMEXIT_LOAD_EFER](vmexit_load_efer.md): The value that controls whether to load the IA32_EFER MSR on VM exit.
- [VMEXIT_SAVE_VMX_TIMER](vmexit_save_vmx_timer.md): The value that controls whether to save the value of the VMX-preemption timer on VM exit.
- [VMEXIT_CLEAR_IA32_BNDCFGS](vmexit_clear_ia32_bndcfgs.md): The value that controls whether to clear the IA32_BNDCFGS model specific register on VM exit.
- [VMEXIT_PT_CONCEAL_VMX](vmexit_pt_conceal_vmx.md): The value that controls whether the Intel Processor Trace produces a paging information packet on VM exit or a VMCS packet on SMM VM exit.
- [VMEXIT_CLEAR_IA32_RTIT_CTL](vmexit_clear_ia32_rtit_ctl.md): The value that controls whether to clear the IA32_RTIT_CTL model specific register (MSR) on VM exit.
- [VMEXIT_LOAD_CET_STATE](vmexit_load_cet_state.md): The value that controls whether to load CET-related MSRs and SPP on VM exit.
- [VMENTRY_LOAD_DBG_CONTROLS](vmentry_load_dbg_controls.md): The value that controls whetherto load Debug Register 7 and the IA32_DEBUGCTL model specific register (MSR) on VM entry.
- [VMENTRY_GUEST_IA32E](vmentry_guest_ia32e.md): The value that controls whether the logical processor is in IA-32e mode after VM entry.
- [VMENTRY_SMM](vmentry_smm.md): The value that controls whether the logical processor is in system-management mode (SMM) after VM entry.
- [VMENTRY_DEACTIVATE_DUAL_MONITOR](vmentry_deactivate_dual_monitor.md): The value that controls whether the treatment of SMIs and system-management mode (SMM) is in effect after the VM entry.
- [VMENTRY_LOAD_IA32_PERF_GLOBAL_CTRL](vmentry_load_ia32_perf_global_ctrl.md): The value that controls whether to load the IA32_PERF_GLOBAL_CTRL model specific register on VM entry.
- [VMENTRY_LOAD_IA32_PAT](vmentry_load_ia32_pat.md): The value that controls whether to load the IA32_PAT model specific register on VM entry.
- [VMENTRY_LOAD_EFER](vmentry_load_efer.md): The value that determines whether to load the IA32_EFER model specific register on VM entry.
- [VMENTRY_LOAD_IA32_BNDCFGS](vmentry_load_ia32_bndcfgs.md): The value that controls whether to load the IA32_BNDCFGS model specific register on VM entry.
- [VMENTRY_PT_CONCEAL_VMX](vmentry_pt_conceal_vmx.md): The value that controls whether the Intel Processor Trace produces a paging information packet (PIP) on a VM entry or a VMCS packet on a VM entry that returns from system-management mode.
- [VMENTRY_LOAD_IA32_RTIT_CTL](vmentry_load_ia32_rtit_ctl.md): The value that controls whether to clear the IA32_RTIT_CTL model specific register (MSR) on VM exit.
- [VMENTRY_LOAD_CET_STATE](vmentry_load_cet_state.md): The value that controls whether to load CET-related model specific registers and SPP on VM exit.

## See Also

### Capabilities

- [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md): Returns, by reference, the VMX virtualization capabilities of the host processor.
- [hv_vmx_get_msr_info(\_:\_:)](hv_vmx_get_msr_info%28____%29.md): Returns information about guest MSR configuration.
- [hv_vmx_capability_t](hv_vmx_capability_t.md): The type that describes Virtual Machine Extensions (VMX) capability fields.
- [hv_vmx_msr_info_t](hv_vmx_msr_info_t.md): The type that describes Move to Status Register (MSR) information fields.
- [MSR Information Fields](3567084-msr-information-fields.md): The type that describes Machine Specific Register (MSR) fields.

# VMX Capabilities (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration that represents the available VMX capabilities.

<a id="overview"></a>

## Overview

The capabilites available to the hypervisor can vary depending on the specific hardware platform or OS release. Use the [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md) API at run time to determine the capabilities that can you can select.

The example below demonstrates the process for checking for the availability a specific capability, here checking for the avaiability of timestamp-counter scaling (TSC scaling):

```objc
static uint64_t canonicalize(uint64_t ctrl, uint64_t mask) {
    return (ctrl | (mask & 0xffffffff)) & (mask >> 32);
}

main() {
    
    // Fetch the supported capabilities for the PROCBASED2 field
    if (hv_vmx_read_capability(HV_VMX_CAP_PROCBASED2, &proc2_cap) != 0)
        errx(1, "vcpu_read_capability(%u, CAP_VMX_PROCBASED2) failed", vcpu);
    
    // Apply the constraints to our request to use TSC scaling
    const uint64_t newcap = canonicalize(CPU_BASED2_TSC_SCALING, proc2_cap);
    
    // Test to see if that bit is supported on this platform
    if ((newcap & CPU_BASED2_TSC_SCALING) == 0) {
        warnx(“TSC scaling not supported on this platform”);
    }
    
    // Continue, but without TSC scaling ...
    write_vmcs(vcpu, VMCS_CTRL_CPU_BASED2, newcap);

    // ...
}

```

## Topics

### Capabilities

- [PIN_BASED_INTR](pin_based_intr.md): The value that controls whether external interrupts cause VM exits.
- [PIN_BASED_NMI](pin_based_nmi.md): The value that controls whether external non-maskable interrupts cause VM exits.
- [PIN_BASED_VIRTUAL_NMI](pin_based_virtual_nmi.md): The value that controls blocking of non-maskable interrupts.
- [PIN_BASED_PREEMPTION_TIMER](pin_based_preemption_timer.md): The value that controls whether the VMX-preemption timer counts down in VMX non-root operation.
- [PIN_BASED_POSTED_INTR](pin_based_posted_intr.md): The value that controls whether the processor gives special treatment to interrupts with posted-interrupt notification vectors.
- [CPU_BASED_IRQ_WND](cpu_based_irq_wnd.md): The value that controls whether a VM exits at the beginning of any instruction where there’s no blocking of interrupts and the interrupt flag is 1.
- [CPU_BASED_TSC_OFFSET](cpu_based_tsc_offset.md): The value that controls whether reading the timestamp-counter MSRs changes depending on the value of the timestamp-counter offset field.
- [CPU_BASED_HLT](cpu_based_hlt.md): The value that controls whether the execution of HALT instructions cause VM exits.
- [CPU_BASED_INVLPG](cpu_based_invlpg.md): The value that controls whether the execution of invalid page instructions (INVLPG) cause VM exits.
- [CPU_BASED_MWAIT](cpu_based_mwait.md): The value that controls whether the execution of Monitor Wait instructions (MWAIT) cause VM exits.
- [CPU_BASED_RDPMC](cpu_based_rdpmc.md): The value that controls whether the execution of Read Performance Monitoring Counters instructions (RDPMC) cause VM exits.
- [CPU_BASED_RDTSC](cpu_based_rdtsc.md): The value that controls whether the execution of Read Timestamp-Counter instructions (RDTSC) cause VM exits.
- [CPU_BASED_CR3_LOAD](cpu_based_cr3_load.md): The value that controls whether executions of MOV to Control Register 3 (CR3) cause VM exits.
- [CPU_BASED_CR3_STORE](cpu_based_cr3_store.md): The value that controls whether executions of MOV from Control Register 3 (CR3) cause VM exits.
- [CPU_BASED_CR8_LOAD](cpu_based_cr8_load.md): The value that controls whether executions of MOV to Control Register 8 (CR8) cause VM exits.
- [CPU_BASED_CR8_STORE](cpu_based_cr8_store.md): The value that controls whether executions of MOV from Control Register 8 (CR8) cause VM exits.
- [CPU_BASED_TPR_SHADOW](cpu_based_tpr_shadow.md): The value that controls enabling Task Priority Register (TPR) virtualization and other APIC-virtualization features.
- [CPU_BASED_VIRTUAL_NMI_WND](cpu_based_virtual_nmi_wnd.md): The value that controls if a VM exit occurs at the beginning of any instruction if there’s no virtual-NMI blocking.
- [CPU_BASED_MOV_DR](cpu_based_mov_dr.md): The value that controls whether executions of MOV to or from Debug Registers (DR) cause VM exits.
- [CPU_BASED_UNCOND_IO](cpu_based_uncond_io.md): The value that controls whether executions of various I/O instructions cause VM exits.
- [CPU_BASED_IO_BITMAPS](cpu_based_io_bitmaps.md): The value that controls whether to use I/O bitmaps to restrict executions of I/O instructions.
- [CPU_BASED_MTF](cpu_based_mtf.md): The value that controls enabling the monitor trap flag debugging feature.
- [CPU_BASED_MSR_BITMAPS](cpu_based_msr_bitmaps.md): The value that controls use of whether Model Specific Register (MSR) bitmaps to control execution of the read-from and write-to MSR instructions.
- [CPU_BASED_MONITOR](cpu_based_monitor.md): The value that controls whether executions of the Set Up Monitor Address instruction (MONITOR) cause VM exits.
- [CPU_BASED_PAUSE](cpu_based_pause.md): The value that controls whether executions of spin-wait loop (PAUSE) instruction causes VM exits.
- [CPU_BASED_SECONDARY_CTLS](cpu_based_secondary_ctls.md): The value that conntrols use of the secondary processor-based VM-execution controls.
- [CPU_BASED2_VIRTUAL_APIC](cpu_based2_virtual_apic.md): The value that controls whether the logical processor provides special treatment for access to the Advanced Programmable Interrupt Controller (APIC).
- [CPU_BASED2_EPT](cpu_based2_ept.md): The value that controls enabling extended page tables (EPT).
- [CPU_BASED2_DESC_TABLE](cpu_based2_desc_table.md): The value that controls whether executions of descriptor table instructions cause VM exits.
- [CPU_BASED2_RDTSCP](cpu_based2_rdtscp.md): The value that controls whether any execution of read timestamp-counter and processor ID instruction (RDTSCP) causes an invalid-opcode exception.
- [CPU_BASED2_X2APIC](cpu_based2_x2apic.md): The value that controls the logical processor’s treatment of reading/writing of Model Specific Registers to APIC MSRs.
- [CPU_BASED2_VPID](cpu_based2_vpid.md): The value that controls the association of cached translations of linear addresses with a virtual processor identifier (VPID).
- [CPU_BASED2_WBINVD](cpu_based2_wbinvd.md): The value that controls whether executions of the Invalidate Cache with Writeback instruction (WBINVD) cause VM exits.
- [CPU_BASED2_UNRESTRICTED](cpu_based2_unrestricted.md): The value that controls whether guest software may run in unpaged protected mode or in real address mode.
- [CPU_BASED2_APIC_REG_VIRT](cpu_based2_apic_reg_virt.md): This value controls whether the logical processor virtualizes certain advanced programmable interrupt controller (APIC) accesses.
- [CPU_BASED2_VIRT_INTR_DELIVERY](cpu_based2_virt_intr_delivery.md): The value that enables evaluation and delivery of pending virtual interrupts and emulation of writes to the APIC registers that control interrupt prioritization.
- [CPU_BASED2_PAUSE_LOOP](cpu_based2_pause_loop.md): The value that controls whether a series of executions of the PAUSE instruction can cause a VM exit.
- [CPU_BASED2_RDRAND](cpu_based2_rdrand.md): The value that controls whether executions of the hardware random number generator instruction (RDRAND) cause VM exits.
- [CPU_BASED2_INVPCID](cpu_based2_invpcid.md): The value that controls whether any execution of the Invalidate Process-Context Identifier instruction (INVPCID) causes an invalid opcode exception.
- [CPU_BASED2_VMFUNC](cpu_based2_vmfunc.md): The value that enables use of the “Invoke VM function” (VMFUNC) instruction in VMX non-root operation.
- [CPU_BASED2_VMCS_SHADOW](cpu_based2_vmcs_shadow.md): The value that controls whether execution of VMREAD and VMWRITE in VMX non-root operation may access a shadow VMCS instead of causing a VM exit.
- [CPU_BASED2_ENCLS_EXIT_MAP](cpu_based2_encls_exit_map.md): The value that controls whether executions of Enclave Instruction Leaf Functions (ENCLS) cause examination of the ENCLS-exiting bitmap to determine whether the instruction causes a VM exit.
- [CPU_BASED2_RDSEED](cpu_based2_rdseed.md): The value that controls whether executions of random number generator instructions (RDSEED) cause VM exits.
- [CPU_BASED2_PML](cpu_based2_pml.md): The value that controls whether an access to a guest-physical address that sets an extended page table (EPT) dirty bit also adds an entry to the page-modification log.
- [CPU_BASED2_EPT_VE](cpu_based2_ept_ve.md): The value that controls whether extended page table (EPT) violations cause virtualization exceptions instead of VM exits.
- [CPU_BASED2_PT_CONCEAL_VMX](cpu_based2_pt_conceal_vmx.md): The value that controls whether the processor trace facility suppresses information that the processor was in VMX non-root operation.
- [CPU_BASED2_XSAVES_XRSTORS](cpu_based2_xsaves_xrstors.md): The value that controls whether any execution of save or restore state instructions (XSAVES or XRSTORS) causes an invalid opcode exception.
- [CPU_BASED2_EPT_MODE_BASED_EXEC](cpu_based2_ept_mode_based_exec.md): The value that controls whether to base extended page table (EPT) execute permissions on whether access to a linear address is supervisor or user mode.
- [CPU_BASED2_EPT_SUBPAGE_WRITE](cpu_based2_ept_subpage_write.md): The value that controls whether extended page table (EPT) write permissions specify granularity of 128 bytes.
- [CPU_BASED2_PT_GUEST_PHYSICAL](cpu_based2_pt_guest_physical.md): The value that controls whether to treat all output addresses used by Intel Processor Trace as guest-physical addresses and translated using the extended page table.
- [CPU_BASED2_TSC_SCALING](cpu_based2_tsc_scaling.md): The value that controls whether the execution of various read time stamp counters and read model-specific registers that read from the IA32 timestamp counter model specific register return a value modified by the TSC multiplier field.
- [CPU_BASED2_USER_WAIT_PAUSE](cpu_based2_user_wait_pause.md): The value that controls whether any execution of TPAUSE, UMONITOR, or UMWAIT instrucitons generate an illegal opcode exception.
- [CPU_BASED2_ENCLV_EXIT_MAP](cpu_based2_enclv_exit_map.md): The value that controls whether executions of an enclave VMM function instruction (ENCLV) checks the ENCLV-exiting bitmap to determine whether the instruction causes a VM exit.
- [VMX_EPT_VPID_SUPPORT_AD](vmx_ept_vpid_support_ad.md): The value that controls if extended page tables (EPT) support accessed and dirty flags.
- [VMX_EPT_VPID_SUPPORT_EXONLY](vmx_ept_vpid_support_exonly.md): The value that controls whether extended page tables (EPT) support execute-only translations.
- [VMEXIT_SAVE_DBG_CONTROLS](vmexit_save_dbg_controls.md): Thievalue that controls whether to save debug register 7 DR7 and the IA32 debug control DEBUGCTL MSR on VM exit.
- [VMEXIT_HOST_IA32E](vmexit_host_ia32e.md): This value controls, on processors that support Intel 64 architecture, whether a logical processor is in 64-bit mode after the next VM exit.
- [VMEXIT_LOAD_IA32_PERF_GLOBAL_CTRL](vmexit_load_ia32_perf_global_ctrl.md): The value that controls whether to load the IA32_PERF_GLOBAL_CTRL model specific register on VM exit.
- [VMEXIT_ACK_INTR](vmexit_ack_intr.md): The value that controls whether the logical processor sends an acknowledgement to the interrupt controller when the VM exits.
- [VMEXIT_SAVE_IA32_PAT](vmexit_save_ia32_pat.md): The value that controls whether to save the IA32_EFER model specific register on VM exit.
- [VMEXIT_LOAD_IA32_PAT](vmexit_load_ia32_pat.md): The value that controls whether to load the IA32_EFER mode specific register on VM exit.
- [VMEXIT_SAVE_EFER](vmexit_save_efer.md): The value that controls whether to save the IA32_EFER MSR on VM exit.
- [VMEXIT_LOAD_EFER](vmexit_load_efer.md): The value that controls whether to load the IA32_EFER MSR on VM exit.
- [VMEXIT_SAVE_VMX_TIMER](vmexit_save_vmx_timer.md): The value that controls whether to save the value of the VMX-preemption timer on VM exit.
- [VMEXIT_CLEAR_IA32_BNDCFGS](vmexit_clear_ia32_bndcfgs.md): The value that controls whether to clear the IA32_BNDCFGS model specific register on VM exit.
- [VMEXIT_PT_CONCEAL_VMX](vmexit_pt_conceal_vmx.md): The value that controls whether the Intel Processor Trace produces a paging information packet on VM exit or a VMCS packet on SMM VM exit.
- [VMEXIT_CLEAR_IA32_RTIT_CTL](vmexit_clear_ia32_rtit_ctl.md): The value that controls whether to clear the IA32_RTIT_CTL model specific register (MSR) on VM exit.
- [VMEXIT_LOAD_CET_STATE](vmexit_load_cet_state.md): The value that controls whether to load CET-related MSRs and SPP on VM exit.
- [VMENTRY_LOAD_DBG_CONTROLS](vmentry_load_dbg_controls.md): The value that controls whetherto load Debug Register 7 and the IA32_DEBUGCTL model specific register (MSR) on VM entry.
- [VMENTRY_GUEST_IA32E](vmentry_guest_ia32e.md): The value that controls whether the logical processor is in IA-32e mode after VM entry.
- [VMENTRY_SMM](vmentry_smm.md): The value that controls whether the logical processor is in system-management mode (SMM) after VM entry.
- [VMENTRY_DEACTIVATE_DUAL_MONITOR](vmentry_deactivate_dual_monitor.md): The value that controls whether the treatment of SMIs and system-management mode (SMM) is in effect after the VM entry.
- [VMENTRY_LOAD_IA32_PERF_GLOBAL_CTRL](vmentry_load_ia32_perf_global_ctrl.md): The value that controls whether to load the IA32_PERF_GLOBAL_CTRL model specific register on VM entry.
- [VMENTRY_LOAD_IA32_PAT](vmentry_load_ia32_pat.md): The value that controls whether to load the IA32_PAT model specific register on VM entry.
- [VMENTRY_LOAD_EFER](vmentry_load_efer.md): The value that determines whether to load the IA32_EFER model specific register on VM entry.
- [VMENTRY_LOAD_IA32_BNDCFGS](vmentry_load_ia32_bndcfgs.md): The value that controls whether to load the IA32_BNDCFGS model specific register on VM entry.
- [VMENTRY_PT_CONCEAL_VMX](vmentry_pt_conceal_vmx.md): The value that controls whether the Intel Processor Trace produces a paging information packet (PIP) on a VM entry or a VMCS packet on a VM entry that returns from system-management mode.
- [VMENTRY_LOAD_IA32_RTIT_CTL](vmentry_load_ia32_rtit_ctl.md): The value that controls whether to clear the IA32_RTIT_CTL model specific register (MSR) on VM exit.
- [VMENTRY_LOAD_CET_STATE](vmentry_load_cet_state.md): The value that controls whether to load CET-related model specific registers and SPP on VM exit.

## See Also

### Capabilities

- [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md): Returns, by reference, the VMX virtualization capabilities of the host processor.
- [hv_vmx_get_msr_info](hv_vmx_get_msr_info%28____%29.md): Returns information about guest MSR configuration.
- [hv_vmx_capability_t](hv_vmx_capability_t.md): The type that describes Virtual Machine Extensions (VMX) capability fields.
- [hv_vmx_msr_info_t](hv_vmx_msr_info_t.md): The type that describes Move to Status Register (MSR) information fields.
- [MSR Information Fields](3567084-msr-information-fields.md): The type that describes Machine Specific Register (MSR) fields.
