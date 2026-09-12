> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_write_fpstate(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_write_fpstate(_:_:_:))

# hv_vcpu_write_fpstate(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Sets the architectural x86 floating point and SIMD state of a vCPU.

## Declaration

```swift
func hv_vcpu_write_fpstate(_ vcpu: hv_vcpuid_t, _ buffer: UnsafeMutableRawPointer, _ size: Int) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `buffer`: The new floating point and SIMD state.
- `size`: Size of the memory buffer in bytes.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

The XSAVE feature set of the host processor defines the structure and size of the returned buffer.

> **Important**

>  This function must be called by the owning thread.

## See Also

### Floating Point (FP) State

- [hv_vcpu_read_fpstate(\_:\_:\_:)](hv_vcpu_read_fpstate%28______%29.md): Returns, by reference, the current architectural x86 floating point and SIMD state of a vCPU.

# hv_vcpu_write_fpstate (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Sets the architectural x86 floating point and SIMD state of a vCPU.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_write_fpstate(hv_vcpuid_t vcpu, void *buffer, size_t size);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `buffer`: The new floating point and SIMD state.
- `size`: Size of the memory buffer in bytes.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

The XSAVE feature set of the host processor defines the structure and size of the returned buffer.

> **Important**

>  This function must be called by the owning thread.

## See Also

### Floating Point (FP) State

- [hv_vcpu_read_fpstate](hv_vcpu_read_fpstate%28______%29.md): Returns, by reference, the current architectural x86 floating point and SIMD state of a vCPU.
