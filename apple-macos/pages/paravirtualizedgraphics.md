> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics](https://developer.apple.com/documentation/paravirtualizedgraphics)

# Paravirtualized Graphics (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Add graphics acceleration to your guest driver stack.

<a id="overview"></a>

## Overview

If you have an app that implements hardware-level virtualization, performance inside the virtual machine is critical, particularly for graphics. The ParavirtualizedGraphics framework implements hardware-accelerated graphics for macOS running in a virtual machine, hereafter known as the guest. The operating system provides a graphics driver that runs inside the guest, communicating with the framework in the host operating system to take advantage of Metal-accelerated graphics.

To implement accelerated graphics inside your virtualization solution, you need to take the following steps for each virtual machine:

1. Advertise the virtual graphics card in the virtual machine hardware so that macOS can install the correct driver.
2. Create a [PGDeviceDescriptor](paravirtualizedgraphics/pgdevicedescriptor.md), providing the necessary blocks to connect your virtual machine implementation to the ParavirtualizedGraphics framework. Use this descriptor to create a [PGDevice](paravirtualizedgraphics/pgdevice.md) object, which you keep alive as long as the virtual machine is still active. The ParavirtualizedGraphics framework calls your blocks when it needs to allocate memory or take other relevant actions.
3. Create a [PGDisplayDescriptor](paravirtualizedgraphics/pgdisplaydescriptor.md) for each virtual display that you want to connect to the device, specifying the display’s properties and blocks for the framework to call for display events. Use this descriptor to create a [PGDisplay](paravirtualizedgraphics/pgdisplay.md) object. Handle the appropriate display events to display the graphics data that the framework provides.

## Topics

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](paravirtualizedgraphics/pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_VENDOR_ID](paravirtualizedgraphics/pg_pci_vendor_id.md): The vendor identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_BAR_MMIO](paravirtualizedgraphics/pg_pci_bar_mmio.md): The base address register to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](paravirtualizedgraphics/pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
- [PGCopyOptionROMURL()](paravirtualizedgraphics/pgcopyoptionromurl%28%29.md): Deprecated. Copies the URL of the ROM image to use on the guest graphics device.

### Devices

- [PGDeviceDescriptor](paravirtualizedgraphics/pgdevicedescriptor.md): A description of the paravirtualized graphics device to create.
- [PGDevice](paravirtualizedgraphics/pgdevice.md): A paravirtualized GPU device object.

### Displays

- [PGDisplayDescriptor](paravirtualizedgraphics/pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplay](paravirtualizedgraphics/pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayMode](paravirtualizedgraphics/pgdisplaymode.md): A description of a supported display mode.
- [PGDisplayCoord_t](paravirtualizedgraphics/pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.

### Reference

- [ParavirtualizedGraphics Constants](paravirtualizedgraphics/paravirtualizedgraphics-constants.md)
- [ParavirtualizedGraphics Functions](paravirtualizedgraphics/paravirtualizedgraphics-functions.md)
- [ParavirtualizedGraphics Data Types](paravirtualizedgraphics/paravirtualizedgraphics-data-types.md)

### Variables

- [HAS_NS_BITMAP_HEADER](paravirtualizedgraphics/has_ns_bitmap_header.md)
- [PG_SUPPORT_CREATE_DEVICE](paravirtualizedgraphics/pg_support_create_device.md)

### Functions

- [PGCreateDeviceWithDescriptor(\_:)](paravirtualizedgraphics/pgcreatedevicewithdescriptor%28__%29.md)

# Paravirtualized Graphics (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Add graphics acceleration to your guest driver stack.

<a id="overview"></a>

## Overview

If you have an app that implements hardware-level virtualization, performance inside the virtual machine is critical, particularly for graphics. The ParavirtualizedGraphics framework implements hardware-accelerated graphics for macOS running in a virtual machine, hereafter known as the guest. The operating system provides a graphics driver that runs inside the guest, communicating with the framework in the host operating system to take advantage of Metal-accelerated graphics.

To implement accelerated graphics inside your virtualization solution, you need to take the following steps for each virtual machine:

1. Advertise the virtual graphics card in the virtual machine hardware so that macOS can install the correct driver.
2. Create a [PGDeviceDescriptor](paravirtualizedgraphics/pgdevicedescriptor.md), providing the necessary blocks to connect your virtual machine implementation to the ParavirtualizedGraphics framework. Use this descriptor to create a [PGDevice](paravirtualizedgraphics/pgdevice.md) object, which you keep alive as long as the virtual machine is still active. The ParavirtualizedGraphics framework calls your blocks when it needs to allocate memory or take other relevant actions.
3. Create a [PGDisplayDescriptor](paravirtualizedgraphics/pgdisplaydescriptor.md) for each virtual display that you want to connect to the device, specifying the display’s properties and blocks for the framework to call for display events. Use this descriptor to create a [PGDisplay](paravirtualizedgraphics/pgdisplay.md) object. Handle the appropriate display events to display the graphics data that the framework provides.

## Topics

### PCI Device Characteristics

- [PG_PCI_DEVICE_ID](paravirtualizedgraphics/pg_pci_device_id.md): The PCI device identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_VENDOR_ID](paravirtualizedgraphics/pg_pci_vendor_id.md): The vendor identifier to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_BAR_MMIO](paravirtualizedgraphics/pg_pci_bar_mmio.md): The base address register to use when advertising the graphics stack inside a virtual machine.
- [PG_PCI_MAX_MSI_VECTORS](paravirtualizedgraphics/pg_pci_max_msi_vectors.md): The number of MSI vectors that you need to allocate for the graphics configuration.
- [PGCopyOptionROMURL](paravirtualizedgraphics/pgcopyoptionromurl%28%29.md): Deprecated. Copies the URL of the ROM image to use on the guest graphics device.

### Devices

- [PGDeviceDescriptor](paravirtualizedgraphics/pgdevicedescriptor.md): A description of the paravirtualized graphics device to create.
- [PGDevice](paravirtualizedgraphics/pgdevice.md): A paravirtualized GPU device object.

### Displays

- [PGDisplayDescriptor](paravirtualizedgraphics/pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplay](paravirtualizedgraphics/pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayMode](paravirtualizedgraphics/pgdisplaymode.md): A description of a supported display mode.
- [PGDisplayCoord_t](paravirtualizedgraphics/pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.

### Reference

- [ParavirtualizedGraphics Constants](paravirtualizedgraphics/paravirtualizedgraphics-constants.md)
- [ParavirtualizedGraphics Functions](paravirtualizedgraphics/paravirtualizedgraphics-functions.md)
- [ParavirtualizedGraphics Data Types](paravirtualizedgraphics/paravirtualizedgraphics-data-types.md)

### Functions

- [PGCreateDeviceWithDescriptor](paravirtualizedgraphics/pgcreatedevicewithdescriptor%28__%29.md)
- [PGNewDeviceWithDescriptor](paravirtualizedgraphics/pgnewdevicewithdescriptor.md)

### Macros

- [HAS_NS_BITMAP_HEADER](paravirtualizedgraphics/has_ns_bitmap_header.md)
- [PG_EXPORT](paravirtualizedgraphics/pg_export.md)
- [PG_EXTERN](paravirtualizedgraphics/pg_extern.md)
- [PG_SUPPORT_CREATE_DEVICE](paravirtualizedgraphics/pg_support_create_device.md)
