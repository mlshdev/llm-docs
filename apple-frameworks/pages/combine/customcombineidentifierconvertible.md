> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/customcombineidentifierconvertible](https://developer.apple.com/documentation/combine/customcombineidentifierconvertible)

# CustomCombineIdentifierConvertible

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol for uniquely identifying publisher streams.

## Declaration

```swift
protocol CustomCombineIdentifierConvertible
```

<a id="overview"></a>

## Overview

If you create a custom [Subscription](subscription.md) or [Subscriber](subscriber.md) type, implement this protocol so that development tools can uniquely identify publisher chains in your app. If your type is a class, Combine provides an implementation of [combineIdentifier](customcombineidentifierconvertible/combineidentifier.md) for you. If your type is a structure, set up the identifier as follows:

```swift
let combineIdentifier = CombineIdentifier()
```

## Topics

### Identifying publisher streams

- [combineIdentifier](customcombineidentifierconvertible/combineidentifier.md): A unique identifier for identifying publisher streams.

## Relationships

### Inherited By

- [Subscriber](subscriber.md)
- [Subscription](subscription.md)

### Conforming Types

- [AnySubscriber](anysubscriber.md)
- [Subscribers.Assign](subscribers/assign.md)
- [Subscribers.Sink](subscribers/sink.md)

## See Also

### Debugging Identifiers

- [CombineIdentifier](combineidentifier.md): A unique identifier for identifying publisher streams.
