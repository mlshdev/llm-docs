> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/identifiable](https://developer.apple.com/documentation/swift/identifiable)

# Identifiable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A class of types whose instances hold the value of an entity with stable identity.

## Declaration

```swift
protocol Identifiable<ID>
```

<a id="overview"></a>

## Overview

Use the `Identifiable` protocol to provide a stable notion of identity to a class or value type. For example, you could define a `User` type with an `id` property that is stable across your app and your app’s database storage. You could use the `id` property to identify a particular user even if other data fields change, such as the user’s name.

`Identifiable` leaves the duration and scope of the identity unspecified. Identities can have any of the following characteristics:

- Guaranteed always unique, like UUIDs.
- Persistently unique per environment, like database record keys.
- Unique for the lifetime of a process, like global incrementing integers.
- Unique for the lifetime of an object, like object identifiers.
- Unique within the current collection, like collection indices.

It’s up to both the conformer and the receiver of the protocol to document the nature of the identity.

<a id="Conforming-to-the-Identifiable-Protocol"></a>

## Conforming to the Identifiable Protocol

`Identifiable` provides a default implementation for class types (using `ObjectIdentifier`), which is only guaranteed to remain unique for the lifetime of an object. If an object has a stronger notion of identity, it may be appropriate to provide a custom implementation.

## Topics

### Specifying the Associated Type

- [ID](identifiable/id-swift.associatedtype.md): A type representing the stable identity of the entity associated with an instance.

### Specifying the Identified Item

- [id](identifiable/id-8t2ws.md): The stable identity of the entity associated with this instance.

## Relationships

### Inherited By

- [DistributedActor](../distributed/distributedactor.md)

### Conforming Types

- [Never](never.md)

## See Also

### Equality and Ordering

- [Equatable](equatable.md): A type that can be compared for value equality.
- [Comparable](comparable.md): A type that can be compared using the relational operators `<`, `<=`, `>=`, and `>`.
