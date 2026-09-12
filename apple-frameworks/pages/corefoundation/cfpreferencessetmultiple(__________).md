> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencessetmultiple(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencessetmultiple(_:_:_:_:_:))

# CFPreferencesSetMultiple(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Convenience function that allows you to set and remove multiple preference values.

## Declaration

```swift
func CFPreferencesSetMultiple(_ keysToSet: CFDictionary?, _ keysToRemove: CFArray?, _ applicationID: CFString, _ userName: CFString, _ hostName: CFString)
```

## Parameters

- `keysToSet`: A dictionary containing the key/value pairs for the preferences  to set.
- `keysToRemove`: An array containing a list of keys to remove.
- `applicationID`: The ID of the application whose preferences you wish to modify. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to modify the current user’s preferences, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to modify the preferences of all users.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to modify the preferences of the current host, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to modify the preferences of all hosts.

<a id="Discussion"></a>

## Discussion

Behavior is undefined if a key is in both `keysToSet` and `keysToRemove`

## See Also

### Setting Preference Values

- [CFPreferencesSetAppValue(\_:\_:\_:)](cfpreferencessetappvalue%28______%29.md): Adds, modifies, or removes a preference.
- [CFPreferencesSetValue(\_:\_:\_:\_:\_:)](cfpreferencessetvalue%28__________%29.md): Adds, modifies, or removes a preference value for the specified domain.

# CFPreferencesSetMultiple (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Convenience function that allows you to set and remove multiple preference values.

## Declaration

```objectivec
extern void CFPreferencesSetMultiple(CFDictionaryRef keysToSet, CFArrayRef keysToRemove, CFStringRef applicationID, CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `keysToSet`: A dictionary containing the key/value pairs for the preferences  to set.
- `keysToRemove`: An array containing a list of keys to remove.
- `applicationID`: The ID of the application whose preferences you wish to modify. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to modify the current user’s preferences, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to modify the preferences of all users.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to modify the preferences of the current host, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to modify the preferences of all hosts.

<a id="Discussion"></a>

## Discussion

Behavior is undefined if a key is in both `keysToSet` and `keysToRemove`

## See Also

### Setting Preference Values

- [CFPreferencesSetAppValue](cfpreferencessetappvalue%28______%29.md): Adds, modifies, or removes a preference.
- [CFPreferencesSetValue](cfpreferencessetvalue%28__________%29.md): Adds, modifies, or removes a preference value for the specified domain.
