> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/atomicoptionalrepresentable-implementations](https://developer.apple.com/documentation/swift/unsafemutablepointer/atomicoptionalrepresentable-implementations)

# AtomicOptionalRepresentable Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Type Aliases

- [UnsafeMutablePointer.AtomicOptionalRepresentation](atomicoptionalrepresentation.md): The storage representation type that encodes to and decodes from `Optional<Self>` which is a suitable type when used in atomic operations on `Optional`.

### Type Methods

- [decodeAtomicOptionalRepresentation(\_:)](decodeatomicoptionalrepresentation%28__%29.md): Recovers the logical atomic type `Self?` by destroying some `AtomicOptionalRepresentation` storage instance returned from an atomic operation on `Optional`.
- [encodeAtomicOptionalRepresentation(\_:)](encodeatomicoptionalrepresentation%28__%29.md): Destroys a value of `Self` and prepares an `AtomicOptionalRepresentation` storage type to be used for atomic operations on `Optional`.
