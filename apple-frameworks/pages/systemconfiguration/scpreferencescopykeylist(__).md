> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescopykeylist(_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencescopykeylist(_:))

# SCPreferencesCopyKeyList(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the currently defined preference keys.

## Declaration

```swift
func SCPreferencesCopyKeyList(_ prefs: SCPreferences) -> CFArray?
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

An array of currently defined preference keys. You must release the returned value.

## See Also

### Getting Information About a Preferences Session

- [SCPreferencesGetTypeID()](scpreferencesgettypeid%28%29.md): Returns the type identifier of all `SCPreferences` instances.
- [SCPreferencesGetSignature(\_:)](scpreferencesgetsignature%28__%29.md): Returns a value that can be used to determine if the saved configuration preferences have changed.

# SCPreferencesCopyKeyList (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the currently defined preference keys.

## Declaration

```objectivec
CFArrayRefSCPreferencesCopyKeyList(SCPreferencesRef prefs);
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

An array of currently defined preference keys. You must release the returned value.

## See Also

### Getting Information About a Preferences Session

- [SCPreferencesGetTypeID](scpreferencesgettypeid%28%29.md): Returns the type identifier of all `SCPreferences` instances.
- [SCPreferencesGetSignature](scpreferencesgetsignature%28__%29.md): Returns a value that can be used to determine if the saved configuration preferences have changed.
