> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesgetsignature(_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesgetsignature(_:))

# SCPreferencesGetSignature(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns a value that can be used to determine if the saved configuration preferences have changed.

## Declaration

```swift
func SCPreferencesGetSignature(_ prefs: SCPreferences) -> CFData?
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

Data that reflects the signature of the configuration preferences at the time of the call to the [SCPreferencesCreate(\_:\_:\_:)](scpreferencescreate%28______%29.md) function.

## See Also

### Getting Information About a Preferences Session

- [SCPreferencesGetTypeID()](scpreferencesgettypeid%28%29.md): Returns the type identifier of all `SCPreferences` instances.
- [SCPreferencesCopyKeyList(\_:)](scpreferencescopykeylist%28__%29.md): Returns the currently defined preference keys.

# SCPreferencesGetSignature (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns a value that can be used to determine if the saved configuration preferences have changed.

## Declaration

```objectivec
CFDataRefSCPreferencesGetSignature(SCPreferencesRef prefs);
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

Data that reflects the signature of the configuration preferences at the time of the call to the [SCPreferencesCreate](scpreferencescreate%28______%29.md) function.

## See Also

### Getting Information About a Preferences Session

- [SCPreferencesGetTypeID](scpreferencesgettypeid%28%29.md): Returns the type identifier of all `SCPreferences` instances.
- [SCPreferencesCopyKeyList](scpreferencescopykeylist%28__%29.md): Returns the currently defined preference keys.
