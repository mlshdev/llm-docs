> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencespathgetlink(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencespathgetlink(_:_:))

# SCPreferencesPathGetLink(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the link associated with the specified path.

## Declaration

```swift
func SCPreferencesPathGetLink(_ prefs: SCPreferences, _ path: CFString) -> CFString?
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.

<a id="return-value"></a>

## Return Value

The link associated with the specified path, or `NULL` if the path is not a link or does not exist.

## See Also

### Getting or Removing Information Associated with a Path

- [SCPreferencesPathGetValue(\_:\_:)](scpreferencespathgetvalue%28____%29.md): Returns the dictionary associated with the specified path.
- [SCPreferencesPathRemoveValue(\_:\_:)](scpreferencespathremovevalue%28____%29.md): Removes the data associated with the specified path.

# SCPreferencesPathGetLink (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the link associated with the specified path.

## Declaration

```objectivec
CFStringRefSCPreferencesPathGetLink(SCPreferencesRef prefs, CFStringRef path);
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.

<a id="return-value"></a>

## Return Value

The link associated with the specified path, or `NULL` if the path is not a link or does not exist.

## See Also

### Getting or Removing Information Associated with a Path

- [SCPreferencesPathGetValue](scpreferencespathgetvalue%28____%29.md): Returns the dictionary associated with the specified path.
- [SCPreferencesPathRemoveValue](scpreferencespathremovevalue%28____%29.md): Removes the data associated with the specified path.
