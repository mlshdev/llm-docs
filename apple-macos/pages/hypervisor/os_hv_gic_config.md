> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/os_hv_gic_config](https://developer.apple.com/documentation/hypervisor/os_hv_gic_config)

# OS_hv_gic_config (Swift)

**Framework:** Hypervisor  
**Kind:** Protocol  
**Availability:** macOS

Methods that provide information on the state of a generic interrupt controller.

## Declaration

```swift
protocol OS_hv_gic_config : NSObjectProtocol
```

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting the GIC device configuration

- [hv_gic_config_create()](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base(\_:\_:)](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base(\_:\_:)](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base(\_:\_:)](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base(\_:\_:)](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range(\_:\_:\_:)](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.

# OS_hv_gic_config (Objective-C)

**Framework:** Hypervisor  
**Kind:** Protocol  
**Availability:** macOS

Methods that provide information on the state of a generic interrupt controller.

## Declaration

```objectivec
@protocol OS_hv_gic_config <NSObject>
```

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting the GIC device configuration

- [hv_gic_config_create](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.
