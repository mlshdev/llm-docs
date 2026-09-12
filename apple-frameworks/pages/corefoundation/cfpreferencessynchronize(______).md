> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencessynchronize(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencessynchronize(_:_:_:))

# CFPreferencesSynchronize(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

For the specified domain, writes all pending changes to preference data to permanent storage, and reads latest preference data from permanent storage.

## Declaration

```swift
func CFPreferencesSynchronize(_ applicationID: CFString, _ userName: CFString, _ hostName: CFString) -> Bool
```

## Parameters

- `applicationID`: The ID of the application whose preferences you wish to modify. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to modify the current user’s preferences, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to modify the preferences of all users.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

`true` if synchronization was successful, `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

This function is the primitive synchronize mechanism for the higher level preference function [CFPreferencesAppSynchronize(\_:)](cfpreferencesappsynchronize%28__%29.md); it writes updated preferences to permanent storage, and reads the latest preferences from permanent storage. Only the exact domain specified is modified. Note that to modify “Any User” preferences requires root privileges (or Admin privileges prior to OS X v10.7)—see [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995).

Do not use this function directly unless you have a specific need. All arguments must be non- `NULL`. Do not use arbitrary user and host names, instead pass the pre-defined constants.

## See Also

### Synchronizing Preferences

- [CFPreferencesAppSynchronize(\_:)](cfpreferencesappsynchronize%28__%29.md): Writes to permanent storage all pending changes to the preference data for the application, and reads the latest preference data from permanent storage.

# CFPreferencesSynchronize (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

For the specified domain, writes all pending changes to preference data to permanent storage, and reads latest preference data from permanent storage.

## Declaration

```objectivec
extern Boolean CFPreferencesSynchronize(CFStringRef applicationID, CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `applicationID`: The ID of the application whose preferences you wish to modify. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to modify the current user’s preferences, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to modify the preferences of all users.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

`true` if synchronization was successful, `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

This function is the primitive synchronize mechanism for the higher level preference function [CFPreferencesAppSynchronize](cfpreferencesappsynchronize%28__%29.md); it writes updated preferences to permanent storage, and reads the latest preferences from permanent storage. Only the exact domain specified is modified. Note that to modify “Any User” preferences requires root privileges (or Admin privileges prior to OS X v10.7)—see [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995).

Do not use this function directly unless you have a specific need. All arguments must be non- `NULL`. Do not use arbitrary user and host names, instead pass the pre-defined constants.

## See Also

### Synchronizing Preferences

- [CFPreferencesAppSynchronize](cfpreferencesappsynchronize%28__%29.md): Writes to permanent storage all pending changes to the preference data for the application, and reads the latest preference data from permanent storage.
