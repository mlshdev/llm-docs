> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/3553338-execution-deadlines](https://developer.apple.com/documentation/hypervisor/3553338-execution-deadlines)

# Execution Deadlines (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration that describes available execution deadlines available to vCPUs.

## Topics

### Deadlines

- [HV_DEADLINE_FOREVER](hv_deadline_forever.md): The value that indicates a vCPU deadline that never expires.

## See Also

### Runtime

- [hv_vcpu_run_until(\_:\_:)](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_interrupt(\_:\_:)](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_flush(\_:)](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.

# Execution Deadlines (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration that describes available execution deadlines available to vCPUs.

## Topics

### Deadlines

- [HV_DEADLINE_FOREVER](hv_deadline_forever.md): The value that indicates a vCPU deadline that never expires.

## See Also

### Runtime

- [hv_vcpu_run_until](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_interrupt](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_flush](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
