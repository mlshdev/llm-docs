> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_flush(_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_flush(_:))

# hv_vcpu_flush(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Flushes the cached state of a vCPU.

> This API has no effect and always returns HV_UNSUPPORTED

## Declaration

```swift
func hv_vcpu_flush(_ vcpu: hv_vcpuid_t) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

This function must be called by the owning thread.

## See Also

### Runtime

- [hv_vcpu_run_until(\_:\_:)](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_interrupt(\_:\_:)](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.

# hv_vcpu_flush (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Flushes the cached state of a vCPU.

> This API has no effect and always returns HV_UNSUPPORTED

## Declaration

```objectivec
extern hv_return_t hv_vcpu_flush(hv_vcpuid_t vcpu);
```

## Parameters

- `vcpu`: The instance of the vCPU.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

This function must be called by the owning thread.

## See Also

### Runtime

- [hv_vcpu_run_until](hv_vcpu_run_until%28____%29.md): Executes a vCPU until it reaches the deadline defined in absolute time units you provide.
- [hv_vcpu_interrupt](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.
