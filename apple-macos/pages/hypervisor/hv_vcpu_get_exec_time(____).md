> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_get_exec_time(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_get_exec_time(_:_:))

# hv_vcpu_get_exec_time(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.

## Declaration

```swift
func hv_vcpu_get_exec_time(_ vcpu: hv_vcpu_t, _ time: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `time`: The execution time on output, in nanoseconds.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Runtime

- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit(\_:\_:)](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt(\_:\_:\_:)](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.

# hv_vcpu_get_exec_time (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_get_exec_time(hv_vcpu_t vcpu, uint64_t *time);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `time`: The execution time on output, in nanoseconds.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Runtime

- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpus_exit](hv_vcpus_exit%28____%29.md): Forces an immediate exit of a set of vCPUs of the VM.
- [hv_vcpu_get_pending_interrupt](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.
