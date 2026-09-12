> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesapplychanges(_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesapplychanges(_:))

# SCPreferencesApplyChanges(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Requests that the currently stored configuration preferences be applied to the active configuration.

## Declaration

```swift
func SCPreferencesApplyChanges(_ prefs: SCPreferences) -> Bool
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

## See Also

### Applying and Committing Changes

- [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md): Commits changes made to the configuration preferences to persistent storage.
- [SCPreferencesSynchronize(\_:)](scpreferencessynchronize%28__%29.md): Synchronizes accessed preferences with committed changes.

# SCPreferencesApplyChanges (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Requests that the currently stored configuration preferences be applied to the active configuration.

## Declaration

```objectivec
Boolean SCPreferencesApplyChanges(SCPreferencesRef prefs);
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

## See Also

### Applying and Committing Changes

- [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md): Commits changes made to the configuration preferences to persistent storage.
- [SCPreferencesSynchronize](scpreferencessynchronize%28__%29.md): Synchronizes accessed preferences with committed changes.
