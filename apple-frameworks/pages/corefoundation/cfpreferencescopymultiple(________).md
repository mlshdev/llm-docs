> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencescopymultiple(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencescopymultiple(_:_:_:_:))

# CFPreferencesCopyMultiple(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary containing preference values for multiple keys.

## Declaration

```swift
func CFPreferencesCopyMultiple(_ keysToFetch: CFArray?, _ applicationID: CFString, _ userName: CFString, _ hostName: CFString) -> CFDictionary
```

## Parameters

- `keysToFetch`: An array of preference keys the values of which to obtain.
- `applicationID`: The ID of the application whose preferences are searched. Takes the form of a Java package name, such as `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

A dictionary containing the preference values for the keys specified by `keysToFetch` for the specified domain. If no values were located, returns an empty dictionary. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that values returned from this function are immutable, even if you have recently set the value using a mutable object.

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue(\_:\_:)](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList(\_:\_:\_:)](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyValue(\_:\_:\_:\_:)](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue(\_:\_:\_:)](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue(\_:\_:\_:)](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.

# CFPreferencesCopyMultiple (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary containing preference values for multiple keys.

## Declaration

```objectivec
extern CFDictionaryRefCFPreferencesCopyMultiple(CFArrayRef keysToFetch, CFStringRef applicationID, CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `keysToFetch`: An array of preference keys the values of which to obtain.
- `applicationID`: The ID of the application whose preferences are searched. Takes the form of a Java package name, such as `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

A dictionary containing the preference values for the keys specified by `keysToFetch` for the specified domain. If no values were located, returns an empty dictionary. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that values returned from this function are immutable, even if you have recently set the value using a mutable object.

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyValue](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.
