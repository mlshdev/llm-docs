> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencessetdispatchqueue(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencessetdispatchqueue(_:_:))

# SCPreferencesSetDispatchQueue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.6+

Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

## Declaration

```swift
func SCPreferencesSetDispatchQueue(_ prefs: SCPreferences, _ queue: dispatch_queue_t?) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `queue`: The dispatch queue on which to run the callback function.

<a id="return-value"></a>

## Return Value

`TRUE` if the notifications are successfully scheduled; otherwise, `FALSE`.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback(\_:\_:\_:)](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesScheduleWithRunLoop(\_:\_:\_:)](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesUnscheduleFromRunLoop(\_:\_:\_:)](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.

# SCPreferencesSetDispatchQueue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.6+

Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

## Declaration

```objectivec
Boolean SCPreferencesSetDispatchQueue(SCPreferencesRef prefs, dispatch_queue_t queue);
```

## Parameters

- `prefs`: The preferences session.
- `queue`: The dispatch queue on which to run the callback function.

<a id="return-value"></a>

## Return Value

`TRUE` if the notifications are successfully scheduled; otherwise, `FALSE`.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesScheduleWithRunLoop](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesUnscheduleFromRunLoop](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
