> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvaluecontainer](https://developer.apple.com/documentation/appintents/intentvaluecontainer)

# IntentValueContainer

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A container that stores a value that supports intent value conversion.

## Declaration

```swift
struct IntentValueContainer
```

<a id="overview"></a>

## Overview

The `IntentValueContainer` structure provides a type-erased wrapper around values that the App Intents framework can use. It encapsulates the actual value as a container element and provides mechanisms for type-safe access and conversion.

This container serves as an intermediate representation when converting between different types.

## Topics

### Structures

- [IntentValueContainer.ConversionContext](intentvaluecontainer/conversioncontext.md): A context that provides additional information for value conversion.

### Operators

- [==(\_:\_:)](intentvaluecontainer/==%28____%29.md): Returns a Boolean value indicating whether two containers are equal.

### Default Implementations

- [IntentValueExpressing Implementations](intentvaluecontainer/intentvalueexpressing-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Intent queries

- [IntentValueQuery](intentvaluequery.md): A query that provides entity values to the system; for example, for visual intelligence search.
- [IntentValueExpression](intentvalueexpression.md): A type that represents a lazily evaluated intent value.
