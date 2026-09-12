> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_config_get_ccsidr_el1_sys_reg_values(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_config_get_ccsidr_el1_sys_reg_values(_:_:_:))

# hv_vcpu_config_get_ccsidr_el1_sys_reg_values(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.

## Declaration

```swift
func hv_vcpu_config_get_ccsidr_el1_sys_reg_values(_ config: hv_vcpu_config_t, _ cache_type: hv_cache_type_t, _ values: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `config`: The vCPU configuration.
- `cache_type`: The cache type from the available [hv_cache_type_t](hv_cache_type_t.md) types.
- `values`: A pointer to the location for the return values.

<a id="return-value"></a>

## Return Value

A [hv_return_t](hv_return_t.md) value that indicates that result of the function.

## See Also

### Configuration

- [hv_vcpu_config_create()](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg(\_:\_:\_:)](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

# hv_vcpu_config_get_ccsidr_el1_sys_reg_values (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_config_get_ccsidr_el1_sys_reg_values(hv_vcpu_config_t config, hv_cache_type_t cache_type, uint64_t values[8]);
```

## Parameters

- `config`: The vCPU configuration.
- `cache_type`: The cache type from the available [hv_cache_type_t](hv_cache_type_t.md) types.
- `values`: A pointer to the location for the return values.

<a id="return-value"></a>

## Return Value

A [hv_return_t](hv_return_t.md) value that indicates that result of the function.

## See Also

### Configuration

- [hv_vcpu_config_create](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.
