> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anycancellable](https://developer.apple.com/documentation/combine/anycancellable)

# AnyCancellable

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erasing cancellable object that executes a provided closure when canceled.

## Declaration

```swift
final class AnyCancellable
```

## Mentioned In

- [Controlling Publishing with Connectable Publishers](controlling-publishing-with-connectable-publishers.md)

<a id="overview"></a>

## Overview

Subscriber implementations can use this type to provide a “cancellation token” that makes it possible for a caller to cancel a publisher, but not to use the [Subscription](subscription.md) object to request items.

An [AnyCancellable](anycancellable.md) instance automatically calls [cancel()](cancellable/cancel%28%29.md) when deinitialized.

## Topics

### Creating a type-erased cancellable

- [init(\_:)](anycancellable/init%28__%29-3icn3.md): Initializes the cancellable object with the given cancel-time closure.
- [init(\_:)](anycancellable/init%28__%29-48fh3.md)

### Storing instances

- [store(in:)](anycancellable/store%28in_%29-6cr9i.md): Stores this type-erasing cancellable instance in the specified collection.
- [store(in:)](anycancellable/store%28in_%29-3hyxs.md): Stores this type-erasing cancellable instance in the specified set.

### Operators

- [==(\_:\_:)](anycancellable/==%28____%29.md): Returns a Boolean value that indicates whether two instances are equal, as determined by comparing whether their references point to the same instance.

## Relationships

### Conforms To

- [Cancellable](cancellable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Publishers

- [Publisher](publisher.md): Declares that a type can transmit a sequence of values over time.
- [Publishers](publishers.md): A namespace for types that serve as publishers.
- [AnyPublisher](anypublisher.md): A publisher that performs type erasure by wrapping another publisher.
- [Published](published.md): A type that publishes a property marked with an attribute.
- [Cancellable](cancellable.md): A protocol indicating that an activity or action supports cancellation.
