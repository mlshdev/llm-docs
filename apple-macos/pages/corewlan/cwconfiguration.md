> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwconfiguration](https://developer.apple.com/documentation/corewlan/cwconfiguration)

# CWConfiguration (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates an immutable configuration for an AirPort WLAN interface.

## Declaration

```swift
class CWConfiguration
```

## Topics

### Creating a configuration

- [init()](cwconfiguration/init%28%29.md): Creates an empty CWConfiguration object.
- [init(configuration:)](cwconfiguration/init%28configuration_%29.md): Creates and returns a CWConfiguration object initialized with the given CWConfiguration object.

### Comparing configurations

- [isEqual(to:)](cwconfiguration/isequal%28to_%29.md): Determine CWConfiguration object equality.

### Instance Properties

- [networkProfiles](cwconfiguration/networkprofiles.md): An array of remembered CWNetworkProfile objects.
- [rememberJoinedNetworks](cwconfiguration/rememberjoinednetworks.md): AirPort client will remember all joined networks.
- [requireAdministratorForAssociation](cwconfiguration/requireadministratorforassociation.md): Require an administrator password to change networks.
- [requireAdministratorForIBSSMode](cwconfiguration/requireadministratorforibssmode.md): Require an administrator password to create a computer-to-computer network.
- [requireAdministratorForPower](cwconfiguration/requireadministratorforpower.md): Require an administrator password to change the interface power state.

### Initializers

- [init(coder:)](cwconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CWMutableConfiguration](cwmutableconfiguration.md)

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
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWConfiguration (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates an immutable configuration for an AirPort WLAN interface.

## Declaration

```objectivec
@interface CWConfiguration : NSObject
```

## Topics

### Creating a configuration

- [init](cwconfiguration/init%28%29.md): Creates an empty CWConfiguration object.
- [initWithConfiguration:](cwconfiguration/init%28configuration_%29.md): Creates and returns a CWConfiguration object initialized with the given CWConfiguration object.
- [configuration](cwconfiguration/configuration.md): Convenience method for getting an empty CWConfiguration object.
- [configurationWithConfiguration:](cwconfiguration/configurationwithconfiguration_.md): Convenience method for getting a CWConfiguration object initialized with the given CWConfiguration object.

### Comparing configurations

- [isEqualToConfiguration:](cwconfiguration/isequal%28to_%29.md): Determine CWConfiguration object equality.

### Instance Properties

- [networkProfiles](cwconfiguration/networkprofiles.md): An array of remembered CWNetworkProfile objects.
- [rememberJoinedNetworks](cwconfiguration/rememberjoinednetworks.md): AirPort client will remember all joined networks.
- [requireAdministratorForAssociation](cwconfiguration/requireadministratorforassociation.md): Require an administrator password to change networks.
- [requireAdministratorForIBSSMode](cwconfiguration/requireadministratorforibssmode.md): Require an administrator password to create a computer-to-computer network.
- [requireAdministratorForPower](cwconfiguration/requireadministratorforpower.md): Require an administrator password to change the interface power state.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CWMutableConfiguration](cwmutableconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
