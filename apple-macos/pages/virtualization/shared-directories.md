> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/shared-directories](https://developer.apple.com/documentation/virtualization/shared-directories)

# Shared directories

**Interface languages:** Swift, Objective-C

**Framework:** Virtualization  
**Kind:** API Collection

Configure devices that share directories from the host into the guest system.

<a id="overview"></a>

## Overview

Shared directories allow you expose specific directories in the macOS file system to the guest operating system running in a VM, this allows your user to share files between the host and guest operating system. To enable shared directory device support in Linux, configure the Linux guest kernel to enable the `CONFIG_VIRTIO_FS` support.

Configure a VIRTIO file system device using a [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md). The guest can use the [tag](vzvirtiofilesystemdeviceconfiguration/tag.md) label to mount and access the host resources.

The [VZDirectoryShare](vzdirectoryshare.md) on the configuration defines the host directories to expose to the guest. To limit or expose new directories to the guest while the VM is running, you can update the directory share with [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md).

Use [VZSingleDirectoryShare](vzsingledirectoryshare.md) to share the immediate contents of a single directory on the host, or use [VZMultipleDirectoryShare](vzmultipledirectoryshare.md) to share multiple directories from the host and include a specific name for each shared directory.

> **Note**

>  Shared directories in macOS VMs are only available in macOS 13 and later.

## Topics

### Configurations

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md): An object that represents the configuration of a Virtio file system device.
- [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md): The base class for a directory sharing device configuration.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

### Shared directory devices

- [VZVirtioFileSystemDevice](vzvirtiofilesystemdevice.md): An object the defines a VIRTIO file system device.
- [VZDirectorySharingDevice](vzdirectorysharingdevice.md): The base class that represents a directory sharing device in a VM.

### Directory Shares

- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZDirectoryShare](vzdirectoryshare.md): The base class for a directory share.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

## See Also

### Devices

- [Audio](audio.md): Configure audio devices that enable the guest operating system to perform audio playback and capture through the host’s audio devices.
- [Graphics](graphics.md): Configure a device for a guest to display its UI.
- [Keyboards and pointing devices](keyboards-and-pointing-devices.md): Configure devices that connect a mouse and keyboard to the guest system.
- [Memory](memory.md): Configure a memory balloon device to change the allocated memory for the guest system.
- [Network](network.md): Configure the devices that connect the guest system to the network.
- [Randomization](randomization.md): Configure a device for the guest system to use to generate random numbers.
- [Serial ports](serial-ports.md): Configure the serial devices that you use to communicate with the guest system.
- [Sockets](sockets.md): Configure a device that manages port-based communication with the guest system.
- [Storage](storage.md): Configure the block-storage devices that represent the disks of the guest system.
- [Consoles](consoles.md): Configure a device that manages multiport console communication with the guest system.
- [Clipboard sharing](clipboard-sharing.md): Share the pasteboard between the host and guest system.
- [USB Devices](usb-devices.md): Configure the USB devices that a guest system can access.
- [Custom Virtio drivers](custom-drivers.md): Create custom Virtio drivers for Linux virtual machines.
