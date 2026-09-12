> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_run_until(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_run_until(_:_:))

# hv_vcpu_run_until(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Executes a vCPU until it reaches the deadline defined in absolute time units you provide.

## Declaration

```swift
func hv_vcpu_run_until(_ vcpu: hv_vcpuid_t, _ deadline: UInt64) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `deadline`: The timer deadline in mach absolute time units. Use the special value [HV_DEADLINE_FOREVER](hv_deadline_forever.md) to specify a deadline that never expires.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

If the deadline you specify is other than [HV_DEADLINE_FOREVER](hv_deadline_forever.md), this call uses the VMX preemption timer. If the hardware doesn’t support the VMX preemption timer, it returns [HV_UNSUPPORTED](hv_unsupported.md).

This function supersedes [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md) on Intel-based Mac computers. Unlike [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md), it doesn’t return on transparently handled VMEXITs.

## See Also

### Runtime

- [hv_vcpu_interrupt(\_:\_:)](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_flush(\_:)](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.

# hv_vcpu_run_until (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Executes a vCPU until it reaches the deadline defined in absolute time units you provide.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_run_until(hv_vcpuid_t vcpu, uint64_t deadline);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `deadline`: The timer deadline in mach absolute time units. Use the special value [HV_DEADLINE_FOREVER](hv_deadline_forever.md) to specify a deadline that never expires.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

If the deadline you specify is other than [HV_DEADLINE_FOREVER](hv_deadline_forever.md), this call uses the VMX preemption timer. If the hardware doesn’t support the VMX preemption timer, it returns [HV_UNSUPPORTED](hv_unsupported.md).

This function supersedes [hv_vcpu_run](hv_vcpu_run%28__%29.md) on Intel-based Mac computers. Unlike [hv_vcpu_run](hv_vcpu_run%28__%29.md), it doesn’t return on transparently handled VMEXITs.

## See Also

### Runtime

- [hv_vcpu_interrupt](hv_vcpu_interrupt%28____%29.md): Forces the vCPU instances you provide to immediately exit the VM.
- [hv_vcpu_flush](hv_vcpu_flush%28__%29.md): Deprecated. Flushes the cached state of a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [Execution Deadlines](3553338-execution-deadlines.md): An enumeration that describes available execution deadlines available to vCPUs.
