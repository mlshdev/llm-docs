> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/keychains](https://developer.apple.com/documentation/security/keychains)

# Keychains (Swift)

**Framework:** Security  
**Kind:** API Collection

Create and manage entire keychains in macOS.

<a id="overview"></a>

## Overview

In iOS, apps have access to a single keychain (which logically encompasses the iCloud keychain). This keychain is automatically unlocked when the user unlocks the device and then locked when the device is locked. An app can access only its own keychain items, or those shared with a group to which the app belongs. It can’t manage the keychain container itself.

In macOS, however, the system supports an arbitrary number of keychains. You typically rely on the user to manage these with the Keychain Access app and work implicitly with the default keychain, much as you would in iOS. Nevertheless, the keychain services API does provide functions that you can use to manipulate keychains directly. For example, you can create and manage a keychain that is private to your app. On the other hand, robust access control mechanisms typically make this unnecessary for anything other than an app trying to replicate the keychain access utility.

## Topics

### Creation and Deletion

- [SecKeychainCreate(\_:\_:\_:\_:\_:\_:)](seckeychaincreate%28____________%29.md): Deprecated. Creates an empty keychain.
- [SecKeychainDelete(\_:)](seckeychaindelete%28__%29.md): Deprecated. Deletes one or more keychains from the default keychain search list, and removes the keychain itself if it is a file.
- [SecKeychain](seckeychain.md): An opaque type that represents a keychain.
- [SecKeychainGetTypeID()](seckeychaingettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a keychain object belongs.

### Locking and Unlocking

- [SecKeychainLock(\_:)](seckeychainlock%28__%29.md): Deprecated. Locks a keychain.
- [SecKeychainLockAll()](seckeychainlockall%28%29.md): Deprecated. Locks all keychains belonging to the current user.
- [SecKeychainUnlock(\_:\_:\_:\_:)](seckeychainunlock%28________%29.md): Deprecated. Unlocks a keychain.

### Settings

- [SecKeychainSetSettings(\_:\_:)](seckeychainsetsettings%28____%29.md): Deprecated. Changes the settings of a keychain.
- [SecKeychainCopySettings(\_:\_:)](seckeychaincopysettings%28____%29.md): Deprecated. Obtains a keychain’s settings.
- [SecKeychainSettings](seckeychainsettings.md): A structure that contains information about keychain settings.
- [SEC_KEYCHAIN_SETTINGS_VERS1](sec_keychain_settings_vers1.md): Defines the keychain settings version.

### Keychain Management

- [SecKeychainGetVersion(\_:)](seckeychaingetversion%28__%29.md): Deprecated. Determines the version of keychain services installed on the user’s system.
- [SecKeychainOpen(\_:\_:)](seckeychainopen%28____%29.md): Deprecated. Opens a keychain.
- [SecKeychainSetDefault(\_:)](seckeychainsetdefault%28__%29.md): Deprecated. Sets the default keychain.
- [SecKeychainCopyDefault(\_:)](seckeychaincopydefault%28__%29.md): Deprecated. Retrieves a pointer to the default keychain.
- [SecKeychainGetPath(\_:\_:\_:)](seckeychaingetpath%28______%29.md): Deprecated. Determines the path of a keychain.
- [SecKeychainGetStatus(\_:\_:)](seckeychaingetstatus%28____%29.md): Deprecated. Retrieves status information of a keychain.
- [SecKeychainStatus](seckeychainstatus.md): A value that defines the current status of a keychain.
- [SecKeychainStatus Values](seckeychainstatus-values.md): Valid values for the keychain status type.

### Search

- [SecKeychainSetSearchList(\_:)](seckeychainsetsearchlist%28__%29.md): Deprecated. Specifies the list of keychains to use in the default keychain search list.
- [SecKeychainCopySearchList(\_:)](seckeychaincopysearchlist%28__%29.md): Deprecated. Retrieves a keychain search list.
- [SecKeychainSearch](seckeychainsearch.md): An opaque type that contains information about a keychain search.

### User Interaction

- [SecKeychainSetUserInteractionAllowed(\_:)](seckeychainsetuserinteractionallowed%28__%29.md): Deprecated. Enables or disables the user interface for keychain services functions that automatically display a user interface.
- [SecKeychainGetUserInteractionAllowed(\_:)](seckeychaingetuserinteractionallowed%28__%29.md): Deprecated. Indicates whether keychain services functions that normally display a user interaction are allowed to do so.

### Callbacks

- [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md): Deprecated. Registers your keychain event callback function.
- [SecKeychainRemoveCallback(\_:)](seckeychainremovecallback%28__%29.md): Deprecated. Unregisters your keychain event callback function.
- [SecKeychainCallback](seckeychaincallback.md): Deprecated. A customized callback function that keychain services call when a keychain event has occurred.
- [SecKeychainCallbackInfo](seckeychaincallbackinfo.md): Information about a keychain event that keychain services deliver to your app via a callback function.
- [SecKeychainEvent](seckeychainevent.md): The list of keychain events that can trigger a callback.
- [SecKeychainEventMask](seckeychaineventmask.md): Bit masks corresponding to the events that can trigger a keychain callback.

### Preference Domains

- [SecKeychainGetPreferenceDomain(\_:)](seckeychaingetpreferencedomain%28__%29.md): Deprecated. Gets the current keychain preference domain.
- [SecKeychainSetPreferenceDomain(\_:)](seckeychainsetpreferencedomain%28__%29.md): Deprecated. Sets the keychain preference domain.
- [SecKeychainCopyDomainDefault(\_:\_:)](seckeychaincopydomaindefault%28____%29.md): Deprecated. Retrieves the default keychain from a specified preference domain.
- [SecKeychainSetDomainDefault(\_:\_:)](seckeychainsetdomaindefault%28____%29.md): Deprecated. Sets the default keychain for a specified preference domain.
- [SecKeychainCopyDomainSearchList(\_:\_:)](seckeychaincopydomainsearchlist%28____%29.md): Deprecated. Retrieves the keychain search list for a specified preference domain.
- [SecKeychainSetDomainSearchList(\_:\_:)](seckeychainsetdomainsearchlist%28____%29.md): Deprecated. Sets the keychain search list for a specified preference domain.
- [SecPreferencesDomain](secpreferencesdomain.md): The keychain preference domains.

### Access

- [SecKeychainSetAccess(\_:\_:)](seckeychainsetaccess%28____%29.md): Deprecated. Sets the application access for a keychain.
- [SecKeychainCopyAccess(\_:\_:)](seckeychaincopyaccess%28____%29.md): Deprecated. Retrieves the application access of a keychain.

# Keychains (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Create and manage entire keychains in macOS.

<a id="overview"></a>

## Overview

In iOS, apps have access to a single keychain (which logically encompasses the iCloud keychain). This keychain is automatically unlocked when the user unlocks the device and then locked when the device is locked. An app can access only its own keychain items, or those shared with a group to which the app belongs. It can’t manage the keychain container itself.

In macOS, however, the system supports an arbitrary number of keychains. You typically rely on the user to manage these with the Keychain Access app and work implicitly with the default keychain, much as you would in iOS. Nevertheless, the keychain services API does provide functions that you can use to manipulate keychains directly. For example, you can create and manage a keychain that is private to your app. On the other hand, robust access control mechanisms typically make this unnecessary for anything other than an app trying to replicate the keychain access utility.

## Topics

### Creation and Deletion

- [SecKeychainCreate](seckeychaincreate%28____________%29.md): Deprecated. Creates an empty keychain.
- [SecKeychainDelete](seckeychaindelete%28__%29.md): Deprecated. Deletes one or more keychains from the default keychain search list, and removes the keychain itself if it is a file.
- [SecKeychainRef](seckeychain.md): An opaque type that represents a keychain.
- [SecKeychainGetTypeID](seckeychaingettypeid%28%29.md): Deprecated. Returns the unique identifier of the opaque type to which a keychain object belongs.

### Locking and Unlocking

- [SecKeychainLock](seckeychainlock%28__%29.md): Deprecated. Locks a keychain.
- [SecKeychainLockAll](seckeychainlockall%28%29.md): Deprecated. Locks all keychains belonging to the current user.
- [SecKeychainUnlock](seckeychainunlock%28________%29.md): Deprecated. Unlocks a keychain.

### Settings

- [SecKeychainSetSettings](seckeychainsetsettings%28____%29.md): Deprecated. Changes the settings of a keychain.
- [SecKeychainCopySettings](seckeychaincopysettings%28____%29.md): Deprecated. Obtains a keychain’s settings.
- [SecKeychainSettings](seckeychainsettings.md): A structure that contains information about keychain settings.
- [SEC_KEYCHAIN_SETTINGS_VERS1](sec_keychain_settings_vers1.md): Defines the keychain settings version.

### Keychain Management

- [SecKeychainGetVersion](seckeychaingetversion%28__%29.md): Deprecated. Determines the version of keychain services installed on the user’s system.
- [SecKeychainOpen](seckeychainopen%28____%29.md): Deprecated. Opens a keychain.
- [SecKeychainSetDefault](seckeychainsetdefault%28__%29.md): Deprecated. Sets the default keychain.
- [SecKeychainCopyDefault](seckeychaincopydefault%28__%29.md): Deprecated. Retrieves a pointer to the default keychain.
- [SecKeychainGetPath](seckeychaingetpath%28______%29.md): Deprecated. Determines the path of a keychain.
- [SecKeychainGetStatus](seckeychaingetstatus%28____%29.md): Deprecated. Retrieves status information of a keychain.
- [SecKeychainStatus](seckeychainstatus.md): A value that defines the current status of a keychain.
- [SecKeychainStatus Values](seckeychainstatus-values.md): Valid values for the keychain status type.

### Search

- [SecKeychainSetSearchList](seckeychainsetsearchlist%28__%29.md): Deprecated. Specifies the list of keychains to use in the default keychain search list.
- [SecKeychainCopySearchList](seckeychaincopysearchlist%28__%29.md): Deprecated. Retrieves a keychain search list.
- [SecKeychainSearchRef](seckeychainsearch.md): An opaque type that contains information about a keychain search.
- [SecKeychainSearchGetTypeID](seckeychainsearchgettypeid.md): Deprecated. Returns the unique identifier of the opaque type to which a keychain search object belongs.
- [SecKeychainSearchCreateFromAttributes](seckeychainsearchcreatefromattributes.md): Deprecated. Creates a search object matching a list of zero or more attributes.
- [SecKeychainSearchCopyNext](seckeychainsearchcopynext.md): Deprecated. Finds the next keychain item matching the given search criteria.

### User Interaction

- [SecKeychainSetUserInteractionAllowed](seckeychainsetuserinteractionallowed%28__%29.md): Deprecated. Enables or disables the user interface for keychain services functions that automatically display a user interface.
- [SecKeychainGetUserInteractionAllowed](seckeychaingetuserinteractionallowed%28__%29.md): Deprecated. Indicates whether keychain services functions that normally display a user interaction are allowed to do so.

### Callbacks

- [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md): Deprecated. Registers your keychain event callback function.
- [SecKeychainRemoveCallback](seckeychainremovecallback%28__%29.md): Deprecated. Unregisters your keychain event callback function.
- [SecKeychainCallback](seckeychaincallback.md): Deprecated. A customized callback function that keychain services call when a keychain event has occurred.
- [SecKeychainCallbackInfo](seckeychaincallbackinfo.md): Information about a keychain event that keychain services deliver to your app via a callback function.
- [SecKeychainEvent](seckeychainevent.md): The list of keychain events that can trigger a callback.
- [SecKeychainEventMask](seckeychaineventmask.md): Bit masks corresponding to the events that can trigger a keychain callback.

### Preference Domains

- [SecKeychainGetPreferenceDomain](seckeychaingetpreferencedomain%28__%29.md): Deprecated. Gets the current keychain preference domain.
- [SecKeychainSetPreferenceDomain](seckeychainsetpreferencedomain%28__%29.md): Deprecated. Sets the keychain preference domain.
- [SecKeychainCopyDomainDefault](seckeychaincopydomaindefault%28____%29.md): Deprecated. Retrieves the default keychain from a specified preference domain.
- [SecKeychainSetDomainDefault](seckeychainsetdomaindefault%28____%29.md): Deprecated. Sets the default keychain for a specified preference domain.
- [SecKeychainCopyDomainSearchList](seckeychaincopydomainsearchlist%28____%29.md): Deprecated. Retrieves the keychain search list for a specified preference domain.
- [SecKeychainSetDomainSearchList](seckeychainsetdomainsearchlist%28____%29.md): Deprecated. Sets the keychain search list for a specified preference domain.
- [SecPreferencesDomain](secpreferencesdomain.md): The keychain preference domains.

### Access

- [SecKeychainSetAccess](seckeychainsetaccess%28____%29.md): Deprecated. Sets the application access for a keychain.
- [SecKeychainCopyAccess](seckeychaincopyaccess%28____%29.md): Deprecated. Retrieves the application access of a keychain.

### Legacy Symbols

- [SecKeychainGetCSPHandle](seckeychaingetcsphandle.md): Deprecated. Returns the CSSM CSP handle for the given keychain object.
- [SecKeychainGetDLDBHandle](seckeychaingetdldbhandle.md): Deprecated. Returns the CSSM database handle for a given keychain object.
- [SecKeychainItemGetDLDBHandle](seckeychainitemgetdldbhandle.md): Deprecated. Returns the CSSM database handle for a given keychain item object.
- [SecKeychainItemGetUniqueRecordID](seckeychainitemgetuniquerecordid.md): Deprecated. Returns a CSSM unique record for the given keychain item object.
