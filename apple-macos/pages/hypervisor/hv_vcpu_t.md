> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_t](https://developer.apple.com/documentation/hypervisor/hv_vcpu_t)

# hv_vcpu_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

An opaque value that represents a vCPU instance.

## Declaration

```swift
typealias hv_vcpu_t = UInt64
```

## See Also

### Creation and destruction

- [hv_vm_get_max_vcpu_count(\_:)](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.

# hv_vcpu_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

An opaque value that represents a vCPU instance.

## Declaration

```objectivec
typedef uint64_t hv_vcpu_t;
```

## See Also

### Creation and destruction

- [hv_vm_get_max_vcpu_count](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
