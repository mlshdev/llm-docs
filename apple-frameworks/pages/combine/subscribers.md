> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers](https://developer.apple.com/documentation/combine/subscribers)

# Subscribers

**Framework:** Combine  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A namespace for types that serve as subscribers.

## Declaration

```swift
enum Subscribers
```

## Topics

### Requesting elements

- [Subscribers.Demand](subscribers/demand.md): A requested number of items, sent to a publisher from a subscriber through the subscription.

### Receiving life cycle events

- [Subscribers.Completion](subscribers/completion.md): A signal that a publisher doesn’t produce additional elements, either due to normal completion or an error.

### Using convenience subscribers

- [Subscribers.Sink](subscribers/sink.md): A simple subscriber that requests an unlimited number of values upon subscription.
- [Subscribers.Assign](subscribers/assign.md): A simple subscriber that assigns received elements to a property indicated by a key path.

## See Also

### Subscribers

- [Processing Published Elements with Subscribers](processing-published-elements-with-subscribers.md): Apply back pressure to precisely control when publishers produce elements.
- [Subscriber](subscriber.md): A protocol that declares a type that can receive input from a publisher.
- [AnySubscriber](anysubscriber.md): A type-erasing subscriber.
- [Subscription](subscription.md): A protocol representing the connection of a subscriber to a publisher.
- [Subscriptions](subscriptions.md): A namespace for symbols related to subscriptions.
