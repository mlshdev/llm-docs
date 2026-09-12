> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencescopykeylist(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencescopykeylist(_:_:_:))

# CFPreferencesCopyKeyList(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constructs and returns the list of all keys set in the specified domain.

## Declaration

```swift
func CFPreferencesCopyKeyList(_ applicationID: CFString, _ userName: CFString, _ hostName: CFString) -> CFArray?
```

## Parameters

- `applicationID`: The ID of the application whose preferences to search. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

The list of keys. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue(\_:\_:)](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyMultiple(\_:\_:\_:\_:)](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue(\_:\_:\_:\_:)](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue(\_:\_:\_:)](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue(\_:\_:\_:)](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.

# CFPreferencesCopyKeyList (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constructs and returns the list of all keys set in the specified domain.

## Declaration

```objectivec
extern CFArrayRefCFPreferencesCopyKeyList(CFStringRef applicationID, CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `applicationID`: The ID of the application whose preferences to search. Takes the form of a Java package name, `com.foosoft`.
- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

The list of keys. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyMultiple](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.
