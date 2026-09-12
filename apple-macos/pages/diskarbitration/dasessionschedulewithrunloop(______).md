> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dasessionschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/diskarbitration/dasessionschedulewithrunloop(_:_:_:))

# DASessionScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Schedules the session on a run loop.

## Declaration

```swift
func DASessionScheduleWithRunLoop(_ session: DASession, _ runLoop: CFRunLoop, _ runLoopMode: CFString)
```

## Parameters

- `session`: The session which is being scheduled.
- `runLoop`: The run loop on which the session should be scheduled.
- `runLoopMode`: The run loop mode in which the session should be scheduled.

## See Also

### Miscellaneous

- [DASessionCreate(\_:)](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionGetTypeID()](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionSetDispatchQueue(\_:\_:)](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
- [DASessionUnscheduleFromRunLoop(\_:\_:\_:)](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.

# DASessionScheduleWithRunLoop (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Schedules the session on a run loop.

## Declaration

```objectivec
extern void DASessionScheduleWithRunLoop(DASessionRef session, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `session`: The session which is being scheduled.
- `runLoop`: The run loop on which the session should be scheduled.
- `runLoopMode`: The run loop mode in which the session should be scheduled.

## See Also

### Miscellaneous

- [DASessionCreate](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionGetTypeID](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionSetDispatchQueue](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
- [DASessionUnscheduleFromRunLoop](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.
