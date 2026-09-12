> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/measureinterval(using:options:)](https://developer.apple.com/documentation/combine/publisher/measureinterval(using:options:))

# measureInterval(using:options:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Measures and emits the time interval between events received from an upstream publisher.

## Declaration

```swift
func measureInterval<S>(using scheduler: S, options: S.SchedulerOptions? = nil) -> Publishers.MeasureInterval<Self, S> where S : Scheduler
```

## Parameters

- `scheduler`: A scheduler to use for tracking the timing of events.
- `options`: Options that customize the delivery of elements.

<a id="return-value"></a>

## Return Value

A publisher that emits elements representing the time interval between the elements it receives.

<a id="discussion"></a>

## Discussion

Use [measureInterval(using:options:)](measureinterval%28using_options_%29.md) to measure the time between events delivered from an upstream publisher.

In the example below, a 1-second [Timer](../../foundation/timer.md) is used as the data source for an event publisher; the [measureInterval(using:options:)](measureinterval%28using_options_%29.md) operator reports the elapsed time between the reception of events on the main run loop:

```swift
cancellable = Timer.publish(every: 1, on: .main, in: .default)
    .autoconnect()
    .measureInterval(using: RunLoop.main)
    .sink { print("\($0)", terminator: "\n") }

// Prints:
//      Stride(magnitude: 1.0013610124588013)
//      Stride(magnitude: 0.9992760419845581)
```

The output type of the returned publisher is the time interval of the provided scheduler.

This operator uses the provided scheduler’s [now](../scheduler/now.md) property to measure intervals between events.

## See Also

### Controlling timing

- [debounce(for:scheduler:options:)](debounce%28for_scheduler_options_%29.md): Publishes elements only after a specified time interval elapses between events.
- [delay(for:tolerance:scheduler:options:)](delay%28for_tolerance_scheduler_options_%29.md): Delays delivery of all output to the downstream receiver by a specified amount of time on a particular scheduler.
- [throttle(for:scheduler:latest:)](throttle%28for_scheduler_latest_%29.md): Publishes either the most-recent or first element published by the upstream publisher in the specified time interval.
- [timeout(\_:scheduler:options:customError:)](timeout%28__scheduler_options_customerror_%29.md): Terminates publishing if the upstream publisher exceeds the specified time interval without producing an element.
