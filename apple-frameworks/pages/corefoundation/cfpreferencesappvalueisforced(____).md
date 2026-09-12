> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencesappvalueisforced(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencesappvalueisforced(_:_:))

# CFPreferencesAppValueIsForced(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether or not a given key has been imposed on the user.

## Declaration

```swift
func CFPreferencesAppValueIsForced(_ key: CFString, _ applicationID: CFString) -> Bool
```

## Parameters

- `key`: The key you are querying.
- `applicationID`: The application’s ID, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.

<a id="return-value"></a>

## Return Value

`true` if value of the key cannot be changed by the user, otherwise `false`.

<a id="Discussion"></a>

## Discussion

In cases where machines and/or users are under some kind of management, you should use this function to determine whether or not to disable UI elements corresponding to those preference keys.

## See Also

### Miscellaneous Functions

- [CFPreferencesCopyApplicationList(\_:\_:)](cfpreferencescopyapplicationlist%28____%29.md): Deprecated. Constructs and returns the list of all applications that have preferences in the scope of the specified user and host.

# CFPreferencesAppValueIsForced (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether or not a given key has been imposed on the user.

## Declaration

```objectivec
extern Boolean CFPreferencesAppValueIsForced(CFStringRef key, CFStringRef applicationID);
```

## Parameters

- `key`: The key you are querying.
- `applicationID`: The application’s ID, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.

<a id="return-value"></a>

## Return Value

`true` if value of the key cannot be changed by the user, otherwise `false`.

<a id="Discussion"></a>

## Discussion

In cases where machines and/or users are under some kind of management, you should use this function to determine whether or not to disable UI elements corresponding to those preference keys.

## See Also

### Miscellaneous Functions

- [CFPreferencesCopyApplicationList](cfpreferencescopyapplicationlist%28____%29.md): Deprecated. Constructs and returns the list of all applications that have preferences in the scope of the specified user and host.
