> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_x86_reg_t](https://developer.apple.com/documentation/hypervisor/hv_x86_reg_t)

# hv_x86_reg_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The type that defines x86 architectural registers.

## Declaration

```swift
struct hv_x86_reg_t
```

## Topics

### Registers

- [HV_X86_RIP](hv_x86_rip.md): The value that identifies the x86 instruction pointer register.
- [HV_X86_RFLAGS](hv_x86_rflags.md): The value that identifies the x86 status register.
- [HV_X86_RAX](hv_x86_rax.md): The value that identifies the x86 accumulator register.
- [HV_X86_RCX](hv_x86_rcx.md): The value that identifies the x86 counter register.
- [HV_X86_RDX](hv_x86_rdx.md): The value that identifies the x86 data register.
- [HV_X86_RBX](hv_x86_rbx.md): The value that identifies the x86 base register.
- [HV_X86_RSI](hv_x86_rsi.md): The value that identifies the x86 source index register.
- [HV_X86_RDI](hv_x86_rdi.md): The value that identifies the x86 destination index register.
- [HV_X86_RSP](hv_x86_rsp.md): The value that identifies the x86 stack pointer register.
- [HV_X86_RBP](hv_x86_rbp.md): The value that identifies the x86 base pointer register.
- [HV_X86_R8](hv_x86_r8.md): The value that identifies the x86 general-purpose register R8.
- [HV_X86_R9](hv_x86_r9.md): The value that identifies the x86 general-purpose register R9.
- [HV_X86_R10](hv_x86_r10.md): The value that identifies the x86 general-purpose register R10.
- [HV_X86_R11](hv_x86_r11.md): The value that identifies the x86 general-purpose register R11.
- [HV_X86_R12](hv_x86_r12.md): The value that identifies the x86 general-purpose register R12.
- [HV_X86_R13](hv_x86_r13.md): The value that identifies the x86 general-purpose register R13.
- [HV_X86_R14](hv_x86_r14.md): The value that identifies the x86 general-purpose register R14.
- [HV_X86_R15](hv_x86_r15.md): The value that identifies the x86 general-purpose register R15.
- [HV_X86_CS](hv_x86_cs.md): The value that identifies the x86 code-segment register.
- [HV_X86_SS](hv_x86_ss.md): The value that identifies the x86 stack-segment register.
- [HV_X86_DS](hv_x86_ds.md): The value that identifies the x86 data-segment register.
- [HV_X86_ES](hv_x86_es.md): The value that identifies the x86 segment register ES.
- [HV_X86_FS](hv_x86_fs.md): The value that identifies the x86 segment register FS.
- [HV_X86_GS](hv_x86_gs.md): The value that identifies the x86 segment register GS.
- [HV_X86_IDT_BASE](hv_x86_idt_base.md): The value that identifies the x86 interrupt descriptor, table-base register.
- [HV_X86_IDT_LIMIT](hv_x86_idt_limit.md): The value that identifies the x86 interrupt descriptor, table-base register.
- [HV_X86_GDT_BASE](hv_x86_gdt_base.md): The value that identifies the x86 global descriptor, table-base register.
- [HV_X86_GDT_LIMIT](hv_x86_gdt_limit.md): The value that identifies the x86 global descriptor, table-limit register.
- [HV_X86_LDTR](hv_x86_ldtr.md): The value that identifies the x86 local descriptor, table register.
- [HV_X86_LDT_BASE](hv_x86_ldt_base.md): The value that identifies the x86 local descriptor, table-base register.
- [HV_X86_LDT_LIMIT](hv_x86_ldt_limit.md): The value that identifies the x86 local descriptor, table-limit register.
- [HV_X86_LDT_AR](hv_x86_ldt_ar.md): The value that identifies the x86 local descriptor table, access-rights register.
- [HV_X86_TR](hv_x86_tr.md): The value that identifies the x86 task register.
- [HV_X86_TSS_BASE](hv_x86_tss_base.md): The value that identifies the x86 task-state, segment-base register.
- [HV_X86_TSS_LIMIT](hv_x86_tss_limit.md): The value that identifies the x86 task state segment limit register.
- [HV_X86_TSS_AR](hv_x86_tss_ar.md): The value that identifies the x86 task-state, segment-access, rights register.
- [HV_X86_CR0](hv_x86_cr0.md): The value that identifies the x86 control-register CR0.
- [HV_X86_CR1](hv_x86_cr1.md): The value that identifies the x86 control-register CR1.
- [HV_X86_CR2](hv_x86_cr2.md): The value that identifies the x86 control-register CR2.
- [HV_X86_CR3](hv_x86_cr3.md): The value that identifies the x86 control-register CR3.
- [HV_X86_CR4](hv_x86_cr4.md): The value that identifies the x86 control-register CR4.
- [HV_X86_DR0](hv_x86_dr0.md): The value that identifies the x86 debug-register DR0.
- [HV_X86_DR1](hv_x86_dr1.md): The value that identifies the x86 debug-register DR1.
- [HV_X86_DR2](hv_x86_dr2.md): The value that identifies the x86 debug-register DR2.
- [HV_X86_DR3](hv_x86_dr3.md): The value that identifies the x86 debug-register DR3.
- [HV_X86_DR4](hv_x86_dr4.md): The value that identifies the x86 debug-register DR4.
- [HV_X86_DR5](hv_x86_dr5.md): The value that identifies the x86 debug-register DR5.
- [HV_X86_DR6](hv_x86_dr6.md): The value that identifies the x86 debug-register DR6.
- [HV_X86_DR7](hv_x86_dr7.md): The value that identifies the x86 debug-register DR7.
- [HV_X86_TPR](hv_x86_tpr.md): The value that identifies the x86 task-priority register.
- [HV_X86_XCR0](hv_x86_xcr0.md): The value that identifies the x86 extended-control register.
- [HV_X86_REGISTERS_MAX](hv_x86_registers_max.md): The value that identifies the maximum value of x86 register constants.

### Initializers

- [init(\_:)](hv_x86_reg_t/init%28__%29.md): Creates a new x86 architectural register instance.
- [init(rawValue:)](hv_x86_reg_t/init%28rawvalue_%29.md): Creates a new x86 architectural register instance.

### Raw Value

- [rawValue](hv_x86_reg_t/rawvalue.md): An unsigned 32-bit integer representing the x86 architectural registers.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### CPU Registers

- [hv_vcpu_read_register(\_:\_:\_:)](hv_vcpu_read_register%28______%29.md): Returns, by reference, the current value of an architectural x86 register of a vCPU.
- [hv_vcpu_write_register(\_:\_:\_:)](hv_vcpu_write_register%28______%29.md): Sets the value of an architectural x86 register of a vCPU.

# hv_x86_reg_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The type that defines x86 architectural registers.

## Declaration

```objectivec
typedef enum { ... } hv_x86_reg_t;
```

## Topics

### Registers

- [HV_X86_RIP](hv_x86_rip.md): The value that identifies the x86 instruction pointer register.
- [HV_X86_RFLAGS](hv_x86_rflags.md): The value that identifies the x86 status register.
- [HV_X86_RAX](hv_x86_rax.md): The value that identifies the x86 accumulator register.
- [HV_X86_RCX](hv_x86_rcx.md): The value that identifies the x86 counter register.
- [HV_X86_RDX](hv_x86_rdx.md): The value that identifies the x86 data register.
- [HV_X86_RBX](hv_x86_rbx.md): The value that identifies the x86 base register.
- [HV_X86_RSI](hv_x86_rsi.md): The value that identifies the x86 source index register.
- [HV_X86_RDI](hv_x86_rdi.md): The value that identifies the x86 destination index register.
- [HV_X86_RSP](hv_x86_rsp.md): The value that identifies the x86 stack pointer register.
- [HV_X86_RBP](hv_x86_rbp.md): The value that identifies the x86 base pointer register.
- [HV_X86_R8](hv_x86_r8.md): The value that identifies the x86 general-purpose register R8.
- [HV_X86_R9](hv_x86_r9.md): The value that identifies the x86 general-purpose register R9.
- [HV_X86_R10](hv_x86_r10.md): The value that identifies the x86 general-purpose register R10.
- [HV_X86_R11](hv_x86_r11.md): The value that identifies the x86 general-purpose register R11.
- [HV_X86_R12](hv_x86_r12.md): The value that identifies the x86 general-purpose register R12.
- [HV_X86_R13](hv_x86_r13.md): The value that identifies the x86 general-purpose register R13.
- [HV_X86_R14](hv_x86_r14.md): The value that identifies the x86 general-purpose register R14.
- [HV_X86_R15](hv_x86_r15.md): The value that identifies the x86 general-purpose register R15.
- [HV_X86_CS](hv_x86_cs.md): The value that identifies the x86 code-segment register.
- [HV_X86_SS](hv_x86_ss.md): The value that identifies the x86 stack-segment register.
- [HV_X86_DS](hv_x86_ds.md): The value that identifies the x86 data-segment register.
- [HV_X86_ES](hv_x86_es.md): The value that identifies the x86 segment register ES.
- [HV_X86_FS](hv_x86_fs.md): The value that identifies the x86 segment register FS.
- [HV_X86_GS](hv_x86_gs.md): The value that identifies the x86 segment register GS.
- [HV_X86_IDT_BASE](hv_x86_idt_base.md): The value that identifies the x86 interrupt descriptor, table-base register.
- [HV_X86_IDT_LIMIT](hv_x86_idt_limit.md): The value that identifies the x86 interrupt descriptor, table-base register.
- [HV_X86_GDT_BASE](hv_x86_gdt_base.md): The value that identifies the x86 global descriptor, table-base register.
- [HV_X86_GDT_LIMIT](hv_x86_gdt_limit.md): The value that identifies the x86 global descriptor, table-limit register.
- [HV_X86_LDTR](hv_x86_ldtr.md): The value that identifies the x86 local descriptor, table register.
- [HV_X86_LDT_BASE](hv_x86_ldt_base.md): The value that identifies the x86 local descriptor, table-base register.
- [HV_X86_LDT_LIMIT](hv_x86_ldt_limit.md): The value that identifies the x86 local descriptor, table-limit register.
- [HV_X86_LDT_AR](hv_x86_ldt_ar.md): The value that identifies the x86 local descriptor table, access-rights register.
- [HV_X86_TR](hv_x86_tr.md): The value that identifies the x86 task register.
- [HV_X86_TSS_BASE](hv_x86_tss_base.md): The value that identifies the x86 task-state, segment-base register.
- [HV_X86_TSS_LIMIT](hv_x86_tss_limit.md): The value that identifies the x86 task state segment limit register.
- [HV_X86_TSS_AR](hv_x86_tss_ar.md): The value that identifies the x86 task-state, segment-access, rights register.
- [HV_X86_CR0](hv_x86_cr0.md): The value that identifies the x86 control-register CR0.
- [HV_X86_CR1](hv_x86_cr1.md): The value that identifies the x86 control-register CR1.
- [HV_X86_CR2](hv_x86_cr2.md): The value that identifies the x86 control-register CR2.
- [HV_X86_CR3](hv_x86_cr3.md): The value that identifies the x86 control-register CR3.
- [HV_X86_CR4](hv_x86_cr4.md): The value that identifies the x86 control-register CR4.
- [HV_X86_DR0](hv_x86_dr0.md): The value that identifies the x86 debug-register DR0.
- [HV_X86_DR1](hv_x86_dr1.md): The value that identifies the x86 debug-register DR1.
- [HV_X86_DR2](hv_x86_dr2.md): The value that identifies the x86 debug-register DR2.
- [HV_X86_DR3](hv_x86_dr3.md): The value that identifies the x86 debug-register DR3.
- [HV_X86_DR4](hv_x86_dr4.md): The value that identifies the x86 debug-register DR4.
- [HV_X86_DR5](hv_x86_dr5.md): The value that identifies the x86 debug-register DR5.
- [HV_X86_DR6](hv_x86_dr6.md): The value that identifies the x86 debug-register DR6.
- [HV_X86_DR7](hv_x86_dr7.md): The value that identifies the x86 debug-register DR7.
- [HV_X86_TPR](hv_x86_tpr.md): The value that identifies the x86 task-priority register.
- [HV_X86_XCR0](hv_x86_xcr0.md): The value that identifies the x86 extended-control register.
- [HV_X86_REGISTERS_MAX](hv_x86_registers_max.md): The value that identifies the maximum value of x86 register constants.

## See Also

### CPU Registers

- [hv_vcpu_read_register](hv_vcpu_read_register%28______%29.md): Returns, by reference, the current value of an architectural x86 register of a vCPU.
- [hv_vcpu_write_register](hv_vcpu_write_register%28______%29.md): Sets the value of an architectural x86 register of a vCPU.
