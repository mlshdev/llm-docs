> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwmutablenetworkprofile](https://developer.apple.com/documentation/corewlan/cwmutablenetworkprofile)

# CWMutableNetworkProfile (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.7+

Encapsulates a mutable network profile entry.

## Declaration

```swift
class CWMutableNetworkProfile
```

<a id="overview"></a>

## Overview

Use this class to change profile properties. To commit Wi-Fi network profile changes, use [networkProfiles](cwmutableconfiguration/networkprofiles.md) and [commitConfiguration(\_:authorization:)](cwinterface/commitconfiguration%28__authorization_%29.md).

## Topics

### Configuring Network Profiles

- [ssidData](cwmutablenetworkprofile/ssiddata.md): The service set identifier (SSID).
- [security](cwmutablenetworkprofile/security.md): The security type.

## Relationships

### Inherits From

- [CWNetworkProfile](cwnetworkprofile.md)

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
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWMutableNetworkProfile (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.7+

Encapsulates a mutable network profile entry.

## Declaration

```objectivec
@interface CWMutableNetworkProfile : CWNetworkProfile
```

<a id="overview"></a>

## Overview

Use this class to change profile properties. To commit Wi-Fi network profile changes, use [networkProfiles](cwmutableconfiguration/networkprofiles.md) and [commitConfiguration:authorization:error:](cwinterface/commitconfiguration%28__authorization_%29.md).

## Topics

### Configuring Network Profiles

- [ssidData](cwmutablenetworkprofile/ssiddata.md): The service set identifier (SSID).
- [security](cwmutablenetworkprofile/security.md): The security type.

## Relationships

### Inherits From

- [CWNetworkProfile](cwnetworkprofile.md)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
