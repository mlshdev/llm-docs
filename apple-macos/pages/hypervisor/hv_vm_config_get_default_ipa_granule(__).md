> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_config_get_default_ipa_granule(_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_config_get_default_ipa_granule(_:))

# hv_vm_config_get_default_ipa_granule(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 26.0+

## Declaration

```swift
func hv_vm_config_get_default_ipa_granule(_ granule: UnsafeMutablePointer<hv_ipa_granule_t>) -> hv_return_t
```

## Parameters

- `granule`: Pointer to the default intermediate physical address granule size (written on success).

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, an error code otherwise.

<a id="discussion"></a>

## Discussion

Return the default intermediate physical address granule.

# hv_vm_config_get_default_ipa_granule (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 26.0+

## Declaration

```objectivec
extern hv_return_t hv_vm_config_get_default_ipa_granule(hv_ipa_granule_t *granule);
```

## Parameters

- `granule`: Pointer to the default intermediate physical address granule size (written on success).

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, an error code otherwise.

<a id="discussion"></a>

## Discussion

Return the default intermediate physical address granule.
