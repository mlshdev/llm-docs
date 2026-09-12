> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_space(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_space(_:_:))

# hv_vcpu_set_space(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Associates the vCPU instance with an allocated address space.

## Declaration

```swift
func hv_vcpu_set_space(_ vcpu: hv_vcpuid_t, _ asid: hv_vm_space_t) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `asid`: The address space ID.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

# hv_vcpu_set_space (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Associates the vCPU instance with an allocated address space.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_space(hv_vcpuid_t vcpu, hv_vm_space_t asid);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `asid`: The address space ID.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.
