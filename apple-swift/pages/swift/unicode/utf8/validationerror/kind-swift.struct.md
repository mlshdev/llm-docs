> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8/validationerror/kind-swift.struct](https://developer.apple.com/documentation/swift/unicode/utf8/validationerror/kind-swift.struct)

# Unicode.UTF8.ValidationError.Kind

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The kind of encoding error encountered during validation

## Declaration

```swift
@frozen struct Kind
```

## Topics

### Initializers

- [init(rawValue:)](kind-swift.struct/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance Properties

- [rawValue](kind-swift.struct/rawvalue-swift.property.md): The corresponding value of the raw type.

### Type Aliases

- [Unicode.UTF8.ValidationError.Kind.RawValue](kind-swift.struct/rawvalue-swift.typealias.md): The raw type that can be used to represent all values of the conforming type.

### Type Properties

- [invalidNonSurrogateCodePointByte](kind-swift.struct/invalidnonsurrogatecodepointbyte.md): A byte in an invalid, non-surrogate code point (`>U+10FFFF`) sequence
- [overlongEncodingByte](kind-swift.struct/overlongencodingbyte.md): A byte in an overlong encoding sequence
- [surrogateCodePointByte](kind-swift.struct/surrogatecodepointbyte.md): A byte in a surrogate code point (`U+D800..U+DFFF`) sequence
- [truncatedScalar](kind-swift.struct/truncatedscalar.md): A multi-byte sequence that is the start of a valid multi-byte scalar but is cut off before ending correctly
- [unexpectedContinuationByte](kind-swift.struct/unexpectedcontinuationbyte.md): A continuation byte (`10xxxxxx`) outside of a multi-byte sequence

### Default Implementations

- [CustomStringConvertible Implementations](kind-swift.struct/customstringconvertible-implementations.md)
- [Equatable Implementations](kind-swift.struct/equatable-implementations.md)
- [RawRepresentable Implementations](kind-swift.struct/rawrepresentable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../../../bitwisecopyable.md)
- [Copyable](../../../copyable.md)
- [CustomStringConvertible](../../../customstringconvertible.md)
- [Equatable](../../../equatable.md)
- [Error](../../../error.md)
- [Escapable](../../../escapable.md)
- [Hashable](../../../hashable.md)
- [RawRepresentable](../../../rawrepresentable.md)
- [Sendable](../../../sendable.md)
- [SendableMetatype](../../../sendablemetatype.md)
