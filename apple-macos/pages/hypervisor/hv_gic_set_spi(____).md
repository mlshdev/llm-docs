> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_set_spi(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_set_spi(_:_:))

# hv_gic_set_spi(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Triggers a shared peripheral interrupt (SPI).

## Declaration

```swift
func hv_gic_set_spi(_ intid: UInt32, _ level: Bool) -> hv_return_t
```

## Parameters

- `intid`: The interrupt number of the SPI.
- `level`: The high- or low-level state for the interrupt. Setting the level also causes an edge on the line for an edge triggered interrupt.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Setting a level value causes level interrupts. To cause an edge interrupt, call this method with a level of [true](https://developer.apple.com/documentation/swift/true). The framework ignores a level of [false](https://developer.apple.com/documentation/swift/false) for an edge interrupt.

An interrupt identifier outside of [hv_gic_get_spi_interrupt_range(\_:\_:)](hv_gic_get_spi_interrupt_range%28____%29.md) or in the message signaled interrupt (MSI) range returns a [HV_BAD_ARGUMENT](hv_bad_argument.md) error code.

## See Also

### Sending interrupts

- [hv_gic_send_msi(\_:\_:)](hv_gic_send_msi%28____%29.md): Sends a message signaled interrupt (MSI).

# hv_gic_set_spi (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Triggers a shared peripheral interrupt (SPI).

## Declaration

```objectivec
extern hv_return_t hv_gic_set_spi(uint32_t intid, bool level);
```

## Parameters

- `intid`: The interrupt number of the SPI.
- `level`: The high- or low-level state for the interrupt. Setting the level also causes an edge on the line for an edge triggered interrupt.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Setting a level value causes level interrupts. To cause an edge interrupt, call this method with a level of [true](https://developer.apple.com/documentation/swift/true). The framework ignores a level of [false](https://developer.apple.com/documentation/swift/false) for an edge interrupt.

An interrupt identifier outside of [hv_gic_get_spi_interrupt_range](hv_gic_get_spi_interrupt_range%28____%29.md) or in the message signaled interrupt (MSI) range returns a [HV_BAD_ARGUMENT](hv_bad_argument.md) error code.

## See Also

### Sending interrupts

- [hv_gic_send_msi](hv_gic_send_msi%28____%29.md): Sends a message signaled interrupt (MSI).
