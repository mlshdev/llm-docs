> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencesschedulewithrunloop(_:_:_:))

# SCPreferencesScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.

## Declaration

```swift
func SCPreferencesScheduleWithRunLoop(_ prefs: SCPreferences, _ runLoop: CFRunLoop, _ runLoopMode: CFString) -> Bool
```

## Parameters

- `prefs`: The preferences session.
- `runLoop`: The run loop on which the notification should be scheduled. Do not pass `NULL`.
- `runLoopMode`: The run loop mode with which to schedule the notification. Do not pass `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notifications are successfully scheduled; otherwise, `FALSE`.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback(\_:\_:\_:)](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesUnscheduleFromRunLoop(\_:\_:\_:)](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
- [SCPreferencesSetDispatchQueue(\_:\_:)](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.

# SCPreferencesScheduleWithRunLoop (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.4+

Schedules commit and apply notifications for the specified preferences session using the specified run loop and mode.

## Declaration

```objectivec
Boolean SCPreferencesScheduleWithRunLoop(SCPreferencesRef prefs, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `prefs`: The preferences session.
- `runLoop`: The run loop on which the notification should be scheduled. Do not pass `NULL`.
- `runLoopMode`: The run loop mode with which to schedule the notification. Do not pass `NULL`.

<a id="return-value"></a>

## Return Value

`TRUE` if the notifications are successfully scheduled; otherwise, `FALSE`.

## See Also

### Managing Notifications and Callbacks

- [SCPreferencesSetCallback](scpreferencessetcallback%28______%29.md): Assigns the specified callback to the specified preferences session.
- [SCPreferencesUnscheduleFromRunLoop](scpreferencesunschedulefromrunloop%28______%29.md): Unschedules commit and apply notifications for the specified preferences session from the specified run loop and mode.
- [SCPreferencesSetDispatchQueue](scpreferencessetdispatchqueue%28____%29.md): Schedules commit and apply notifications for the specified preferences session using the specified dispatch queue.
