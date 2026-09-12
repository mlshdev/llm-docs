> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/basic-behaviors](https://developer.apple.com/documentation/swift/basic-behaviors)

# Basic Behaviors

**Framework:** Swift  
**Kind:** API Collection

Use your custom types in operations that depend on testing for equality or order and as members of sets and dictionaries.

## Topics

### Equality and Ordering

Allow your custom types to be used with simple collection operations, such as `contains(_:)`, and standard comparison operators.

- [Equatable](equatable.md): A type that can be compared for value equality.
- [Comparable](comparable.md): A type that can be compared using the relational operators `<`, `<=`, `>=`, and `>`.
- [Identifiable](identifiable.md): A class of types whose instances hold the value of an entity with stable identity.

### Copying

- [Copyable](copyable.md): A type whose values can be implicitly or explicitly copied.
- [BitwiseCopyable](bitwisecopyable.md)
- [Escapable](escapable.md): A type whose values can persist beyond their immediate local scope.

### Borrowing

- [Ref](ref.md): A safe reference allowing in-place reads to a shared value.
- [MutableRef](mutableref.md): A safe mutable reference allowing in-place mutation to an exclusive value.

### Sets and Dictionaries

Store your custom types in sets or use them as dictionary keys.

- [Hashable](hashable.md): A type that can be hashed into a `Hasher` to produce an integer hash value.
- [Hasher](hasher.md): The universal hash function used by `Set` and `Dictionary`.

### String Representation

- [CustomStringConvertible](customstringconvertible.md): A type with a customized textual representation.
- [LosslessStringConvertible](losslessstringconvertible.md): A type that can be represented as a string in a lossless, unambiguous way.
- [CustomDebugStringConvertible](customdebugstringconvertible.md): A type with a customized textual representation suitable for debugging purposes.

### Raw Representation

- [CaseIterable](caseiterable.md): A type that provides a collection of all of its values.
- [RawRepresentable](rawrepresentable.md): A type that can be converted to and from an associated raw value.

## See Also

### Tools for Your Types

- [Encoding, Decoding, and Serialization](encoding-decoding-and-serialization.md): Serialize and deserialize instances of your types with implicit or customized encoding.
- [Initialization with Literals](initialization-with-literals.md): Allow values of your type to be expressed using different kinds of literals.
