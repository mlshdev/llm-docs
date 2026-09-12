> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/continuousclock/clock-implementations](https://developer.apple.com/documentation/swift/continuousclock/clock-implementations)

# Clock Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Instance Properties

- [minimumResolution](minimumresolution.md): The minimum non-zero resolution between any two calls to `now`.
- [now](now-swift.property.md): The current continuous instant.

### Instance Methods

- [measure(\_:)](measure%28__%29-73b0n.md): Measure the elapsed time to execute a closure.
- [measure(\_:)](measure%28__%29-9npzl.md): Measure the elapsed time to execute an asynchronous closure.
- [measure(isolation:\_:)](measure%28isolation___%29.md): Deprecated.
- [sleep(for:tolerance:)](sleep%28for_tolerance_%29.md): Suspends for the given duration.
- [sleep(until:tolerance:)](sleep%28until_tolerance_%29.md): Suspend task execution until a given deadline within a tolerance. If no tolerance is specified then the system may adjust the deadline to coalesce CPU wake-ups to more efficiently process the wake-ups in a more power efficient manner.

### Type Aliases

- [ContinuousClock.Duration](duration.md)

### Type Properties

- [continuous](continuous.md): Conforms when `Self` is `ContinuousClock`. A clock that measures time that always increments but does not stop incrementing while the system is asleep.
