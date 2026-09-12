> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/objectidentifier](https://developer.apple.com/documentation/swift/objectidentifier)

# ObjectIdentifier

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for a class instance, actor instance, or metatype.

## Declaration

```swift
@frozen struct ObjectIdentifier
```

<a id="overview"></a>

## Overview

This unique identifier is valid for comparisons only during the lifetime of the instance.

In Swift, only instances of classes, instances of actors, and metatypes have unique identities. There’s no notion of identity for structures, enumerations, functions, or tuples.

## Topics

### Initializers

- [init(\_:)](objectidentifier/init%28__%29-223xw.md): Creates an instance that uniquely identifies the given class instance.
- [init(\_:)](objectidentifier/init%28__%29-52bz1.md): Creates an instance that uniquely identifies the given metatype.
- [init(\_:)](objectidentifier/init%28__%29-86u7l.md)

### Default Implementations

- [AtomicOptionalRepresentable Implementations](objectidentifier/atomicoptionalrepresentable-implementations.md)
- [AtomicRepresentable Implementations](objectidentifier/atomicrepresentable-implementations.md)
- [Comparable Implementations](objectidentifier/comparable-implementations.md)
- [CustomDebugStringConvertible Implementations](objectidentifier/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](objectidentifier/equatable-implementations.md)
- [Hashable Implementations](objectidentifier/hashable-implementations.md)

## Relationships

### Conforms To

- [AtomicOptionalRepresentable](../synchronization/atomicoptionalrepresentable.md)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Comparable](comparable.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Querying Runtime Values

- [Mirror](mirror.md): A representation of the substructure and display style of an instance of any type.
- [type(of:)](type%28of_%29.md): Returns the dynamic type of a value.
