> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_create(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_create(_:_:_:))

# hv_vcpu_create(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Creates a vCPU instance for the current thread.

## Declaration

```swift
func hv_vcpu_create(_ vcpu: UnsafeMutablePointer<hv_vcpu_t>, _ exit: UnsafeMutablePointer<UnsafeMutablePointer<hv_vcpu_exit_t>?>, _ config: hv_vcpu_config_t?) -> hv_return_t
```

## Parameters

- `vcpu`: An argument that the hypervisor populates with the instance of a vCPU on a successful return.
- `exit`: The pointer to the vCPU exit information. The function [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md) updates this structure on return.

  Apple silicon only.
- `config`: The configuration of the vCPU or `nil` for a default configuration.

  Apple silicon only.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Intel-based Mac computers have different parameters:

- `flags`: The vCPU creation flag. The available flags are [HV_VCPU_ACCEL_RDPMC](hv_vcpu_accel_rdpmc.md), [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md), and [HV_VCPU_DEFAULT](hv_vcpu_default.md). The default is [HV_VCPU_DEFAULT](hv_vcpu_default.md).

> **Note**

>  Using the [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md) flag enables use of the Time-Stamp Counter (TSC) relative offset capabilities, but disables the default TSC for vCPUs that you create with this flag.

## See Also

### Creation and destruction

- [hv_vm_get_max_vcpu_count(\_:)](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.

# hv_vcpu_create (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Creates a vCPU instance for the current thread.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_create(hv_vcpu_t *vcpu, hv_vcpu_exit_t **exit, hv_vcpu_config_t config);
```

## Parameters

- `vcpu`: An argument that the hypervisor populates with the instance of a vCPU on a successful return.
- `exit`: The pointer to the vCPU exit information. The function [hv_vcpu_run](hv_vcpu_run%28__%29.md) updates this structure on return.

  Apple silicon only.
- `config`: The configuration of the vCPU or `nil` for a default configuration.

  Apple silicon only.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Intel-based Mac computers have different parameters:

- `flags`: The vCPU creation flag. The available flags are [HV_VCPU_ACCEL_RDPMC](hv_vcpu_accel_rdpmc.md), [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md), and [HV_VCPU_DEFAULT](hv_vcpu_default.md). The default is [HV_VCPU_DEFAULT](hv_vcpu_default.md).

> **Note**

>  Using the [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md) flag enables use of the Time-Stamp Counter (TSC) relative offset capabilities, but disables the default TSC for vCPUs that you create with this flag.

## See Also

### Creation and destruction

- [hv_vm_get_max_vcpu_count](hv_vm_get_max_vcpu_count%28__%29.md): Returns the maximum number of vCPUs that the hypervisor supports.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_t](hv_vcpu_t.md): An opaque value that represents a vCPU instance.
