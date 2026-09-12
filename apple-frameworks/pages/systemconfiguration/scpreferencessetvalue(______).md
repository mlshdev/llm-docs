> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencessetvalue(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencessetvalue(_:_:_:))

# SCPreferencesSetValue(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Updates the data associated with the specified preference key with the specified value.

## Declaration

```swift
func SCPreferencesSetValue(_ prefs: SCPreferences, _ key: CFString, _ value: CFPropertyList) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.
- `value`: The value to associate with the preference key.

<a id="return-value"></a>

## Return Value

`TRUE` if the value was set; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

This function adds or replaces the value associated with the specified key. To commit these changes to permanent storage you must call [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md).

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue(\_:\_:\_:)](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesGetValue(\_:\_:)](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesRemoveValue(\_:\_:)](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.

# SCPreferencesSetValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Updates the data associated with the specified preference key with the specified value.

## Declaration

```objectivec
Boolean SCPreferencesSetValue(SCPreferencesRef prefs, CFStringRef key, CFPropertyListRef value);
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.
- `value`: The value to associate with the preference key.

<a id="return-value"></a>

## Return Value

`TRUE` if the value was set; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

This function adds or replaces the value associated with the specified key. To commit these changes to permanent storage you must call [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md).

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesGetValue](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesRemoveValue](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.
