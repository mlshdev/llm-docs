> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/intel-based_mac-vcpu-management](https://developer.apple.com/documentation/hypervisor/intel-based_mac-vcpu-management)

# vCPU Management (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual CPUs, and manage CPU-specific registers and features.

## Topics

### Creation and destruction

- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_options_t](hv_vcpu_options_t.md): Options for creating a new vCPU instance.
- [vCPU Creation Behavior](1447317-vcpu-creation-behavior.md): An enumeration representing the default creation options for virtual CPUs.
- [hv_vcpuid_t](hv_vcpuid_t.md): The type that describes a vCPU ID.

### Runtime

- [hv_vcpu_run_until(\_:\_:)](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_interrupt(\_:\_:)](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_flush(\_:)](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.

### Synchronization

- [hv_vm_sync_tsc(\_:)](hv_vm_sync_tsc%28__%29.md): Synchronizes guest timestamp counters (TSC) across all vCPUs.

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr(\_:\_:\_:)](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr(\_:\_:\_:)](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr(\_:\_:\_:)](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_set_msr_access(\_:\_:\_:)](hv_vcpu_set_msr_access%28______%29.md): Controls the guest access of a managed Model-Specific Register (MSR).
- [hv_vcpu_enable_managed_msr(\_:\_:\_:)](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [hv_msr_flags_t](hv_msr_flags_t.md): The type representing the native Model-Specific Register (MSR) permissions.
- [Model-Specific Registers](3727856-model-specific-registers.md)
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.

### CPU Registers

- [hv_vcpu_read_register(\_:\_:\_:)](hv_vcpu_read_register%28______%29.md): Returns, by reference, the current value of an architectural x86 register of a vCPU.
- [hv_vcpu_write_register(\_:\_:\_:)](hv_vcpu_write_register%28______%29.md): Sets the value of an architectural x86 register of a vCPU.
- [hv_x86_reg_t](hv_x86_reg_t.md): The type that defines x86 architectural registers.

### Floating Point (FP) State

- [hv_vcpu_read_fpstate(\_:\_:\_:)](hv_vcpu_read_fpstate%28______%29.md): Returns, by reference, the current architectural x86 floating point and SIMD state of a vCPU.
- [hv_vcpu_write_fpstate(\_:\_:\_:)](hv_vcpu_write_fpstate%28______%29.md): Sets the architectural x86 floating point and SIMD state of a vCPU.

### Memory Affinity

- [hv_vcpu_set_space(\_:\_:)](hv_vcpu_set_space%28____%29.md): Associates the vCPU instance with an allocated address space.

## See Also

### Resource management

- [Memory Management](intel-based_mac-memory-management.md): Map memory into the physical address space of the virtual machine, and allocate additional memory for the current task.
- [Virtual Machine Control Structure (VMCS)](virtual-machine-control-structure-vmcs.md): Read and write to fields of the virtual machine control structure.

# vCPU Management (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual CPUs, and manage CPU-specific registers and features.

## Topics

### Creation and destruction

- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_options_t](hv_vcpu_options_t.md): Options for creating a new vCPU instance.
- [vCPU Creation Behavior](1447317-vcpu-creation-behavior.md): An enumeration representing the default creation options for virtual CPUs.
- [hv_vcpuid_t](hv_vcpuid_t.md): The type that describes a vCPU ID.

### Runtime

- [hv_vcpu_run_until](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_interrupt](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_flush](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.

### Synchronization

- [hv_vm_sync_tsc](hv_vm_sync_tsc%28__%29.md): Synchronizes guest timestamp counters (TSC) across all vCPUs.

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_set_msr_access](hv_vcpu_set_msr_access%28______%29.md): Controls the guest access of a managed Model-Specific Register (MSR).
- [hv_vcpu_enable_managed_msr](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [hv_msr_flags_t](hv_msr_flags_t.md): The type representing the native Model-Specific Register (MSR) permissions.
- [Model-Specific Registers](3727856-model-specific-registers.md)
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.

### CPU Registers

- [hv_vcpu_read_register](hv_vcpu_read_register%28______%29.md): Returns, by reference, the current value of an architectural x86 register of a vCPU.
- [hv_vcpu_write_register](hv_vcpu_write_register%28______%29.md): Sets the value of an architectural x86 register of a vCPU.
- [hv_x86_reg_t](hv_x86_reg_t.md): The type that defines x86 architectural registers.

### Floating Point (FP) State

- [hv_vcpu_read_fpstate](hv_vcpu_read_fpstate%28______%29.md): Returns, by reference, the current architectural x86 floating point and SIMD state of a vCPU.
- [hv_vcpu_write_fpstate](hv_vcpu_write_fpstate%28______%29.md): Sets the architectural x86 floating point and SIMD state of a vCPU.

### Memory Affinity

- [hv_vcpu_set_space](hv_vcpu_set_space%28____%29.md): Associates the vCPU instance with an allocated address space.

## See Also

### Resource management

- [Memory Management](intel-based_mac-memory-management.md): Map memory into the physical address space of the virtual machine, and allocate additional memory for the current task.
- [Virtual Machine Control Structure (VMCS)](virtual-machine-control-structure-vmcs.md): Read and write to fields of the virtual machine control structure.
