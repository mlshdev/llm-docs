> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/throttle(for:scheduler:latest:)](https://developer.apple.com/documentation/combine/publisher/throttle(for:scheduler:latest:))

# throttle(for:scheduler:latest:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes either the most-recent or first element published by the upstream publisher in the specified time interval.

## Declaration

```swift
func throttle<S>(for interval: S.SchedulerTimeType.Stride, scheduler: S, latest: Bool) -> Publishers.Throttle<Self, S> where S : Scheduler
```

## Parameters

- `interval`: The interval at which to find and emit either the most recent or the first element, expressed in the time system of the scheduler.
- `scheduler`: The scheduler on which to publish elements.
- `latest`: A Boolean value that indicates whether to publish the most recent element. If `false`, the publisher emits the first element received during the interval.

<a id="return-value"></a>

## Return Value

A publisher that emits either the most-recent or first element received during the specified interval.

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

<a id="discussion"></a>

## Discussion

Use [throttle(for:scheduler:latest:)](throttle%28for_scheduler_latest_%29.md) to selectively republish elements from an upstream publisher during an interval you specify. Other elements received from the upstream in the throttling interval aren’t republished.

In the example below, a [Timer.TimerPublisher](../../foundation/timer/timerpublisher.md) produces elements on one-second intervals; the [throttle(for:scheduler:latest:)](throttle%28for_scheduler_latest_%29.md) operator delivers the first event, then republishes only the latest event in the following ten second intervals:

```swift
cancellable = Timer.publish(every: 3.0, on: .main, in: .default)
    .autoconnect()
    .print("\(Date().description)")
    .throttle(for: 10.0, scheduler: RunLoop.main, latest: true)
    .sink(
        receiveCompletion: { print ("Completion: \($0).") },
        receiveValue: { print("Received Timestamp \($0).") }
     )

// Prints:
 //    Publish at: 2020-03-19 18:26:54 +0000: receive value: (2020-03-19 18:26:57 +0000)
 //    Received Timestamp 2020-03-19 18:26:57 +0000.
 //    Publish at: 2020-03-19 18:26:54 +0000: receive value: (2020-03-19 18:27:00 +0000)
 //    Publish at: 2020-03-19 18:26:54 +0000: receive value: (2020-03-19 18:27:03 +0000)
 //    Publish at: 2020-03-19 18:26:54 +0000: receive value: (2020-03-19 18:27:06 +0000)
 //    Publish at: 2020-03-19 18:26:54 +0000: receive value: (2020-03-19 18:27:09 +0000)
 //    Received Timestamp 2020-03-19 18:27:09 +0000.
```

## See Also

### Controlling timing

- [measureInterval(using:options:)](measureinterval%28using_options_%29.md): Measures and emits the time interval between events received from an upstream publisher.
- [debounce(for:scheduler:options:)](debounce%28for_scheduler_options_%29.md): Publishes elements only after a specified time interval elapses between events.
- [delay(for:tolerance:scheduler:options:)](delay%28for_tolerance_scheduler_options_%29.md): Delays delivery of all output to the downstream receiver by a specified amount of time on a particular scheduler.
- [timeout(\_:scheduler:options:customError:)](timeout%28__scheduler_options_customerror_%29.md): Terminates publishing if the upstream publisher exceeds the specified time interval without producing an element.
