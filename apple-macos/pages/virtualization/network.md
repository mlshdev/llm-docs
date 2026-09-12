> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/network](https://developer.apple.com/documentation/virtualization/network)

# Network

**Interface languages:** Swift, Objective-C

**Framework:** Virtualization  
**Kind:** API Collection

Configure the devices that connect the guest system to the network.

## Topics

### Configurations

- [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md): A configuration object that requests the creation of a network device for the guest system.
- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.
- [VZMACAddress](vzmacaddress.md): The media access control (MAC) address for a network interface in your virtual machine.

### Attachment points

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md): A network device that interacts directly with a physical network interface on the host computer.
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.

### Hardware interfaces

- [VZBridgedNetworkInterface](vzbridgednetworkinterface.md): An object that identifies the supported network interfaces of the host computer.

### Devices

- [VZNetworkDevice](vznetworkdevice.md): A base class that represents a network device in a virtual machine.

## See Also

### Devices

- [Audio](audio.md): Configure audio devices that enable the guest operating system to perform audio playback and capture through the host’s audio devices.
- [Graphics](graphics.md): Configure a device for a guest to display its UI.
- [Keyboards and pointing devices](keyboards-and-pointing-devices.md): Configure devices that connect a mouse and keyboard to the guest system.
- [Memory](memory.md): Configure a memory balloon device to change the allocated memory for the guest system.
- [Randomization](randomization.md): Configure a device for the guest system to use to generate random numbers.
- [Serial ports](serial-ports.md): Configure the serial devices that you use to communicate with the guest system.
- [Shared directories](shared-directories.md): Configure devices that share directories from the host into the guest system.
- [Sockets](sockets.md): Configure a device that manages port-based communication with the guest system.
- [Storage](storage.md): Configure the block-storage devices that represent the disks of the guest system.
- [Consoles](consoles.md): Configure a device that manages multiport console communication with the guest system.
- [Clipboard sharing](clipboard-sharing.md): Share the pasteboard between the host and guest system.
- [USB Devices](usb-devices.md): Configure the USB devices that a guest system can access.
- [Custom Virtio drivers](custom-drivers.md): Create custom Virtio drivers for Linux virtual machines.
