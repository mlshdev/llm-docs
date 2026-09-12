> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorekey](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorekey)

# SCDynamicStoreKey (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCDynamicStoreKey` programming interface provides convenience functions that an application can use to create a correctly formatted dynamic store key for accessing specific items in the dynamic store. An application can then use the resulting string in any function that requires a dynamic store key.

## Topics

### Group

- [SCDynamicStoreKeyCreateNetworkGlobalEntity(\_:\_:\_:)](scdynamicstorekeycreatenetworkglobalentity%28______%29.md): Creates a dynamic store key that can be used to access a specific global (as opposed to a per-service or per-interface) network configuration entity.
- [SCDynamicStoreKeyCreateNetworkInterface(\_:\_:)](scdynamicstorekeycreatenetworkinterface%28____%29.md): Creates a dynamic store key that can be used to access the network interface configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkInterfaceEntity(\_:\_:\_:\_:)](scdynamicstorekeycreatenetworkinterfaceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-interface network configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkServiceEntity(\_:\_:\_:\_:)](scdynamicstorekeycreatenetworkserviceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-service network configuration information.
- [SCDynamicStoreKeyCreateComputerName(\_:)](scdynamicstorekeycreatecomputername%28__%29.md): Creates a key that can be used to receive notifications when the current computer name changes.
- [SCDynamicStoreKeyCreateConsoleUser(\_:)](scdynamicstorekeycreateconsoleuser%28__%29.md): Creates a key that can be used to receive notifications when the current console user changes.
- [SCDynamicStoreKeyCreateHostNames(\_:)](scdynamicstorekeycreatehostnames%28__%29.md): Creates a key that can be used to receive notifications when the `HostNames` entity changes.
- [SCDynamicStoreKeyCreateLocation(\_:)](scdynamicstorekeycreatelocation%28__%29.md): Creates a key that can be used to receive notifications when the location identifier changes.
- [SCDynamicStoreKeyCreateProxies(\_:)](scdynamicstorekeycreateproxies%28__%29.md): Creates a key that can be used to receive notifications when the current network proxy settings are changed.

## See Also

### Reference

- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCNetwork](scnetwork.md)
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

# SCDynamicStoreKey (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCDynamicStoreKey` programming interface provides convenience functions that an application can use to create a correctly formatted dynamic store key for accessing specific items in the dynamic store. An application can then use the resulting string in any function that requires a dynamic store key.

## Topics

### Group

- [SCDynamicStoreKeyCreate](scdynamicstorekeycreate.md): Creates a dynamic store key using the specified format.
- [SCDynamicStoreKeyCreateNetworkGlobalEntity](scdynamicstorekeycreatenetworkglobalentity%28______%29.md): Creates a dynamic store key that can be used to access a specific global (as opposed to a per-service or per-interface) network configuration entity.
- [SCDynamicStoreKeyCreateNetworkInterface](scdynamicstorekeycreatenetworkinterface%28____%29.md): Creates a dynamic store key that can be used to access the network interface configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkInterfaceEntity](scdynamicstorekeycreatenetworkinterfaceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-interface network configuration information in the dynamic store.
- [SCDynamicStoreKeyCreateNetworkServiceEntity](scdynamicstorekeycreatenetworkserviceentity%28________%29.md): Creates a dynamic store key that can be used to access the per-service network configuration information.
- [SCDynamicStoreKeyCreateComputerName](scdynamicstorekeycreatecomputername%28__%29.md): Creates a key that can be used to receive notifications when the current computer name changes.
- [SCDynamicStoreKeyCreateConsoleUser](scdynamicstorekeycreateconsoleuser%28__%29.md): Creates a key that can be used to receive notifications when the current console user changes.
- [SCDynamicStoreKeyCreateHostNames](scdynamicstorekeycreatehostnames%28__%29.md): Creates a key that can be used to receive notifications when the `HostNames` entity changes.
- [SCDynamicStoreKeyCreateLocation](scdynamicstorekeycreatelocation%28__%29.md): Creates a key that can be used to receive notifications when the location identifier changes.
- [SCDynamicStoreKeyCreateProxies](scdynamicstorekeycreateproxies%28__%29.md): Creates a key that can be used to receive notifications when the current network proxy settings are changed.

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCNetwork](scnetwork.md)
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
