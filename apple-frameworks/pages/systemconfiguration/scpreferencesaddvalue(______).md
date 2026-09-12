> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesaddvalue(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesaddvalue(_:_:_:))

# SCPreferencesAddValue(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Associates the specified value with the specified preference key.

## Declaration

```swift
func SCPreferencesAddValue(_ prefs: SCPreferences, _ key: CFString, _ value: CFPropertyList) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.
- `value`: The value to associate with the preference key.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was added; [false](https://developer.apple.com/documentation/swift/false) if the key already exists or if an error occurred.

<a id="Discussion"></a>

## Discussion

To commit these changes to permanent storage, you must call [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md).

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesGetValue(\_:\_:)](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesSetValue(\_:\_:\_:)](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
- [SCPreferencesRemoveValue(\_:\_:)](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.

# SCPreferencesAddValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Associates the specified value with the specified preference key.

## Declaration

```objectivec
Boolean SCPreferencesAddValue(SCPreferencesRef prefs, CFStringRef key, CFPropertyListRef value);
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.
- `value`: The value to associate with the preference key.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was added; [false](https://developer.apple.com/documentation/swift/false) if the key already exists or if an error occurred.

<a id="Discussion"></a>

## Discussion

To commit these changes to permanent storage, you must call [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md).

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesGetValue](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesSetValue](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
- [SCPreferencesRemoveValue](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.
