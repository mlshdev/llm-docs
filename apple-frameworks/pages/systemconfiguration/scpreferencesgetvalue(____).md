> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesgetvalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesgetvalue(_:_:))

# SCPreferencesGetValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Retrieves the value associated with the specified preference key.

## Declaration

```swift
func SCPreferencesGetValue(_ prefs: SCPreferences, _ key: CFString) -> CFPropertyList?
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.

<a id="return-value"></a>

## Return Value

The value associated with the specified preference key (can be `NULL` if no value exists).

<a id="Discussion"></a>

## Discussion

To avoid inadvertantly reading stale data, first call [SCPreferencesLock(\_:\_:)](scpreferenceslock%28____%29.md) before calling this function.

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue(\_:\_:\_:)](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesSetValue(\_:\_:\_:)](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
- [SCPreferencesRemoveValue(\_:\_:)](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.

# SCPreferencesGetValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Retrieves the value associated with the specified preference key.

## Declaration

```objectivec
CFPropertyListRefSCPreferencesGetValue(SCPreferencesRef prefs, CFStringRef key);
```

## Parameters

- `prefs`: The preferences session.
- `key`: The preference key.

<a id="return-value"></a>

## Return Value

The value associated with the specified preference key (can be `NULL` if no value exists).

<a id="Discussion"></a>

## Discussion

To avoid inadvertantly reading stale data, first call [SCPreferencesLock](scpreferenceslock%28____%29.md) before calling this function.

## See Also

### Adding, Getting, and Removing Values

- [SCPreferencesAddValue](scpreferencesaddvalue%28______%29.md): Associates the specified value with the specified preference key.
- [SCPreferencesSetValue](scpreferencessetvalue%28______%29.md): Updates the data associated with the specified preference key with the specified value.
- [SCPreferencesRemoveValue](scpreferencesremovevalue%28____%29.md): Removes the data associated with the specified preference key.
