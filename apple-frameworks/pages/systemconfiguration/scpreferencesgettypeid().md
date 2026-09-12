> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesgettypeid()](https://developer.apple.com/documentation/systemconfiguration/scpreferencesgettypeid())

# SCPreferencesGetTypeID() (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the type identifier of all `SCPreferences` instances.

## Declaration

```swift
func SCPreferencesGetTypeID() -> CFTypeID
```

## See Also

### Getting Information About a Preferences Session

- [SCPreferencesCopyKeyList(\_:)](scpreferencescopykeylist%28__%29.md): Returns the currently defined preference keys.
- [SCPreferencesGetSignature(\_:)](scpreferencesgetsignature%28__%29.md): Returns a value that can be used to determine if the saved configuration preferences have changed.

# SCPreferencesGetTypeID (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Returns the type identifier of all `SCPreferences` instances.

## Declaration

```objectivec
CFTypeID SCPreferencesGetTypeID();
```

## See Also

### Getting Information About a Preferences Session

- [SCPreferencesCopyKeyList](scpreferencescopykeylist%28__%29.md): Returns the currently defined preference keys.
- [SCPreferencesGetSignature](scpreferencesgetsignature%28__%29.md): Returns a value that can be used to determine if the saved configuration preferences have changed.
