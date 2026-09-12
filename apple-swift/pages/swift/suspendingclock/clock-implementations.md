> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/suspendingclock/clock-implementations](https://developer.apple.com/documentation/swift/suspendingclock/clock-implementations)

# Clock Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [minimumResolution](minimumresolution.md): The minimum non-zero resolution between any two calls to `now`.
- [now](now-swift.property.md): The current instant accounting for machine suspension.

### Instance Methods

- [measure(\_:)](measure%28__%29-1zuvn.md): Measure the elapsed time to execute an asynchronous closure.
- [measure(\_:)](measure%28__%29-6nlcy.md): Measure the elapsed time to execute a closure.
- [measure(isolation:\_:)](measure%28isolation___%29.md): Deprecated.
- [sleep(for:tolerance:)](sleep%28for_tolerance_%29.md): Suspends for the given duration.
- [sleep(until:tolerance:)](sleep%28until_tolerance_%29.md): Suspend task execution until a given deadline within a tolerance. If no tolerance is specified then the system may adjust the deadline to coalesce CPU wake-ups to more efficiently process the wake-ups in a more power efficient manner.

### Type Aliases

- [SuspendingClock.Duration](duration.md)

### Type Properties

- [suspending](suspending.md): Conforms when `Self` is `SuspendingClock`. A clock that measures time that always increments but stops incrementing while the system is asleep.
