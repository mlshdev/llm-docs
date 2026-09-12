> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface](https://developer.apple.com/documentation/corewlan/cwinterface)

# CWInterface (Swift)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates an IEEE 802.11 interface.

## Declaration

```swift
class CWInterface
```

<a id="overview"></a>

## Overview

Provides access to various WLAN interface parameters, and operations such as scanning for networks, association, and creating computer-to-computer (ad-hoc) networks.

> **Important**

>  Do not instantiate interface objects directly. Instead, use interface objects vended by a [CWWiFiClient](cwwificlient.md) instance via the [interface()](cwwificlient/interface%28%29.md) method or one of its relatives. This enables your app to adopt App Sandbox even when it uses CoreWLAN without the need for any special exceptions. Directly instantiating interface objects causes low level access to system sockets, which by default is not allowed in a sandboxed environment.

## Topics

### Setting interface parameters

- [setPairwiseMasterKey(\_:)](cwinterface/setpairwisemasterkey%28__%29.md): Sets the interface pairwise primary key (PMK).
- [setPower(\_:)](cwinterface/setpower%28__%29.md): Sets the interface power state.
- [setWEPKey(\_:flags:index:)](cwinterface/setwepkey%28__flags_index_%29.md): Sets the interface WEP key.
- [setWLANChannel(\_:)](cwinterface/setwlanchannel%28__%29.md): Sets the interface channel.

### Scanning for networks

- [scanForNetworks(withName:)](cwinterface/scanfornetworks%28withname_%29.md): Scans for networks.
- [scanForNetworks(withSSID:)](cwinterface/scanfornetworks%28withssid_%29.md): Scans for networks.

### Getting an interface

- [init(interfaceName:)](cwinterface/init%28interfacename_%29.md): Deprecated. Convenience method for getting an CWInterface object with the specified name.
- [init(name:)](cwinterface/init%28name_%29.md): Deprecated. An instance method for obtaining an CWInterface object.

### Getting all attached interfaces

- [interfaceNames()](cwinterface/interfacenames%28%29.md): Deprecated. Returns the list of BSD names for WLAN interfaces available on the current system.

### Disassociating from a network

- [disassociate()](cwinterface/disassociate%28%29.md): Disassociates from the current network.

### Creating computer-to-computer networks

- [startIBSSMode(withSSID:security:channel:password:)](cwinterface/startibssmode%28withssid_security_channel_password_%29.md): Deprecated. Creates a computer-to-computer (ad-hoc) network with the given network name, security type, and password on the specified channel.

### Committing a configuration

- [commitConfiguration(\_:authorization:)](cwinterface/commitconfiguration%28__authorization_%29.md): Commit a configuration for the given WLAN interface.

### Associating to a network

- [associate(toEnterpriseNetwork:identity:username:password:)](cwinterface/associate%28toenterprisenetwork_identity_username_password_%29.md): Connects to the given enterprise network.
- [associate(to:password:)](cwinterface/associate%28to_password_%29.md): Associates to a given network using the given network passphrase.

### Instance Properties

- [interfaceName](cwinterface/interfacename.md): The BSD name of the interface.

### Instance Methods

- [activePHYMode()](cwinterface/activephymode%28%29.md): The current active PHY modes for the interface.
- [bssid()](cwinterface/bssid%28%29.md): The current basic service set identifier (BSSID) for the interface, returned as a UTF-8 string.
- [cachedScanResults()](cwinterface/cachedscanresults%28%29.md): The networks currently in the scan cache for the WLAN interface.
- [configuration()](cwinterface/configuration%28%29.md): The current configuration for the given WLAN interface.
- [countryCode()](cwinterface/countrycode%28%29.md): The current country code (ISO/IEC 3166-1:1997) for the interface.
- [hardwareAddress()](cwinterface/hardwareaddress%28%29.md): The hardware media access control (MAC) address for the interface, returned as a UTF-8 string.
- [interfaceMode()](cwinterface/interfacemode%28%29.md): The current mode for the interface.
- [noiseMeasurement()](cwinterface/noisemeasurement%28%29.md): The current aggregate noise measurement (dBm) for the interface.
- [powerOn()](cwinterface/poweron%28%29.md): The interface power state is set to “ON”.
- [rssiValue()](cwinterface/rssivalue%28%29.md): The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.
- [scanForNetworks(withName:includeHidden:)](cwinterface/scanfornetworks%28withname_includehidden_%29.md): Scans for networks with the name you specify, optionally including hidden networks.
- [scanForNetworks(withSSID:includeHidden:)](cwinterface/scanfornetworks%28withssid_includehidden_%29.md): Scans for networks with the SSID you specify, optionally including hidden networks.
- [security()](cwinterface/security%28%29.md): The current security mode for the interface.
- [serviceActive()](cwinterface/serviceactive%28%29.md): The interface has its corresponding network service enabled.
- [ssid()](cwinterface/ssid%28%29.md): The current service set identifier (SSID) for the interface, encoded as a string.
- [ssidData()](cwinterface/ssiddata%28%29.md): The current service set identifier (SSID) for the interface, returned as data.
- [supportedWLANChannels()](cwinterface/supportedwlanchannels%28%29.md): An array of channels supported by the interface for the active country code.
- [transmitPower()](cwinterface/transmitpower%28%29.md): The current transmit power (mW) for the interface.
- [transmitRate()](cwinterface/transmitrate%28%29.md): The current transmit rate (Mbps) for the interface.
- [wlanChannel()](cwinterface/wlanchannel%28%29.md): The current channel for the interface.

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

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.

# CWInterface (Objective-C)

**Framework:** Core WLAN  
**Kind:** Class  
**Availability:** macOS 10.6+

Encapsulates an IEEE 802.11 interface.

## Declaration

```objectivec
@interface CWInterface : NSObject
```

<a id="overview"></a>

## Overview

Provides access to various WLAN interface parameters, and operations such as scanning for networks, association, and creating computer-to-computer (ad-hoc) networks.

> **Important**

>  Do not instantiate interface objects directly. Instead, use interface objects vended by a [CWWiFiClient](cwwificlient.md) instance via the [interface](cwwificlient/interface%28%29.md) method or one of its relatives. This enables your app to adopt App Sandbox even when it uses CoreWLAN without the need for any special exceptions. Directly instantiating interface objects causes low level access to system sockets, which by default is not allowed in a sandboxed environment.

## Topics

### Setting interface parameters

- [setPairwiseMasterKey:error:](cwinterface/setpairwisemasterkey%28__%29.md): Sets the interface pairwise primary key (PMK).
- [setPower:error:](cwinterface/setpower%28__%29.md): Sets the interface power state.
- [setWEPKey:flags:index:error:](cwinterface/setwepkey%28__flags_index_%29.md): Sets the interface WEP key.
- [setWLANChannel:error:](cwinterface/setwlanchannel%28__%29.md): Sets the interface channel.

### Scanning for networks

- [scanForNetworksWithName:error:](cwinterface/scanfornetworks%28withname_%29.md): Scans for networks.
- [scanForNetworksWithSSID:error:](cwinterface/scanfornetworks%28withssid_%29.md): Scans for networks.

### Getting an interface

- [initWithInterfaceName:](cwinterface/init%28interfacename_%29.md): Deprecated. Convenience method for getting an CWInterface object with the specified name.
- [interface](cwinterface/interface.md): Deprecated. Convenience method for getting an CWInterface object for the default WLAN interface.
- [interfaceWithName:](cwinterface/init%28name_%29.md): Deprecated. An instance method for obtaining an CWInterface object.

### Getting all attached interfaces

- [interfaceNames](cwinterface/interfacenames%28%29.md): Deprecated. Returns the list of BSD names for WLAN interfaces available on the current system.

### Disassociating from a network

- [disassociate](cwinterface/disassociate%28%29.md): Disassociates from the current network.

### Creating computer-to-computer networks

- [startIBSSModeWithSSID:security:channel:password:error:](cwinterface/startibssmode%28withssid_security_channel_password_%29.md): Deprecated. Creates a computer-to-computer (ad-hoc) network with the given network name, security type, and password on the specified channel.

### Committing a configuration

- [commitConfiguration:authorization:error:](cwinterface/commitconfiguration%28__authorization_%29.md): Commit a configuration for the given WLAN interface.

### Associating to a network

- [associateToEnterpriseNetwork:identity:username:password:error:](cwinterface/associate%28toenterprisenetwork_identity_username_password_%29.md): Connects to the given enterprise network.
- [associateToNetwork:password:error:](cwinterface/associate%28to_password_%29.md): Associates to a given network using the given network passphrase.

### Instance Properties

- [interfaceName](cwinterface/interfacename.md): The BSD name of the interface.

### Instance Methods

- [activePHYMode](cwinterface/activephymode%28%29.md): The current active PHY modes for the interface.
- [bssid](cwinterface/bssid%28%29.md): The current basic service set identifier (BSSID) for the interface, returned as a UTF-8 string.
- [cachedScanResults](cwinterface/cachedscanresults%28%29.md): The networks currently in the scan cache for the WLAN interface.
- [configuration](cwinterface/configuration%28%29.md): The current configuration for the given WLAN interface.
- [countryCode](cwinterface/countrycode%28%29.md): The current country code (ISO/IEC 3166-1:1997) for the interface.
- [hardwareAddress](cwinterface/hardwareaddress%28%29.md): The hardware media access control (MAC) address for the interface, returned as a UTF-8 string.
- [interfaceMode](cwinterface/interfacemode%28%29.md): The current mode for the interface.
- [noiseMeasurement](cwinterface/noisemeasurement%28%29.md): The current aggregate noise measurement (dBm) for the interface.
- [powerOn](cwinterface/poweron%28%29.md): The interface power state is set to “ON”.
- [rssiValue](cwinterface/rssivalue%28%29.md): The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.
- [scanForNetworksWithName:includeHidden:error:](cwinterface/scanfornetworks%28withname_includehidden_%29.md): Scans for networks with the name you specify, optionally including hidden networks.
- [scanForNetworksWithSSID:includeHidden:error:](cwinterface/scanfornetworks%28withssid_includehidden_%29.md): Scans for networks with the SSID you specify, optionally including hidden networks.
- [security](cwinterface/security%28%29.md): The current security mode for the interface.
- [serviceActive](cwinterface/serviceactive%28%29.md): The interface has its corresponding network service enabled.
- [ssid](cwinterface/ssid%28%29.md): The current service set identifier (SSID) for the interface, encoded as a string.
- [ssidData](cwinterface/ssiddata%28%29.md): The current service set identifier (SSID) for the interface, returned as data.
- [supportedWLANChannels](cwinterface/supportedwlanchannels%28%29.md): An array of channels supported by the interface for the active country code.
- [transmitPower](cwinterface/transmitpower%28%29.md): The current transmit power (mW) for the interface.
- [transmitRate](cwinterface/transmitrate%28%29.md): The current transmit rate (Mbps) for the interface.
- [wlanChannel](cwinterface/wlanchannel%28%29.md): The current channel for the interface.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [CWChannel](cwchannel.md): Encapsulates an IEEE 802.11 channel.
- [CWConfiguration](cwconfiguration.md): Encapsulates an immutable configuration for an AirPort WLAN interface.
- [CWMutableConfiguration](cwmutableconfiguration.md): Encapsulates a mutable configuration for an AirPort WLAN interface.
- [CWMutableNetworkProfile](cwmutablenetworkprofile.md): Encapsulates a mutable network profile entry.
- [CWNetwork](cwnetwork.md): Encapsulates an IEEE 802.11 network, providing read-only accessors to various properties of the network.
- [CWNetworkProfile](cwnetworkprofile.md): Encapsulates an immutable network profile entry.
- [CWWiFiClient](cwwificlient.md): A wrapper around the entire Wi-Fi subsystem that you use to access interfaces and set up event notifications.
