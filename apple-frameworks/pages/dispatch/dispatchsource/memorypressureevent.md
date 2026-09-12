> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/memorypressureevent](https://developer.apple.com/documentation/dispatch/dispatchsource/memorypressureevent)

# DispatchSource.MemoryPressureEvent

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Memory pressure events.

## Declaration

```swift
struct MemoryPressureEvent
```

## Topics

### Memory Pressure Event Flags

- [all](memorypressureevent/all.md): All memory pressure events.
- [normal](memorypressureevent/normal.md): An event indicating that the system memory pressure condition changed to normal.
- [warning](memorypressureevent/warning.md): An event indicating that the system memory pressure condition changed to warning.
- [critical](memorypressureevent/critical.md): An event indicating that the system memory pressure condition changed to critical.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Memory Pressure Source

- [makeMemoryPressureSource(eventMask:queue:)](makememorypressuresource%28eventmask_queue_%29.md): Creates a new dispatch source object that monitors the system for changes in the memory pressure condition.
- [DispatchSourceMemoryPressure](../dispatchsourcememorypressure.md): A dispatch source that monitors the system for changes in the memory pressure condition.
