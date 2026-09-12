> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/cancellable](https://developer.apple.com/documentation/combine/cancellable)

# Cancellable

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol indicating that an activity or action supports cancellation.

## Declaration

```swift
protocol Cancellable
```

## Mentioned In

- [Receiving and Handling Events with Combine](receiving-and-handling-events-with-combine.md)
- [Controlling Publishing with Connectable Publishers](controlling-publishing-with-connectable-publishers.md)

<a id="overview"></a>

## Overview

Calling [cancel()](cancellable/cancel%28%29.md) frees up any allocated resources. It also stops side effects such as timers, network access, or disk I/O.

## Topics

### Canceling actions

- [cancel()](cancellable/cancel%28%29.md): Cancel the activity.

### Storing instances

- [store(in:)](cancellable/store%28in_%29-35vnt.md): Stores this cancellable instance in the specified collection.
- [store(in:)](cancellable/store%28in_%29-95sfl.md): Stores this cancellable instance in the specified set.

### Instance Methods

- [storeWhileEntityActive(\_:)](cancellable/storewhileentityactive%28__%29.md): Retains the `Cancellable` as long as the entity is active (see `Entity.isActive`). If the entity is deactivated, the `Cancellable` is released.

## Relationships

### Inherited By

- [Subscription](subscription.md)

### Conforming Types

- [AnyCancellable](anycancellable.md)
- [Subscribers.Assign](subscribers/assign.md)
- [Subscribers.Sink](subscribers/sink.md)

## See Also

### Publishers

- [Publisher](publisher.md): Declares that a type can transmit a sequence of values over time.
- [Publishers](publishers.md): A namespace for types that serve as publishers.
- [AnyPublisher](anypublisher.md): A publisher that performs type erasure by wrapping another publisher.
- [Published](published.md): A type that publishes a property marked with an attribute.
- [AnyCancellable](anycancellable.md): A type-erasing cancellable object that executes a provided closure when canceled.
