> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/sleep(nanoseconds:)](https://developer.apple.com/documentation/swift/task/sleep(nanoseconds:))

# sleep(nanoseconds:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Suspends the current task for at least the given duration in nanoseconds.

## Declaration

```swift
static func sleep(nanoseconds duration: UInt64) async throws
```

<a id="discussion"></a>

## Discussion

If the task is canceled before the time ends, this function throws `CancellationError`.

This function doesn’t block the underlying thread.

## See Also

### Suspending Execution

- [yield()](yield%28%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task and allows other tasks to execute.
- [sleep(for:tolerance:clock:)](sleep%28for_tolerance_clock_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task for the given duration.
- [sleep(until:tolerance:clock:)](sleep%28until_tolerance_clock_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task until the given deadline within a tolerance.
