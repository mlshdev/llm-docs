> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actioneventtype/skipped](https://developer.apple.com/documentation/realitykit/actioneventtype/skipped)

# skipped

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An event that takes place when the system misses an action event’s time interval.

## Declaration

```swift
static var skipped: ActionEventType { get }
```

<a id="discussion"></a>

## Discussion

RealityKit generates a skip event under the following conditions:

- The current time is greater than or equal to the event’s ending time.
- The previous frame’s time is less than the event’s starting time.

## See Also

### Event types

- [started](started.md): An event that takes place when a new action event begins.
- [ended](ended.md): An event that takes place when the action event exits its time interval.
- [paused](paused.md): An event that takes place when the animation pauses.
- [resumed](resumed.md): An event that takes place when the animation resumes after a pause.
- [updated](updated.md): An event that takes place after an action event starts and is within its time interval.
- [terminated](terminated.md): An event that takes place when the animation ends.
