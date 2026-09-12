> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencescopyappvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencescopyappvalue(_:_:))

# CFPreferencesCopyAppValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains a preference value for the specified key and application.

## Declaration

```swift
func CFPreferencesCopyAppValue(_ key: CFString, _ applicationID: CFString) -> CFPropertyList?
```

## Parameters

- `key`: The preference key whose value to obtain.
- `applicationID`: The identifier of the application whose preferences to search, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.

<a id="return-value"></a>

## Return Value

The preference data for the specified key and application. If no value was located, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that values returned from this function are immutable, even if you have recently set the value using a mutable object.

## See Also

### Getting Preference Values

- [CFPreferencesCopyKeyList(\_:\_:\_:)](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple(\_:\_:\_:\_:)](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue(\_:\_:\_:\_:)](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue(\_:\_:\_:)](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue(\_:\_:\_:)](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.

# CFPreferencesCopyAppValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains a preference value for the specified key and application.

## Declaration

```objectivec
extern CFPropertyListRefCFPreferencesCopyAppValue(CFStringRef key, CFStringRef applicationID);
```

## Parameters

- `key`: The preference key whose value to obtain.
- `applicationID`: The identifier of the application whose preferences to search, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.

<a id="return-value"></a>

## Return Value

The preference data for the specified key and application. If no value was located, returns `NULL`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

Note that values returned from this function are immutable, even if you have recently set the value using a mutable object.

## See Also

### Getting Preference Values

- [CFPreferencesCopyKeyList](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
- [CFPreferencesGetAppIntegerValue](cfpreferencesgetappintegervalue%28______%29.md): Convenience function that directly obtains an integer preference value for the specified key.
