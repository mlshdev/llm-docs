> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/anysubscriber](https://developer.apple.com/documentation/combine/anysubscriber)

# AnySubscriber

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erasing subscriber.

## Declaration

```swift
@frozen struct AnySubscriber<Input, Failure> where Failure : Error
```

<a id="overview"></a>

## Overview

Use an [AnySubscriber](anysubscriber.md) to wrap an existing subscriber whose details you don’t want to expose. You can also use [AnySubscriber](anysubscriber.md) to create a custom subscriber by providing closures for the methods defined in [Subscriber](subscriber.md), rather than implementing [Subscriber](subscriber.md) directly.

## Topics

### Creating a type-erased subscriber

- [init(\_:)](anysubscriber/init%28__%29-2dbfs.md): Creates a type-erasing subscriber to wrap an existing subscriber.
- [init(\_:)](anysubscriber/init%28__%29-3t3eh.md): Creates a type-erasing subscriber to wrap an existing subscriber.
- [init(receiveSubscription:receiveValue:receiveCompletion:)](anysubscriber/init%28receivesubscription_receivevalue_receivecompletion_%29.md): Creates a type-erasing subscriber that executes the provided closures.

## Relationships

### Conforms To

- [CustomCombineIdentifierConvertible](customcombineidentifierconvertible.md)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Subscriber](subscriber.md)

## See Also

### Subscribers

- [Processing Published Elements with Subscribers](processing-published-elements-with-subscribers.md): Apply back pressure to precisely control when publishers produce elements.
- [Subscriber](subscriber.md): A protocol that declares a type that can receive input from a publisher.
- [Subscribers](subscribers.md): A namespace for types that serve as subscribers.
- [Subscription](subscription.md): A protocol representing the connection of a subscriber to a publisher.
- [Subscriptions](subscriptions.md): A namespace for symbols related to subscriptions.
