> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/optional/atomicrepresentable-implementations

# AtomicRepresentable Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Type Aliases

- [Optional.AtomicRepresentation](atomicrepresentation.md): Conforms when `Wrapped` conforms to `AtomicOptionalRepresentable`. The storage representation type that `Self` encodes to and decodes from which is a suitable type when used in atomic operations.

### Type Methods

- [decodeAtomicRepresentation(\_:)](decodeatomicrepresentation%28__%29.md): Conforms when `Wrapped` conforms to `AtomicOptionalRepresentable`. Recovers the logical atomic type `Self` by destroying some `AtomicRepresentation` storage instance returned from an atomic operation.
- [encodeAtomicRepresentation(\_:)](encodeatomicrepresentation%28__%29.md): Conforms when `Wrapped` conforms to `AtomicOptionalRepresentable`. Destroys a value of `Self` and prepares an `AtomicRepresentation` storage type to be used for atomic operations.
