> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdevice](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdevice)

# VZVirtioFileSystemDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object the defines a VIRTIO file system device.

## Declaration

```swift
class VZVirtioFileSystemDevice
```

<a id="overview"></a>

## Overview

This device exposes host resources to the guest as a file system mount. The directory share defines which resources the host exposes to the guest.

Create this device by instantiating a [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md) in a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md). The file system device is available in the `VZVirtualMachine`.[directorySharingDevices](vzvirtualmachine/directorysharingdevices.md) property. The guest can use the [tag](vzvirtiofilesystemdevice/tag.md) label to mount and access the host resources.

With `VZVirtioFileSystemDevice`, the framework enforces several permissions policies for shared directories:

- The framework reads and writes files using the user ID (UID) of the effective user, which is the UID of the current user, rather than the UID of the system process.
- The framework doesn’t allow reading or overwriting of files with permissions where the file is inaccessible to the current user.
- The framework ignores requests from guest operating systems to change the UID or group ID (GID) of files on the host.

## Topics

### Accessing directory properties

- [share](vzvirtiofilesystemdevice/share.md): A value that defines the directory share the host exposes to the guest VM.
- [tag](vzvirtiofilesystemdevice/tag.md): A string that identifies the device.

## Relationships

### Inherits From

- [VZDirectorySharingDevice](vzdirectorysharingdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md): An object that represents the configuration of a Virtio file system device.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.

### Shared directory devices

- [VZDirectorySharingDevice](vzdirectorysharingdevice.md): The base class that represents a directory sharing device in a VM.

# VZVirtioFileSystemDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object the defines a VIRTIO file system device.

## Declaration

```objectivec
@interface VZVirtioFileSystemDevice : VZDirectorySharingDevice
```

<a id="overview"></a>

## Overview

This device exposes host resources to the guest as a file system mount. The directory share defines which resources the host exposes to the guest.

Create this device by instantiating a [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md) in a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md). The file system device is available in the `VZVirtualMachine`.[directorySharingDevices](vzvirtualmachine/directorysharingdevices.md) property. The guest can use the [tag](vzvirtiofilesystemdevice/tag.md) label to mount and access the host resources.

With `VZVirtioFileSystemDevice`, the framework enforces several permissions policies for shared directories:

- The framework reads and writes files using the user ID (UID) of the effective user, which is the UID of the current user, rather than the UID of the system process.
- The framework doesn’t allow reading or overwriting of files with permissions where the file is inaccessible to the current user.
- The framework ignores requests from guest operating systems to change the UID or group ID (GID) of files on the host.

## Topics

### Accessing directory properties

- [share](vzvirtiofilesystemdevice/share.md): A value that defines the directory share the host exposes to the guest VM.
- [tag](vzvirtiofilesystemdevice/tag.md): A string that identifies the device.

## Relationships

### Inherits From

- [VZDirectorySharingDevice](vzdirectorysharingdevice.md)

## See Also

### Related Documentation

- [VZVirtioFileSystemDeviceConfiguration](vzvirtiofilesystemdeviceconfiguration.md): An object that represents the configuration of a Virtio file system device.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.

### Shared directory devices

- [VZDirectorySharingDevice](vzdirectorysharingdevice.md): The base class that represents a directory sharing device in a VM.
