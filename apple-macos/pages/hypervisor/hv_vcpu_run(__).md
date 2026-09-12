> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_run(_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_run(_:))

# hv_vcpu_run(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Starts the execution of a vCPU.

## Declaration

```swift
func hv_vcpu_run(_ vcpu: hv_vcpu_t) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Call blocks until the next exit of the vCPU. The owning thread must call this function.

On an Apple Silicon, if the exit is of type [HV_EXIT_REASON_VTIMER_ACTIVATED](hv_exit_reason_vtimer_activated.md), the VTimer is automatically masked. As a result, no timer fires until the timer is unmasked with [hv_vcpu_set_vtimer_mask(\_:\_:)](hv_vcpu_set_vtimer_mask%28____%29.md).

On an Intel-based Mac, [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md) exits from causes external to the guest. To avoid the overhead of spurious exits use [hv_vcpu_run_until(\_:\_:)](hv_vcpu_run_until%28____%29.md) with the deadline [HV_DEADLINE_FOREVER](hv_deadline_forever.md).

## See Also

### Runtime

- [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt(\_:\_:\_:)](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.

# hv_vcpu_run (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Starts the execution of a vCPU.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_run(hv_vcpu_t vcpu);
```

## Parameters

- `vcpu`: The instance of the vCPU.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Call blocks until the next exit of the vCPU. The owning thread must call this function.

On an Apple Silicon, if the exit is of type [HV_EXIT_REASON_VTIMER_ACTIVATED](hv_exit_reason_vtimer_activated.md), the VTimer is automatically masked. As a result, no timer fires until the timer is unmasked with [hv_vcpu_set_vtimer_mask](hv_vcpu_set_vtimer_mask%28____%29.md).

On an Intel-based Mac, [hv_vcpu_run](hv_vcpu_run%28__%29.md) exits from causes external to the guest. To avoid the overhead of spurious exits use [hv_vcpu_run_until](hv_vcpu_run_until%28____%29.md) with the deadline [HV_DEADLINE_FOREVER](hv_deadline_forever.md).

## See Also

### Runtime

- [hv_vcpus_exit](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.
