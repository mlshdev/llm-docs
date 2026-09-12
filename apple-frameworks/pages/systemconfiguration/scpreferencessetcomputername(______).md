> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencessetcomputername(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencessetcomputername(_:_:_:))

# SCPreferencesSetComputerName(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Sets the computer name preference to the specified name.

## Declaration

```swift
func SCPreferencesSetComputerName(_ prefs: SCPreferences, _ name: CFString?, _ nameEncoding: CFStringEncoding) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `name`: The computer name.
- `nameEncoding`: The encoding associated with the computer name.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

To commit these changes to permanent storage you must call the [SCPreferencesCommitChanges(\_:)](scpreferencescommitchanges%28__%29.md) function. In addition, you must call the [SCPreferencesApplyChanges(\_:)](scpreferencesapplychanges%28__%29.md) function for the new name to become active.

## See Also

### Setting Configuration Information

- [SCPreferencesSetLocalHostName(\_:\_:)](scpreferencessetlocalhostname%28____%29.md): Sets the local host name to the specified name.

# SCPreferencesSetComputerName (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Sets the computer name preference to the specified name.

## Declaration

```objectivec
Boolean SCPreferencesSetComputerName(SCPreferencesRef prefs, CFStringRef name, CFStringEncoding nameEncoding);
```

## Parameters

- `prefs`: The preferences session.
- `name`: The computer name.
- `nameEncoding`: The encoding associated with the computer name.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

To commit these changes to permanent storage you must call the [SCPreferencesCommitChanges](scpreferencescommitchanges%28__%29.md) function. In addition, you must call the [SCPreferencesApplyChanges](scpreferencesapplychanges%28__%29.md) function for the new name to become active.

## See Also

### Setting Configuration Information

- [SCPreferencesSetLocalHostName](scpreferencessetlocalhostname%28____%29.md): Sets the local host name to the specified name.
