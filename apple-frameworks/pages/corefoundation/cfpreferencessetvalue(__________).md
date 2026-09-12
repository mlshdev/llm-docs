> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencessetvalue(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencessetvalue(_:_:_:_:_:))

# CFPreferencesSetValue(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds, modifies, or removes a preference value for the specified domain.

## Declaration

```swift
func CFPreferencesSetValue(_ key: CFString, _ value: CFPropertyList?, _ applicationID: CFString, _ userName: CFString, _ hostName: CFString)
```

## Parameters

- `key`: Preferences key for the value you wish to set.
- `value`: The value to set for `key` and application. Pass `NULL` to remove `key` from the domain.
- `applicationID`: The ID of the application whose preferences you wish to modify. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to modify the current user’s preferences, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to modify the preferences of all users.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to modify the preferences of the current host, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to modify the preferences of all hosts.

<a id="Discussion"></a>

## Discussion

This function is the primitive set mechanism for the higher level preference function [CFPreferencesSetAppValue(\_:\_:\_:)](cfpreferencessetappvalue%28______%29.md). Only the exact domain specified is modified. Do not use this function directly unless you have a specific need. All arguments except `value` must be non-`NULL`. Do not use arbitrary user and host names, instead pass the pre-defined constants.

You must call the [CFPreferencesSynchronize(\_:\_:\_:)](cfpreferencessynchronize%28______%29.md) function in order for your changes to be saved to permanent storage. Note that you can only save preferences for “Any User” if you have root privileges (or Admin privileges prior to OS X v10.6).

## See Also

### Setting Preference Values

- [CFPreferencesSetAppValue(\_:\_:\_:)](cfpreferencessetappvalue%28______%29.md): Adds, modifies, or removes a preference.
- [CFPreferencesSetMultiple(\_:\_:\_:\_:\_:)](cfpreferencessetmultiple%28__________%29.md): Convenience function that allows you to set and remove multiple preference values.

# CFPreferencesSetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds, modifies, or removes a preference value for the specified domain.

## Declaration

```objectivec
extern void CFPreferencesSetValue(CFStringRef key, CFPropertyListRef value, CFStringRef applicationID, CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `key`: Preferences key for the value you wish to set.
- `value`: The value to set for `key` and application. Pass `NULL` to remove `key` from the domain.
- `applicationID`: The ID of the application whose preferences you wish to modify. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to modify the current user’s preferences, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to modify the preferences of all users.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to modify the preferences of the current host, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to modify the preferences of all hosts.

<a id="Discussion"></a>

## Discussion

This function is the primitive set mechanism for the higher level preference function [CFPreferencesSetAppValue](cfpreferencessetappvalue%28______%29.md). Only the exact domain specified is modified. Do not use this function directly unless you have a specific need. All arguments except `value` must be non-`NULL`. Do not use arbitrary user and host names, instead pass the pre-defined constants.

You must call the [CFPreferencesSynchronize](cfpreferencessynchronize%28______%29.md) function in order for your changes to be saved to permanent storage. Note that you can only save preferences for “Any User” if you have root privileges (or Admin privileges prior to OS X v10.6).

## See Also

### Setting Preference Values

- [CFPreferencesSetAppValue](cfpreferencessetappvalue%28______%29.md): Adds, modifies, or removes a preference.
- [CFPreferencesSetMultiple](cfpreferencessetmultiple%28__________%29.md): Convenience function that allows you to set and remove multiple preference values.
