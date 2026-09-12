> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_config_t](https://developer.apple.com/documentation/hypervisor/hv_vcpu_config_t)

# hv_vcpu_config_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type that defines a vCPU configuration.

## Declaration

```swift
typealias hv_vcpu_config_t = any OS_hv_vcpu_config
```

## See Also

### Configuration

- [hv_vcpu_config_create()](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg(\_:\_:\_:)](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values(\_:\_:\_:)](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

# hv_vcpu_config_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type that defines a vCPU configuration.

## Declaration

```objectivec
typedef NSObject<OS_hv_vcpu_config> * hv_vcpu_config_t;
```

## See Also

### Configuration

- [hv_vcpu_config_create](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.
