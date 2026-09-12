> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/exits](https://developer.apple.com/documentation/hypervisor/exits)

# Exits (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Describe virtual machine exit conditions.

## Topics

### Descriptor

- [hv_vcpu_exit_t](hv_vcpu_exit_t.md): Information about an exit from the vCPU to the host.

### Exit reasons

- [hv_exit_reason_t](hv_exit_reason_t.md): The type that describes the event that triggered a guest exit to the host.
- [hv_exception_syndrome_t](hv_exception_syndrome_t.md): Type of a vCPU exception syndrome.
- [hv_exception_address_t](hv_exception_address_t.md): Type of a vCPU exception virtual address.

## See Also

### Runtime

- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt(\_:\_:\_:)](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.

# Exits (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Describe virtual machine exit conditions.

## Topics

### Descriptor

- [hv_vcpu_exit_t](hv_vcpu_exit_t.md): Information about an exit from the vCPU to the host.

### Exit reasons

- [hv_exit_reason_t](hv_exit_reason_t.md): The type that describes the event that triggered a guest exit to the host.
- [hv_exception_syndrome_t](hv_exception_syndrome_t.md): Type of a vCPU exception syndrome.
- [hv_exception_address_t](hv_exception_address_t.md): Type of a vCPU exception virtual address.

## See Also

### Runtime

- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
