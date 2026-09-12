> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/contiguousarray](https://developer.apple.com/documentation/swift/contiguousarray)

# ContiguousArray

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A contiguously stored array.

## Declaration

```swift
@frozen struct ContiguousArray<Element>
```

<a id="overview"></a>

## Overview

The `ContiguousArray` type is a specialized array that always stores its elements in a contiguous region of memory. This contrasts with `Array`, which can store its elements in either a contiguous region of memory or an `NSArray` instance if its `Element` type is a class or `@objc` protocol.

If your array’s `Element` type is a class or `@objc` protocol and you do not need to bridge the array to `NSArray` or pass the array to Objective-C APIs, using `ContiguousArray` may be more efficient and have more predictable performance than `Array`. If the array’s `Element` type is a struct or enumeration, `Array` and `ContiguousArray` should have similar efficiency.

For more information about using arrays, see `Array` and `ArraySlice`, with which `ContiguousArray` shares most properties and methods.

## Topics

### Initializers

- [init(\_:)](contiguousarray/init%28__%29.md): Creates an array containing the elements of a sequence.
- [init(capacity:initializingWith:)](contiguousarray/init%28capacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with an output span covering the array’s uninitialized memory.
- [init(unsafeUninitializedCapacity:initializingWith:)](contiguousarray/init%28unsafeuninitializedcapacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with a buffer covering the array’s uninitialized memory.

### Instance Properties

- [capacity](contiguousarray/capacity.md): The total number of elements that the array can contain without allocating new storage.
- [mutableSpan](contiguousarray/mutablespan.md): A mutable span over the elements of this array.
- [span](contiguousarray/span.md): A span over the elements of this array.

### Instance Methods

- [append(addingCapacity:initializingWith:)](contiguousarray/append%28addingcapacity_initializingwith_%29.md): Grows the array to have enough capacity for the specified number of elements, then calls the closure with an output span covering the array’s uninitialized memory.
- [insert(\_:at:)](contiguousarray/insert%28__at_%29.md): Inserts a new element at the specified position.
- [isTriviallyIdentical(to:)](contiguousarray/istriviallyidentical%28to_%29.md): Returns a boolean value indicating whether this array is identical to `other`.
- [remove(at:)](contiguousarray/remove%28at_%29.md): Removes and returns the element at the specified position.
- [reserveCapacity(\_:)](contiguousarray/reservecapacity%28__%29.md): Reserves enough space to store the specified number of elements.
- [withUnsafeBufferPointer(\_:)](contiguousarray/withunsafebufferpointer%28__%29.md): Calls a closure with a pointer to the array’s contiguous storage.
- [withUnsafeBytes(\_:)](contiguousarray/withunsafebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the array’s contiguous storage.
- [withUnsafeMutableBufferPointer(\_:)](contiguousarray/withunsafemutablebufferpointer%28__%29.md): Calls the given closure with a pointer to the array’s mutable contiguous storage.
- [withUnsafeMutableBytes(\_:)](contiguousarray/withunsafemutablebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the array’s mutable contiguous storage.

### Default Implementations

- [Attachable Implementations](contiguousarray/attachable-implementations.md)
- [BidirectionalCollection Implementations](contiguousarray/bidirectionalcollection-implementations.md)
- [Collection Implementations](contiguousarray/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](contiguousarray/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](contiguousarray/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](contiguousarray/customstringconvertible-implementations.md)
- [Decodable Implementations](contiguousarray/decodable-implementations.md)
- [Encodable Implementations](contiguousarray/encodable-implementations.md)
- [Equatable Implementations](contiguousarray/equatable-implementations.md)
- [ExpressibleByArrayLiteral Implementations](contiguousarray/expressiblebyarrayliteral-implementations.md)
- [Hashable Implementations](contiguousarray/hashable-implementations.md)
- [MutableCollection Implementations](contiguousarray/mutablecollection-implementations.md)
- [OperationParameter Implementations](contiguousarray/operationparameter-implementations.md)
- [RandomAccessCollection Implementations](contiguousarray/randomaccesscollection-implementations.md)
- [RangeReplaceableCollection Implementations](contiguousarray/rangereplaceablecollection-implementations.md)
- [Sequence Implementations](contiguousarray/sequence-implementations.md)

## Relationships

### Conforms To

- [AccelerateBuffer](https://developer.apple.com/documentation/accelerate/acceleratebuffer)
- [AccelerateMutableBuffer](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer)
- [Attachable](https://developer.apple.com/documentation/testing/attachable)
- [BNNSGraph.Builder.OperationParameter](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/operationparameter)
- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Hashable](hashable.md)
- [MutableCollection](mutablecollection.md)
- [MutableDataProtocol](https://developer.apple.com/documentation/foundation/mutabledataprotocol)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeReplaceableCollection](rangereplaceablecollection.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Related Array Types

- [ArraySlice](arrayslice.md): A slice of an `Array`, `ContiguousArray`, or `ArraySlice` instance.
