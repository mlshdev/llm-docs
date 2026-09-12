> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_interrupt(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_interrupt(_:_:))

# hv_vcpu_interrupt(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Forces the vCPU instances you provide to immediately exit the VM.

## Declaration

```swift
func hv_vcpu_interrupt(_ vcpus: UnsafeMutablePointer<hv_vcpuid_t>, _ vcpu_count: UInt32) -> hv_return_t
```

## Parameters

- `vcpus`: A pointer to an array of instances of vCPU.
- `vcpu_count`: The number of vCPU IDs specified by `vcpus`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Runtime

- [hv_vcpu_run_until(\_:\_:)](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_flush(\_:)](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.

# hv_vcpu_interrupt (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Forces the vCPU instances you provide to immediately exit the VM.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_interrupt(hv_vcpuid_t *vcpus, unsigned int vcpu_count);
```

## Parameters

- `vcpus`: A pointer to an array of instances of vCPU.
- `vcpu_count`: The number of vCPU IDs specified by `vcpus`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Runtime

- [hv_vcpu_run_until](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_flush](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.
