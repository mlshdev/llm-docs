> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencesgetappintegervalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencesgetappintegervalue(_:_:_:))

# CFPreferencesGetAppIntegerValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Convenience function that directly obtains an integer preference value for the specified key.

## Declaration

```swift
func CFPreferencesGetAppIntegerValue(_ key: CFString, _ applicationID: CFString, _ keyExistsAndHasValidFormat: UnsafeMutablePointer<DarwinBoolean>?) -> CFIndex
```

## Parameters

- `key`: The preference key whose value you wish to obtain. The key must specify a preference whose value is of type `int`.
- `applicationID`: The identifier of the application whose preferences you wish to search, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.
- `keyExistsAndHasValidFormat`: On return, indicates whether the preference value for the specified key was located and found to be of type `int`.

<a id="return-value"></a>

## Return Value

The preference data for the specified key and application. If no value was located, `0` is returned.

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue(\_:\_:)](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList(\_:\_:\_:)](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple(\_:\_:\_:\_:)](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue(\_:\_:\_:\_:)](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue(\_:\_:\_:)](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.

# CFPreferencesGetAppIntegerValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Convenience function that directly obtains an integer preference value for the specified key.

## Declaration

```objectivec
extern CFIndex CFPreferencesGetAppIntegerValue(CFStringRef key, CFStringRef applicationID, Boolean *keyExistsAndHasValidFormat);
```

## Parameters

- `key`: The preference key whose value you wish to obtain. The key must specify a preference whose value is of type `int`.
- `applicationID`: The identifier of the application whose preferences you wish to search, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.
- `keyExistsAndHasValidFormat`: On return, indicates whether the preference value for the specified key was located and found to be of type `int`.

<a id="return-value"></a>

## Return Value

The preference data for the specified key and application. If no value was located, `0` is returned.

## See Also

### Getting Preference Values

- [CFPreferencesCopyAppValue](cfpreferencescopyappvalue%28____%29.md): Obtains a preference value for the specified key and application.
- [CFPreferencesCopyKeyList](cfpreferencescopykeylist%28______%29.md): Constructs and returns the list of all keys set in the specified domain.
- [CFPreferencesCopyMultiple](cfpreferencescopymultiple%28________%29.md): Returns a dictionary containing preference values for multiple keys.
- [CFPreferencesCopyValue](cfpreferencescopyvalue%28________%29.md): Returns a preference value for a given domain.
- [CFPreferencesGetAppBooleanValue](cfpreferencesgetappbooleanvalue%28______%29.md): Convenience function that directly obtains a Boolean preference value for the specified key.
