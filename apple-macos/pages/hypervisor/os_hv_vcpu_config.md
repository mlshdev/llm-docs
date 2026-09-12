> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/os_hv_vcpu_config](https://developer.apple.com/documentation/hypervisor/os_hv_vcpu_config)

# OS_hv_vcpu_config (Swift)

**Framework:** Hypervisor  
**Kind:** Protocol  
**Availability:** macOS

Configuration for a virtual CPU.

## Declaration

```swift
protocol OS_hv_vcpu_config : NSObjectProtocol
```

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuration

- [hv_vcpu_config_create()](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg(\_:\_:\_:)](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values(\_:\_:\_:)](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

# OS_hv_vcpu_config (Objective-C)

**Framework:** Hypervisor  
**Kind:** Protocol  
**Availability:** macOS

Configuration for a virtual CPU.

## Declaration

```objectivec
@protocol OS_hv_vcpu_config <NSObject>
```

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuration

- [hv_vcpu_config_create](hv_vcpu_config_create%28%29.md): Creates a vCPU configuration object.
- [hv_vcpu_config_get_feature_reg](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.
