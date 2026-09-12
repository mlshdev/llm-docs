> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_config_set_ipa_granule(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_config_set_ipa_granule(_:_:))

# hv_vm_config_set_ipa_granule(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 26.0+

## Declaration

```swift
func hv_vm_config_set_ipa_granule(_ config: hv_vm_config_t, _ granule: hv_ipa_granule_t) -> hv_return_t
```

## Parameters

- `config`: Configuration.
- `granule`: Granule size.

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, an error code otherwise.

<a id="discussion"></a>

## Discussion

Set the intermediate physical address granule size in virtual machine configuration.

# hv_vm_config_set_ipa_granule (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 26.0+

## Declaration

```objectivec
extern hv_return_t hv_vm_config_set_ipa_granule(hv_vm_config_t config, hv_ipa_granule_t granule);
```

## Parameters

- `config`: Configuration.
- `granule`: Granule size.

<a id="return-value"></a>

## Return Value

HV_SUCCESS on success, an error code otherwise.

<a id="discussion"></a>

## Discussion

Set the intermediate physical address granule size in virtual machine configuration.
