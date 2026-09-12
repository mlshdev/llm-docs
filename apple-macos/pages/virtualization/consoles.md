> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/consoles](https://developer.apple.com/documentation/virtualization/consoles)

# Consoles

**Interface languages:** Swift, Objective-C

**Framework:** Virtualization  
**Kind:** API Collection

Configure a device that manages multiport console communication with the guest system.

## Topics

### Configurations

- [VZConsoleDeviceConfiguration](vzconsoledeviceconfiguration.md): The base class for a console device configuration.
- [VZConsolePortConfiguration](vzconsoleportconfiguration.md): The base class for a console port configuration.
- [VZVirtioConsoleDeviceConfiguration](vzvirtioconsoledeviceconfiguration.md): A console device that enables communication between the host and the guest using console ports through a Virtio interface.
- [VZVirtioConsolePortConfiguration](vzvirtioconsoleportconfiguration.md): A class that represents the configuration options you can set on a Virtio console port.
- [VZVirtioConsolePortConfigurationArray](vzvirtioconsoleportconfigurationarray.md): A class that represents a collection of Virtio console port configurations.

### Console ports

- [VZVirtioConsolePort](vzvirtioconsoleport.md): A class that represents a Virtio console port in a VM.
- [VZVirtioConsolePortArray](vzvirtioconsoleportarray.md): A class that represents a collection of Virtio console ports.

### Devices

- [VZConsoleDevice](vzconsoledevice.md): A class that represents a console device in a VM.
- [VZVirtioConsoleDevice](vzvirtioconsoledevice.md): A class that represents a Virtio console device in a virtual machine.

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
- [Clipboard sharing](clipboard-sharing.md): Share the pasteboard between the host and guest system.
- [USB Devices](usb-devices.md): Configure the USB devices that a guest system can access.
- [Custom Virtio drivers](custom-drivers.md): Create custom Virtio drivers for Linux virtual machines.
