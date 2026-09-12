> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/continuation/termination](https://developer.apple.com/documentation/swift/asyncstream/continuation/termination)

# AsyncStream.Continuation.Termination

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that indicates how the stream terminated.

## Declaration

```swift
enum Termination
```

<a id="overview"></a>

## Overview

The `onTermination` closure receives an instance of this type.

## Topics

### Termination States

- [AsyncStream.Continuation.Termination.finished](termination/finished.md): The stream finished as a result of calling the continuation’s `finish` method.
- [AsyncStream.Continuation.Termination.cancelled](termination/cancelled.md): The stream finished as a result of cancellation.

### Hashing

- [hashValue](termination/hashvalue.md): The hash value.
- [hash(into:)](termination/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Comparing Termination Values

- [==(\_:\_:)](termination/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [!=(\_:\_:)](termination/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.

### Default Implementations

- [Equatable Implementations](termination/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](../../equatable.md)
- [Hashable](../../hashable.md)
- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Handling Termination

- [onTermination](ontermination.md): A callback to invoke when canceling iteration of an asynchronous stream.
