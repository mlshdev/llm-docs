> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/connectablepublisher/autoconnect()](https://developer.apple.com/documentation/combine/connectablepublisher/autoconnect())

# autoconnect()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Automates the process of connecting or disconnecting from this connectable publisher.

## Declaration

```swift
func autoconnect() -> Publishers.Autoconnect<Self>
```

<a id="return-value"></a>

## Return Value

A publisher which automatically connects to its upstream connectable publisher.

## Mentioned In

- [Controlling Publishing with Connectable Publishers](../controlling-publishing-with-connectable-publishers.md)
- [Replacing Foundation Timers with Timer Publishers](../replacing-foundation-timers-with-timer-publishers.md)

<a id="discussion"></a>

## Discussion

Use [autoconnect()](autoconnect%28%29.md) to simplify working with [ConnectablePublisher](../connectablepublisher.md) instances, such as [Timer.TimerPublisher](../../foundation/timer/timerpublisher.md) in the Foundation framework.

In the following example, the [publish(every:tolerance:on:in:options:)](../../foundation/timer/publish%28every_tolerance_on_in_options_%29.md) operator creates a [Timer.TimerPublisher](../../foundation/timer/timerpublisher.md), which is a [ConnectablePublisher](../connectablepublisher.md). As a result, subscribers don’t receive any values until after a call to [connect()](connect%28%29.md). For convenience when working with a single subscriber, the [autoconnect()](autoconnect%28%29.md) operator performs the [connect()](connect%28%29.md) call when attached to by the subscriber.

```swift
cancellable = Timer.publish(every: 1, on: .main, in: .default)
    .autoconnect()
    .sink { date in
        print ("Date now: \(date)")
    }
```
