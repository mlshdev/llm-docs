> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesremovevalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesremovevalue(_:_:))

# SCPreferencesRemoveValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Removes the data associated with the specified preference key.

## Declaration

```swift
func SCPreferencesRemoveValue(_ prefs: SCPreferences, _ key: CFString) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.

<a id="return-value"></a>

## Return Value

`TRUE` if the value was removed; `FALSE` if the key does not exist or if an error occurred.

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue(\_:\_:\_:)](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesGetValue(\_:\_:)](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesSetValue(\_:\_:\_:)](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.

# SCPreferencesRemoveValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Removes the data associated with the specified preference key.

## Declaration

```objectivec
Boolean SCPreferencesRemoveValue(SCPreferencesRef prefs, CFStringRef key);
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.

<a id="return-value"></a>

## Return Value

`TRUE` if the value was removed; `FALSE` if the key does not exist or if an error occurred.

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesGetValue](scpreferencesgetvalue%28____%29.md): Retrieves the value associated with the specified preference key.
- [SCPreferencesSetValue](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
