> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dasessiongettypeid()](https://developer.apple.com/documentation/diskarbitration/dasessiongettypeid())

# DASessionGetTypeID() (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Returns the type identifier of all DASession instances.

## Declaration

```swift
func DASessionGetTypeID() -> CFTypeID
```

## See Also

### Miscellaneous

- [DASessionCreate(\_:)](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionScheduleWithRunLoop(\_:\_:\_:)](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionSetDispatchQueue(\_:\_:)](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
- [DASessionUnscheduleFromRunLoop(\_:\_:\_:)](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.

# DASessionGetTypeID (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Returns the type identifier of all DASession instances.

## Declaration

```objectivec
extern CFTypeID DASessionGetTypeID();
```

## See Also

### Miscellaneous

- [DASessionCreate](dasessioncreate%28__%29.md): Creates a new session.
- [DASessionScheduleWithRunLoop](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionSetDispatchQueue](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
- [DASessionUnscheduleFromRunLoop](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.
