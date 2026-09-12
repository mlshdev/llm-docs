> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencespathremovevalue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencespathremovevalue(_:_:))

# SCPreferencesPathRemoveValue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Removes the data associated with the specified path.

## Declaration

```swift
func SCPreferencesPathRemoveValue(_ prefs: SCPreferences, _ path: CFString) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

## See Also

### Getting or Removing Information Associated with a Path

- [SCPreferencesPathGetValue(\_:\_:)](scpreferencespathgetvalue%28____%29.md): Returns the dictionary associated with the specified path.
- [SCPreferencesPathGetLink(\_:\_:)](scpreferencespathgetlink%28____%29.md): Returns the link associated with the specified path.

# SCPreferencesPathRemoveValue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Removes the data associated with the specified path.

## Declaration

```objectivec
Boolean SCPreferencesPathRemoveValue(SCPreferencesRef prefs, CFStringRef path);
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

## See Also

### Getting or Removing Information Associated with a Path

- [SCPreferencesPathGetValue](scpreferencespathgetvalue%28____%29.md): Returns the dictionary associated with the specified path.
- [SCPreferencesPathGetLink](scpreferencespathgetlink%28____%29.md): Returns the link associated with the specified path.
