> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencespathsetlink(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencespathsetlink(_:_:_:))

# SCPreferencesPathSetLink(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Associates a link to a second dictionary at the specified path.

## Declaration

```swift
func SCPreferencesPathSetLink(_ prefs: SCPreferences, _ path: CFString, _ link: CFString) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.
- `link`: The link to be stored at the path.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

## See Also

### Associating Information with a Path

- [SCPreferencesPathSetValue(\_:\_:\_:)](scpreferencespathsetvalue%28______%29.md): Associates the specified dictionary with the specified path.

# SCPreferencesPathSetLink (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Associates a link to a second dictionary at the specified path.

## Declaration

```objectivec
Boolean SCPreferencesPathSetLink(SCPreferencesRef prefs, CFStringRef path, CFStringRef link);
```

## Parameters

- `prefs`: The preferences session.
- `path`: The path.
- `link`: The link to be stored at the path.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

## See Also

### Associating Information with a Path

- [SCPreferencesPathSetValue](scpreferencespathsetvalue%28______%29.md): Associates the specified dictionary with the specified path.
