> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managed-buffers](https://developer.apple.com/documentation/swift/managed-buffers)

# Managed Buffers

**Framework:** Swift  
**Kind:** API Collection

Build your own buffer-backed collection types.

## Topics

### Buffer Implementation

- [ManagedBuffer](managedbuffer.md): A class whose instances contain a property of type `Header` and raw storage for an array of `Element`, whose size is determined at instance creation.
- [ManagedBufferPointer](managedbufferpointer.md): Contains a buffer object, and provides access to an instance of `Header` and contiguous storage for an arbitrary number of `Element` instances stored in that buffer.

### Uniqueness Checking

- [isKnownUniquelyReferenced(\_:)](isknownuniquelyreferenced%28__%29-98zpp.md): Returns a Boolean value indicating whether the given object is known to have a single strong reference.
- [isKnownUniquelyReferenced(\_:)](isknownuniquelyreferenced%28__%29-5kvtu.md): Returns a Boolean value indicating whether the given object is known to have a single strong reference.

## See Also

### Advanced Collection Topics

- [Sequence and Collection Protocols](sequence-and-collection-protocols.md): Write generic code that works with any collection, or build your own collection types.
- [Supporting Types](supporting-types.md): Use wrappers, indices, and iterators in operations like slicing, flattening, and reversing a collection.
