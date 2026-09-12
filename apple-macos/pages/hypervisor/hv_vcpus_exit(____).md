> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpus_exit(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpus_exit(_:_:))

# hv_vcpus_exit(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Forces an immediate exit of a set of vCPUs of the VM.

## Declaration

```swift
func hv_vcpus_exit(_ vcpus: UnsafeMutablePointer<hv_vcpu_t>, _ vcpu_count: UInt32) -> hv_return_t
```

## Parameters

- `vcpus`: An array of vCPU instances.
- `vcpu_count`: The number of vCPUs in the array.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Runtime

- [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpu_get_pending_interrupt(\_:\_:\_:)](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt(\_:\_:\_:)](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time(\_:\_:)](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.

# hv_vcpus_exit (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Forces an immediate exit of a set of vCPUs of the VM.

## Declaration

```objectivec
extern hv_return_t hv_vcpus_exit(hv_vcpu_t *vcpus, uint32_t vcpu_count);
```

## Parameters

- `vcpus`: An array of vCPU instances.
- `vcpu_count`: The number of vCPUs in the array.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Runtime

- [hv_vcpu_run](hv_vcpu_run%28__%29.md): Starts the execution of a vCPU.
- [hv_vcpu_get_pending_interrupt](hv_vcpu_get_pending_interrupt%28______%29.md): Gets pending interrupts for a vCPU.
- [hv_vcpu_set_pending_interrupt](hv_vcpu_set_pending_interrupt%28______%29.md): Sets pending interrupts for a vCPU.
- [hv_vcpu_get_exec_time](hv_vcpu_get_exec_time%28____%29.md): Returns, by reference, the cumulative execution time of a vCPU, in nanoseconds.
- [hv_interrupt_type_t](hv_interrupt_type_t.md): The type that defines the vCPU’s interrupts.
- [Exits](exits.md): Describe virtual machine exit conditions.
