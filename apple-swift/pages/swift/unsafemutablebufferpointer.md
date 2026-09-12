> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer)

# UnsafeMutableBufferPointer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A nonowning collection interface to a buffer of mutable elements stored contiguously in memory.

## Declaration

```swift
@frozen struct UnsafeMutableBufferPointer<Element> where Element : ~Copyable
```

<a id="overview"></a>

## Overview

You can use an `UnsafeMutableBufferPointer` instance in low level operations to eliminate uniqueness checks and, in release mode, bounds checks. Bounds checks are always performed in debug mode.

<a id="UnsafeMutableBufferPointer-Semantics"></a>

## UnsafeMutableBufferPointer Semantics

An `UnsafeMutableBufferPointer` instance is a view into memory and does not own the memory that it references. Copying a value of type `UnsafeMutableBufferPointer` does not copy the instances stored in the underlying memory. However, initializing another collection with an `UnsafeMutableBufferPointer` instance copies the instances out of the referenced memory and into the new collection.

## Topics

### Initializers

- [init(\_:)](unsafemutablebufferpointer/init%28__%29-6750l.md): Initialize an `UnsafeMutableBufferPointer<Element>` from an `AudioBuffer`.
- [init(\_:)](unsafemutablebufferpointer/init%28__%29-789ap.md): Deprecated.
- [init(mutating:)](unsafemutablebufferpointer/init%28mutating_%29.md): Creates a mutable typed buffer pointer referencing the same memory as the given immutable buffer pointer.
- [init(rebasing:)](unsafemutablebufferpointer/init%28rebasing_%29.md): Creates a buffer over the same memory as the given buffer slice.
- [init(start:count:)](unsafemutablebufferpointer/init%28start_count_%29.md): Creates a new buffer pointer over the specified number of contiguous instances beginning at the given pointer.

### Instance Properties

- [baseAddress](unsafemutablebufferpointer/baseaddress.md): A pointer to the first element of the buffer.
- [count](unsafemutablebufferpointer/count.md): The number of elements in the buffer.
- [mutableSpan](unsafemutablebufferpointer/mutablespan.md): A mutable span over the elements of this buffer.
- [span](unsafemutablebufferpointer/span.md): A span over the elements of this buffer.

### Instance Methods

