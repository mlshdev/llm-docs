> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferences-ft8](https://developer.apple.com/documentation/systemconfiguration/scpreferences-ft8)

# SCPreferences (Swift)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCPreferences` programming interface allows an application to load and store XML configuration data in a controlled manner and provide the necessary notifications to other applications that need to be aware of configuration changes.

To access configuration preferences, you must first establish a preferences session using the [SCPreferencesCreate(\_:\_:\_:)](scpreferencescreate%28______%29.md) function. To identify a specific set of preferences to access, you pass a value in the prefsID parameter. A `NULL` value indicates that the default system preferences are to be accessed. A string that starts with a leading “/” character specifies the absolute path to the file containing the preferences to be accessed. A string that does not start with a leading “/” character specifies a file relative to the default system preferences directory.

When you are finished with the preferences session, use the [CFRelease](../corefoundation/cfrelease.md) function to release it.

## Topics

### Creating a Preferences Session

- [SCPreferencesCreate(\_:\_:\_:)](scpreferencescreate%28______%29.md): Initiates access to the per-system set of configuration preferences.
- [SCPreferencesCreateWithAuthorization(\_:\_:\_:\_:)](scpreferencescreatewithauthorization%28________%29.md): Initiates access to the per-system set of configuration preferences with the specified authorization.

### Getting Information About a Preferences Session

- [SCPreferencesGetTypeID()](scpreferencesgettypeid%28%29.md): Returns the type identifier of all `SCPreferences` instances.
- [SCPreferencesCopyKeyList(\_:)](scpreferencescopykeylist%28__%29.md): Returns the currently defined preference keys.
- [SCPreferencesGetSignature(\_:)](scpreferencesgetsignature%28__%29.md): Returns a value that can be used to determine if the saved configuration preferences have changed.

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue(\_:\_:\_:)](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesGetValue(\_:\_:)](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesSetValue(\_:\_:\_:)](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
- [SCPreferencesRemoveValue(\_:\_:)](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.

### Applying and Committing Changes

- [SCPreferencesApplyChanges(\_:)](scpreferencesapplychanges%28__%29.md): Requests that the currently stored configuration preferences be applied to the active configuration.
- [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md): Commits changes made to the configuration preferences to persistent storage.
- [SCPreferencesSynchronize(\_:)](scpreferencessynchronize%28__%29.md): Synchronizes accessed preferences with committed changes.

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback(\_:\_:\_:)](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesScheduleWithRunLoop(\_:\_:\_:)](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesUnscheduleFromRunLoop(\_:\_:\_:)](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
- [SCPreferencesSetDispatchQueue(\_:\_:)](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

### Managing Access to a Preferences Session

- [SCPreferencesLock(\_:\_:)](scpreferenceslock%28____%29.md): Locks access to the configuration preferences.
- [SCPreferencesUnlock(\_:)](scpreferencesunlock%28__%29.md): Releases exclusive access to the configuration preferences.

### Data Types

- [SCPreferences](scpreferences.md): The handle to an open preferences session for accessing system configuration preferences.
- [SCPreferencesContext](scpreferencescontext.md): A structure containing user-specified data and callbacks for accessing system configuration preferences.
- [SCPreferencesCallBack](scpreferencescallback.md): Type of the callback function used when the preferences have been updated or applied.

### Constants

- [SCPreferencesNotification](scpreferencesnotification.md): The type of notification (used with the [SCPreferencesCallBack](scpreferencescallback.md) callback).

## See Also

### Reference

- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetwork](scnetwork.md)
- [SCNetworkConfiguration](scnetworkconfiguration.md)
- [SCNetworkConnection](scnetworkconnection-g7e.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
- [SystemConfiguration Functions](systemconfiguration-functions.md)
- [SystemConfiguration Data Types](systemconfiguration-data-types.md)

# SCPreferences (Objective-C)

**Framework:** System Configuration  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

The `SCPreferences` programming interface allows an application to load and store XML configuration data in a controlled manner and provide the necessary notifications to other applications that need to be aware of configuration changes.

To access configuration preferences, you must first establish a preferences session using the [SCPreferencesCreate](scpreferencescreate%28______%29.md) function. To identify a specific set of preferences to access, you pass a value in the prefsID parameter. A `NULL` value indicates that the default system preferences are to be accessed. A string that starts with a leading “/” character specifies the absolute path to the file containing the preferences to be accessed. A string that does not start with a leading “/” character specifies a file relative to the default system preferences directory.

When you are finished with the preferences session, use the [CFRelease](../corefoundation/cfrelease.md) function to release it.

## Topics

### Creating a Preferences Session

- [SCPreferencesCreate](scpreferencescreate%28______%29.md): Initiates access to the per-system set of configuration preferences.
- [SCPreferencesCreateWithAuthorization](scpreferencescreatewithauthorization%28________%29.md): Initiates access to the per-system set of configuration preferences with the specified authorization.

### Getting Information About a Preferences Session

- [SCPreferencesGetTypeID](scpreferencesgettypeid%28%29.md): Returns the type identifier of all `SCPreferences` instances.
- [SCPreferencesCopyKeyList](scpreferencescopykeylist%28__%29.md): Returns the currently defined preference keys.
- [SCPreferencesGetSignature](scpreferencesgetsignature%28__%29.md): Returns a value that can be used to determine if the saved configuration preferences have changed.

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesGetValue](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesSetValue](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
- [SCPreferencesRemoveValue](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.

### Applying and Committing Changes

- [SCPreferencesApplyChanges](scpreferencesapplychanges%28__%29.md): Requests that the currently stored configuration preferences be applied to the active configuration.
- [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md): Commits changes made to the configuration preferences to persistent storage.
- [SCPreferencesSynchronize](scpreferencessynchronize%28__%29.md): Synchronizes accessed preferences with committed changes.

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesScheduleWithRunLoop](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesUnscheduleFromRunLoop](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
- [SCPreferencesSetDispatchQueue](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

### Managing Access to a Preferences Session

- [SCPreferencesLock](scpreferenceslock%28____%29.md): Locks access to the configuration preferences.
- [SCPreferencesUnlock](scpreferencesunlock%28__%29.md): Releases exclusive access to the configuration preferences.

### Data Types

- [SCPreferencesRef](scpreferences.md): The handle to an open preferences session for accessing system configuration preferences.
- [SCPreferencesContext](scpreferencescontext.md): A structure containing user-specified data and callbacks for accessing system configuration preferences.
- [SCPreferencesCallBack](scpreferencescallback.md): Type of the callback function used when the preferences have been updated or applied.

### Constants

- [SCPreferencesNotification](scpreferencesnotification.md): The type of notification (used with the [SCPreferencesCallBack](scpreferencescallback.md) callback).

## See Also

### Reference

- [DHCPClientPreferences](dhcpclientpreferences.md)
- [SCDynamicStore](scdynamicstore-gb2.md)
- [SCDynamicStoreCopyDHCPInfo](scdynamicstorecopydhcpinfo-apicollection.md)
- [SCDynamicStoreCopySpecific](scdynamicstorecopyspecific.md)
- [SCDynamicStoreKey](scdynamicstorekey.md)
- [SCNetwork](scnetwork.md)
- [SCNetworkConfiguration](scnetworkconfiguration.md)
- [SCNetworkConnection](scnetworkconnection-g7e.md)
- [SCNetworkReachability](scnetworkreachability-g7d.md)
- [SCPreferencesPath](scpreferencespath.md)
- [SCPreferencesSetSpecific](scpreferencessetspecific.md)
- [SCSchemaDefinitions](scschemadefinitions.md)
- [System Configuration](system-configuration.md)
- [SystemConfiguration Enumerations](systemconfiguration-enumerations.md)
- [SystemConfiguration Constants](systemconfiguration-constants.md)
