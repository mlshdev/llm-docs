> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencescopyvalue(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencescopyvalue(_:_:_:_:))

# CFPreferencesCopyValue(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a preference value for a given domain.

## Declaration

```swift
func CFPreferencesCopyValue(_ key: CFString, _ applicationID: CFString, _ userName: CFString, _ hostName: CFString) -> CFPropertyList?
```

## Parameters

- `key`: Preferences key for the value to obtain.
- `applicationID`: The ID of the application whose preferences are searched. Takes the form of a Java package name, such as `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) if to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) if to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

The preference data for the specified domain. If the no value was located, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function is the primitive get mechanism for the higher level preference function [CFPreferencesCopyAppValue(\_:\_:)](cfpreferencescopyappvalue%28____%29.md) Unlike the high-level function, [CFPreferencesCopyValue(\_:\_:\_:\_:)](cfpreferencescopyvalue%28________%29.md) searches only the exact domain specified. Do not use this function directly unless you have a need. All arguments must be non-`NULL`. Do not use arbitrary user and host names, instead pass the pre-defined domain qualifier constants.

Note that values returned from this function are immutable, even if you have recently set the value using a mutable object.

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue(\_:\_:)](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList(\_:\_:\_:)](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple(\_:\_:\_:\_:)](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesGetAppBooleanValue(\_:\_:\_:)](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue(\_:\_:\_:)](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.

# CFPreferencesCopyValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a preference value for a given domain.

## Declaration

```objectivec
extern CFPropertyListRefCFPreferencesCopyValue(CFStringRef key, CFStringRef applicationID, CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `key`: Preferences key for the value to obtain.
- `applicationID`: The ID of the application whose preferences are searched. Takes the form of a Java package name, such as `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) if to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) if to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

The preference data for the specified domain. If the no value was located, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function is the primitive get mechanism for the higher level preference function [CFPreferencesCopyAppValue](cfpreferencescopyappvalue%28____%29.md) Unlike the high-level function, [CFPreferencesCopyValue](cfpreferencescopyvalue%28________%29.md) searches only the exact domain specified. Do not use this function directly unless you have a need. All arguments must be non-`NULL`. Do not use arbitrary user and host names, instead pass the pre-defined domain qualifier constants.

Note that values returned from this function are immutable, even if you have recently set the value using a mutable object.

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesGetAppBooleanValue](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.
