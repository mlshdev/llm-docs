> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare)

# VZLinuxRosettaDirectoryShare (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The Linux directory share for Rosetta.

## Declaration

```swift
class VZLinuxRosettaDirectoryShare
```

<a id="overview"></a>

## Overview

This directory share exposes the Rosetta directory from the host file system to the guest. The example below shows the process of creating a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md), and then associating the Rosetta directory share with the VM configuration.

```swift
let tag = "EXAMPLE_TAG"  
let configuration = VZVirtualMachineConfiguration()
do {
    try let validationError = VZVirtioFileSystemDeviceConfiguration.validateTag(tag)
    let rosettaDirectoryShare = try VZLinuxRosettaDirectoryShare()
    let fileSystemDevice = VZVirtioFileSystemDeviceConfiguration(tag: tag)
    fileSystemDevice.share = rosettaDirectoryShare

    configuration.directorySharingDevices = [ fileSystemDevice ]
} catch VZError.invalidVirtualMachineConfiguration {
    // Rosetta is unavailable.
}
```

For complete instructions on installing Rosetta see doc:running-intel-binaries-in-linux-vms-with-rosetta, which includes additional information about checking for Rosetta availability, mounting the directory share, and registering the Rosetta runtime binary to run Intel binaries in a guest VM.

For information on using a custom kernel to enhance Rosetta performance, see [Accelerating the performance of Rosetta](accelerating-the-performance-of-rosetta.md).

## Topics

### Creating a Rosetta directory share

- [init()](vzlinuxrosettadirectoryshare/init%28%29.md): Creates a new Rosetta directory share, or returns an error if Rosetta isn’t installed.

### Checking Rosetta availability

- [availability](vzlinuxrosettadirectoryshare/availability.md): A value that indicates the current state of Rosetta’s availability.
- [VZLinuxRosettaAvailability](vzlinuxrosettaavailability.md): Constants that describe the availability and installation status of Rosetta.

### Installing Rosetta

- [installRosetta(completionHandler:)](vzlinuxrosettadirectoryshare/installrosetta%28completionhandler_%29.md): Starts the installation of Rosetta.

### Setting the ahead of time (AOT) caching options

- [cachingOptions](vzlinuxrosettadirectoryshare/cachingoptions-swift.property.md): The value that enables translation caching and configures the socket communication type for Rosetta.
- [setCachingOptions(\_:)](vzlinuxrosettadirectoryshare/setcachingoptions%28__%29.md): Sets the Rosetta caching options using the options you specify.
- [VZLinuxRosettaDirectoryShare.CachingOptions](vzlinuxrosettadirectoryshare/cachingoptions-swift.enum.md): Socket values you specify to configure Rosetta’s caching capabilities.

### Initializers

- [init(error:)](vzlinuxrosettadirectoryshare/init%28error_%29.md)

## Relationships

### Inherits From

- [VZDirectoryShare](vzdirectoryshare.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md): The base class for a directory sharing device configuration.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.

### Runtime

- [VZVirtualMachine](vzvirtualmachine.md): An object that manages the overall state and configuration of your VM.
- [VZVirtualMachineView](vzvirtualmachineview.md): A view that allows user interaction with a VM.

# VZLinuxRosettaDirectoryShare (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

The Linux directory share for Rosetta.

## Declaration

```objectivec
@interface VZLinuxRosettaDirectoryShare : VZDirectoryShare
```

<a id="overview"></a>

## Overview

This directory share exposes the Rosetta directory from the host file system to the guest. The example below shows the process of creating a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md), and then associating the Rosetta directory share with the VM configuration.

```swift
let tag = "EXAMPLE_TAG"  
let configuration = VZVirtualMachineConfiguration()
do {
    try let validationError = VZVirtioFileSystemDeviceConfiguration.validateTag(tag)
    let rosettaDirectoryShare = try VZLinuxRosettaDirectoryShare()
    let fileSystemDevice = VZVirtioFileSystemDeviceConfiguration(tag: tag)
    fileSystemDevice.share = rosettaDirectoryShare

    configuration.directorySharingDevices = [ fileSystemDevice ]
} catch VZError.invalidVirtualMachineConfiguration {
    // Rosetta is unavailable.
}
```

For complete instructions on installing Rosetta see doc:running-intel-binaries-in-linux-vms-with-rosetta, which includes additional information about checking for Rosetta availability, mounting the directory share, and registering the Rosetta runtime binary to run Intel binaries in a guest VM.

For information on using a custom kernel to enhance Rosetta performance, see [Accelerating the performance of Rosetta](accelerating-the-performance-of-rosetta.md).

## Topics

### Creating a Rosetta directory share

- [initWithError:](vzlinuxrosettadirectoryshare/init%28%29.md): Creates a new Rosetta directory share, or returns an error if Rosetta isn’t installed.

### Checking Rosetta availability

- [availability](vzlinuxrosettadirectoryshare/availability.md): A value that indicates the current state of Rosetta’s availability.
- [VZLinuxRosettaAvailability](vzlinuxrosettaavailability.md): Constants that describe the availability and installation status of Rosetta.

### Installing Rosetta

- [installRosettaWithCompletionHandler:](vzlinuxrosettadirectoryshare/installrosetta%28completionhandler_%29.md): Starts the installation of Rosetta.

### Setting the ahead of time (AOT) caching options

- [options](vzlinuxrosettadirectoryshare/options.md): The value that enables translation caching and configures the socket communication type for Rosetta.
- [VZLinuxRosettaAbstractSocketCachingOptions](vzlinuxrosettaabstractsocketcachingoptions.md): Caching options for an abstract socket.
- [VZLinuxRosettaCachingOptions](vzlinuxrosettacachingoptions.md): An abstract class that defines UNIX socket-based caching options for Rosetta.
- [VZLinuxRosettaUnixSocketCachingOptions](vzlinuxrosettaunixsocketcachingoptions.md): An object that represents caching options for a UNIX domain socket.

## Relationships

### Inherits From

- [VZDirectoryShare](vzdirectoryshare.md)

## See Also

### Related Documentation

- [VZDirectorySharingDeviceConfiguration](vzdirectorysharingdeviceconfiguration.md): The base class for a directory sharing device configuration.
- [VZSharedDirectory](vzshareddirectory.md): A directory on the host that you can expose to a guest.
- [VZSingleDirectoryShare](vzsingledirectoryshare.md): An object that defines the directory share for a single directory.
- [VZMultipleDirectoryShare](vzmultipledirectoryshare.md): An object that describes a directory share for multiple directories.

### Runtime

- [VZVirtualMachine](vzvirtualmachine.md): An object that manages the overall state and configuration of your VM.
- [VZVirtualMachineView](vzvirtualmachineview.md): A view that allows user interaction with a VM.
