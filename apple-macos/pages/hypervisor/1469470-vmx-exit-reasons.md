> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/1469470-vmx-exit-reasons](https://developer.apple.com/documentation/hypervisor/1469470-vmx-exit-reasons)

# VMX Exit Reasons

**Interface languages:** Swift, Objective-C

**Framework:** Hypervisor  
**Kind:** API Collection

An enumertion that describes the VMX exit reasons.

## Topics

### Exit reasons

- [VMX_REASON_EXC_NMI](vmx_reason_exc_nmi.md): VMX exit due to an exception or non-maskable interrupt (NMI).
- [VMX_REASON_IRQ](vmx_reason_irq.md): An external interrupt arrived and the “external-interrupt exiting” VM-execution control was 1.
- [VMX_REASON_TRIPLE_FAULT](vmx_reason_triple_fault.md): VMX exit due to a triple fault.
- [VMX_REASON_INIT](vmx_reason_init.md): VMX exit due to an INIT signal.
- [VMX_REASON_SIPI](vmx_reason_sipi.md): VMS exit due to startup (IPI).
- [VMX_REASON_IO_SMI](vmx_reason_io_smi.md): VMX exited due to an I/O SMM Interrupt.
- [VMX_REASON_OTHER_SMI](vmx_reason_other_smi.md): An SMI arrived and caused an SMM VM exit.
- [VMX_REASON_IRQ_WND](vmx_reason_irq_wnd.md): VMX exited due to an Interrupt Window.
- [VMX_REASON_VIRTUAL_NMI_WND](vmx_reason_virtual_nmi_wnd.md): At the beginning of an instruction, there was no virtual-NMI blocking.
- [VMX_REASON_TASK](vmx_reason_task.md): The guest attempted a task switch.
- [VMX_REASON_CPUID](vmx_reason_cpuid.md): The guest software attempted to execute the CPUID instruction.
- [VMX_REASON_GETSEC](vmx_reason_getsec.md): The guest attempted to execute GETSEC instruction.
- [VMX_REASON_HLT](vmx_reason_hlt.md): The guest attempted to execute HLT and the “HLT exiting” VM-execution control was 1.
- [VMX_REASON_INVD](vmx_reason_invd.md): The guest attempted to execute Invalidate Caches (INVD) instruction.
- [VMX_REASON_INVLPG](vmx_reason_invlpg.md): The guest attempted to execute the Invalidate TLB Entry (INVLPG) instruction and the “INVLPG exiting” VM-execution control was 1.
- [VMX_REASON_RDPMC](vmx_reason_rdpmc.md): The guest attempted to execute read performance monitoring counters (RDPMC) instruction and the “RDPMC exiting” VM-execution control was 1.
- [VMX_REASON_RDTSC](vmx_reason_rdtsc.md): The guest attempted to execute read time stamp counter (RDTSC) instruction and the “RDTSC exiting” VM-execution control was 1.
- [VMX_REASON_RSM](vmx_reason_rsm.md): The guest software attempted to execute a return from system management mode (RSM) instuction in system-management mode.
- [VMX_REASON_VMCALL](vmx_reason_vmcall.md): The execution of VMCALL by either by the guest or the executive monitor casued an ordinary VM exit or an SMM VM exit, respectively.
- [VMX_REASON_VMCLEAR](vmx_reason_vmclear.md): The guest attempted to execute VMCLEAR.
- [VMX_REASON_VMLAUNCH](vmx_reason_vmlaunch.md): The guest attempted to execute VMLAUNCH.
- [VMX_REASON_VMPTRLD](vmx_reason_vmptrld.md): The guest attempted to execute VMPTRLD.
- [VMX_REASON_VMPTRST](vmx_reason_vmptrst.md): The guest attempted to execute VMPTRST.
- [VMX_REASON_VMREAD](vmx_reason_vmread.md): The guest attempted to execute VMREAD.
- [VMX_REASON_VMRESUME](vmx_reason_vmresume.md): The guest attempted to execute VMRESUME.
- [VMX_REASON_VMWRITE](vmx_reason_vmwrite.md): The guest attempted to execute VMWRITE.
- [VMX_REASON_VMOFF](vmx_reason_vmoff.md): The guest attempted to execute VMXOFF.
- [VMX_REASON_VMON](vmx_reason_vmon.md): The guest attempted to execute VMXON.
- [VMX_REASON_MOV_CR](vmx_reason_mov_cr.md): The guest attempted to access one of the CR0, CR3, CR4 or CR8 control registers.
- [VMX_REASON_MOV_DR](vmx_reason_mov_dr.md): The guest attempted a MOV to or from a debug register and the “MOV-DR exiting” VM-execution control was 1.
- [VMX_REASON_IO](vmx_reason_io.md): Guest attempted to execute an I/O instruction.
- [VMX_REASON_RDMSR](vmx_reason_rdmsr.md): The guest attempted to execute RDMSR.
- [VMX_REASON_WRMSR](vmx_reason_wrmsr.md): The guest attempted to execute WRMSR.
- [VMX_REASON_VMENTRY_GUEST](vmx_reason_vmentry_guest.md): VM entry failed one of the entry checks.
- [VMX_REASON_VMENTRY_MSR](vmx_reason_vmentry_msr.md): A VM entry failed in an attempt to load model specific registers.
- [VMX_REASON_MWAIT](vmx_reason_mwait.md): The guest attempted to execute an MWAIT instruction and the “MWAIT exiting” VM-execution control was 1.
- [VMX_REASON_MTF](vmx_reason_mtf.md): VM exit occurred due to the setting of the monitor trap flag (MTF) or injection of a pending MTF VM exit.
- [VMX_REASON_MONITOR](vmx_reason_monitor.md): The guest attempted to execute MONITOR and the “MONITOR exiting” VM-execution control was 1.
- [VMX_REASON_PAUSE](vmx_reason_pause.md): The guest attempted to execute PAUSE when the VM-execution control was 1 or exceeded the execition time window.
- [VMX_REASON_VMENTRY_MC](vmx_reason_vmentry_mc.md): A machine-check event occurred during VM entry.
- [VMX_REASON_TPR_THRESHOLD](vmx_reason_tpr_threshold.md): The logical processor determined that the value of the byte at offset 080H on the virtual-APIC page was below the required TPR threshold.
- [VMX_REASON_APIC_ACCESS](vmx_reason_apic_access.md): The guest attempted to access memory at a physical address on the APIC-access page and the “virtualize APIC accesses” VM-execution control was 1.
- [VMX_REASON_VIRTUALIZED_EOI](vmx_reason_virtualized_eoi.md): The system performed EOI virtualization for a virtual interrupt whose vector indexed a bit set in the EOIexit bitmap.
- [VMX_REASON_GDTR_IDTR](vmx_reason_gdtr_idtr.md): The guest attempted to execute LGDT, LIDT, SGDT, or SIDT instructions and the “descriptor-table exiting” VM-execution control was 1.
- [VMX_REASON_LDTR_TR](vmx_reason_ldtr_tr.md): The guest attempted to execute LLDT, LTR, SLDT, or STR instructions and the “descriptor-table exiting” VM-execution control was 1.
- [VMX_REASON_EPT_VIOLATION](vmx_reason_ept_violation.md): The configuration of the Extended Page Table (EPT) paging structures disallowed an attempt to access memory with a guest-physical address.
- [VMX_REASON_EPT_MISCONFIG](vmx_reason_ept_misconfig.md): An attempt to access memory with a guest-physical address encountered a misconfigured Extended Page Table (EPT) paging-structure entry.
- [VMX_REASON_EPT_INVEPT](vmx_reason_ept_invept.md): The guest attempted to execute the Invalidate cached Extended Page Table (INVEPT) instruction.
- [VMX_REASON_RDTSCP](vmx_reason_rdtscp.md): The guest attempted to execute an RDTSCP instruction and the “enable RDTSCP” and “RDTSC exiting” VM-execution controls were both 1.
- [VMX_REASON_VMX_TIMER_EXPIRED](vmx_reason_vmx_timer_expired.md): The preemption timer counted down to zero.
- [VMX_REASON_INVVPID](vmx_reason_invvpid.md): The guest attempted to execute the INVVPID instruction.
- [VMX_REASON_WBINVD](vmx_reason_wbinvd.md): The guest attempted to execute WBINVD and the “WBINVD exiting” VM-execution control was 1.
- [VMX_REASON_XSETBV](vmx_reason_xsetbv.md): The guest attempted to execute XSETBV.
- [VMX_REASON_APIC_WRITE](vmx_reason_apic_write.md): The guest completed a write to the virtual-APIC page that requires virtualization by VMM software.
- [VMX_REASON_RDRAND](vmx_reason_rdrand.md): The guest software attempted to execute RDRAND instruction and the “RDRAND exiting” VM-execution control was 1.
- [VMX_REASON_INVPCID](vmx_reason_invpcid.md): The guest attempted to execute an INVPCID instruction and the “enable INVPCID” and “INVLPG exiting” VM-execution controls were both 1.
- [VMX_REASON_VMFUNC](vmx_reason_vmfunc.md): The guest called a VM function and the VM function either wasn’t enabled or generated a function-specific condition causing a VM exit.
- [VMX_REASON_ENCLS](vmx_reason_encls.md): The guest attempted to execute an unsupported ENCLS instruction.
- [VMX_REASON_RDSEED](vmx_reason_rdseed.md): The guest attempted to execute RDSEED and the “RDSEED exiting” VM-execution control was 1.
- [VMX_REASON_PML_FULL](vmx_reason_pml_full.md)
- [VMX_REASON_XSAVES](vmx_reason_xsaves.md): The guest attempted to execute XSAVES which wasn’t allowed in the current configuration.
- [VMX_REASON_XRSTORS](vmx_reason_xrstors.md): The guest attempted to execute XRSTORS which wasn’t allowed in the current configuration.
- [VMX_REASON_SPP_EVENT](vmx_reason_spp_event.md): The processor attempted to determine an access’s sub-page write permission and encountered an SPP miss or an SPP misconfiguration.
- [VMX_REASON_UMWAIT](vmx_reason_umwait.md): The guest attempted to execute a UMWAIT instruction and both the “enable user wait and pause” and “RDTSC exiting” VM-execution controls were both 1.
- [VMX_REASON_TPAUSE](vmx_reason_tpause.md): The guest attempted to execute a TPAUSE instuction and both the “enable user wait and pause” and “RDTSC exiting” VM-execution controls were both 1.

## See Also

### Shared types

- [VMX Creation Behavior](1469509-vmx_creation_behavior-enum.md): An enumeration that describes VMX creation behavior options.
- [Interrupt request (IRQ) codes](1469442-interrupt_request_irq_codes-enum.md): An enumeration that describes available interrupt codes.
