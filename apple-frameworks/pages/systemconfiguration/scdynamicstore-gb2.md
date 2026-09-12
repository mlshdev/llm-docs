> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstore-gb2](https://developer.apple.com/documentation/systemconfiguration/scdynamicstore-gb2)

# SCDynamicStore (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCDynamicStore` programming interface provides access to the key-value pairs in the dynamic store of a running system. The dynamic store contains, among other items, a copy of the configuration settings for the currently active set (which is sometimes refered to as the location) and information about the current network state.

The functions in the `SCDynamicStore` programming interface allow you to find key-value pairs, add or remove key-value pairs, add or change values, and request notifications. Note that these functions follow Core Foundation function-name conventions. A function that has “Create” or “Copy” in its name returns a reference you must release with the [CFRelease](../corefoundation/cfrelease.md) function.

To use these functions, you must first establish a dynamic store session using the [SCDynamicStoreCreate(\_:\_:\_:\_:)](scdynamicstorecreate%28________%29.md) function. When you are finished with the session, use `CFRelease` to close it.

## Topics

### Creating a Dynamic Store Session

- [SCDynamicStoreCreateWithOptions(\_:\_:\_:\_:\_:)](scdynamicstorecreatewithoptions%28__________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.
- [SCDynamicStoreCreate(\_:\_:\_:\_:)](scdynamicstorecreate%28________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue(\_:\_:\_:)](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreAddValue(\_:\_:\_:)](scdynamicstoreaddvalue%28______%29.md): Adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetMultiple(\_:\_:\_:\_:)](scdynamicstoresetmultiple%28________%29.md): Updates multiple values in the dynamic store.
- [SCDynamicStoreSetValue(\_:\_:\_:)](scdynamicstoresetvalue%28______%29.md): Adds or replaces a value in the dynamic store for the specified key.

### Getting Keys and Values

- [SCDynamicStoreCopyKeyList(\_:\_:)](scdynamicstorecopykeylist%28____%29.md): Returns the keys that represent the current dynamic store entries that match the specified pattern.
- [SCDynamicStoreCopyMultiple(\_:\_:\_:)](scdynamicstorecopymultiple%28______%29.md): Returns the key-value pairs that match the specified keys and key patterns.
- [SCDynamicStoreCopyNotifiedKeys(\_:)](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
- [SCDynamicStoreCopyValue(\_:\_:)](scdynamicstorecopyvalue%28____%29.md): Returns the value associated with the specified key.

### Monitoring Keys and Values

- [SCDynamicStoreNotifyValue(\_:\_:)](scdynamicstorenotifyvalue%28____%29.md): Causes a notification to be delivered for the specified key in the dynamic store.
- [SCDynamicStoreSetNotificationKeys(\_:\_:\_:)](scdynamicstoresetnotificationkeys%28______%29.md): Specifies a set of keys and key patterns that should be monitored for changes.
- [SCDynamicStoreSetDispatchQueue(\_:\_:)](scdynamicstoresetdispatchqueue%28____%29.md): Initiates notifications for the notification keys, using the specified dispatch queue for the callback.

### Removing Keys and Values

- [SCDynamicStoreRemoveValue(\_:\_:)](scdynamicstoreremovevalue%28____%29.md): Removes the value of the specified key from the dynamic store.

### Creating a Run Loop Source

- [SCDynamicStoreCreateRunLoopSource(\_:\_:\_:)](scdynamicstorecreaterunloopsource%28______%29.md): Creates a run loop source object that can be added to the application’s run loop.

### Getting Information About the Dynamic Store

- [SCDynamicStoreGetTypeID()](scdynamicstoregettypeid%28%29.md): Returns the type identifier of all `SCDynamicStore` instances.

### Data Types

- [SCDynamicStoreCallBack](scdynamicstorecallback.md): Callback used when notification of changes made to the dynamic store is delivered.
- [SCDynamicStoreContext](scdynamicstorecontext.md): Structure containing user-specified data and callbacks for a dynamic store session.
- [SCDynamicStore](scdynamicstore.md): The handle to an open dynamic store session with the system configuration daemon.

### Constants

- [Dynamic Store Options Keys](dynamic-store-options-keys.md): Keys that indicate the options for a dynamic store session.

## See Also

### Reference

- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
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

# SCDynamicStore (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCDynamicStore` programming interface provides access to the key-value pairs in the dynamic store of a running system. The dynamic store contains, among other items, a copy of the configuration settings for the currently active set (which is sometimes refered to as the location) and information about the current network state.

The functions in the `SCDynamicStore` programming interface allow you to find key-value pairs, add or remove key-value pairs, add or change values, and request notifications. Note that these functions follow Core Foundation function-name conventions. A function that has “Create” or “Copy” in its name returns a reference you must release with the [CFRelease](../corefoundation/cfrelease.md) function.

To use these functions, you must first establish a dynamic store session using the [SCDynamicStoreCreate](scdynamicstorecreate%28________%29.md) function. When you are finished with the session, use `CFRelease` to close it.

## Topics

### Creating a Dynamic Store Session

- [SCDynamicStoreCreateWithOptions](scdynamicstorecreatewithoptions%28__________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.
- [SCDynamicStoreCreate](scdynamicstorecreate%28________%29.md): Creates a new session used to interact with the dynamic store maintained by the System Configuration server.

### Adding or Updating Keys and Values

- [SCDynamicStoreAddTemporaryValue](scdynamicstoreaddtemporaryvalue%28______%29.md): Temporarily adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreAddValue](scdynamicstoreaddvalue%28______%29.md): Adds the specified key-value pair to the dynamic store, if no such key already exists.
- [SCDynamicStoreSetMultiple](scdynamicstoresetmultiple%28________%29.md): Updates multiple values in the dynamic store.
- [SCDynamicStoreSetValue](scdynamicstoresetvalue%28______%29.md): Adds or replaces a value in the dynamic store for the specified key.

### Getting Keys and Values

- [SCDynamicStoreCopyKeyList](scdynamicstorecopykeylist%28____%29.md): Returns the keys that represent the current dynamic store entries that match the specified pattern.
- [SCDynamicStoreCopyMultiple](scdynamicstorecopymultiple%28______%29.md): Returns the key-value pairs that match the specified keys and key patterns.
- [SCDynamicStoreCopyNotifiedKeys](scdynamicstorecopynotifiedkeys%28__%29.md): Returns the keys that have changed since the last call to this function.
- [SCDynamicStoreCopyValue](scdynamicstorecopyvalue%28____%29.md): Returns the value associated with the specified key.

### Monitoring Keys and Values

- [SCDynamicStoreNotifyValue](scdynamicstorenotifyvalue%28____%29.md): Causes a notification to be delivered for the specified key in the dynamic store.
- [SCDynamicStoreSetNotificationKeys](scdynamicstoresetnotificationkeys%28______%29.md): Specifies a set of keys and key patterns that should be monitored for changes.
- [SCDynamicStoreSetDispatchQueue](scdynamicstoresetdispatchqueue%28____%29.md): Initiates notifications for the notification keys, using the specified dispatch queue for the callback.

### Removing Keys and Values

- [SCDynamicStoreRemoveValue](scdynamicstoreremovevalue%28____%29.md): Removes the value of the specified key from the dynamic store.

### Creating a Run Loop Source

- [SCDynamicStoreCreateRunLoopSource](scdynamicstorecreaterunloopsource%28______%29.md): Creates a run loop source object that can be added to the application’s run loop.

### Getting Information About the Dynamic Store

- [SCDynamicStoreGetTypeID](scdynamicstoregettypeid%28%29.md): Returns the type identifier of all `SCDynamicStore` instances.

### Data Types

- [SCDynamicStoreCallBack](scdynamicstorecallback.md): Callback used when notification of changes made to the dynamic store is delivered.
- [SCDynamicStoreContext](scdynamicstorecontext.md): Structure containing user-specified data and callbacks for a dynamic store session.
- [SCDynamicStoreRef](scdynamicstore.md): The handle to an open dynamic store session with the system configuration daemon.

### Constants

- [Dynamic Store Options Keys](dynamic-store-options-keys.md): Keys that indicate the options for a dynamic store session.

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
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
