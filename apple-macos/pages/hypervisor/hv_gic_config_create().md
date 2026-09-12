> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_config_create()](https://developer.apple.com/documentation/hypervisor/hv_gic_config_create())

# hv_gic_config_create() (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Creates a generic interrupt controller (GIC) configuration object.

## Declaration

```swift
func hv_gic_config_create() -> hv_gic_config_t
```

<a id="return-value"></a>

## Return Value

A new GIC configuration object.

<a id="Discussion"></a>

## Discussion

Release this object with [os_release](https://developer.apple.com/documentation/os/os_release-c.func) when it’s no longer needed.

## See Also

### Setting the GIC device configuration

- [hv_gic_config_set_distributor_base(\_:\_:)](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base(\_:\_:)](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base(\_:\_:)](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base(\_:\_:)](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range(\_:\_:\_:)](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.

# hv_gic_config_create (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Creates a generic interrupt controller (GIC) configuration object.

## Declaration

```objectivec
extern hv_gic_config_thv_gic_config_create();
```

<a id="return-value"></a>

## Return Value

A new GIC configuration object.

<a id="Discussion"></a>

## Discussion

Release this object with [os_release](https://developer.apple.com/documentation/os/os_release-c.func) when it’s no longer needed.

## See Also

### Setting the GIC device configuration

- [hv_gic_config_set_distributor_base](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.
