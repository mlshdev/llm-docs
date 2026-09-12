> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_gic_send_msi(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_gic_send_msi(_:_:))

# hv_gic_send_msi(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Sends a message signaled interrupt (MSI).

## Declaration

```swift
func hv_gic_send_msi(_ address: hv_ipa_t, _ intid: UInt32) -> hv_return_t
```

## Parameters

- `address`: The guest physical address for message-based shared peripheral interrupts (SPI).
- `intid`: The Interrupt identifier for the message based SPI.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Use the address of the [HV_GIC_REG_GICM_SET_SPI_NSR](hv_gic_reg_gicm_set_spi_nsr.md) register in the MSI frame.

## See Also

### Sending interrupts

- [hv_gic_set_spi(\_:\_:)](hv_gic_set_spi%28____%29.md): Triggers a shared peripheral interrupt (SPI).

# hv_gic_send_msi (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 15.0+

Sends a message signaled interrupt (MSI).

## Declaration

```objectivec
extern hv_return_t hv_gic_send_msi(hv_ipa_t address, uint32_t intid);
```

## Parameters

- `address`: The guest physical address for message-based shared peripheral interrupts (SPI).
- `intid`: The Interrupt identifier for the message based SPI.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) on success; otherwise, an error code.

<a id="Discussion"></a>

## Discussion

Use the address of the [HV_GIC_REG_GICM_SET_SPI_NSR](hv_gic_reg_gicm_set_spi_nsr.md) register in the MSI frame.

## See Also

### Sending interrupts

- [hv_gic_set_spi](hv_gic_set_spi%28____%29.md): Triggers a shared peripheral interrupt (SPI).
