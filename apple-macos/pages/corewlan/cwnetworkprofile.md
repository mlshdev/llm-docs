> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetworkprofile](https://developer.apple.com/documentation/corewlan/cwnetworkprofile)

# CWNetworkProfile (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.7+

Encapsulates an immutable network profile entry.

## Declaration

```swift
class CWNetworkProfile
```

## Topics

### Getting a network profile

- [init()](cwnetworkprofile/init%28%29.md): Creates and returns a CWNetworkProfile object.
- [init(networkProfile:)](cwnetworkprofile/init%28networkprofile_%29.md): Creates and returns a CWNetworkProfile object initialized with the given CWNetworkProfile object.

### Comparing network profiles

- [isEqual(to:)](cwnetworkprofile/isequal%28to_%29.md): Determine CWNetworkProfile object equality.

### Instance Properties

- [security](cwnetworkprofile/security.md): The security mode for the network profile.
- [ssid](cwnetworkprofile/ssid.md): The service set identifier (SSID) for the network profile, encoded as a string.
- [ssidData](cwnetworkprofile/ssiddata.md): The service set identifier (SSID) for the network profile, returned as data.

### Initializers

- [init(coder:)](cwnetworkprofile/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CWMutableNetworkProfile](cwmutablenetworkprofile.md)

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
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWNetworkProfile (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.7+

Encapsulates an immutable network profile entry.

## Declaration

```objectivec
@interface CWNetworkProfile : NSObject
```

## Topics

### Getting a network profile

- [init](cwnetworkprofile/init%28%29.md): Creates and returns a CWNetworkProfile object.
- [initWithNetworkProfile:](cwnetworkprofile/init%28networkprofile_%29.md): Creates and returns a CWNetworkProfile object initialized with the given CWNetworkProfile object.
- [networkProfile](cwnetworkprofile/networkprofile.md): Convenience method for getting a CWNetworkProfile object.
- [networkProfileWithNetworkProfile:](cwnetworkprofile/networkprofilewithnetworkprofile_.md): Convenience method for getting a CWNetworkProfile object initialized with the given CWNetworkProfile object.

### Comparing network profiles

- [isEqualToNetworkProfile:](cwnetworkprofile/isequal%28to_%29.md): Determine CWNetworkProfile object equality.

### Instance Properties

- [security](cwnetworkprofile/security.md): The security mode for the network profile.
- [ssid](cwnetworkprofile/ssid.md): The service set identifier (SSID) for the network profile, encoded as a string.
- [ssidData](cwnetworkprofile/ssiddata.md): The service set identifier (SSID) for the network profile, returned as data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CWMutableNetworkProfile](cwmutablenetworkprofile.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
