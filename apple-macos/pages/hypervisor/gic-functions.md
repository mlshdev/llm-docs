> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/gic-functions](https://developer.apple.com/documentation/hypervisor/gic-functions)

# GIC functions (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

These functions and registers support the creation and operation of a generic interrupt controller.

<a id="Discussion"></a>

## Discussion

For more information on using GICs, see the [ARM Generic Interrupt Controller (GIC) v3 architecture specification](https://developer.arm.com/documentation/ihi0069/latest/).

## Topics

### Creating a generic interrupt controller

- [hv_gic_create(\_:)](hv_gic_create%28__%29.md): Creates a generic interrupt controller (GIC) v3 device for a VM configuration.

### Resetting the generic interrupt controller

- [hv_gic_reset()](hv_gic_reset%28%29.md): Resets the generic interrupt controller (GIC) device.

### Setting the GIC device configuration

Setting the configuration of a generic interrupt controller involves configuring the memory addresses for the various GIC subcomponents. Use these methods to set the interrupt distributor and redistributor base addresses, and set up the interrupt range for the message signaled interrupts (MSIs).

- [hv_gic_config_create()](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base(\_:\_:)](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base(\_:\_:)](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base(\_:\_:)](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base(\_:\_:)](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range(\_:\_:\_:)](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.

### Getting GIC device parameters

- [hv_gic_get_redistributor_region_size(\_:)](hv_gic_get_redistributor_region_size%28__%29.md): Gets the total size in bytes of the generic interrupt controller (GIC) redistributor region.
- [hv_gic_get_redistributor_size(\_:)](hv_gic_get_redistributor_size%28__%29.md): Gets the size in bytes of a single generic interrupt controller (GIC) redistributor.
- [hv_gic_get_distributor_size(\_:)](hv_gic_get_distributor_size%28__%29.md): Gets the size of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_distributor_base_alignment(\_:)](hv_gic_get_distributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_redistributor_base_alignment(\_:)](hv_gic_get_redistributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) redistributor region, in bytes.
- [hv_gic_get_msi_region_base_alignment(\_:)](hv_gic_get_msi_region_base_alignment%28__%29.md): Gets the alignment, in bytes, for the base address of the generic interrupt controller’s message signaled interrupts (MSI) region.
- [hv_gic_get_msi_region_size(\_:)](hv_gic_get_msi_region_size%28__%29.md): Gets the size in bytes of the generic interrupt controller’s (GIC) message signaled interrupts (MSI) region.
- [hv_gic_get_spi_interrupt_range(\_:\_:)](hv_gic_get_spi_interrupt_range%28____%29.md): Gets the range of shared peripheral interrupts (SPIs) the generic interrupt controller supports.

### Getting and setting the GIC’s state

These methods manage the register values in the generic interrupt controller (GIC) hardware and metadata associated with them. Use them to save and restore the state of the GIC.

- [hv_gic_state_create()](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state(\_:\_:)](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size(\_:\_:)](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data(\_:\_:)](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

### Sending interrupts

- [hv_gic_send_msi(\_:\_:)](hv_gic_send_msi%28____%29.md): Sends a message signaled interrupt (MSI).
- [hv_gic_set_spi(\_:\_:)](hv_gic_set_spi%28____%29.md): Triggers a shared peripheral interrupt (SPI).

### Getting and setting registers

- [hv_gic_get_distributor_reg(\_:\_:)](hv_gic_get_distributor_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor register.
- [hv_gic_get_msi_reg(\_:\_:)](hv_gic_get_msi_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor message signaled interrupt (MSI) register.
- [hv_gic_get_icc_reg(\_:\_:\_:)](hv_gic_get_icc_reg%28______%29.md): Reads a generic interrupt controller’s ICC CPU system register.
- [hv_gic_get_ich_reg(\_:\_:\_:)](hv_gic_get_ich_reg%28______%29.md): Reads a generic interrupt controller’s (GIC) ICH virtualization control system register.
- [hv_gic_get_icv_reg(\_:\_:\_:)](hv_gic_get_icv_reg%28______%29.md): Writes a generic interrupt controller’s (GIC) ICV system register.
- [hv_gic_get_redistributor_reg(\_:\_:\_:)](hv_gic_get_redistributor_reg%28______%29.md): Read a generic interrupt controller (GIC) redistributor register.
- [hv_gic_set_distributor_reg(\_:\_:)](hv_gic_set_distributor_reg%28____%29.md): Writes the provided value to a generic interrupt controller (GIC) distributor register you specify.
- [hv_gic_set_icc_reg(\_:\_:\_:)](hv_gic_set_icc_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICC cpu system register.
- [hv_gic_set_ich_reg(\_:\_:\_:)](hv_gic_set_ich_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICH virtualization control system register.
- [hv_gic_set_icv_reg(\_:\_:\_:)](hv_gic_set_icv_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICV system register.
- [hv_gic_set_msi_reg(\_:\_:)](hv_gic_set_msi_reg%28____%29.md): Writes to a generic interrupt controller distributor message signaled interrupt (MSI) register.
- [hv_gic_set_redistributor_reg(\_:\_:\_:)](hv_gic_set_redistributor_reg%28______%29.md): Writes to a GIC redistributor register.

## See Also

### Generic interrupt controllers (GICs)

- [GIC registers](gic-registers.md): These registers support the operation of a generic interrupt controller and its interface with the Hypervisor and virtual CPUs.

# GIC functions (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

These functions and registers support the creation and operation of a generic interrupt controller.

<a id="Discussion"></a>

## Discussion

For more information on using GICs, see the [ARM Generic Interrupt Controller (GIC) v3 architecture specification](https://developer.arm.com/documentation/ihi0069/latest/).

## Topics

### Creating a generic interrupt controller

- [hv_gic_create](hv_gic_create%28__%29.md): Creates a generic interrupt controller (GIC) v3 device for a VM configuration.

### Resetting the generic interrupt controller

- [hv_gic_reset](hv_gic_reset%28%29.md): Resets the generic interrupt controller (GIC) device.

### Setting the GIC device configuration

Setting the configuration of a generic interrupt controller involves configuring the memory addresses for the various GIC subcomponents. Use these methods to set the interrupt distributor and redistributor base addresses, and set up the interrupt range for the message signaled interrupts (MSIs).

- [hv_gic_config_create](hv_gic_config_create%28%29.md): Creates a generic interrupt controller (GIC) configuration object.
- [hv_gic_config_set_distributor_base](hv_gic_config_set_distributor_base%28____%29.md): Sets the generic interrupt controller (GIC) distributor region’s base address.
- [hv_gic_config_set_redistributor_base](hv_gic_config_set_redistributor_base%28____%29.md): Sets the generic interrupt controller (GIC) redistributor region base address.
- [hv_gic_get_redistributor_base](hv_gic_get_redistributor_base%28____%29.md): Gets the redistributor base guest physical address for the given vCPU.
- [hv_gic_config_set_msi_region_base](hv_gic_config_set_msi_region_base%28____%29.md): Sets the generic interrupt controllers message signaled interrupts (MSIs) region base address.
- [hv_gic_config_set_msi_interrupt_range](hv_gic_config_set_msi_interrupt_range%28______%29.md): Sets the range of message signaled interrupts (MSIs) the generic interrupt controller supports.
- [OS_hv_gic_config](os_hv_gic_config.md): Methods that provide information on the state of a generic interrupt controller.
- [hv_gic_config_t](hv_gic_config_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) configuration’s reference type.

### Getting GIC device parameters

- [hv_gic_get_redistributor_region_size](hv_gic_get_redistributor_region_size%28__%29.md): Gets the total size in bytes of the generic interrupt controller (GIC) redistributor region.
- [hv_gic_get_redistributor_size](hv_gic_get_redistributor_size%28__%29.md): Gets the size in bytes of a single generic interrupt controller (GIC) redistributor.
- [hv_gic_get_distributor_size](hv_gic_get_distributor_size%28__%29.md): Gets the size of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_distributor_base_alignment](hv_gic_get_distributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) distributor region, in bytes.
- [hv_gic_get_redistributor_base_alignment](hv_gic_get_redistributor_base_alignment%28__%29.md): Gets the alignment for the base address of the generic interrupt controller (GIC) redistributor region, in bytes.
- [hv_gic_get_msi_region_base_alignment](hv_gic_get_msi_region_base_alignment%28__%29.md): Gets the alignment, in bytes, for the base address of the generic interrupt controller’s message signaled interrupts (MSI) region.
- [hv_gic_get_msi_region_size](hv_gic_get_msi_region_size%28__%29.md): Gets the size in bytes of the generic interrupt controller’s (GIC) message signaled interrupts (MSI) region.
- [hv_gic_get_spi_interrupt_range](hv_gic_get_spi_interrupt_range%28____%29.md): Gets the range of shared peripheral interrupts (SPIs) the generic interrupt controller supports.

### Getting and setting the GIC’s state

These methods manage the register values in the generic interrupt controller (GIC) hardware and metadata associated with them. Use them to save and restore the state of the GIC.

- [hv_gic_state_create](hv_gic_state_create%28%29.md): Create a generic interrupt controller (GIC) state object.
- [hv_gic_set_state](hv_gic_set_state%28____%29.md): Sets the state of a generic interrupt controller (GIC) device.
- [hv_gic_state_get_size](hv_gic_state_get_size%28____%29.md): Gets the size of the buffer required for generic interrupt controller (GIC) state.
- [hv_gic_state_get_data](hv_gic_state_get_data%28____%29.md): Gets the state data for generic interrupt controller (GIC).
- [hv_gic_state_t](hv_gic_state_t.md): An alias for this value type’s equivalent Hypervisor generic interrupt controller (GIC) state’s reference type.
- [OS_hv_gic_state](os_hv_gic_state.md): Methods that provide information on the hypervisor state.

### Sending interrupts

- [hv_gic_send_msi](hv_gic_send_msi%28____%29.md): Sends a message signaled interrupt (MSI).
- [hv_gic_set_spi](hv_gic_set_spi%28____%29.md): Triggers a shared peripheral interrupt (SPI).

### Getting and setting registers

- [hv_gic_get_distributor_reg](hv_gic_get_distributor_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor register.
- [hv_gic_get_msi_reg](hv_gic_get_msi_reg%28____%29.md): Reads a generic interrupt controller (GIC) distributor message signaled interrupt (MSI) register.
- [hv_gic_get_icc_reg](hv_gic_get_icc_reg%28______%29.md): Reads a generic interrupt controller’s ICC CPU system register.
- [hv_gic_get_ich_reg](hv_gic_get_ich_reg%28______%29.md): Reads a generic interrupt controller’s (GIC) ICH virtualization control system register.
- [hv_gic_get_icv_reg](hv_gic_get_icv_reg%28______%29.md): Writes a generic interrupt controller’s (GIC) ICV system register.
- [hv_gic_get_redistributor_reg](hv_gic_get_redistributor_reg%28______%29.md): Read a generic interrupt controller (GIC) redistributor register.
- [hv_gic_set_distributor_reg](hv_gic_set_distributor_reg%28____%29.md): Writes the provided value to a generic interrupt controller (GIC) distributor register you specify.
- [hv_gic_set_icc_reg](hv_gic_set_icc_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICC cpu system register.
- [hv_gic_set_ich_reg](hv_gic_set_ich_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICH virtualization control system register.
- [hv_gic_set_icv_reg](hv_gic_set_icv_reg%28______%29.md): Writes to a generic interrupt controller (GIC) ICV system register.
- [hv_gic_set_msi_reg](hv_gic_set_msi_reg%28____%29.md): Writes to a generic interrupt controller distributor message signaled interrupt (MSI) register.
- [hv_gic_set_redistributor_reg](hv_gic_set_redistributor_reg%28______%29.md): Writes to a GIC redistributor register.

## See Also

### Generic interrupt controllers (GICs)

- [GIC registers](gic-registers.md): These registers support the operation of a generic interrupt controller and its interface with the Hypervisor and virtual CPUs.
