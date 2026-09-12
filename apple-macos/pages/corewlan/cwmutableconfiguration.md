> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwmutableconfiguration](https://developer.apple.com/documentation/corewlan/cwmutableconfiguration)

# CWMutableConfiguration (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates a mutable configuration for an AirPort WLAN interface.

## Declaration

```swift
class CWMutableConfiguration
```

<a id="overview"></a>

## Overview

Use this class to change configuration settings or the preferred networks list. To commit configuration changes, use [commitConfiguration(\_:authorization:)](cwinterface/commitconfiguration%28__authorization_%29.md).

## Topics

### Configuring Preferred Networks

- [networkProfiles](cwmutableconfiguration/networkprofiles.md): The preferred networks list.

### Configuring Settings

- [rememberJoinedNetworks](cwmutableconfiguration/rememberjoinednetworks.md): A Boolean value that determines whether to remember all joined Wi-Fi networks unless the user specifies otherwise when joining a particular Wi-Fi network.
- [requireAdministratorForAssociation](cwmutableconfiguration/requireadministratorforassociation.md): A Boolean value that determines whether to require an administrator password to change networks.
- [requireAdministratorForPower](cwmutableconfiguration/requireadministratorforpower.md): A Boolean value that determines whether to require an administrator password to change the interface power state.
- [requireAdministratorForIBSSMode](cwmutableconfiguration/requireadministratorforibssmode.md): Deprecated. A Boolean value that determines whether to require an administrator password to create a computer-to-computer network.

## Relationships

### Inherits From

- [CWConfiguration](cwconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWMutableConfiguration (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates a mutable configuration for an AirPort WLAN interface.

## Declaration

```objectivec
@interface CWMutableConfiguration : CWConfiguration
```

<a id="overview"></a>

## Overview

Use this class to change configuration settings or the preferred networks list. To commit configuration changes, use [commitConfiguration:authorization:error:](cwinterface/commitconfiguration%28__authorization_%29.md).

## Topics

### Configuring Preferred Networks

- [networkProfiles](cwmutableconfiguration/networkprofiles.md): The preferred networks list.

### Configuring Settings

- [rememberJoinedNetworks](cwmutableconfiguration/rememberjoinednetworks.md): A Boolean value that determines whether to remember all joined Wi-Fi networks unless the user specifies otherwise when joining a particular Wi-Fi network.
- [requireAdministratorForAssociation](cwmutableconfiguration/requireadministratorforassociation.md): A Boolean value that determines whether to require an administrator password to change networks.
- [requireAdministratorForPower](cwmutableconfiguration/requireadministratorforpower.md): A Boolean value that determines whether to require an administrator password to change the interface power state.
- [requireAdministratorForIBSSMode](cwmutableconfiguration/requireadministratorforibssmode.md): Deprecated. A Boolean value that determines whether to require an administrator password to create a computer-to-computer network.

## Relationships

### Inherits From

- [CWConfiguration](cwconfiguration.md)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
