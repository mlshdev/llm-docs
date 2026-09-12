> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_config_get_el2_enabled(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_config_get_el2_enabled(_:_:))

# hv_vm_config_get_el2_enabled(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Return a status value that indicates whether the VM configuration enables support for Exception Level 2 (EL2).

## Declaration

```swift
func hv_vm_config_get_el2_enabled(_ config: hv_vm_config_t, _ el2_enabled: UnsafeMutablePointer<Bool>) -> hv_return_t
```

## Parameters

- `config`: The VM’s configuration object.
- `el2_enabled`: A pointer to a Boolean value that indicates whether the current platform supports EL2. The framework writes this value on success; otherwise `nil`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Nested virtualization

- [hv_vm_config_get_el2_supported(\_:)](hv_vm_config_get_el2_supported%28__%29.md): Returns a status value that indicates whether the current platform supports Exception Level 2 (EL2).
- [hv_vm_config_set_el2_enabled(\_:\_:)](hv_vm_config_set_el2_enabled%28____%29.md): Sets whether the specified VM configuration enables support for Exception Level 2 (EL2).

# hv_vm_config_get_el2_enabled (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Return a status value that indicates whether the VM configuration enables support for Exception Level 2 (EL2).

## Declaration

```objectivec
extern hv_return_t hv_vm_config_get_el2_enabled(hv_vm_config_t config, bool *el2_enabled);
```

## Parameters

- `config`: The VM’s configuration object.
- `el2_enabled`: A pointer to a Boolean value that indicates whether the current platform supports EL2. The framework writes this value on success; otherwise `nil`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Nested virtualization

- [hv_vm_config_get_el2_supported](hv_vm_config_get_el2_supported%28__%29.md): Returns a status value that indicates whether the current platform supports Exception Level 2 (EL2).
- [hv_vm_config_set_el2_enabled](hv_vm_config_set_el2_enabled%28____%29.md): Sets whether the specified VM configuration enables support for Exception Level 2 (EL2).
