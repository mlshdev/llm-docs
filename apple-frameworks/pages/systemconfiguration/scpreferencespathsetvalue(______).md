> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencespathsetvalue(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencespathsetvalue(_:_:_:))

# SCPreferencesPathSetValue(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Associates the specified dictionary with the specified path.

## Declaration

```swift
func SCPreferencesPathSetValue(_ prefs: SCPreferences, _ path: CFString, _ value: CFDictionary) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.
- `value`: The dictionary of data to be stored at the path.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

## See Also

### Associating Information with a Path

- [SCPreferencesPathSetLink(\_:\_:\_:)](scpreferencespathsetlink%28______%29.md): Associates a link to a second dictionary at the specified path.

# SCPreferencesPathSetValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Associates the specified dictionary with the specified path.

## Declaration

```objectivec
Boolean SCPreferencesPathSetValue(SCPreferencesRef prefs, CFStringRef path, CFDictionaryRef value);
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.
- `value`: The dictionary of data to be stored at the path.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

## See Also

### Associating Information with a Path

- [SCPreferencesPathSetLink](scpreferencespathsetlink%28______%29.md): Associates a link to a second dictionary at the specified path.
