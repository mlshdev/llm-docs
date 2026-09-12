> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnection-g7e](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnection-g7e)

# SCNetworkConnection (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCNetworkConnection` programming interface contains functions that allow an application to control connection-oriented services defined in the system and get connection-status information. Note that these functions allow you to control and get information about existing services only. If you need to create, change, or remove services, you should use the `SCNetworkConfiguration` programming interface instead.

> **Note**

>  Currently, only PPP services can be controlled.

## Topics

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID(\_:)](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus(\_:)](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus(\_:)](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics(\_:)](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions(\_:)](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

### Starting and Stopping a Connection

- [SCNetworkConnectionStart(\_:\_:\_:)](scnetworkconnectionstart%28______%29.md): Starts the connection process for the specified network connection.
- [SCNetworkConnectionStop(\_:\_:)](scnetworkconnectionstop%28____%29.md): Stops the connection process for the specified network connection.

### Scheduling a Connection Reference on a Run Loop

- [SCNetworkConnectionScheduleWithRunLoop(\_:\_:\_:)](scnetworkconnectionschedulewithrunloop%28______%29.md): Schedules the specified connection with the specified run loop.
- [SCNetworkConnectionUnscheduleFromRunLoop(\_:\_:\_:)](scnetworkconnectionunschedulefromrunloop%28______%29.md): Unschedules the specified connection from the specified run loop.

### Creating a Connection Reference

- [SCNetworkConnectionCreateWithServiceID(\_:\_:\_:\_:)](scnetworkconnectioncreatewithserviceid%28________%29.md): Creates a new connection reference to use for getting the status or for connecting or disconnecting the associated service.

### Specifying a Dispatch Queue and Enabling Notifications

- [SCNetworkConnectionSetDispatchQueue(\_:\_:)](scnetworkconnectionsetdispatchqueue%28____%29.md): Specifies a dispatch queue to use for the connection’s callback function and enables notifications.

### Data Types

- [SCNetworkConnection](scnetworkconnection.md): The handle to manage a connection-oriented service.
- [SCNetworkConnectionCallBack](scnetworkconnectioncallback.md): The type of callback function used when a status event is delivered.
- [SCNetworkConnectionContext](scnetworkconnectioncontext.md): A structure containing user-specified data and callbacks for a network connection.

### Constants

- [SCNetworkConnectionStatus](scnetworkconnectionstatus.md): The current status of the network connection.
- [SCNetworkConnectionPPPStatus](scnetworkconnectionpppstatus.md): The PPP-specific status of the network connection.
- [Statistics Dictionary Keys](statistics-dictionary-keys.md): Keys associated with values in the statistics dictionary.
- [Selection Options Dictionary Keys](selection-options-dictionary-keys.md): Keys used with the [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md) selection options dictionary.

## See Also

### Reference

- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetwork](scnetwork.md)
- [SCNetworkConfiguration](scnetworkconfiguration.md)
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

# SCNetworkConnection (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCNetworkConnection` programming interface contains functions that allow an application to control connection-oriented services defined in the system and get connection-status information. Note that these functions allow you to control and get information about existing services only. If you need to create, change, or remove services, you should use the `SCNetworkConfiguration` programming interface instead.

> **Note**

>  Currently, only PPP services can be controlled.

## Topics

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

### Starting and Stopping a Connection

- [SCNetworkConnectionStart](scnetworkconnectionstart%28______%29.md): Starts the connection process for the specified network connection.
- [SCNetworkConnectionStop](scnetworkconnectionstop%28____%29.md): Stops the connection process for the specified network connection.

### Scheduling a Connection Reference on a Run Loop

- [SCNetworkConnectionScheduleWithRunLoop](scnetworkconnectionschedulewithrunloop%28______%29.md): Schedules the specified connection with the specified run loop.
- [SCNetworkConnectionUnscheduleFromRunLoop](scnetworkconnectionunschedulefromrunloop%28______%29.md): Unschedules the specified connection from the specified run loop.

### Creating a Connection Reference

- [SCNetworkConnectionCreateWithServiceID](scnetworkconnectioncreatewithserviceid%28________%29.md): Creates a new connection reference to use for getting the status or for connecting or disconnecting the associated service.

### Specifying a Dispatch Queue and Enabling Notifications

- [SCNetworkConnectionSetDispatchQueue](scnetworkconnectionsetdispatchqueue%28____%29.md): Specifies a dispatch queue to use for the connection’s callback function and enables notifications.

### Data Types

- [SCNetworkConnectionRef](scnetworkconnection.md): The handle to manage a connection-oriented service.
- [SCNetworkConnectionCallBack](scnetworkconnectioncallback.md): The type of callback function used when a status event is delivered.
- [SCNetworkConnectionContext](scnetworkconnectioncontext.md): A structure containing user-specified data and callbacks for a network connection.

### Constants

- [SCNetworkConnectionStatus](scnetworkconnectionstatus.md): The current status of the network connection.
- [SCNetworkConnectionPPPStatus](scnetworkconnectionpppstatus.md): The PPP-specific status of the network connection.
- [Statistics Dictionary Keys](statistics-dictionary-keys.md): Keys associated with values in the statistics dictionary.
- [Selection Options Dictionary Keys](selection-options-dictionary-keys.md): Keys used with the [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md) selection options dictionary.

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetwork](scnetwork.md)
- [SCNetworkConfiguration](scnetworkconfiguration.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferences](scpreferences-ft8.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
