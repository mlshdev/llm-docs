> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actioneventtype/terminated](https://developer.apple.com/documentation/realitykit/actioneventtype/terminated)

# terminated

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An event that takes place when the animation ends.

## Declaration

```swift
static var terminated: ActionEventType { get }
```

## See Also

### Event types

- [started](started.md): An event that takes place when a new action event begins.
- [ended](ended.md): An event that takes place when the action event exits its time interval.
- [paused](paused.md): An event that takes place when the animation pauses.
- [resumed](resumed.md): An event that takes place when the animation resumes after a pause.
- [updated](updated.md): An event that takes place after an action event starts and is within its time interval.
- [skipped](skipped.md): An event that takes place when the system misses an action event’s time interval.
