> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencessetcallback(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencessetcallback(_:_:_:))

# SCPreferencesSetCallback(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Assigns the specified callback to the specified preferences session.

## Declaration

```swift
func SCPreferencesSetCallback(_ prefs: SCPreferences, _ callout: SCPreferencesCallBack?, _ context: UnsafeMutablePointer<SCPreferencesContext>?) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `callout`: The function to be called when the preferences have been changed or applied. If `NULL`, the current callback is removed.
- `context`: The context associated with the callback function. See [SCPreferencesContext](scpreferencescontext.md) for more information about this structure.

<a id="return-value"></a>

## Return Value

`TRUE` if the callback was successfully associated with the preferences session; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

This function is called when the changes to the preferences have been committed or applied.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesScheduleWithRunLoop(\_:\_:\_:)](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesUnscheduleFromRunLoop(\_:\_:\_:)](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
- [SCPreferencesSetDispatchQueue(\_:\_:)](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

# SCPreferencesSetCallback (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Assigns the specified callback to the specified preferences session.

## Declaration

```objectivec
Boolean SCPreferencesSetCallback(SCPreferencesRef prefs, SCPreferencesCallBack callout, SCPreferencesContext *context);
```

## Parameters

- `prefs`: The preferences session.
- `callout`: The function to be called when the preferences have been changed or applied. If `NULL`, the current callback is removed.
- `context`: The context associated with the callback function. See [SCPreferencesContext](scpreferencescontext.md) for more information about this structure.

<a id="return-value"></a>

## Return Value

`TRUE` if the callback was successfully associated with the preferences session; otherwise, `FALSE`.

<a id="Discussion"></a>

## Discussion

This function is called when the changes to the preferences have been committed or applied.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesScheduleWithRunLoop](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesUnscheduleFromRunLoop](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
- [SCPreferencesSetDispatchQueue](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.
