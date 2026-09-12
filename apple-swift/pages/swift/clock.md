> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/clock](https://developer.apple.com/documentation/swift/clock)

# Clock

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A mechanism in which to measure time, and delay work until a given point in time.

## Declaration

```swift
protocol Clock<Duration> : Sendable
```

<a id="overview"></a>

## Overview

Types that conform to the `Clock` protocol define a concept of “now” which is the specific instant in time that property is accessed. Any pair of calls to the `now` property may have a minimum duration between them - this minimum resolution is exposed by the `minimumResolution` property to inform any user of the type the expected granularity of accuracy.

One of the primary uses for clocks is to schedule task sleeping. This method resumes the calling task after a given deadline has been met or passed with a given tolerance value. The tolerance is expected as a leeway around the deadline. The clock may reschedule tasks within the tolerance to ensure efficient execution of resumptions by reducing potential operating system wake-ups. If no tolerance is specified (i.e. nil is passed in) the sleep function is expected to schedule with a default tolerance strategy.

For more information about specific clocks see `ContinuousClock` and `SuspendingClock`.

## Topics

### Associated Types

- [Duration](clock/duration.md)
- [Instant](clock/instant.md)

### Instance Properties

- [minimumResolution](clock/minimumresolution.md)
- [now](clock/now.md)

### Instance Methods

- [measure(\_:)](clock/measure%28__%29-2emvx.md): Measure the elapsed time to execute a closure.
- [measure(\_:)](clock/measure%28__%29-7l47m.md): Measure the elapsed time to execute an asynchronous closure.
- [measure(isolation:\_:)](clock/measure%28isolation___%29.md): Deprecated.
- [sleep(for:tolerance:)](clock/sleep%28for_tolerance_%29.md): Suspends for the given duration.
- [sleep(until:tolerance:)](clock/sleep%28until_tolerance_%29.md)

### Type Properties

- [continuous](clock/continuous.md): Conforms when `Self` is `ContinuousClock`. A clock that measures time that always increments but does not stop incrementing while the system is asleep.
- [suspending](clock/suspending.md): Conforms when `Self` is `SuspendingClock`. A clock that measures time that always increments but stops incrementing while the system is asleep.

## Relationships

### Inherits From

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

### Conforming Types

- [ContinuousClock](continuousclock.md)
- [SuspendingClock](suspendingclock.md)

## See Also

### Clocks

- [ContinuousClock](continuousclock.md): A clock that measures time that always increments and does not stop incrementing while the system is asleep.
- [SuspendingClock](suspendingclock.md): A clock that measures time that always increments but stops incrementing while the system is asleep.
