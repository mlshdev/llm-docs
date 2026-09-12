> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray](https://developer.apple.com/documentation/swift/uniquearray)

# UniqueArray

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A dynamically self-resizing, heap allocated, noncopyable array of potentially noncopyable elements.

## Declaration

```swift
@frozen struct UniqueArray<Element> where Element : ~Copyable
```

<a id="overview"></a>

## Overview

`UniqueArray` instances automatically resize their underlying storage as needed to accommodate newly inserted items, using a geometric growth curve. This lets code using `UniqueArray` avoid having to allocate enough capacity in advance; on the other hand, it makes it difficult to tell when and where such reallocations may happen.

For example, appending an element to a `UniqueArray` has highly variable complexity; often, it runs at a constant cost, but if the operation has to resize storage, then the cost of an individual append suddenly becomes proportional to the size of the whole array.

The geometric growth curve allows the cost of such latency spikes to get amortized across repeated invocations, bringing the average cost back to O(1); but the spikes make this construct less suitable for use cases that expect predictable, consistent performance on every operation.

Implicit growth also makes it more difficult to predict/analyze the amount of memory an algorithm would need. Developers targeting environments with stringent limits on heap allocations may prefer to avoid using dynamically resizing container types as a matter of policy. The type `RigidArray` provides a fixed-capacity array variant that caters specifically for these use cases, trading ease-of-use for more consistent/predictable execution. For copyable elements, the copy-on-write `Array` type is an even more convenient and expressive choice.

## Topics

### Initializers

- [init()](uniquearray/init%28%29.md): Initializes a new unique array with no elements.
- [init(capacity:)](uniquearray/init%28capacity_%29.md): Initializes a new unique array with the specified capacity and no elements.
- [init(capacity:copying:)](uniquearray/init%28capacity_copying_%29-5tkhn.md): Creates a new array with the specified initial capacity, holding a copy of the contents of a given sequence.
- [init(capacity:copying:)](uniquearray/init%28capacity_copying_%29-991h4.md): Creates a new array with the specified capacity, holding a copy of the contents of the given span.
- [init(capacity:initializingWith:)](uniquearray/init%28capacity_initializingwith_%29.md): Creates a new array with the specified capacity, directly initializing its storage using an output span.
- [init(minimumCapacity:)](uniquearray/init%28minimumcapacity_%29.md): Initializes a new unique array with the specified capacity and no elements.
- [init(repeating:count:)](uniquearray/init%28repeating_count_%29.md): Creates a new array containing the specified number of a single, repeated value.

### Instance Properties

- [capacity](uniquearray/capacity.md): The maximum number of elements this array can hold without having to reallocate its storage.
- [count](uniquearray/count.md): The number of elements in this array.
- [debugDescription](uniquearray/debugdescription.md)
- [description](uniquearray/description.md)
- [endIndex](uniquearray/endindex.md): The array’s “past the end” position—that is, the position one greater than the last valid subscript argument. This is always equal to array’s count.
- [freeCapacity](uniquearray/freecapacity.md): The number of additional elements that can be added to this array without reallocating its storage.
- [indices](uniquearray/indices.md): The range of indices that are valid for subscripting the array.
- [isEmpty](uniquearray/isempty.md): A Boolean value indicating whether this array contains no elements.
- [mutableSpan](uniquearray/mutablespan.md): A mutable span over the elements of this array, providing direct mutating access.
- [span](uniquearray/span.md): A span over the elements of this array, providing direct read-only access.
- [startIndex](uniquearray/startindex.md): The position of the first element in a nonempty array. This is always zero.

### Instance Methods

- [append(\_:)](uniquearray/append%28__%29.md): Adds an element to the end of the array.
- [append(addingCount:initializingWith:)](uniquearray/append%28addingcount_initializingwith_%29.md): Append a given number of items to the end of this array by populating an output span.
- [append(copying:)](uniquearray/append%28copying_%29-1qhpn.md): Copies the elements of a buffer to the end of this array.
- [append(copying:)](uniquearray/append%28copying_%29-3aouw.md): Copies the elements of a span to the end of this array.
- [append(copying:)](uniquearray/append%28copying_%29-7ntgb.md): Copies the elements of a sequence to the end of this array.
- [append(copying:)](uniquearray/append%28copying_%29-90c4t.md): Copies the elements of a buffer to the end of this array.
- [append(moving:)](uniquearray/append%28moving_%29-71oaj.md): Moves the elements of a buffer to the end of this array, leaving the buffer uninitialized.
- [append(moving:)](uniquearray/append%28moving_%29-9p4vs.md): Moves the elements of a output span to the end of this array, leaving the span empty.
- [clone()](uniquearray/clone%28%29.md): Copy the contents of this array into a newly allocated unique array instance with just enough capacity to hold all its elements.
- [clone(capacity:)](uniquearray/clone%28capacity_%29.md): Copy the contents of this array into a newly allocated unique array instance with the specified capacity.
- [distance(from:to:)](uniquearray/distance%28from_to_%29.md): Returns the distance between two indices.
- [edit(\_:)](uniquearray/edit%28__%29.md): Arbitrarily edit the storage underlying this array by invoking a user-supplied closure with a mutable `OutputSpan` view over it. This method calls its function argument at most once, allowing it to arbitrarily modify the contents of the output span it is given. The argument is free to add, remove or reorder any items; however, it is not allowed to replace the span or change its capacity.
- [formIndex(\_:offsetBy:limitedBy:)](uniquearray/formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, but no further than the given limiting index.
- [formIndex(after:)](uniquearray/formindex%28after_%29.md): Replaces the given index with its successor.
- [formIndex(before:)](uniquearray/formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](uniquearray/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(after:)](uniquearray/index%28after_%29.md): Returns the position immediately after the given index.
- [index(before:)](uniquearray/index%28before_%29.md): Returns the position immediately before the given index.
- [insert(\_:at:)](uniquearray/insert%28__at_%29.md): Inserts a new element into the array at the specified position.
- [insert(addingCount:at:initializingWith:)](uniquearray/insert%28addingcount_at_initializingwith_%29.md): Inserts a given number of new items into this array at the specified position, using a callback to directly initialize array storage by populating an output span.
- [insert(copying:at:)](uniquearray/insert%28copying_at_%29-2g824.md): Copies the elements of a span into this array at the specified position.
- [insert(copying:at:)](uniquearray/insert%28copying_at_%29-4823q.md): Copies the elements of a collection into this array at the specified position.
- [insert(copying:at:)](uniquearray/insert%28copying_at_%29-6kuy5.md): Copies the elements of a fully initialized buffer pointer into this array at the specified position.
- [insert(copying:at:)](uniquearray/insert%28copying_at_%29-9wt40.md): Copies the elements of a fully initialized buffer pointer into this array at the specified position.
- [insert(moving:at:)](uniquearray/insert%28moving_at_%29-4f2qc.md): Moves the elements of a fully initialized buffer into this array, starting at the specified position, and leaving the buffer uninitialized.
- [insert(moving:at:)](uniquearray/insert%28moving_at_%29-6d5t1.md): Moves the elements of an output span into this array, starting at the specified position, and leaving the span empty.
- [isTriviallyIdentical(to:)](uniquearray/istriviallyidentical%28to_%29.md)
- [popLast()](uniquearray/poplast%28%29.md): Removes and returns the last element of the array, if there is one.
- [remove(at:)](uniquearray/remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeAll()](uniquearray/removeall%28%29.md): Removes all elements from the array, preserving its allocated capacity.
- [removeLast()](uniquearray/removelast%28%29.md): Removes and returns the last element of the array.
- [removeLast(\_:)](uniquearray/removelast%28__%29.md): Removes and discards the specified number of elements from the end of the array.
- [removeSubrange(\_:)](uniquearray/removesubrange%28__%29-6hkdt.md): Removes the specified subrange of elements from the array.
- [removeSubrange(\_:)](uniquearray/removesubrange%28__%29-6t21j.md): Removes the specified subrange of elements from the array.
- [replaceSubrange(\_:addingCount:initializingWith:)](uniquearray/replacesubrange%28__addingcount_initializingwith_%29.md): Replaces the specified range of elements by a given count of new items, using a callback to directly initialize array storage by populating an output span.
- [replaceSubrange(\_:copying:)](uniquearray/replacesubrange%28__copying_%29-5cbxf.md): Replaces the specified subrange of elements by copying the elements of the given buffer pointer, which must be fully initialized.
- [replaceSubrange(\_:copying:)](uniquearray/replacesubrange%28__copying_%29-70i0j.md): Replaces the specified subrange of elements by copying the elements of the given span.
- [replaceSubrange(\_:copying:)](uniquearray/replacesubrange%28__copying_%29-7599g.md): Replaces the specified subrange of elements by copying the elements of the given collection.
- [replaceSubrange(\_:copying:)](uniquearray/replacesubrange%28__copying_%29-8tpt1.md): Replaces the specified subrange of elements by copying the elements of the given buffer pointer, which must be fully initialized.
- [replaceSubrange(\_:moving:)](uniquearray/replacesubrange%28__moving_%29-4de3f.md): Replaces the specified range of elements by moving the elements of a fully initialized buffer into their place. On return, the buffer is left in an uninitialized state.
- [replaceSubrange(\_:moving:)](uniquearray/replacesubrange%28__moving_%29-6vpdp.md): Replaces the specified range of elements by moving the contents of an output span into their place. On return, the span is left empty.
- [reserveCapacity(\_:)](uniquearray/reservecapacity%28__%29.md): Ensure that the array has capacity to store the specified number of elements, by growing its storage buffer if necessary.
- [setCapacity(\_:)](uniquearray/setcapacity%28__%29.md): Grow or shrink the capacity of a unique array instance without discarding its contents.
- [swapAt(\_:\_:)](uniquearray/swapat%28____%29.md): Exchanges the values at the specified indices of the array.

### Subscripts

- [subscript(\_:)](uniquearray/subscript%28__%29.md): Accesses the element at the specified position.

### Type Aliases

- [UniqueArray.Index](uniquearray/index.md): A type that represents a position in the array: an integer offset from the start.

### Default Implementations

- [Equatable Implementations](uniquearray/equatable-implementations.md)
- [Hashable Implementations](uniquearray/hashable-implementations.md)
- [Iterable Implementations](uniquearray/iterable-implementations.md)

## Relationships

### Conforms To

- [Equatable](equatable.md)
- [Hashable](hashable.md)
- [Iterable](iterable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Heap Storage

- [UniqueBox](uniquebox.md): A smart pointer type that uniquely owns an instance of `Value` on the heap.
