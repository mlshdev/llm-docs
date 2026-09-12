> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencessetlocalhostname(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencessetlocalhostname(_:_:))

# SCPreferencesSetLocalHostName(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.2+

Sets the local host name to the specified name.

## Declaration

```swift
func SCPreferencesSetLocalHostName(_ prefs: SCPreferences, _ name: CFString?) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `name`: The local host name. This string must conform to the naming conventions of a DNS host name as specified in RFC 1034 (section 3.5).

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

To commit these changes to permanent storage you must call the [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md) function. In addition, you must call the [SCPreferencesApplyChanges(\_:)](scpreferencesapplychanges%28__%29.md) function for the new name to become active.

## See Also

### Setting Configuration Information

- [SCPreferencesSetComputerName(\_:\_:\_:)](scpreferencessetcomputername%28______%29.md): Sets the computer name preference to the specified name.

# SCPreferencesSetLocalHostName (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.2+

Sets the local host name to the specified name.

## Declaration

```objectivec
Boolean SCPreferencesSetLocalHostName(SCPreferencesRef prefs, CFStringRef name);
```

## Parameters

- `prefs`: The preferences session.
- `name`: The local host name. This string must conform to the naming conventions of a DNS host name as specified in RFC 1034 (section 3.5).

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

To commit these changes to permanent storage you must call the [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md) function. In addition, you must call the [SCPreferencesApplyChanges](scpreferencesapplychanges%28__%29.md) function for the new name to become active.

## See Also

### Setting Configuration Information

- [SCPreferencesSetComputerName](scpreferencessetcomputername%28______%29.md): Sets the computer name preference to the specified name.
