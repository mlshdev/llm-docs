> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescommitchanges(_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencescommitchanges(_:))

# SCPreferencesCommitChanges(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Commits changes made to the configuration preferences to persistent storage.

## Declaration

```swift
func SCPreferencesCommitChanges(_ prefs: SCPreferences) -> Bool
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

Implicit calls to the [SCPreferencesLock(\_:\_:)](scpreferenceslock%28____%29.md) and [SCPreferencesUnlock(\_:)](scpreferencesunlock%28__%29.md) functions are made if exclusive access has not already been established.

> **Note**

>  This function commits changes to persistent storage. To apply the changes to the running system, use the [SCPreferencesApplyChanges(\_:)](scpreferencesapplychanges%28__%29.md) function.

## See Also

### Applying and Committing Changes

- [SCPreferencesApplyChanges(\_:)](scpreferencesapplychanges%28__%29.md): Requests that the currently stored configuration preferences be applied to the active configuration.
- [SCPreferencesSynchronize(\_:)](scpreferencessynchronize%28__%29.md): Synchronizes accessed preferences with committed changes.

# SCPreferencesCommitChanges (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Commits changes made to the configuration preferences to persistent storage.

## Declaration

```objectivec
Boolean SCPreferencesCommitChanges(SCPreferencesRef prefs);
```

## Parameters

- `prefs`: The preferences session.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

Implicit calls to the [SCPreferencesLock](scpreferenceslock%28____%29.md) and [SCPreferencesUnlock](scpreferencesunlock%28__%29.md) functions are made if exclusive access has not already been established.

> **Note**

>  This function commits changes to persistent storage. To apply the changes to the running system, use the [SCPreferencesApplyChanges](scpreferencesapplychanges%28__%29.md) function.

## See Also

### Applying and Committing Changes

- [SCPreferencesApplyChanges](scpreferencesapplychanges%28__%29.md): Requests that the currently stored configuration preferences be applied to the active configuration.
- [SCPreferencesSynchronize](scpreferencessynchronize%28__%29.md): Synchronizes accessed preferences with committed changes.
