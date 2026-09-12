> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecopyspecific](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecopyspecific)

# SCDynamicStoreCopySpecific (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The functions of the `SCDynamicStoreCopySpecific` programming interface allow an application to determine specific configuration information about the current system (for example, the computer or sharing name or the currently logged-in user). Note that these functions follow Core Foundation function-name conventions. A function that has “Create” or “Copy” in its name returns a reference you must release with the [CFRelease](../corefoundation/cfrelease.md) function.

## Topics

### Group

- [SCDynamicStoreCopyComputerName(\_:\_:)](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyConsoleUser(\_:\_:\_:)](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocalHostName(\_:)](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyLocation(\_:)](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies(\_:)](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.

## See Also

### Reference

- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
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

# SCDynamicStoreCopySpecific (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The functions of the `SCDynamicStoreCopySpecific` programming interface allow an application to determine specific configuration information about the current system (for example, the computer or sharing name or the currently logged-in user). Note that these functions follow Core Foundation function-name conventions. A function that has “Create” or “Copy” in its name returns a reference you must release with the [CFRelease](../corefoundation/cfrelease.md) function.

## Topics

### Group

- [SCDynamicStoreCopyComputerName](scdynamicstorecopycomputername%28____%29.md): Returns the current computer name.
- [SCDynamicStoreCopyConsoleUser](scdynamicstorecopyconsoleuser%28______%29.md): Returns information about the user currently logged into the system.
- [SCDynamicStoreCopyLocalHostName](scdynamicstorecopylocalhostname%28__%29.md): Returns the current local host name.
- [SCDynamicStoreCopyLocation](scdynamicstorecopylocation%28__%29.md): Returns the current location identifier.
- [SCDynamicStoreCopyProxies](scdynamicstorecopyproxies%28__%29.md): Returns the key-value pairs that represent the current internet proxy settings.

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
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
