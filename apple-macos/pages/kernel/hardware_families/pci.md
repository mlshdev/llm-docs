> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/hardware_families/pci](https://developer.apple.com/documentation/kernel/hardware_families/pci)

# PCI

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** API Collection

Implement a driver that supports Thunderbolt devices or PCI cards.

<a id="overview"></a>

## Overview

For many types of PCI drivers, the use of kernel extensions is deprecated. Instead, create a DriverKit extension using [PCIDriverKit](https://developer.apple.com/documentation/pcidriverkit).

## Topics

### Devices

- [Implementing a PCIe Kext for a Thunderbolt Device](pci/implementing_a_pcie_kext_for_a_thunderbolt_device.md): Create an IOKit driver to support Thunderbolt devices that implement features not supported in PCIDriverKit, such as wireless networking or audio.
- [IOPCIDevice](../iopcidevice.md): Deprecated. An IOService class representing a PCI device.
- [IOAGPDevice](../ioagpdevice.md): Deprecated. An IOService class representing an AGP primary device.

### Event Source

- [IOPCIEventSource](../iopcieventsource.md): Deprecated.

## See Also

### Hardware Interconnects

- [ATA](ata.md): Implement a driver that supports Advanced Technology Attachment (ATA) devices.
- [Bluetooth](bluetooth.md): Implement a driver that supports Bluetooth devices.
- [FireWire](firewire.md): Implement a driver that supports FireWire devices.
- [USB](usb.md): Implement a driver that supports Universal Serial Bus (USB) devices.
