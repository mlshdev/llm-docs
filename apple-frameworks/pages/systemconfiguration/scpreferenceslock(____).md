> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferenceslock(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferenceslock(_:_:))

# SCPreferencesLock(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Locks access to the configuration preferences.

## Declaration

```swift
func SCPreferencesLock(_ prefs: SCPreferences, _ wait: Bool) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `wait`: A Boolean value indicating whether the calling process should block, waiting for another process to complete its update operation and release its lock.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

This function obtains exclusive access to the configuration preferences. Clients attempting to obtain exclusive access to the preferences either receive a [kSCStatusPrefsBusy](kscstatusprefsbusy.md) error or they block, waiting for the lock to be released.

## See Also

### Managing Access to a Preferences Session

- [SCPreferencesUnlock(\_:)](scpreferencesunlock%28__%29.md): Releases exclusive access to the configuration preferences.

# SCPreferencesLock (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Locks access to the configuration preferences.

## Declaration

```objectivec
Boolean SCPreferencesLock(SCPreferencesRef prefs, Boolean wait);
```

## Parameters

- `prefs`: The preferences session.
- `wait`: A Boolean value indicating whether the calling process should block, waiting for another process to complete its update operation and release its lock.

<a id="return-value"></a>

## Return Value

`TRUE` if the lock was obtained; `FALSE` if an error occurred.

<a id="Discussion"></a>

## Discussion

This function obtains exclusive access to the configuration preferences. Clients attempting to obtain exclusive access to the preferences either receive a [kSCStatusPrefsBusy](kscstatusprefsbusy.md) error or they block, waiting for the lock to be released.

## See Also

### Managing Access to a Preferences Session

- [SCPreferencesUnlock](scpreferencesunlock%28__%29.md): Releases exclusive access to the configuration preferences.
