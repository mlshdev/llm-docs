> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/task/yield()](https://developer.apple.com/documentation/swift/task/yield())

# yield()

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Suspends the current task and allows other tasks to execute.

## Declaration

```swift
static func yield() async
```

<a id="discussion"></a>

## Discussion

A task can voluntarily suspend itself in the middle of a long-running operation that doesn’t contain any suspension points, to let other tasks run for a while before execution returns to this task.

If this task is the highest-priority task in the system, the executor immediately resumes execution of the same task. As such, this method isn’t necessarily a way to avoid resource starvation.

## See Also

### Suspending Execution

- [sleep(nanoseconds:)](sleep%28nanoseconds_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task for at least the given duration in nanoseconds.
- [sleep(for:tolerance:clock:)](sleep%28for_tolerance_clock_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task for the given duration.
- [sleep(until:tolerance:clock:)](sleep%28until_tolerance_clock_%29.md): Conforms when `Success` is `Never` and `Failure` is `Never`. Suspends the current task until the given deadline within a tolerance.
