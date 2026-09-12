> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_config_get_feature_reg(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_config_get_feature_reg(_:_:_:))

# hv_vcpu_config_get_feature_reg(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Gets the value of a feature register.

## Declaration

```swift
func hv_vcpu_config_get_feature_reg(_ config: hv_vcpu_config_t, _ feature_reg: hv_feature_reg_t, _ value: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `config`: The vCPU configuration.
- `feature_reg`: The ID of the feature register.
- `value`: The value of `feature_reg` on output. Undefined if the call doesn’t succeed.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Configuration

- [hv_vcpu_config_create()](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values(\_:\_:\_:)](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

# hv_vcpu_config_get_feature_reg (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Gets the value of a feature register.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_config_get_feature_reg(hv_vcpu_config_t config, hv_feature_reg_t feature_reg, uint64_t *value);
```

## Parameters

- `config`: The vCPU configuration.
- `feature_reg`: The ID of the feature register.
- `value`: The value of `feature_reg` on output. Undefined if the call doesn’t succeed.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## See Also

### Configuration

- [hv_vcpu_config_create](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.
