> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_get_wait_for_interrupt_time(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_get_wait_for_interrupt_time(_:_:))

# hv_vcpu_get_wait_for_interrupt_time(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```swift
func hv_vcpu_get_wait_for_interrupt_time(_ vcpu: hv_vcpu_t, _ time: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `vcpu`: ID of the vcpu instance.
- `time`: Pointer to wait time value (written on success).

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, error code otherwise.

<a id="discussion"></a>

## Discussion

Returns the cumulative wait time of a vCPU spent at WFI instruction while waiting for interrupts in the units of mach_absolute_time().

Must be called by the owning thread. Returns HV_UNSUPPORTED if the VM was created without a GIC device (hv_gic_create).

# hv_vcpu_get_wait_for_interrupt_time (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```objectivec
extern hv_return_t hv_vcpu_get_wait_for_interrupt_time(hv_vcpu_t vcpu, uint64_t *time);
```

## Parameters

- `vcpu`: ID of the vcpu instance.
- `time`: Pointer to wait time value (written on success).

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, error code otherwise.

<a id="discussion"></a>

## Discussion

Returns the cumulative wait time of a vCPU spent at WFI instruction while waiting for interrupts in the units of mach_absolute_time().

Must be called by the owning thread. Returns HV_UNSUPPORTED if the VM was created without a GIC device (hv_gic_create).
