> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/usb-devices](https://developer.apple.com/documentation/virtualization/usb-devices)

# USB Devices

**Interface languages:** Swift, Objective-C

**Framework:** Virtualization  
**Kind:** API Collection

Configure the USB devices that a guest system can access.

## Topics

### Storage Devices

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md): A class that represents a hot-pluggable USB mass storage device.
- [VZUSBPassthroughDevice](vzusbpassthroughdevice.md)

### Configurations

- [VZUSBControllerConfiguration](vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.
- [VZXHCIControllerConfiguration](vzxhcicontrollerconfiguration.md): The configuration object for the USB Extensible Host Controller Interface (XHCI) controller.
- [VZUSBPassthroughDeviceConfiguration](vzusbpassthroughdeviceconfiguration.md)

### Controllers

- [VZUSBController](vzusbcontroller.md): A class that represents a USB controller in a VM.
- [VZXHCIController](vzxhcicontroller.md): A class that represents a USB Extensible Host Controller Interface (XHCI) controller in a VM.

### Protocols

- [VZUSBDevice](vzusbdevice.md): A protocol that represents a USB device in a VM.
- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md): The protocol for configuring USB devices.

## See Also

### Devices

- [Audio](audio.md): Configure audio devices that enable the guest operating system to perform audio playback and capture through the host’s audio devices.
- [Graphics](graphics.md): Configure a device for a guest to display its UI.
- [Keyboards and pointing devices](keyboards-and-pointing-devices.md): Configure devices that connect a mouse and keyboard to the guest system.
- [Memory](memory.md): Configure a memory balloon device to change the allocated memory for the guest system.
- [Network](network.md): Configure the devices that connect the guest system to the network.
- [Randomization](randomization.md): Configure a device for the guest system to use to generate random numbers.
- [Serial ports](serial-ports.md): Configure the serial devices that you use to communicate with the guest system.
- [Shared directories](shared-directories.md): Configure devices that share directories from the host into the guest system.
- [Sockets](sockets.md): Configure a device that manages port-based communication with the guest system.
- [Storage](storage.md): Configure the block-storage devices that represent the disks of the guest system.
- [Consoles](consoles.md): Configure a device that manages multiport console communication with the guest system.
- [Clipboard sharing](clipboard-sharing.md): Share the pasteboard between the host and guest system.
- [Custom Virtio drivers](custom-drivers.md): Create custom Virtio drivers for Linux virtual machines.
