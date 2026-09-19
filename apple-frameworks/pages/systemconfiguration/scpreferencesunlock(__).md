> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scpreferencesunlock(_:)

# SCPreferencesUnlock(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Releases exclusive access to the configuration preferences.

## Declaration

```swift
func SCPreferencesUnlock(_ prefs: SCPreferences) -> Bool
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

After exclusive access has been released, other clients can establish exclusive access to the preferences.

## See Also

### Managing Access to a Preferences Session

- [SCPreferencesLock(\_:\_:)](scpreferenceslock%28____%29.md): Locks access to the configuration preferences.

# SCPreferencesUnlock (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Releases exclusive access to the configuration preferences.

## Declaration

```objectivec
Boolean SCPreferencesUnlock(SCPreferencesRef prefs);
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

After exclusive access has been released, other clients can establish exclusive access to the preferences.

## See Also

### Managing Access to a Preferences Session

- [SCPreferencesLock](scpreferenceslock%28____%29.md): Locks access to the configuration preferences.
