> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unmanaged](https://developer.apple.com/documentation/swift/unmanaged)

# Unmanaged

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type for propagating an unmanaged object reference.

## Declaration

```swift
@frozen struct Unmanaged<Instance> where Instance : AnyObject
```

## Mentioned In

- [Working with Core Foundation Types](working-with-core-foundation-types.md)

<a id="overview"></a>

## Overview

When you use this type, you become partially responsible for keeping the object alive.

## Topics

### Instance Methods

- [autorelease()](unmanaged/autorelease%28%29.md): Performs an unbalanced autorelease of the object.
- [release()](unmanaged/release%28%29.md): Performs an unbalanced release of the object.
- [retain()](unmanaged/retain%28%29.md): Performs an unbalanced retain of the object.
- [takeRetainedValue()](unmanaged/takeretainedvalue%28%29.md): Gets the value of this unmanaged reference as a managed reference and consumes an unbalanced retain of it.
- [takeUnretainedValue()](unmanaged/takeunretainedvalue%28%29.md): Gets the value of this unmanaged reference as a managed reference without consuming an unbalanced retain of it.
- [toOpaque()](unmanaged/toopaque%28%29.md): Unsafely converts an unmanaged class reference to a pointer.

### Type Methods

- [fromOpaque(\_:)](unmanaged/fromopaque%28__%29.md): Unsafely turns an opaque C pointer into an unmanaged class reference.
- [passRetained(\_:)](unmanaged/passretained%28__%29.md): Creates an unmanaged reference with an unbalanced retain.
- [passUnretained(\_:)](unmanaged/passunretained%28__%29.md): Creates an unmanaged reference without performing an unbalanced retain.

### Default Implementations

- [AtomicOptionalRepresentable Implementations](unmanaged/atomicoptionalrepresentable-implementations.md)
- [AtomicRepresentable Implementations](unmanaged/atomicrepresentable-implementations.md)

## Relationships

### Conforms To

- [AtomicOptionalRepresentable](../synchronization/atomicoptionalrepresentable.md)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Reference Counting

- [withExtendedLifetime(\_:\_:)](withextendedlifetime%28____%29-4mmpv.md): Evaluates a closure while ensuring that the given instance is not destroyed before the closure returns.
- [withExtendedLifetime(\_:\_:)](withextendedlifetime%28____%29-59dz3.md): Evaluates a closure while ensuring that the given instance is not destroyed before the closure returns.
- [extendLifetime(\_:)](extendlifetime%28__%29.md): Extends the lifetime of the given instance.
