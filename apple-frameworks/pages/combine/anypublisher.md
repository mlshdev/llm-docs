> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anypublisher](https://developer.apple.com/documentation/combine/anypublisher)

# AnyPublisher

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that performs type erasure by wrapping another publisher.

## Declaration

```swift
@frozen struct AnyPublisher<Output, Failure> where Failure : Error
```

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](using-combine-for-your-app-s-asynchronous-code.md)

<a id="overview"></a>

## Overview

[AnyPublisher](anypublisher.md) is a concrete implementation of [Publisher](publisher.md) that has no significant properties of its own, and passes through elements and completion values from its upstream publisher.

Use [AnyPublisher](anypublisher.md) to wrap a publisher whose type has details you don’t want to expose across API boundaries, such as different modules. Wrapping a [Subject](subject.md) with [AnyPublisher](anypublisher.md) also prevents callers from accessing its [send(\_:)](subject/send%28__%29.md) method. When you use type erasure this way, you can change the underlying publisher implementation over time without affecting existing clients.

You can use Combine’s [eraseToAnyPublisher()](publisher/erasetoanypublisher%28%29.md) operator to wrap a publisher with [AnyPublisher](anypublisher.md).

## Topics

### Creating a type-erased publisher

- [init(\_:)](anypublisher/init%28__%29.md): Creates a type-erasing publisher to wrap the provided publisher.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Publisher](publisher.md)

## See Also

### Publishers

- [Publisher](publisher.md): Conforms when `Output` conforms to `Copyable`, `Output` conforms to `Escapable`, and `Failure` conforms to `Error`. Declares that a type can transmit a sequence of values over time.
- [Publishers](publishers.md): A namespace for types that serve as publishers.
- [Published](published.md): A type that publishes a property marked with an attribute.
- [Cancellable](cancellable.md): A protocol indicating that an activity or action supports cancellation.
- [AnyCancellable](anycancellable.md): A type-erasing cancellable object that executes a provided closure when canceled.
