> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection](https://developer.apple.com/documentation/realitykit/scene/anchorcollection)

# Scene.AnchorCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A collection of anchor entities.

## Declaration

```swift
@MainActor @preconcurrency struct AnchorCollection
```

## Topics

### Iterating over the collection

- [makeIterator()](anchorcollection/makeiterator%28%29.md): Returns an iterator over the elements of the collection.
- [Scene.AnchorCollection.Iterator](anchorcollection/iterator.md): An iterator that presents the elements of the collection.
- [Scene.AnchorCollection.Element](anchorcollection/element.md): The type of element traversed by the iterator.

### Accessing anchors

- [subscript(\_:)](anchorcollection/subscript%28__%29.md): Accesses the element at the specified position.
- [Scene.AnchorCollection.SubSequence](anchorcollection/subsequence.md): A sequence that represents a contiguous subrange of the collection’s elements.

### Adding anchors

- [append(\_:)](anchorcollection/append%28__%29.md): Adds a new anchor at the end of the collection.
- [append(contentsOf:)](anchorcollection/append%28contentsof_%29-3bjib.md): Adds anchors from an array to the end of this collection.
- [append(contentsOf:)](anchorcollection/append%28contentsof_%29-4sf55.md): Adds anchors from a sequence to the end of this collection.

### Removing anchors

- [remove(\_:)](anchorcollection/remove%28__%29.md): Removes the anchor at the specified position.
- [remove(at:)](anchorcollection/remove%28at_%29.md): Removes and returns the anchor at the specified position.
- [removeAll()](anchorcollection/removeall%28%29.md): Removes all anchors from the collection.
- [removeAll(keepCapacity:)](anchorcollection/removeall%28keepcapacity_%29.md): Removes all anchors from the collection.

### Replacing anchors

- [replaceAll(\_:)](anchorcollection/replaceall%28__%29-tris.md): Replaces the existing anchor collection with a provided collection.
- [replaceAll(\_:)](anchorcollection/replaceall%28__%29-5t195.md): Replaces the existing anchor collection with a provided sequence.

### Manipulating indices

- [Scene.AnchorCollection.Index](anchorcollection/index.md): A type that represents a position in the collection.
- [startIndex](anchorcollection/startindex.md): The position of the first element in a nonempty collection.
- [endIndex](anchorcollection/endindex.md): The position one greater than the last valid subscript argument.
- [index(after:)](anchorcollection/index%28after_%29.md): Returns the position immediately after the given index.

### Describing the collection

- [description](anchorcollection/description.md): A textual representation of this instance.

### Instance Methods

- [append(contentsOf:)](anchorcollection/append%28contentsof_%29.md): Adds anchors from an array to the end of this collection.
- [replaceAll(\_:)](anchorcollection/replaceall%28__%29.md): Replaces the existing anchor collection with a provided collection.

### Type Aliases

- [Scene.AnchorCollection.Indices](anchorcollection/indices.md): A type that represents the indices that are valid for subscripting the collection, in ascending order.

### Default Implementations

- [CustomStringConvertible Implementations](anchorcollection/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Scene management

- [Scene](../scene.md): A container that holds the collection of entities that an AR view renders.
