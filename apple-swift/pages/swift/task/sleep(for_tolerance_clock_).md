> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/sleep(for:tolerance:clock:)](https://developer.apple.com/documentation/swift/task/sleep(for:tolerance:clock:))

# sleep(for:tolerance:clock:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Suspends the current task for the given duration.

## Declaration

```swift
static func sleep<C>(for duration: C.Instant.Duration, tolerance: C.Instant.Duration? = nil, clock: C = .continuous) async throws where C : Clock
```

<a id="discussion"></a>

## Discussion

If the task is canceled before the time ends, this function throws `CancellationError`.

This function doesn’t block the underlying thread.

```swift
  try await Task.sleep(for: .seconds(3))
```

## See Also

### Suspending Execution

- [yield()](yield%28%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task and allows other tasks to execute.
- [sleep(nanoseconds:)](sleep%28nanoseconds_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task for at least the given duration in nanoseconds.
- [sleep(until:tolerance:clock:)](sleep%28until_tolerance_clock_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task until the given deadline within a tolerance.
