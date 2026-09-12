> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_get_redistributor_base(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_get_redistributor_base(_:_:))

# hv_gic_get_redistributor_base(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the redistributor base guest physical address for the given vCPU.

## Declaration

```swift
func hv_gic_get_redistributor_base(_ vcpu: hv_vcpu_t, _ redistributor_base_address: UnsafeMutablePointer<hv_ipa_t>) -> hv_return_t
```

## Parameters

- `vcpu`: Handle for the vCPU.
- `redistributor_base_address`: A pointer to the redistributor base guest physical address that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Call this method after you set the affinity of the given vCPU in its `MPIDR_EL1` register.

## See Also

### Setting the GIC device configuration

- [hv_gic_config_create()](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base(\_:\_:)](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base(\_:\_:)](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_config_set_msi_region_base(\_:\_:)](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range(\_:\_:\_:)](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.

# hv_gic_get_redistributor_base (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the redistributor base guest physical address for the given vCPU.

## Declaration

```objectivec
extern hv_return_t hv_gic_get_redistributor_base(hv_vcpu_t vcpu, hv_ipa_t *redistributor_base_address);
```

## Parameters

- `vcpu`: Handle for the vCPU.
- `redistributor_base_address`: A pointer to the redistributor base guest physical address that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Call this method after you set the affinity of the given vCPU in its `MPIDR_EL1` register.

## See Also

### Setting the GIC device configuration

- [hv_gic_config_create](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_config_set_msi_region_base](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.
