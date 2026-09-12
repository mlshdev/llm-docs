> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/vmx_reason_io](https://developer.apple.com/documentation/hypervisor/vmx_reason_io)

# VMX_REASON_IO (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

Guest attempted to execute an I/O instruction.

## Declaration

```swift
var VMX_REASON_IO: Int { get }
```

## See Also

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

# VMX_REASON_IO (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

Guest attempted to execute an I/O instruction.

## Declaration

```objectivec
VMX_REASON_IO
```

## See Also

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
