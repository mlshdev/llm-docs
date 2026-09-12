> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomiclazyreference](https://developer.apple.com/documentation/synchronization/atomiclazyreference)

# AtomicLazyReference

**Framework:** Synchronization  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A lazily initializable atomic strong reference.

## Declaration

```swift
@frozen struct AtomicLazyReference<Instance> where Instance : AnyObject
```

<a id="overview"></a>

## Overview

These values can be set (initialized) exactly once, but read many times.

## Topics

### Initializers

- [init()](atomiclazyreference/init%28%29.md)

### Instance Methods

- [load()](atomiclazyreference/load%28%29.md): Atomically loads and returns the current value of this reference.
- [storeIfNil(\_:)](atomiclazyreference/storeifnil%28__%29.md): Atomically initializes this reference if its current value is nil, then returns the initialized value. If this reference is already initialized, then `storeIfNil(_:)` discards its supplied argument and returns the current value without updating it.

## Relationships

### Conforms To

- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Atomic Values

- [Atomic](atomic.md): An atomic value.
- [WordPair](wordpair.md): A pair of two word sized `UInt`s.
- [AtomicRepresentable](atomicrepresentable.md): A type that supports atomic operations through a separate atomic storage representation.
- [AtomicOptionalRepresentable](atomicoptionalrepresentable.md): An atomic value that also supports atomic operations when wrapped in an `Optional`. Atomic optional representable types come with a standalone atomic representation for their optional-wrapped variants.
