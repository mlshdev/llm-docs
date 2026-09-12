> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/passthroughsubject](https://developer.apple.com/documentation/combine/passthroughsubject)

# PassthroughSubject

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A subject that broadcasts elements to downstream subscribers.

## Declaration

```swift
final class PassthroughSubject<Output, Failure> where Failure : Error
```

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](using-combine-for-your-app-s-asynchronous-code.md)

<a id="overview"></a>

## Overview

As a concrete implementation of [Subject](subject.md), the [PassthroughSubject](passthroughsubject.md) provides a convenient way to adapt existing imperative code to the Combine model.

Unlike [CurrentValueSubject](currentvaluesubject.md), a [PassthroughSubject](passthroughsubject.md) doesn’t have an initial value or a buffer of the most recently-published element. A [PassthroughSubject](passthroughsubject.md) drops values if there are no subscribers, or its current demand is zero.

## Topics

### Creating a passthrough subject

- [init()](passthroughsubject/init%28%29.md)

## Relationships

### Conforms To

- [Publisher](publisher.md)
- [Subject](subject.md)

## See Also

### Subjects

- [Subject](subject.md): A publisher that exposes a method for outside callers to publish elements.
- [CurrentValueSubject](currentvaluesubject.md): A subject that wraps a single value and publishes a new element whenever the value changes.
