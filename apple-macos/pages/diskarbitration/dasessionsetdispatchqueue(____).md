> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dasessionsetdispatchqueue(_:_:)](https://developer.apple.com/documentation/diskarbitration/dasessionsetdispatchqueue(_:_:))

# DASessionSetDispatchQueue(\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Schedules the session on a dispatch queue.

## Declaration

```swift
func DASessionSetDispatchQueue(_ session: DASession, _ queue: dispatch_queue_t?)
```

## Parameters

- `session`: The session which is being scheduled.
- `queue`: The dispatch queue on which the session should be scheduled. Pass NULL to unschedule.

## See Also

### Miscellaneous

- [DASessionCreate(\_:)](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionGetTypeID()](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionScheduleWithRunLoop(\_:\_:\_:)](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionUnscheduleFromRunLoop(\_:\_:\_:)](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.

# DASessionSetDispatchQueue (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Schedules the session on a dispatch queue.

## Declaration

```objectivec
extern void DASessionSetDispatchQueue(DASessionRef session, dispatch_queue_t queue);
```

## Parameters

- `session`: The session which is being scheduled.
- `queue`: The dispatch queue on which the session should be scheduled. Pass NULL to unschedule.

## See Also

### Miscellaneous

- [DASessionCreate](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionGetTypeID](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionScheduleWithRunLoop](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionUnscheduleFromRunLoop](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.
