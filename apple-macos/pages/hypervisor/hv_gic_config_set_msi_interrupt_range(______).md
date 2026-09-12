> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_config_set_msi_interrupt_range(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_config_set_msi_interrupt_range(_:_:_:))

# hv_gic_config_set_msi_interrupt_range(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.

## Declaration

```swift
func hv_gic_config_set_msi_interrupt_range(_ config: hv_gic_config_t, _ msi_intid_base: UInt32, _ msi_intid_count: UInt32) -> hv_return_t
```

## Parameters

- `config`: A generic interrupt controller (GIC) configuration object.
- `msi_intid_base`: The lowest MSI interrupt number.
- `msi_intid_count`: Number of message signaled interrupts.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Use this method to configure the range of identifiers supported for MSIs. If it’s outside of the range given by [hv_gic_get_spi_interrupt_range(\_:\_:)](hv_gic_get_spi_interrupt_range%28____%29.md), the method returns an error.

Set the region base address with [hv_gic_config_set_msi_region_base(\_:\_:)](hv_gic_config_set_msi_region_base%28____%29.md).

## See Also

### Setting the GIC device configuration

- [hv_gic_config_create()](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base(\_:\_:)](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base(\_:\_:)](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base(\_:\_:)](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base(\_:\_:)](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.

# hv_gic_config_set_msi_interrupt_range (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.

## Declaration

```objectivec
extern hv_return_t hv_gic_config_set_msi_interrupt_range(hv_gic_config_t config, uint32_t msi_intid_base, uint32_t msi_intid_count);
```

## Parameters

- `config`: A generic interrupt controller (GIC) configuration object.
- `msi_intid_base`: The lowest MSI interrupt number.
- `msi_intid_count`: Number of message signaled interrupts.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Use this method to configure the range of identifiers supported for MSIs. If it’s outside of the range given by [hv_gic_get_spi_interrupt_range](hv_gic_get_spi_interrupt_range%28____%29.md), the method returns an error.

Set the region base address with [hv_gic_config_set_msi_region_base](hv_gic_config_set_msi_region_base%28____%29.md).

## See Also

### Setting the GIC device configuration

- [hv_gic_config_create](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.
