> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacguestprovisioningoptions](https://developer.apple.com/documentation/virtualization/vzmacguestprovisioningoptions)

# VZMacGuestProvisioningOptions (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The configuration for guest setup during macOS virtual machine startup.

## Declaration

```swift
class VZMacGuestProvisioningOptions
```

<a id="overview"></a>

## Overview

> **Note**

> This configuration requires guest macOS 27 or later to function properly. Earlier versions of macOS don’t support the automated guest configuration protocol and ignore these settings.

This configuration class provides automated setup capabilities for macOS virtual machines that allow hosts to configure a user account and initial setup workflows without manual intervention during the guest boot process.

The configuration enables automated macOS installation and setup workflows by providing user credentials and setup preferences to the guest system during startup.

macOS only evaluates these options on the first boot after restore. The Virtualization framework can’t use them to reconfigure macOS once the framework has already provisioned it.

Changes to the properties after starting the virtual machine have no effect.

## Topics

### Initializers

- [init()](vzmacguestprovisioningoptions/init%28%29.md)

### Instance Properties

- [enablesRemoteLogin](vzmacguestprovisioningoptions/enablesremotelogin.md): A Boolean value that indicates whether to enable Remote Login (using SSH) for the macOS virtual machine.
- [fullName](vzmacguestprovisioningoptions/fullname.md): A person’s full name to configure for the macOS virtual machine.
- [logsInAutomatically](vzmacguestprovisioningoptions/logsinautomatically.md): A Boolean value that indicates whether to automatically log in the person at startup.
- [password](vzmacguestprovisioningoptions/password.md): The password to configure for the macOS virtual machine.
- [username](vzmacguestprovisioningoptions/username.md): The username for logging into the macOS virtual machine.

## Relationships

### Inherits From

- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.

### Provisioning options

- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
- [VZGuestMemoryMapping](vzguestmemorymapping.md): An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).

# VZMacGuestProvisioningOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The configuration for guest setup during macOS virtual machine startup.

## Declaration

```objectivec
@interface VZMacGuestProvisioningOptions : VZGuestProvisioningOptions
```

<a id="overview"></a>

## Overview

> **Note**

> This configuration requires guest macOS 27 or later to function properly. Earlier versions of macOS don’t support the automated guest configuration protocol and ignore these settings.

This configuration class provides automated setup capabilities for macOS virtual machines that allow hosts to configure a user account and initial setup workflows without manual intervention during the guest boot process.

The configuration enables automated macOS installation and setup workflows by providing user credentials and setup preferences to the guest system during startup.

macOS only evaluates these options on the first boot after restore. The Virtualization framework can’t use them to reconfigure macOS once the framework has already provisioned it.

Changes to the properties after starting the virtual machine have no effect.

## Topics

### Instance Properties

- [enablesRemoteLogin](vzmacguestprovisioningoptions/enablesremotelogin.md): A Boolean value that indicates whether to enable Remote Login (using SSH) for the macOS virtual machine.
- [fullName](vzmacguestprovisioningoptions/fullname.md): A person’s full name to configure for the macOS virtual machine.
- [logsInAutomatically](vzmacguestprovisioningoptions/logsinautomatically.md): A Boolean value that indicates whether to automatically log in the person at startup.
- [password](vzmacguestprovisioningoptions/password.md): The password to configure for the macOS virtual machine.
- [username](vzmacguestprovisioningoptions/username.md): The username for logging into the macOS virtual machine.

### Instance Methods

- [init](vzmacguestprovisioningoptions/init%28%29.md)

## Relationships

### Inherits From

- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.

### Provisioning options

- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
- [VZGuestMemoryMapping](vzguestmemorymapping.md): An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).
