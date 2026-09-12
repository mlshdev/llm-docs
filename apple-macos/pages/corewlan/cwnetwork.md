> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetwork](https://developer.apple.com/documentation/corewlan/cwnetwork)

# CWNetwork (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.

## Declaration

```swift
class CWNetwork
```

## Topics

### Getting supported security types

- [supportsSecurity(\_:)](cwnetwork/supportssecurity%28__%29.md): Method for determining which security types a network supports.

### Getting supported PHY modes

- [supportsPHYMode(\_:)](cwnetwork/supportsphymode%28__%29.md): Method for determining which PHY modes a network supports.

### Comparing wireless networks

- [isEqual(to:)](cwnetwork/isequal%28to_%29.md): Method for determining CWNetwork object equality.

### Instance Properties

- [beaconInterval](cwnetwork/beaconinterval.md): The beacon interval (ms) for the network.
- [bssid](cwnetwork/bssid.md): The basic service set identifier (BSSID) for the network, returned as UTF-8 string.
- [countryCode](cwnetwork/countrycode.md): The country code (ISO/IEC 3166-1:1997) for the network.
- [ibss](cwnetwork/ibss.md): The network is an IBSS network.
- [informationElementData](cwnetwork/informationelementdata.md): Information element data included in beacon or probe response frames.
- [noiseMeasurement](cwnetwork/noisemeasurement.md): The aggregate noise measurement (dBm) for the network.
- [rssiValue](cwnetwork/rssivalue.md): The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.
- [ssid](cwnetwork/ssid.md): The service set identifier (SSID) for the network, encoded as a string.
- [ssidData](cwnetwork/ssiddata.md): The service set identifier (SSID) for the network, returned as data.
- [wlanChannel](cwnetwork/wlanchannel.md): The channel for the network.

### Initializers

- [init(coder:)](cwnetwork/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWNetwork (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.

## Declaration

```objectivec
@interface CWNetwork : NSObject
```

## Topics

### Getting supported security types

- [supportsSecurity:](cwnetwork/supportssecurity%28__%29.md): Method for determining which security types a network supports.

### Getting supported PHY modes

- [supportsPHYMode:](cwnetwork/supportsphymode%28__%29.md): Method for determining which PHY modes a network supports.

### Comparing wireless networks

- [isEqualToNetwork:](cwnetwork/isequal%28to_%29.md): Method for determining CWNetwork object equality.

### Instance Properties

- [beaconInterval](cwnetwork/beaconinterval.md): The beacon interval (ms) for the network.
- [bssid](cwnetwork/bssid.md): The basic service set identifier (BSSID) for the network, returned as UTF-8 string.
- [countryCode](cwnetwork/countrycode.md): The country code (ISO/IEC 3166-1:1997) for the network.
- [ibss](cwnetwork/ibss.md): The network is an IBSS network.
- [informationElementData](cwnetwork/informationelementdata.md): Information element data included in beacon or probe response frames.
- [noiseMeasurement](cwnetwork/noisemeasurement.md): The aggregate noise measurement (dBm) for the network.
- [rssiValue](cwnetwork/rssivalue.md): The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.
- [ssid](cwnetwork/ssid.md): The service set identifier (SSID) for the network, encoded as a string.
- [ssidData](cwnetwork/ssiddata.md): The service set identifier (SSID) for the network, returned as data.
- [wlanChannel](cwnetwork/wlanchannel.md): The channel for the network.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWInterface](cwinterface.md): Encapsulates an IEEE 802.11 interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
