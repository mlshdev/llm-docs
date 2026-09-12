> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subject](https://developer.apple.com/documentation/combine/subject)

# Subject

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that exposes a method for outside callers to publish elements.

## Declaration

```swift
protocol Subject<Output, Failure> : AnyObject, Publisher
```

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](using-combine-for-your-app-s-asynchronous-code.md)

<a id="overview"></a>

## Overview

A subject is a publisher that you can use to ”inject” values into a stream, by calling its [send(\_:)](subject/send%28__%29.md) method. This can be useful for adapting existing imperative code to the Combine model.

## Topics

### Delivering elements to subscribers

- [send(\_:)](subject/send%28__%29.md): Sends a value to the subscriber.
- [send()](subject/send%28%29.md): Conforms when `Output` is `()`. Sends a void value to the subscriber.

### Delivering life cycle events to subscribers

- [send(subscription:)](subject/send%28subscription_%29.md): Sends a subscription to the subscriber.
- [send(completion:)](subject/send%28completion_%29.md): Sends a completion signal to the subscriber.

## Relationships

### Inherits From

- [Publisher](publisher.md)

### Conforming Types

- [CurrentValueSubject](currentvaluesubject.md)
- [PassthroughSubject](passthroughsubject.md)

## See Also

### Subjects

- [CurrentValueSubject](currentvaluesubject.md): A subject that wraps a single value and publishes a new element whenever the value changes.
- [PassthroughSubject](passthroughsubject.md): A subject that broadcasts elements to downstream subscribers.
