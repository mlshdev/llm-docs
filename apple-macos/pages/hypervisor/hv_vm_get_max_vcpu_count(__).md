> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_get_max_vcpu_count(_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_get_max_vcpu_count(_:))

# hv_vm_get_max_vcpu_count(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the maximum number of vCPUs that the hypervisor supports.

## Declaration

```swift
func hv_vm_get_max_vcpu_count(_ max_vcpu_count: UnsafeMutablePointer<UInt32>) -> hv_return_t
```

## Parameters

- `max_vcpu_count`: The maximum number of vCPUs on output. Undefined if the call doesn’t succeed.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Creation and destruction

- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.

# hv_vm_get_max_vcpu_count (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the maximum number of vCPUs that the hypervisor supports.

## Declaration

```objectivec
extern hv_return_t hv_vm_get_max_vcpu_count(uint32_t *max_vcpu_count);
```

## Parameters

- `max_vcpu_count`: The maximum number of vCPUs on output. Undefined if the call doesn’t succeed.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Creation and destruction

- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.
