> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/timerpublisher/init(interval:tolerance:runloop:mode:options:)](https://developer.apple.com/documentation/foundation/timer/timerpublisher/init(interval:tolerance:runloop:mode:options:))

# init(interval:tolerance:runLoop:mode:options:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that repeatedly emits the current date on the given interval.

## Declaration

```swift
init(interval: TimeInterval, tolerance: TimeInterval? = nil, runLoop: RunLoop, mode: RunLoop.Mode, options: RunLoop.SchedulerOptions? = nil)
```

## Parameters

- `interval`: The interval on which to publish events.
- `tolerance`: The allowed timing variance when emitting events. Defaults to `nil`, which allows any variance.
- `runLoop`: The run loop on which the timer runs.
- `mode`: The run loop mode in which to run the timer.
- `options`: Scheduler options passed to the timer. Defaults to `nil`.
