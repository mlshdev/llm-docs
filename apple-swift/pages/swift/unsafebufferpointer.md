> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafebufferpointer](https://developer.apple.com/documentation/swift/unsafebufferpointer)

# UnsafeBufferPointer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A nonowning collection interface to a buffer of elements stored contiguously in memory.

## Declaration

```swift
@frozen struct UnsafeBufferPointer<Element> where Element : ~Copyable
```

<a id="overview"></a>

## Overview

You can use an `UnsafeBufferPointer` instance in low level operations to eliminate uniqueness checks and, in release mode, bounds checks. Bounds checks are always performed in debug mode.

<a id="UnsafeBufferPointer-Semantics"></a>

## UnsafeBufferPointer Semantics

An `UnsafeBufferPointer` instance is a view into memory and does not own the memory that it references. Copying a value of type `UnsafeBufferPointer` does not copy the instances stored in the underlying memory. However, initializing another collection with an `UnsafeBufferPointer` instance copies the instances out of the referenced memory and into the new collection.

## Topics

### Initializers

- [init(\_:)](unsafebufferpointer/init%28__%29-2fjdq.md): Deprecated.
- [init(\_:)](unsafebufferpointer/init%28__%29-36fvm.md): Creates an immutable typed buffer pointer referencing the same memory as the given mutable buffer pointer.
- [init(\_:)](unsafebufferpointer/init%28__%29-5ei4s.md): Initialize an `UnsafeBufferPointer<Element>` from an `AudioBuffer`. Binds the buffer’s memory type to `Element`.
- [init(rebasing:)](unsafebufferpointer/init%28rebasing_%29-53eec.md): Creates a buffer over the same memory as the given buffer slice.
- [init(rebasing:)](unsafebufferpointer/init%28rebasing_%29-56rdb.md): Creates a buffer over the same memory as the given buffer slice.
- [init(start:count:)](unsafebufferpointer/init%28start_count_%29.md): Creates a new buffer pointer over the specified number of contiguous instances beginning at the given pointer.

### Instance Properties

- [baseAddress](unsafebufferpointer/baseaddress.md): A pointer to the first element of the buffer.
- [count](unsafebufferpointer/count.md): The number of elements in the buffer.
- [span](unsafebufferpointer/span.md): A span over the elements of this buffer.

### Instance Methods

- [deallocate()](unsafebufferpointer/deallocate%28%29.md): Deallocates the memory block previously allocated at this buffer pointer’s base address.
- [extracting(\_:)](unsafebufferpointer/extracting%28__%29-47z4z.md): Constructs a standalone buffer pointer over the items within the supplied range of positions in the memory region addressed by this buffer pointer.
- [extracting(\_:)](unsafebufferpointer/extracting%28__%29-4bn8q.md): Extracts and returns a copy of the entire buffer.
- [extracting(\_:)](unsafebufferpointer/extracting%28__%29-nivx.md): Constructs a standalone buffer pointer over the items within the supplied range of positions in the memory region addressed by this buffer pointer.
- [isTriviallyIdentical(to:)](unsafebufferpointer/istriviallyidentical%28to_%29.md): Returns a Boolean value indicating whether two instances refer to the same memory region.
- [withMemoryRebound(to:\_:)](unsafebufferpointer/withmemoryrebound%28to___%29.md): Executes the given closure while temporarily binding the memory referenced by this buffer to the given type.

### Subscripts

- [subscript(\_:)](unsafebufferpointer/subscript%28__%29-3sy16.md): Accesses the element at the specified position.

### Default Implementations

- [AtomicRepresentable Implementations](unsafebufferpointer/atomicrepresentable-implementations.md)
- [BidirectionalCollection Implementations](unsafebufferpointer/bidirectionalcollection-implementations.md)
- [Collection Implementations](unsafebufferpointer/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](unsafebufferpointer/customdebugstringconvertible-implementations.md)
- [OperationParameter Implementations](unsafebufferpointer/operationparameter-implementations.md)
- [Sequence Implementations](unsafebufferpointer/sequence-implementations.md)

## Relationships

### Conforms To

- [AccelerateBuffer](https://developer.apple.com/documentation/accelerate/acceleratebuffer)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BNNSGraph.Builder.OperationParameter](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/operationparameter)
- [BidirectionalCollection](bidirectionalcollection.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Collection](collection.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
- [Escapable](escapable.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sequence](sequence.md)

## See Also

### Typed Pointers

- [UnsafePointer](unsafepointer.md): A pointer for accessing data of a specific type.
- [UnsafeMutablePointer](unsafemutablepointer.md): A pointer for accessing and manipulating data of a specific type.
- [UnsafeMutableBufferPointer](unsafemutablebufferpointer.md): A nonowning collection interface to a buffer of mutable elements stored contiguously in memory.
