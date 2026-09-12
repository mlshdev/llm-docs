> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dasessionunschedulefromrunloop(_:_:_:)](https://developer.apple.com/documentation/diskarbitration/dasessionunschedulefromrunloop(_:_:_:))

# DASessionUnscheduleFromRunLoop(\_:\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Unschedules the session from a run loop.

## Declaration

```swift
func DASessionUnscheduleFromRunLoop(_ session: DASession, _ runLoop: CFRunLoop, _ runLoopMode: CFString)
```

## Parameters

- `session`: The session which is being unscheduled.
- `runLoop`: The run loop on which the session is scheduled.
- `runLoopMode`: The run loop mode in which the session is scheduled.

## See Also

### Miscellaneous

- [DASessionCreate(\_:)](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionGetTypeID()](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionScheduleWithRunLoop(\_:\_:\_:)](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionSetDispatchQueue(\_:\_:)](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.

# DASessionUnscheduleFromRunLoop (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Unschedules the session from a run loop.

## Declaration

```objectivec
extern void DASessionUnscheduleFromRunLoop(DASessionRef session, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `session`: The session which is being unscheduled.
- `runLoop`: The run loop on which the session is scheduled.
- `runLoopMode`: The run loop mode in which the session is scheduled.

## See Also

### Miscellaneous

- [DASessionCreate](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionGetTypeID](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionScheduleWithRunLoop](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionSetDispatchQueue](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
