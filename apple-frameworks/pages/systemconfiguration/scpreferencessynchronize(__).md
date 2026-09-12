> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencessynchronize(_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencessynchronize(_:))

# SCPreferencesSynchronize(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Synchronizes accessed preferences with committed changes.

## Declaration

```swift
func SCPreferencesSynchronize(_ prefs: SCPreferences)
```

## Parameters

- `prefs`: The preferences session.

<a id="Discussion"></a>

## Discussion

Any references to preference values returned by calls to [SCPreferencesGetValue(\_:\_:)](scpreferencesgetvalue%28____%29.md) are no longer valid unless they were explicitly retained or copied. Any preference values that were updated (added, set, or removed), but not committed, are discarded.

## See Also

### Applying and Committing Changes

- [SCPreferencesApplyChanges(\_:)](scpreferencesapplychanges%28__%29.md): Requests that the currently stored configuration preferences be applied to the active configuration.
- [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md): Commits changes made to the configuration preferences to persistent storage.

# SCPreferencesSynchronize (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Synchronizes accessed preferences with committed changes.

## Declaration

```objectivec
void SCPreferencesSynchronize(SCPreferencesRef prefs);
```

## Parameters

- `prefs`: The preferences session.

<a id="Discussion"></a>

## Discussion

Any references to preference values returned by calls to [SCPreferencesGetValue](scpreferencesgetvalue%28____%29.md) are no longer valid unless they were explicitly retained or copied. Any preference values that were updated (added, set, or removed), but not committed, are discarded.

## See Also

### Applying and Committing Changes

- [SCPreferencesApplyChanges](scpreferencesapplychanges%28__%29.md): Requests that the currently stored configuration preferences be applied to the active configuration.
- [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md): Commits changes made to the configuration preferences to persistent storage.
