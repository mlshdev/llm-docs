> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/delay(for:tolerance:scheduler:options:)](https://developer.apple.com/documentation/combine/publisher/delay(for:tolerance:scheduler:options:))

# delay(for:tolerance:scheduler:options:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Delays delivery of all output to the downstream receiver by a specified amount of time on a particular scheduler.

## Declaration

```swift
func delay<S>(for interval: S.SchedulerTimeType.Stride, tolerance: S.SchedulerTimeType.Stride? = nil, scheduler: S, options: S.SchedulerOptions? = nil) -> Publishers.Delay<Self, S> where S : Scheduler
```

## Parameters

- `interval`: The amount of time to delay.
- `tolerance`: The allowed tolerance in delivering delayed events. The `Delay` publisher may deliver elements this much sooner or later than the interval specifies.
- `scheduler`: The scheduler to deliver the delayed events.
- `options`: Options relevant to the scheduler’s behavior.

<a id="return-value"></a>

## Return Value

A publisher that delays delivery of elements and completion to the downstream receiver.

<a id="discussion"></a>

## Discussion

Use [delay(for:tolerance:scheduler:options:)](delay%28for_tolerance_scheduler_options_%29.md) when you need to delay the delivery of elements to a downstream by a specified amount of time.

In this example, a [Timer](../../foundation/timer.md) publishes an event every second. The [delay(for:tolerance:scheduler:options:)](delay%28for_tolerance_scheduler_options_%29.md) operator holds the delivery of the initial element for 3 seconds (±0.5 seconds), after which each element is delivered to the downstream on the main run loop after the specified delay:

```swift
let df = DateFormatter()
df.dateStyle = .none
df.timeStyle = .long
cancellable = Timer.publish(every: 1.0, on: .main, in: .default)
    .autoconnect()
    .handleEvents(receiveOutput: { date in
        print ("Sending Timestamp \'\(df.string(from: date))\' to delay()")
    })
    .delay(for: .seconds(3), scheduler: RunLoop.main, options: .none)
    .sink(
        receiveCompletion: { print ("completion: \($0)", terminator: "\n") },
        receiveValue: { value in
            let now = Date()
            print ("At \(df.string(from: now)) received  Timestamp \'\(df.string(from: value))\' sent: \(String(format: "%.2f", now.timeIntervalSince(value))) secs ago", terminator: "\n")
        }
    )

// Prints:
//    Sending Timestamp '5:02:33 PM PDT' to delay()
//    Sending Timestamp '5:02:34 PM PDT' to delay()
//    Sending Timestamp '5:02:35 PM PDT' to delay()
//    Sending Timestamp '5:02:36 PM PDT' to delay()
//    At 5:02:36 PM PDT received  Timestamp '5:02:33 PM PDT' sent: 3.00 secs ago
//    Sending Timestamp '5:02:37 PM PDT' to delay()
//    At 5:02:37 PM PDT received  Timestamp '5:02:34 PM PDT' sent: 3.00 secs ago
//    Sending Timestamp '5:02:38 PM PDT' to delay()
//    At 5:02:38 PM PDT received  Timestamp '5:02:35 PM PDT' sent: 3.00 secs ago
```

The delay affects the delivery of elements and completion, but not of the original subscription.

## See Also

### Controlling timing

- [measureInterval(using:options:)](measureinterval%28using_options_%29.md): Measures and emits the time interval between events received from an upstream publisher.
- [debounce(for:scheduler:options:)](debounce%28for_scheduler_options_%29.md): Publishes elements only after a specified time interval elapses between events.
- [throttle(for:scheduler:latest:)](throttle%28for_scheduler_latest_%29.md): Publishes either the most-recent or first element published by the upstream publisher in the specified time interval.
- [timeout(\_:scheduler:options:customError:)](timeout%28__scheduler_options_customerror_%29.md): Terminates publishing if the upstream publisher exceeds the specified time interval without producing an element.
