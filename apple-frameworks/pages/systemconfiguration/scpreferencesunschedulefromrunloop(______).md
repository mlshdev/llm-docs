> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesunschedulefromrunloop(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesunschedulefromrunloop(_:_:_:))

# SCPreferencesUnscheduleFromRunLoop(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.

## Declaration

```swift
func SCPreferencesUnscheduleFromRunLoop(_ prefs: SCPreferences, _ runLoop: CFRunLoop, _ runLoopMode: CFString) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `runLoop`: The run loop from which the notification should be unscheduled. Do not pass `NULL`.
- `runLoopMode`: The run loop mode associated with the scheduled notification. Do not pass `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notifications are successfully unscheduled; otherwise, `FALSE`.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback(\_:\_:\_:)](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesScheduleWithRunLoop(\_:\_:\_:)](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesSetDispatchQueue(\_:\_:)](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

# SCPreferencesUnscheduleFromRunLoop (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.

## Declaration

```objectivec
Boolean SCPreferencesUnscheduleFromRunLoop(SCPreferencesRef prefs, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `prefs`: The preferences session.
- `runLoop`: The run loop from which the notification should be unscheduled. Do not pass `NULL`.
- `runLoopMode`: The run loop mode associated with the scheduled notification. Do not pass `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notifications are successfully unscheduled; otherwise, `FALSE`.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesScheduleWithRunLoop](scpreferencesschedulewithrunloop%28______%29.md): Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.
- [SCPreferencesSetDispatchQueue](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.
