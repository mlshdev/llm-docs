> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/preferences-utilities](https://developer.apple.com/documentation/corefoundation/preferences-utilities)

# Preferences Utilities (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

Several functions return a preference value as a Core Foundation property list object.

You can use the function [CFGetTypeID(\_:)](cfgettypeid%28__%29.md) to determine the value’s type. For more information about property lists, see [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i).

<a id="Overview"></a>

### Overview

Core Foundation provides a simple, standard way to manage user (and application) preferences. Core Foundation stores preferences as key-value pairs that are assigned a scope using a combination of user name, application ID, and host (computer) names. This makes it possible to save and retrieve preferences that apply to different classes of users. Core Foundation preferences is useful to all applications that support user preferences. Note that modification of some preferences domains (those not belonging to the “Current User”) requires root privileges (or Admin privileges prior to OS X v10.6)—see [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995) for information on how to gain suitable privileges.

Unlike some other Core Foundation types, CFPreferences is not toll-free bridged to its corresponding Cocoa Foundation framework class (`NSUserDefaults`). CFPreferences is thread-safe.

## Topics

### Getting Preference Values

- [CFPreferencesCopyAppValue(\_:\_:)](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList(\_:\_:\_:)](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple(\_:\_:\_:\_:)](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue(\_:\_:\_:\_:)](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue(\_:\_:\_:)](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue(\_:\_:\_:)](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.

### Setting Preference Values

- [CFPreferencesSetAppValue(\_:\_:\_:)](cfpreferencessetappvalue%28______%29.md): Adds, modifies, or removes a preference.
- [CFPreferencesSetMultiple(\_:\_:\_:\_:\_:)](cfpreferencessetmultiple%28__________%29.md): Convenience function that allows you to set and remove multiple preference values.
- [CFPreferencesSetValue(\_:\_:\_:\_:\_:)](cfpreferencessetvalue%28__________%29.md): Adds, modifies, or removes a preference value for the specified domain.

### Synchronizing Preferences

- [CFPreferencesAppSynchronize(\_:)](cfpreferencesappsynchronize%28__%29.md): Writes to permanent storage all pending changes to the preference data for the application, and reads the latest preference data from permanent storage.
- [CFPreferencesSynchronize(\_:\_:\_:)](cfpreferencessynchronize%28______%29.md): For the specified domain, writes all pending changes to preference data to permanent storage, and reads latest preference data from permanent storage.

### Adding and Removing Suite Preferences

- [CFPreferencesAddSuitePreferencesToApp(\_:\_:)](cfpreferencesaddsuitepreferencestoapp%28____%29.md): Adds suite preferences to an application’s preference search chain.
- [CFPreferencesRemoveSuitePreferencesFromApp(\_:\_:)](cfpreferencesremovesuitepreferencesfromapp%28____%29.md): Removes suite preferences from an application’s search chain.

### Miscellaneous Functions

- [CFPreferencesAppValueIsForced(\_:\_:)](cfpreferencesappvalueisforced%28____%29.md): Determines whether or not a given key has been imposed on the user.
- [CFPreferencesCopyApplicationList(\_:\_:)](cfpreferencescopyapplicationlist%28____%29.md): Deprecated. Constructs and returns the list of all applications that have preferences in the scope of the specified user and host.

### Constants

- [Application, Host, and User Keys](application-host-and-user-keys.md): Keys used to specify the common preference domains.

## See Also

### Related Documentation

- [Preferences Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPreferences/CFPreferences.html#//apple_ref/doc/uid/10000129i)

### Utilities

- [Base Utilities](base-utilities.md)
- [Byte-Order Utilities](byte-order-utilities.md)
- [Core Foundation URL Access Utilities](core-foundation-url-access-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
- [Time Utilities](time-utilities.md)

# Preferences Utilities (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

Several functions return a preference value as a Core Foundation property list object.

You can use the function [CFGetTypeID](cfgettypeid%28__%29.md) to determine the value’s type. For more information about property lists, see [Property List Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPropertyLists/CFPropertyLists.html#//apple_ref/doc/uid/10000130i).

<a id="Overview"></a>

### Overview

Core Foundation provides a simple, standard way to manage user (and application) preferences. Core Foundation stores preferences as key-value pairs that are assigned a scope using a combination of user name, application ID, and host (computer) names. This makes it possible to save and retrieve preferences that apply to different classes of users. Core Foundation preferences is useful to all applications that support user preferences. Note that modification of some preferences domains (those not belonging to the “Current User”) requires root privileges (or Admin privileges prior to OS X v10.6)—see [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995) for information on how to gain suitable privileges.

Unlike some other Core Foundation types, CFPreferences is not toll-free bridged to its corresponding Cocoa Foundation framework class (`NSUserDefaults`). CFPreferences is thread-safe.

## Topics

### Getting Preference Values

- [CFPreferencesCopyAppValue](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.

### Setting Preference Values

- [CFPreferencesSetAppValue](cfpreferencessetappvalue%28______%29.md): Adds, modifies, or removes a preference.
- [CFPreferencesSetMultiple](cfpreferencessetmultiple%28__________%29.md): Convenience function that allows you to set and remove multiple preference values.
- [CFPreferencesSetValue](cfpreferencessetvalue%28__________%29.md): Adds, modifies, or removes a preference value for the specified domain.

### Synchronizing Preferences

- [CFPreferencesAppSynchronize](cfpreferencesappsynchronize%28__%29.md): Writes to permanent storage all pending changes to the preference data for the application, and reads the latest preference data from permanent storage.
- [CFPreferencesSynchronize](cfpreferencessynchronize%28______%29.md): For the specified domain, writes all pending changes to preference data to permanent storage, and reads latest preference data from permanent storage.

### Adding and Removing Suite Preferences

- [CFPreferencesAddSuitePreferencesToApp](cfpreferencesaddsuitepreferencestoapp%28____%29.md): Adds suite preferences to an application’s preference search chain.
- [CFPreferencesRemoveSuitePreferencesFromApp](cfpreferencesremovesuitepreferencesfromapp%28____%29.md): Removes suite preferences from an application’s search chain.

### Miscellaneous Functions

- [CFPreferencesAppValueIsForced](cfpreferencesappvalueisforced%28____%29.md): Determines whether or not a given key has been imposed on the user.
- [CFPreferencesCopyApplicationList](cfpreferencescopyapplicationlist%28____%29.md): Deprecated. Constructs and returns the list of all applications that have preferences in the scope of the specified user and host.

### Constants

- [Application, Host, and User Keys](application-host-and-user-keys.md): Keys used to specify the common preference domains.

## See Also

### Related Documentation

- [Preferences Programming Topics for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFPreferences/CFPreferences.html#//apple_ref/doc/uid/10000129i)

### Utilities

- [Base Utilities](base-utilities.md)
- [Byte-Order Utilities](byte-order-utilities.md)
- [Core Foundation URL Access Utilities](core-foundation-url-access-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
- [Time Utilities](time-utilities.md)
