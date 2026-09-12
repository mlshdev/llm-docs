> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/cpu_based2_tsc_scaling](https://developer.apple.com/documentation/hypervisor/cpu_based2_tsc_scaling)

# CPU_BASED2_TSC_SCALING (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

The value that controls whether the execution of various read time stamp counters and read model-specific registers that read from the IA32 timestamp counter model specific register return a value modified by the TSC multiplier field.

## Declaration

```swift
var CPU_BASED2_TSC_SCALING: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

Use the [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md) API to determine the correct setting for this value at run time.

## See Also

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

# CPU_BASED2_TSC_SCALING (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

The value that controls whether the execution of various read time stamp counters and read model-specific registers that read from the IA32 timestamp counter model specific register return a value modified by the TSC multiplier field.

## Declaration

```objectivec
CPU_BASED2_TSC_SCALING
```

<a id="Discussion"></a>

## Discussion

Use the [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md) API to determine the correct setting for this value at run time.

## See Also

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
