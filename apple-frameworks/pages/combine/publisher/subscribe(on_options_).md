> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/subscribe(on:options:)](https://developer.apple.com/documentation/combine/publisher/subscribe(on:options:))

# subscribe(on:options:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies the scheduler on which to perform subscribe, cancel, and request operations.

## Declaration

```swift
func subscribe<S>(on scheduler: S, options: S.SchedulerOptions? = nil) -> Publishers.SubscribeOn<Self, S> where S : Scheduler
```

## Parameters

- `scheduler`: The scheduler used to send messages to upstream publishers.
- `options`: Options that customize the delivery of elements.

<a id="return-value"></a>

## Return Value

A publisher which performs upstream operations on the specified scheduler.

<a id="discussion"></a>

## Discussion

In contrast with [receive(on:options:)](receive%28on_options_%29.md), which affects downstream messages, [subscribe(on:options:)](subscribe%28on_options_%29.md) changes the execution context of upstream messages.

In the following example, the [subscribe(on:options:)](subscribe%28on_options_%29.md) operator causes `ioPerformingPublisher` to receive requests on `backgroundQueue`, while the [receive(on:options:)](receive%28on_options_%29.md) causes `uiUpdatingSubscriber` to receive elements and completion on `RunLoop.main`.

```swift
let ioPerformingPublisher == // Some publisher.
let uiUpdatingSubscriber == // Some subscriber that updates the UI.

ioPerformingPublisher
    .subscribe(on: backgroundQueue)
    .receive(on: RunLoop.main)
    .subscribe(uiUpdatingSubscriber)
```

Using [subscribe(on:options:)](subscribe%28on_options_%29.md) also causes the upstream publisher to perform [cancel()](../cancellable/cancel%28%29.md) using the specfied scheduler.

## See Also

### Specifying schedulers

- [receive(on:options:)](receive%28on_options_%29.md): Specifies the scheduler on which to receive elements from the publisher.
