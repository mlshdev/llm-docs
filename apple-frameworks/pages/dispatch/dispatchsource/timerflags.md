> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/timerflags](https://developer.apple.com/documentation/dispatch/dispatchsource/timerflags)

# DispatchSource.TimerFlags

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags to use when configuring a timer dispatch source.

## Declaration

```swift
struct TimerFlags
```

## Topics

### Timer Flags

- [strict](timerflags/strict.md): The system makes its best effort to observe the timer’s specified leeway value, even if the value is smaller than the default leeway.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Timer Source

- [makeTimerSource(flags:queue:)](maketimersource%28flags_queue_%29.md): Creates a new dispatch source object for monitoring timer events.
- [DispatchSourceTimer](../dispatchsourcetimer.md): A dispatch source that submits the event handler block based on a timer.
