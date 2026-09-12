> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/vcpu-management](https://developer.apple.com/documentation/hypervisor/vcpu-management)

# vCPU Management (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual CPUs, and manage CPU-specific registers and features.

<a id="overview"></a>

## Overview

Hypervisor creates Virtual CPUs with [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md). Call functions that operate on the vCPU from the same thread with the exception of [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md).

Enter the vCPU by using [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md). The function runs until the guest traps or an other thread calls [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md). On exit, [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md) populates the [hv_vcpu_exit_t](hv_vcpu_exit_t.md) with the exit reason.

> **Warning**

>  Don’t use vCPUs on dispatch queues, because work from a single queue can run on different threads.

## Topics

### Configuration

- [hv_vcpu_config_create()](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg(\_:\_:\_:)](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values(\_:\_:\_:)](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

### Creation and destruction

- [hv_vm_get_max_vcpu_count(\_:)](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.

### Runtime

- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt(\_:\_:\_:)](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.

### General registers

- [hv_vcpu_get_reg(\_:\_:\_:)](hv_vcpu_get_reg%28______%29.md): Gets the current value of a vCPU register.
- [hv_vcpu_set_reg(\_:\_:\_:)](hv_vcpu_set_reg%28______%29.md): Sets the value of a vCPU register.
- [hv_reg_t](hv_reg_t.md): The type that defines general registers.

### SIMD & Floating-point registers

- [hv_vcpu_get_simd_fp_reg(\_:\_:\_:)](hv_vcpu_get_simd_fp_reg%28______%29.md): Gets the current value of a vCPU SIMD and FP register.
- [hv_vcpu_set_simd_fp_reg(\_:\_:\_:)](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_uchar16_t](hv_simd_fp_uchar16_t.md): The value that represents an ARM SIMD and FP register.
- [hv_simd_fp_reg_t](hv_simd_fp_reg_t.md): The type that defines SIMD and floating-point registers.

### System registers

- [hv_vcpu_get_sys_reg(\_:\_:\_:)](hv_vcpu_get_sys_reg%28______%29.md): Gets the current value of a vCPU system register.
- [hv_vcpu_set_sys_reg(\_:\_:\_:)](hv_vcpu_set_sys_reg%28______%29.md): Sets the value of a vCPU system register.
- [hv_sys_reg_t](hv_sys_reg_t.md): The type of system registers.

### Trap configuration

- [hv_vcpu_get_trap_debug_exceptions(\_:\_:)](hv_vcpu_get_trap_debug_exceptions%28____%29.md): Gets whether debug exceptions exit the guest.
- [hv_vcpu_set_trap_debug_exceptions(\_:\_:)](hv_vcpu_set_trap_debug_exceptions%28____%29.md): Sets whether debug exceptions exit the guest.
- [hv_vcpu_get_trap_debug_reg_accesses(\_:\_:)](hv_vcpu_get_trap_debug_reg_accesses%28____%29.md): Gets whether debug-register accesses exit the guest.
- [hv_vcpu_set_trap_debug_reg_accesses(\_:\_:)](hv_vcpu_set_trap_debug_reg_accesses%28____%29.md): Sets whether debug-register accesses exit the guest.

## See Also

### Resource management

- [Memory management](memory-management.md): Map memory into the physical address space of the virtual machine.

# vCPU Management (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Create and run virtual CPUs, and manage CPU-specific registers and features.

<a id="overview"></a>

## Overview

Hypervisor creates Virtual CPUs with [hv_vcpu_create](hv_vcpu_create%28______%29.md). Call functions that operate on the vCPU from the same thread with the exception of [hv_vcpus_exit](hv_vcpus_exit%28____%29.md).

Enter the vCPU by using [hv_vcpu_run](hv_vcpu_run%28__%29.md). The function runs until the guest traps or an other thread calls [hv_vcpus_exit](hv_vcpus_exit%28____%29.md). On exit, [hv_vcpu_run](hv_vcpu_run%28__%29.md) populates the [hv_vcpu_exit_t](hv_vcpu_exit_t.md) with the exit reason.

> **Warning**

>  Don’t use vCPUs on dispatch queues, because work from a single queue can run on different threads.

## Topics

### Configuration

- [hv_vcpu_config_create](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

### Creation and destruction

- [hv_vm_get_max_vcpu_count](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.

### Runtime

- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.

### General registers

- [hv_vcpu_get_reg](hv_vcpu_get_reg%28______%29.md): Gets the current value of a vCPU register.
- [hv_vcpu_set_reg](hv_vcpu_set_reg%28______%29.md): Sets the value of a vCPU register.
- [hv_reg_t](hv_reg_t.md): The type that defines general registers.

### SIMD & Floating-point registers

- [hv_vcpu_get_simd_fp_reg](hv_vcpu_get_simd_fp_reg%28______%29.md): Gets the current value of a vCPU SIMD and FP register.
- [hv_vcpu_set_simd_fp_reg](hv_vcpu_set_simd_fp_reg%28______%29.md): Sets the value of a vCPU SIMD&FP register.
- [hv_simd_fp_uchar16_t](hv_simd_fp_uchar16_t.md): The value that represents an ARM SIMD and FP register.
- [hv_simd_fp_reg_t](hv_simd_fp_reg_t.md): The type that defines SIMD and floating-point registers.

### System registers

- [hv_vcpu_get_sys_reg](hv_vcpu_get_sys_reg%28______%29.md): Gets the current value of a vCPU system register.
- [hv_vcpu_set_sys_reg](hv_vcpu_set_sys_reg%28______%29.md): Sets the value of a vCPU system register.
- [hv_sys_reg_t](hv_sys_reg_t.md): The type of system registers.

### Trap configuration

- [hv_vcpu_get_trap_debug_exceptions](hv_vcpu_get_trap_debug_exceptions%28____%29.md): Gets whether debug exceptions exit the guest.
- [hv_vcpu_set_trap_debug_exceptions](hv_vcpu_set_trap_debug_exceptions%28____%29.md): Sets whether debug exceptions exit the guest.
- [hv_vcpu_get_trap_debug_reg_accesses](hv_vcpu_get_trap_debug_reg_accesses%28____%29.md): Gets whether debug-register accesses exit the guest.
- [hv_vcpu_set_trap_debug_reg_accesses](hv_vcpu_set_trap_debug_reg_accesses%28____%29.md): Sets whether debug-register accesses exit the guest.

## See Also

### Resource management

- [Memory management](memory-management.md): Map memory into the physical address space of the virtual machine.
