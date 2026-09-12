> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencespathcreateuniquechild(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencespathcreateuniquechild(_:_:))

# SCPreferencesPathCreateUniqueChild(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a new path component rooted at the specified path in the dictionary hierarchy.

## Declaration

```swift
func SCPreferencesPathCreateUniqueChild(_ prefs: SCPreferences, _ prefix: CFString) -> CFString?
```

## Parameters

- `prefs`: The preferences session.
- `prefix`: The parent path.

<a id="return-value"></a>

## Return Value

A string representing the new (unique) child path, or `NULL` if the specified path does not exist.

# SCPreferencesPathCreateUniqueChild (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a new path component rooted at the specified path in the dictionary hierarchy.

## Declaration

```objectivec
CFStringRefSCPreferencesPathCreateUniqueChild(SCPreferencesRef prefs, CFStringRef prefix);
```

## Parameters

- `prefs`: The preferences session.
- `prefix`: The parent path.

<a id="return-value"></a>

## Return Value

A string representing the new (unique) child path, or `NULL` if the specified path does not exist.
