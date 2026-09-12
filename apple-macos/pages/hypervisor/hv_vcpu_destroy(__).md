> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_destroy(_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_destroy(_:))

# hv_vcpu_destroy(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Destroys the vCPU instance associated with the current thread.

## Declaration

```swift
func hv_vcpu_destroy(_ vcpu: hv_vcpu_t) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Creation and destruction

- [hv_vm_get_max_vcpu_count(\_:)](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.

# hv_vcpu_destroy (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Destroys the vCPU instance associated with the current thread.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_destroy(hv_vcpu_t vcpu);
```

## Parameters

- `vcpu`: The instance of the vCPU.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Creation and destruction

- [hv_vm_get_max_vcpu_count](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.
