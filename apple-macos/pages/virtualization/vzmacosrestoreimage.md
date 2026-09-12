> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage)

# VZMacOSRestoreImage (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that describes a version of macOS to install on to a virtual machine.

## Declaration

```swift
class VZMacOSRestoreImage
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)
- [Using iCloud with macOS virtual machines](using-icloud-with-macos-virtual-machines.md)

<a id="overview"></a>

## Overview

To set up a new VM compatible with the restore image, use [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to obtain the [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) of the [VZMacPlatformConfiguration](vzmacplatformconfiguration.md). Then, create a [VZMacOSRestoreImage](vzmacosrestoreimage.md) object by loading an installation media file. Initialize a [VZMacOSInstaller](vzmacosinstaller.md) object with this `VZMacOSRestoreImage` object to install the operating system onto a VM.

> **Important**

>  Loading a restore image requires the app to have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

## Topics

### Getting Information About the Restore Image

- [buildVersion](vzmacosrestoreimage/buildversion.md): The build version this restore image contains.
- [isSupported](vzmacosrestoreimage/issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](vzmacosrestoreimage/operatingsystemversion.md): The operating system version this restore image contains.
- [url](vzmacosrestoreimage/url.md): The URL of this restore image.

### Controlling the Restoration Process

- [fetchLatestSupported(completionHandler:)](vzmacosrestoreimage/fetchlatestsupported%28completionhandler_%29.md): Fetches the latest restore image supported by this host from the network.
- [load(from:completionHandler:)](vzmacosrestoreimage/load%28from_completionhandler_%29.md): Load a restore image from a file on the local file system.
- [latestSupported](vzmacosrestoreimage/latestsupported.md): Fetches the latest restore image supported by this host from the network.
- [image(from:)](vzmacosrestoreimage/image%28from_%29.md): Load a restore image from a file on the local file system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.

### Installers

- [VZMacOSInstaller](vzmacosinstaller.md): An object you use to install macOS on the specified virtual machine.
- [VZMacOSConfigurationRequirements](vzmacosconfigurationrequirements.md): An object that describes the parameter constraints required by a specific configuration of macOS.

# VZMacOSRestoreImage (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that describes a version of macOS to install on to a virtual machine.

## Declaration

```objectivec
@interface VZMacOSRestoreImage : NSObject
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)
- [Using iCloud with macOS virtual machines](using-icloud-with-macos-virtual-machines.md)

<a id="overview"></a>

## Overview

To set up a new VM compatible with the restore image, use [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to obtain the [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) of the [VZMacPlatformConfiguration](vzmacplatformconfiguration.md). Then, create a [VZMacOSRestoreImage](vzmacosrestoreimage.md) object by loading an installation media file. Initialize a [VZMacOSInstaller](vzmacosinstaller.md) object with this `VZMacOSRestoreImage` object to install the operating system onto a VM.

> **Important**

>  Loading a restore image requires the app to have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

## Topics

### Getting Information About the Restore Image

- [buildVersion](vzmacosrestoreimage/buildversion.md): The build version this restore image contains.
- [supported](vzmacosrestoreimage/issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](vzmacosrestoreimage/operatingsystemversion.md): The operating system version this restore image contains.
- [URL](vzmacosrestoreimage/url.md): The URL of this restore image.

### Controlling the Restoration Process

- [fetchLatestSupportedWithCompletionHandler:](vzmacosrestoreimage/latestsupported.md): Fetches the latest restore image supported by this host from the network.
- [loadFileURL:completionHandler:](vzmacosrestoreimage/image%28from_%29.md): Load a restore image from a file on the local file system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.

### Installers

- [VZMacOSInstaller](vzmacosinstaller.md): An object you use to install macOS on the specified virtual machine.
- [VZMacOSConfigurationRequirements](vzmacosconfigurationrequirements.md): An object that describes the parameter constraints required by a specific configuration of macOS.
