> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/publish(every:tolerance:on:in:options:)](https://developer.apple.com/documentation/foundation/timer/publish(every:tolerance:on:in:options:))

# publish(every:tolerance:on:in:options:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a publisher that repeatedly emits the current date on the given interval.

## Declaration

```swift
static func publish(every interval: TimeInterval, tolerance: TimeInterval? = nil, on runLoop: RunLoop, in mode: RunLoop.Mode, options: RunLoop.SchedulerOptions? = nil) -> Timer.TimerPublisher
```

## Parameters

- `interval`: The time interval on which to publish events. For example, a value of `0.5` publishes an event approximately every half-second.
- `tolerance`: The allowed timing variance when emitting events. Defaults to `nil`, which allows any variance.
- `runLoop`: The run loop on which the timer runs.
- `mode`: The run loop mode in which to run the timer.
- `options`: Scheduler options passed to the timer. Defaults to `nil`.

<a id="return-value"></a>

## Return Value

A publisher that repeatedly emits the current date on the given interval.

<a id="Discussion"></a>

## Discussion

The return type, [Timer.TimerPublisher](timerpublisher.md), conforms to [ConnectablePublisher](../../combine/connectablepublisher.md), which means you must explicitly connect to the [Timer](../timer.md) publisher to begin publishing events. You can do this with a call to [connect()](../../combine/connectablepublisher/connect%28%29.md), or by using [autoconnect()](../../combine/connectablepublisher/autoconnect%28%29.md) to automatically connect when a subscriber attaches, as shown here:

```swift
cancellable = Timer.publish(every: 1, on: .main, in: .common)
    .autoconnect()
    .sink() {
        print ("timer fired: \($0)")
}

```

## Topics

### Creating a Timer Publisher

- [init(interval:tolerance:runLoop:mode:options:)](timerpublisher/init%28interval_tolerance_runloop_mode_options_%29.md): Creates a publisher that repeatedly emits the current date on the given interval.

## See Also

### Firing Messages as a Combine Publisher

- [Timer.TimerPublisher](timerpublisher.md): A publisher that repeatedly emits the current date on a given interval.
