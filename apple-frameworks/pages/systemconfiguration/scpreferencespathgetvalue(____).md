> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencespathgetvalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencespathgetvalue(_:_:))

# SCPreferencesPathGetValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the dictionary associated with the specified path.

## Declaration

```swift
func SCPreferencesPathGetValue(_ prefs: SCPreferences, _ path: CFString) -> CFDictionary?
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.

<a id="return-value"></a>

## Return Value

The dictionary associated with the specified path, or `NULL` if the path does not exist.

## See Also

### Getting or Removing Information Associated with a Path

- [SCPreferencesPathGetLink(\_:\_:)](scpreferencespathgetlink%28____%29.md): Returns the link associated with the specified path.
- [SCPreferencesPathRemoveValue(\_:\_:)](scpreferencespathremovevalue%28____%29.md): Removes the data associated with the specified path.

# SCPreferencesPathGetValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the dictionary associated with the specified path.

## Declaration

```objectivec
CFDictionaryRefSCPreferencesPathGetValue(SCPreferencesRef prefs, CFStringRef path);
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.

<a id="return-value"></a>

## Return Value

The dictionary associated with the specified path, or `NULL` if the path does not exist.

## See Also

### Getting or Removing Information Associated with a Path

- [SCPreferencesPathGetLink](scpreferencespathgetlink%28____%29.md): Returns the link associated with the specified path.
- [SCPreferencesPathRemoveValue](scpreferencespathremovevalue%28____%29.md): Removes the data associated with the specified path.
