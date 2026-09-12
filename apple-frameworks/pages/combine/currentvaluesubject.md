> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/currentvaluesubject](https://developer.apple.com/documentation/combine/currentvaluesubject)

# CurrentValueSubject

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A subject that wraps a single value and publishes a new element whenever the value changes.

## Declaration

```swift
final class CurrentValueSubject<Output, Failure> where Failure : Error
```

## Mentioned In

- [Using Combine for Your App’s Asynchronous Code](using-combine-for-your-app-s-asynchronous-code.md)

<a id="overview"></a>

## Overview

Unlike [PassthroughSubject](passthroughsubject.md), [CurrentValueSubject](currentvaluesubject.md) maintains a buffer of the most recently published element.

Calling [send(\_:)](subject/send%28__%29.md) on a [CurrentValueSubject](currentvaluesubject.md) also updates the current value, making it equivalent to updating the [value](currentvaluesubject/value.md) directly.

## Topics

### Creating a current value subject

- [init(\_:)](currentvaluesubject/init%28__%29.md): Creates a current value subject with the given initial value.

### Accessing the current value

- [value](currentvaluesubject/value.md): The value wrapped by this subject, published as a new element whenever it changes.

## Relationships

### Conforms To

- [Publisher](publisher.md)
- [Subject](subject.md)

## See Also

### Subjects

- [Subject](subject.md): A publisher that exposes a method for outside callers to publish elements.
- [PassthroughSubject](passthroughsubject.md): A subject that broadcasts elements to downstream subscribers.
