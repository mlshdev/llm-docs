> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice](https://developer.apple.com/documentation/swift/slice)

# Slice

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A view into a subsequence of elements of another collection.

## Declaration

```swift
@frozen struct Slice<Base> where Base : Collection
```

<a id="overview"></a>

## Overview

A slice stores a base collection and the start and end indices of the view. It does not copy the elements from the collection into separate storage. Thus, creating a slice has O(1) complexity.

<a id="Slices-Share-Indices"></a>

## Slices Share Indices

Indices of a slice can be used interchangeably with indices of the base collection. An element of a slice is located under the same index in the slice and in the base collection, as long as neither the collection nor the slice has been mutated since the slice was created.

For example, suppose you have an array holding the number of absences from each class during a session.

```swift
var absences = [0, 2, 0, 4, 0, 3, 1, 0]
```

You’re tasked with finding the day with the most absences in the second half of the session. To find the index of the day in question, follow these steps:

1. Create a slice of the `absences` array that holds the second half of the days.
2. Use the `max(by:)` method to determine the index of the day with the most absences.
3. Print the result using the index found in step 2 on the original `absences` array.

Here’s an implementation of those steps:

```swift
let secondHalf = absences.suffix(absences.count / 2)
if let i = secondHalf.indices.max(by: { secondHalf[$0] < secondHalf[$1] }) {
    print("Highest second-half absences: \(absences[i])")
}
// Prints "Highest second-half absences: 3"
```

<a id="Slices-Inherit-Semantics"></a>

## Slices Inherit Semantics

A slice inherits the value or reference semantics of its base collection. That is, if a `Slice` instance is wrapped around a mutable collection that has value semantics, such as an array, mutating the original collection would trigger a copy of that collection, and not affect the base collection stored inside of the slice.

For example, if you update the last element of the `absences` array from `0` to `2`, the `secondHalf` slice is unchanged.

```swift
absences[7] = 2
print(absences)
// Prints "[0, 2, 0, 4, 0, 3, 1, 2]"
print(secondHalf)
// Prints "[0, 3, 1, 0]"
```

Use slices only for transient computation. A slice may hold a reference to the entire storage of a larger collection, not just to the portion it presents, even after the base collection’s lifetime ends. Long-term storage of a slice may therefore prolong the lifetime of elements that are no longer otherwise accessible, which can erroneously appear to be memory leakage.

> **Note**

> Using a `Slice` instance with a mutable collection requires that the base collection’s `subscript(_: Index)` setter does not invalidate indices. If mutations need to invalidate indices in your custom collection type, don’t use `Slice` as its subsequence type. Instead, define your own subsequence type that takes your index invalidation requirements into account.

## Topics

### Initializers

- [init(base:bounds:)](slice/init%28base_bounds_%29.md): Creates a view into the given collection that allows access to elements within the specified range.

### Instance Properties

- [base](slice/base.md): The underlying collection of the slice.

### Instance Methods

- [assumingMemoryBound(to:)](slice/assumingmemorybound%28to_%29-5fkwu.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Returns a typed buffer to the memory referenced by this buffer slice, assuming that the memory is already bound to the specified type.
- [assumingMemoryBound(to:)](slice/assumingmemorybound%28to_%29-7a4sa.md): Conforms when `Base` is `UnsafeRawBufferPointer`. Returns a typed buffer to the memory referenced by this buffer slice, assuming that the memory is already bound to the specified type.
- [bindMemory(to:)](slice/bindmemory%28to_%29-4ombl.md): Conforms when `Base` is `UnsafeRawBufferPointer`. Binds this buffer slice’s memory to the specified type and returns a typed buffer of the bound memory.
- [bindMemory(to:)](slice/bindmemory%28to_%29-92fs7.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Binds this buffer slice’s memory to the specified type and returns a typed buffer of the bound memory.
- [copyBytes(from:)](slice/copybytes%28from_%29.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Copies from a collection of `UInt8` into this buffer slice’s memory.
- [deinitialize()](slice/deinitialize%28%29.md): Conforms when `Base` conforms to `Collection`. Deinitializes every instance in this buffer slice.
- [deinitializeElement(at:)](slice/deinitializeelement%28at_%29.md): Conforms when `Base` conforms to `Collection`. Deinitializes the memory underlying the element at `index`.
- [initialize(from:)](slice/initialize%28from_%29.md): Conforms when `Base` conforms to `Collection`. Initializes the buffer slice’s memory with the given elements.
- [initialize(fromContentsOf:)](slice/initialize%28fromcontentsof_%29.md): Conforms when `Base` conforms to `Collection`. Initializes the buffer slice’s memory with with every element of the source.
- [initialize(repeating:)](slice/initialize%28repeating_%29.md): Conforms when `Base` conforms to `Collection`. Initializes every element in this buffer slice’s memory to a copy of the given value.
- [initializeElement(at:to:)](slice/initializeelement%28at_to_%29.md): Conforms when `Base` conforms to `Collection`. Initializes the element at `index` to the given value.
- [initializeMemory(as:from:)](slice/initializememory%28as_from_%29.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Initializes the buffer’s memory with the given elements, binding the initialized memory to the elements’ type.
- [initializeMemory(as:fromContentsOf:)](slice/initializememory%28as_fromcontentsof_%29.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Initializes the buffer slice’s memory with every element of the source, binding the initialized memory to the elements’ type.
- [initializeMemory(as:repeating:)](slice/initializememory%28as_repeating_%29.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Initializes the memory referenced by this buffer slice with the given value, binds the memory to the value’s type, and returns a typed buffer of the initialized memory.
- [insert(\_:at:)](slice/insert%28__at_%29-4n5zz.md): Conforms when `Base` conforms to `BidirectionalCollection` and `RangeReplaceableCollection`.
- [insert(contentsOf:at:)](slice/insert%28contentsof_at_%29-3z6ts.md): Conforms when `Base` conforms to `BidirectionalCollection` and `RangeReplaceableCollection`.
- [load(fromByteOffset:as:)](slice/load%28frombyteoffset_as_%29-3vjps.md): Conforms when `Base` is `UnsafeRawBufferPointer`. Returns a new instance of the given type, read from the specified offset into the buffer pointer slice’s raw memory.
- [load(fromByteOffset:as:)](slice/load%28frombyteoffset_as_%29-45bko.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Returns a new instance of the given type, read from the specified offset into the buffer pointer slice’s raw memory.
- [loadUnaligned(fromByteOffset:as:)](slice/loadunaligned%28frombyteoffset_as_%29-6jvd4.md): Conforms when `Base` is `UnsafeRawBufferPointer`.
- [loadUnaligned(fromByteOffset:as:)](slice/loadunaligned%28frombyteoffset_as_%29-6u1jm.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Returns a new instance of the given type, read from the specified offset into the buffer pointer slice’s raw memory.
- [loadUnaligned(fromByteOffset:as:)](slice/loadunaligned%28frombyteoffset_as_%29-7jjnt.md): Conforms when `Base` is `UnsafeRawBufferPointer`. Returns a new instance of the given type, read from the specified offset into the buffer pointer slice’s raw memory.
- [loadUnaligned(fromByteOffset:as:)](slice/loadunaligned%28frombyteoffset_as_%29-9gtr0.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`.
- [moveElement(from:)](slice/moveelement%28from_%29.md): Conforms when `Base` conforms to `Collection`. Retrieves and returns the element at `index`, leaving that element’s underlying memory uninitialized.
- [moveInitialize(fromContentsOf:)](slice/moveinitialize%28fromcontentsof_%29-82ebd.md): Conforms when `Base` conforms to `Collection`. Moves every element of an initialized source buffer into the uninitialized memory referenced by this buffer slice, leaving the source memory uninitialized and this buffer slice’s memory initialized.
- [moveInitialize(fromContentsOf:)](slice/moveinitialize%28fromcontentsof_%29-iasq.md): Conforms when `Base` conforms to `Collection`. Moves every element of an initialized source buffer slice into the uninitialized memory referenced by this buffer slice, leaving the source memory uninitialized and this buffer slice’s memory initialized.
- [moveInitializeMemory(as:fromContentsOf:)](slice/moveinitializememory%28as_fromcontentsof_%29-1jll.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Moves every element of an initialized source buffer into the uninitialized memory referenced by this buffer slice, leaving the source memory uninitialized and this slice’s memory initialized.
- [moveInitializeMemory(as:fromContentsOf:)](slice/moveinitializememory%28as_fromcontentsof_%29-1uz4a.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Moves every element from an initialized source buffer slice into the uninitialized memory referenced by this buffer slice, leaving the source memory uninitialized and this slice’s memory initialized.
- [moveUpdate(fromContentsOf:)](slice/moveupdate%28fromcontentsof_%29-5i98g.md): Conforms when `Base` conforms to `Collection`. Updates this buffer slice’s initialized memory by moving every element from the source buffer, leaving the source memory uninitialized.
- [moveUpdate(fromContentsOf:)](slice/moveupdate%28fromcontentsof_%29-ou4d.md): Conforms when `Base` conforms to `Collection`. Updates this buffer slice’s initialized memory initialized memory by moving every element from the source buffer slice, leaving the source memory uninitialized.
- [remove(at:)](slice/remove%28at_%29-pbti.md): Conforms when `Base` conforms to `BidirectionalCollection` and `RangeReplaceableCollection`.
- [removeSubrange(\_:)](slice/removesubrange%28__%29-8hbh1.md): Conforms when `Base` conforms to `BidirectionalCollection` and `RangeReplaceableCollection`.
- [replaceSubrange(\_:with:)](slice/replacesubrange%28__with_%29-904p8.md): Conforms when `Base` conforms to `BidirectionalCollection` and `RangeReplaceableCollection`.
- [storeBytes(of:toByteOffset:as:)](slice/storebytes%28of_tobyteoffset_as_%29.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Stores a value’s bytes into the buffer pointer slice’s raw memory at the specified byte offset.
- [update(from:)](slice/update%28from_%29.md): Conforms when `Base` conforms to `Collection`. Updates the buffer slice’s initialized memory with the given elements.
- [update(fromContentsOf:)](slice/update%28fromcontentsof_%29.md): Conforms when `Base` conforms to `Collection`. Updates the buffer slice’s initialized memory with every element of the source.
- [update(repeating:)](slice/update%28repeating_%29.md): Conforms when `Base` conforms to `Collection`. Updates every element of this buffer slice’s initialized memory.
- [withContiguousMutableStorageIfAvailable(\_:)](slice/withcontiguousmutablestorageifavailable%28__%29-2ader.md): Conforms when `Base` conforms to `Collection`.
- [withMemoryRebound(to:\_:)](slice/withmemoryrebound%28to___%29-1nqta.md): Conforms when `Base` is `UnsafeRawBufferPointer`. Executes the given closure while temporarily binding the buffer slice to instances of type `T`.
- [withMemoryRebound(to:\_:)](slice/withmemoryrebound%28to___%29-3oirt.md): Conforms when `Base` is `UnsafeMutableRawBufferPointer`. Executes the given closure while temporarily binding the buffer slice to instances of type `T`.
- [withMemoryRebound(to:\_:)](slice/withmemoryrebound%28to___%29-6kxii.md): Conforms when `Base` conforms to `Collection`. Executes the given closure while temporarily binding the memory referenced by this buffer slice to the given type.
- [withMemoryRebound(to:\_:)](slice/withmemoryrebound%28to___%29-ibp7.md): Conforms when `Base` conforms to `Collection`. Executes the given closure while temporarily binding the memory referenced by this buffer slice to the given type.

### Default Implementations

- [BidirectionalCollection Implementations](slice/bidirectionalcollection-implementations.md)
- [Collection Implementations](slice/collection-implementations.md)
- [LazySequenceProtocol Implementations](slice/lazysequenceprotocol-implementations.md)
- [MutableCollection Implementations](slice/mutablecollection-implementations.md)
- [RangeReplaceableCollection Implementations](slice/rangereplaceablecollection-implementations.md)
- [Sequence Implementations](slice/sequence-implementations.md)

## Relationships

### Conforms To

- [AccelerateBuffer](https://developer.apple.com/documentation/accelerate/acceleratebuffer)
- [AccelerateMutableBuffer](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer)
- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [Copyable](copyable.md)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
- [Escapable](escapable.md)
- [LazySequenceProtocol](lazysequenceprotocol.md)
- [MutableCollection](mutablecollection.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeReplaceableCollection](rangereplaceablecollection.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)
