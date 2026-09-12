> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/continuousclock](https://developer.apple.com/documentation/swift/continuousclock)

# ContinuousClock

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A clock that measures time that always increments and does not stop incrementing while the system is asleep.

## Declaration

```swift
struct ContinuousClock
```

<a id="overview"></a>

## Overview

`ContinuousClock` can be considered as a stopwatch style time. The frame of reference of the `Instant` may be bound to process launch, machine boot or some other locally defined reference point. This means that the instants are only comparable locally during the execution of a program.

This clock is suitable for high resolution measurements of execution.

## Topics

### Structures

- [ContinuousClock.Instant](continuousclock/instant.md): A continuous point in time used for `ContinuousClock`.

### Initializers

- [init()](continuousclock/init%28%29.md)

### Instance Properties

- [systemEpoch](continuousclock/systemepoch.md)

### Type Properties

- [now](continuousclock/now-swift.type.property.md): The current continuous instant.

### Default Implementations

- [Clock Implementations](continuousclock/clock-implementations.md)

## Relationships

### Conforms To

- [Clock](clock.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Clocks

- [Clock](clock.md): A mechanism in which to measure time, and delay work until a given point in time.
- [SuspendingClock](suspendingclock.md): A clock that measures time that always increments but stops incrementing while the system is asleep.
