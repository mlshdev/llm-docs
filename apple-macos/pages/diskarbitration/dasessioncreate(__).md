> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dasessioncreate(_:)](https://developer.apple.com/documentation/diskarbitration/dasessioncreate(_:))

# DASessionCreate(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Creates a new session.

## Declaration

```swift
func DASessionCreate(_ allocator: CFAllocator?) -> DASession?
```

<a id="return-value"></a>

## Return Value

A reference to a new DASession.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it.

## See Also

### Miscellaneous

- [DASessionGetTypeID()](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionScheduleWithRunLoop(\_:\_:\_:)](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionSetDispatchQueue(\_:\_:)](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
- [DASessionUnscheduleFromRunLoop(\_:\_:\_:)](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.

# DASessionCreate (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Creates a new session.

## Declaration

```objectivec
extern DASessionRefDASessionCreate(CFAllocatorRef allocator);
```

<a id="return-value"></a>

## Return Value

A reference to a new DASession.

<a id="Discussion"></a>

## Discussion

The caller of this function receives a reference to the returned object. The caller also implicitly retains the object and is responsible for releasing it.

## See Also

### Miscellaneous

- [DASessionGetTypeID](dasessiongettypeid%28%29.md): Returns the type identifier of all DASession instances.
- [DASessionScheduleWithRunLoop](dasessionschedulewithrunloop%28______%29.md): Schedules the session on a run loop.
- [DASessionSetDispatchQueue](dasessionsetdispatchqueue%28____%29.md): Schedules the session on a dispatch queue.
- [DASessionUnscheduleFromRunLoop](dasessionunschedulefromrunloop%28______%29.md): Unschedules the session from a run loop.
