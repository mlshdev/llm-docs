> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_get_msi_region_base_alignment(_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_get_msi_region_base_alignment(_:))

# hv_gic_get_msi_region_base_alignment(\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the alignment, in bytes, for the base address of the generic interrupt controller’s message signaled interrupts (MSI) region.

## Declaration

```swift
func hv_gic_get_msi_region_base_alignment(_ msi_region_base_alignment: UnsafeMutablePointer<Int>) -> hv_return_t
```

## Parameters

- `msi_region_base_alignment`: A pointer to GIC MSI region base address alignment that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

## See Also

### Getting GIC device parameters

- [hv_gic_get_redistributor_region_size(\_:)](hv_gic_get_redistributor_region_size%28__%29.md): Gets the total size in bytes of the generic interrupt controller (GIC) redistributor region.
- [hv_gic_get_redistributor_size(\_:)](hv_gic_get_redistributor_size%28__%29.md): Gets the size in bytes of a single generic interrupt controller (GIC) redistributor.
- [hv_gic_get_distributor_size(\_:)](hv_gic_get_distributor_size%28__%29.md): Gets the size of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_distributor_base_alignment(\_:)](hv_gic_get_distributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_redistributor_base_alignment(\_:)](hv_gic_get_redistributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) redistributor region, in bytes.
- [hv_gic_get_msi_region_size(\_:)](hv_gic_get_msi_region_size%28__%29.md): Gets the size in bytes of the generic interrupt controller’s (GIC) message signaled interrupts (MSI) region.
- [hv_gic_get_spi_interrupt_range(\_:\_:)](hv_gic_get_spi_interrupt_range%28____%29.md): Gets the range of shared peripheral interrupts (SPIs) the generic interrupt controller supports.

# hv_gic_get_msi_region_base_alignment (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Gets the alignment, in bytes, for the base address of the generic interrupt controller’s message signaled interrupts (MSI) region.

## Declaration

```objectivec
extern hv_return_t hv_gic_get_msi_region_base_alignment(size_t *msi_region_base_alignment);
```

## Parameters

- `msi_region_base_alignment`: A pointer to GIC MSI region base address alignment that the framework writes to upon success.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

## See Also

### Getting GIC device parameters

- [hv_gic_get_redistributor_region_size](hv_gic_get_redistributor_region_size%28__%29.md): Gets the total size in bytes of the generic interrupt controller (GIC) redistributor region.
- [hv_gic_get_redistributor_size](hv_gic_get_redistributor_size%28__%29.md): Gets the size in bytes of a single generic interrupt controller (GIC) redistributor.
- [hv_gic_get_distributor_size](hv_gic_get_distributor_size%28__%29.md): Gets the size of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_distributor_base_alignment](hv_gic_get_distributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_redistributor_base_alignment](hv_gic_get_redistributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) redistributor region, in bytes.
- [hv_gic_get_msi_region_size](hv_gic_get_msi_region_size%28__%29.md): Gets the size in bytes of the generic interrupt controller’s (GIC) message signaled interrupts (MSI) region.
- [hv_gic_get_spi_interrupt_range](hv_gic_get_spi_interrupt_range%28____%29.md): Gets the range of shared peripheral interrupts (SPIs) the generic interrupt controller supports.
