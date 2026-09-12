> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_config_create()](https://developer.apple.com/documentation/hypervisor/hv_vcpu_config_create())

# hv_vcpu_config_create() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Creates a vCPU configuration object.

## Declaration

```swift
func hv_vcpu_config_create() -> hv_vcpu_config_t
```

<a id="return-value"></a>

## Return Value

A new vCPU configuration object.

<a id="Discussion"></a>

## Discussion

If your app isn’t using ARC, call [os_release](https://developer.apple.com/documentation/os/os_release-c.func) on a vCPU configuration object when it’s no longer needed.

## See Also

### Configuration

- [hv_vcpu_config_get_feature_reg(\_:\_:\_:)](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values(\_:\_:\_:)](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.

# hv_vcpu_config_create (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Creates a vCPU configuration object.

## Declaration

```objectivec
extern hv_vcpu_config_thv_vcpu_config_create();
```

<a id="return-value"></a>

## Return Value

A new vCPU configuration object.

<a id="Discussion"></a>

## Discussion

If your app isn’t using ARC, call [os_release](https://developer.apple.com/documentation/os/os_release-c.func) on a vCPU configuration object when it’s no longer needed.

## See Also

### Configuration

- [hv_vcpu_config_get_feature_reg](hv_vcpu_config_get_feature_reg%28______%29.md): Gets the value of a feature register.
- [hv_vcpu_config_get_ccsidr_el1_sys_reg_values](hv_vcpu_config_get_ccsidr_el1_sys_reg_values%28______%29.md): Returns the Cache Size ID Register (CCSIDR_EL1) values for the vCPU configuration and cache type you specify.
- [hv_vcpu_config_t](hv_vcpu_config_t.md): The type that defines a vCPU configuration.
- [OS_hv_vcpu_config](os_hv_vcpu_config.md): Configuration for a virtual CPU.
- [hv_feature_reg_t](hv_feature_reg_t.md): The type that defines feature registers.
