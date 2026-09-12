> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetwork](https://developer.apple.com/documentation/systemconfiguration/scnetwork)

# SCNetwork (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCNetwork` programming interface contains functions an application can use to determine whether that application can reach a remote host and to notify the system of configuration changes.

A remote host is considered reachable when a data packet, sent by an application into the network stack, can leave the local computer. Note that reachability does not guarantee that the data packet will actually be received by the host.

## Topics

### Constants

- [SCNetworkConnectionFlags](scnetworkconnectionflags.md): Flags that indicate whether the specified network node name or address is reachable, whether a connection is required, and whether some user intervention may be required when establishing a connection.

## See Also

### Reference

- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetworkConfiguration](scnetworkconfiguration.md)
- [SCNetworkConnection](scnetworkconnection-g7e.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferences](scpreferences-ft8.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
- [SystemConfiguration Functions](systemconfiguration-functions.md)
- [SystemConfiguration Data Types](systemconfiguration-data-types.md)

# SCNetwork (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCNetwork` programming interface contains functions an application can use to determine whether that application can reach a remote host and to notify the system of configuration changes.

A remote host is considered reachable when a data packet, sent by an application into the network stack, can leave the local computer. Note that reachability does not guarantee that the data packet will actually be received by the host.

## Topics

### Group

- [SCNetworkCheckReachabilityByAddress](scnetworkcheckreachabilitybyaddress.md): Deprecated. Determines whether the specified network address is reachable using the current network configuration.
- [SCNetworkCheckReachabilityByName](scnetworkcheckreachabilitybyname.md): Deprecated. Determines whether the specified network host or node name is reachable using the current network configuration.
- [SCNetworkInterfaceRefreshConfiguration](scnetworkinterfacerefreshconfiguration.md): Deprecated. Sends a notification to interested configuration agents to have them immediately retry their configuration over a particular network interface.

### Constants

- [SCNetworkConnectionFlags](scnetworkconnectionflags.md): Flags that indicate whether the specified network node name or address is reachable, whether a connection is required, and whether some user intervention may be required when establishing a connection.

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetworkConfiguration](scnetworkconfiguration.md)
- [SCNetworkConnection](scnetworkconnection-g7e.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferences](scpreferences-ft8.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