- [assign(repeating:)](unsafemutablebufferpointer/assign%28repeating_%29.md): Deprecated.
- [deallocate()](unsafemutablebufferpointer/deallocate%28%29.md): Deallocates the memory block previously allocated at this buffer pointer’s base address.
- [deinitialize()](unsafemutablebufferpointer/deinitialize%28%29.md): Deinitializes every instance in this buffer.
- [deinitializeElement(at:)](unsafemutablebufferpointer/deinitializeelement%28at_%29.md): Deinitializes the memory underlying the element at `index`.
- [extracting(\_:)](unsafemutablebufferpointer/extracting%28__%29-4izct.md): Constructs a standalone buffer pointer over the items within the supplied range of positions in the memory region addressed by this buffer pointer.
- [extracting(\_:)](unsafemutablebufferpointer/extracting%28__%29-51ps5.md): Constructs a standalone buffer pointer over the items within the supplied range of positions in the memory region addressed by this buffer pointer.
- [extracting(\_:)](unsafemutablebufferpointer/extracting%28__%29-6xfww.md): Extracts and returns a copy of the entire buffer.
- [initialize(from:)](unsafemutablebufferpointer/initialize%28from_%29.md): Initializes the buffer’s memory with the given elements.
- [initialize(fromContentsOf:)](unsafemutablebufferpointer/initialize%28fromcontentsof_%29.md): Initializes the buffer’s memory with every element of the source.
- [initialize(repeating:)](unsafemutablebufferpointer/initialize%28repeating_%29.md): Initializes every element in this buffer’s memory to a copy of the given value.
- [initializeElement(at:to:)](unsafemutablebufferpointer/initializeelement%28at_to_%29.md): Initializes the element at `index` to the given value.
- [isTriviallyIdentical(to:)](unsafemutablebufferpointer/istriviallyidentical%28to_%29.md): Returns a Boolean value indicating whether two instances refer to the same memory region.
- [moveElement(from:)](unsafemutablebufferpointer/moveelement%28from_%29.md): Retrieves and returns the element at `index`, leaving that element’s underlying memory uninitialized.
- [moveInitialize(fromContentsOf:)](unsafemutablebufferpointer/moveinitialize%28fromcontentsof_%29-1ag7a.md): Moves every element of an initialized source buffer into the uninitialized memory referenced by this buffer, leaving the source memory uninitialized and this buffer’s memory initialized.
- [moveInitialize(fromContentsOf:)](unsafemutablebufferpointer/moveinitialize%28fromcontentsof_%29-8aiwj.md): Moves every element of an initialized source buffer into the uninitialized memory referenced by this buffer, leaving the source memory uninitialized and this buffer’s memory initialized.
- [moveUpdate(fromContentsOf:)](unsafemutablebufferpointer/moveupdate%28fromcontentsof_%29-4bpe7.md): Updates this buffer’s initialized memory initialized memory by moving every element from the source buffer slice, leaving the source memory uninitialized.
- [moveUpdate(fromContentsOf:)](unsafemutablebufferpointer/moveupdate%28fromcontentsof_%29-522y2.md): Updates this buffer’s initialized memory by moving every element from the source buffer, leaving the source memory uninitialized.
- [update(from:)](unsafemutablebufferpointer/update%28from_%29.md): Updates the buffer’s initialized memory with the given elements.
- [update(fromContentsOf:)](unsafemutablebufferpointer/update%28fromcontentsof_%29.md): Updates the buffer’s initialized memory with every element of the source.
- [update(repeating:)](unsafemutablebufferpointer/update%28repeating_%29.md): Updates every element of this buffer’s initialized memory.
- [withMemoryRebound(to:\_:)](unsafemutablebufferpointer/withmemoryrebound%28to___%29.md): Executes the given closure while temporarily binding the memory referenced by this buffer to the given type.

### Subscripts

- [subscript(\_:)](unsafemutablebufferpointer/subscript%28__%29-2vl82.md): Accesses the element at the specified position.

### Type Methods

- [allocate(capacity:)](unsafemutablebufferpointer/allocate%28capacity_%29.md): Allocates uninitialized memory for the specified number of instances of type `Element`.

### Default Implementations

- [AtomicRepresentable Implementations](unsafemutablebufferpointer/atomicrepresentable-implementations.md)
- [BidirectionalCollection Implementations](unsafemutablebufferpointer/bidirectionalcollection-implementations.md)
- [Collection Implementations](unsafemutablebufferpointer/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](unsafemutablebufferpointer/customdebugstringconvertible-implementations.md)
- [MutableCollection Implementations](unsafemutablebufferpointer/mutablecollection-implementations.md)
- [OperationParameter Implementations](unsafemutablebufferpointer/operationparameter-implementations.md)
- [Sequence Implementations](unsafemutablebufferpointer/sequence-implementations.md)

## Relationships

### Conforms To

- [AccelerateBuffer](https://developer.apple.com/documentation/accelerate/acceleratebuffer)
- [AccelerateMutableBuffer](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BNNSGraph.Builder.OperationParameter](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/operationparameter)
- [BNNSGraph.PointerArgument](https://developer.apple.com/documentation/accelerate/bnnsgraph/pointerargument)
- [BidirectionalCollection](bidirectionalcollection.md)
- [BitwiseCopyable](bitwisecopyable.md)
- [Collection](collection.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [Escapable](escapable.md)
- [MutableCollection](mutablecollection.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sequence](sequence.md)

## See Also

### Typed Pointers

- [UnsafePointer](unsafepointer.md): A pointer for accessing data of a specific type.
- [UnsafeMutablePointer](unsafemutablepointer.md): A pointer for accessing and manipulating data of a specific type.
- [UnsafeBufferPointer](unsafebufferpointer.md): A nonowning collection interface to a buffer of elements stored contiguously in memory.
