> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/childcollection](https://developer.apple.com/documentation/realitykit/entity/childcollection)

# Entity.ChildCollection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A collection of child entities.

## Declaration

```swift
@MainActor @preconcurrency struct ChildCollection
```

## Topics

### Accessing collection members

- [subscript(\_:)](childcollection/subscript%28__%29.md): Accesses the element at the specified position. (See `Collection.subscript`.)

### Adding entities

- [append(contentsOf:preservingWorldTransforms:)](childcollection/append%28contentsof_preservingworldtransforms_%29-7g61.md): Adds the specified list of entity as children to this entity.
- [append(\_:preservingWorldTransform:)](childcollection/append%28__preservingworldtransform_%29.md): Adds the specified entity as a child to this entity.
- [append(contentsOf:preservingWorldTransforms:)](childcollection/append%28contentsof_preservingworldtransforms_%29-7p4hd.md): Adds the specified list of entity as children to this entity.

### Removing entities

- [remove(\_:preservingWorldTransform:)](childcollection/remove%28__preservingworldtransform_%29.md): Removes the specified child from this entity.
- [remove(at:preservingWorldTransform:)](childcollection/remove%28at_preservingworldtransform_%29.md): Removes the specified child from this entity.
- [removeAll(preservingWorldTransforms:)](childcollection/removeall%28preservingworldtransforms_%29.md)
- [removeAll(keepCapacity:preservingWorldTransforms:)](childcollection/removeall%28keepcapacity_preservingworldtransforms_%29.md): Removes all children from this entity.

### Replacing entities

- [replaceAll(\_:preservingWorldTransforms:)](childcollection/replaceall%28__preservingworldtransforms_%29-4mgff.md): Removes all children from this entity and adds the specified list of entities as the new children.
- [replaceAll(\_:preservingWorldTransforms:)](childcollection/replaceall%28__preservingworldtransforms_%29-1vwk4.md): Removes all children from this entity and adds the specified list of entities as the new children.

### Iterating over collection of entities

- [Entity.ChildCollection.IndexingIterator](childcollection/indexingiterator.md)

### Describing a collection

- [description](childcollection/description.md): A textual representation of this instance. (See `CustomStringConvertible`.)

### Manipulating indices

- [startIndex](childcollection/startindex.md): The position of the first element in a nonempty collection. (See `Collection.startIndex`.)
- [endIndex](childcollection/endindex.md): TThe collection’s “past the end” position—that is, the position one greater than the last valid subscript argument. (See `Collection.endIndex`.)
- [index(after:)](childcollection/index%28after_%29.md): Returns the position immediately after the given index. (See `Collection.index`.)

### Instance Methods

- [append(contentsOf:preservingWorldTransforms:)](childcollection/append%28contentsof_preservingworldtransforms_%29.md): Adds the specified list of entity as children to this entity.
- [replaceAll(\_:preservingWorldTransforms:)](childcollection/replaceall%28__preservingworldtransforms_%29.md): Removes all children from this entity and adds the specified list of entities as the new children.

### Default Implementations

- [CustomStringConvertible Implementations](childcollection/customstringconvertible-implementations.md)
- [EntityCollection Implementations](childcollection/entitycollection-implementations.md)

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [EntityCollection](../entitycollection.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Relating entities

- [parameters](parameters.md): Represents a reference to the parameters for a particular entity.
- [HasHierarchy](../hashierarchy.md): An interface that provides access to a parent entity and child entities.
