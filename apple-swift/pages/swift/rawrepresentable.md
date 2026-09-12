> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

# RawRepresentable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be converted to and from an associated raw value.

## Declaration

```swift
protocol RawRepresentable<RawValue>
```

<a id="overview"></a>

## Overview

With a `RawRepresentable` type, you can switch back and forth between a custom type and an associated `RawValue` type without losing the value of the original `RawRepresentable` type. Using the raw value of a conforming type streamlines interoperation with Objective-C and legacy APIs and simplifies conformance to other protocols, such as `Equatable`, `Comparable`, and `Hashable`.

The `RawRepresentable` protocol is seen mainly in two categories of types: enumerations with raw value types and option sets.

<a id="Enumerations-with-Raw-Values"></a>

## Enumerations with Raw Values

For any enumeration with a string, integer, or floating-point raw type, the Swift compiler automatically adds `RawRepresentable` conformance. When defining your own custom enumeration, you give it a raw type by specifying the raw type as the first item in the enumeration’s type inheritance list. You can also use literals to specify values for one or more cases.

For example, the `Counter` enumeration defined here has an `Int` raw value type and gives the first case a raw value of `1`:

```swift
enum Counter: Int {
    case one = 1, two, three, four, five
}
```

You can create a `Counter` instance from an integer value between 1 and 5 by using the `init?(rawValue:)` initializer declared in the `RawRepresentable` protocol. This initializer is failable because although every case of the `Counter` type has a corresponding `Int` value, there are many `Int` values that *don’t* correspond to a case of `Counter`.

```swift
for i in 3...6 {
    print(Counter(rawValue: i))
}
// Prints "Optional(Counter.three)"
// Prints "Optional(Counter.four)"
// Prints "Optional(Counter.five)"
// Prints "nil"
```

<a id="Option-Sets"></a>

## Option Sets

Option sets all conform to `RawRepresentable` by inheritance using the `OptionSet` protocol. Whether using an option set or creating your own, you use the raw value of an option set instance to store the instance’s bitfield. The raw value must therefore be of a type that conforms to the `FixedWidthInteger` protocol, such as `UInt8` or `Int`. For example, the `Direction` type defines an option set for the four directions you can move in a game.

```swift
struct Directions: OptionSet {
    let rawValue: UInt8

    static let up    = Directions(rawValue: 1 << 0)
    static let down  = Directions(rawValue: 1 << 1)
    static let left  = Directions(rawValue: 1 << 2)
    static let right = Directions(rawValue: 1 << 3)
}
```

Unlike enumerations, option sets provide a nonfailable `init(rawValue:)` initializer to convert from a raw value, because option sets don’t have an enumerated list of all possible cases. Option set values have a one-to-one correspondence with their associated raw values.

In the case of the `Directions` option set, an instance can contain zero, one, or more of the four defined directions. This example declares a constant with three currently allowed moves. The raw value of the `allowedMoves` instance is the result of the bitwise OR of its three members’ raw values:

```swift
let allowedMoves: Directions = [.up, .down, .left]
print(allowedMoves.rawValue)
// Prints "7"
```

Option sets use bitwise operations on their associated raw values to implement their mathematical set operations. For example, the `contains()` method on `allowedMoves` performs a bitwise AND operation to check whether the option set contains an element.

```swift
print(allowedMoves.contains(.right))
// Prints "false"
print(allowedMoves.rawValue & Directions.right.rawValue)
// Prints "0"
```

## Topics

### Creating a Value

- [init(rawValue:)](rawrepresentable/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Accessing the Raw Value

- [rawValue](rawrepresentable/rawvalue-swift.property.md): The corresponding value of the raw type.
- [RawValue](rawrepresentable/rawvalue-swift.associatedtype.md): The raw type that can be used to represent all values of the conforming type.

### Comparing Values

- [==(\_:\_:)](==%28____%29-9hu5c.md): Returns a Boolean value indicating whether the two arguments are equal.
- [!=(\_:\_:)](!=%28____%29-9wy5n.md): Returns a Boolean value indicating whether the two arguments are not equal.
- [!=(\_:\_:)](!=%28____%29-8pggn.md): Returns a Boolean value indicating whether the two arguments are not equal.

### Decoding a Value

These initializer overloads are available for any conforming type with a `RawValue` that is a `Decodable` standard library type.

- [init(from:)](rawrepresentable/init%28from_%29-5auil.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `String`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `String`.
- [init(from:)](rawrepresentable/init%28from_%29-5ar5m.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Bool`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Bool`.
- [init(from:)](rawrepresentable/init%28from_%29-417i8.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Double`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Double`.
- [init(from:)](rawrepresentable/init%28from_%29-9u9tp.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Float`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Float`.
- [init(from:)](rawrepresentable/init%28from_%29-4ibll.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int`.
- [init(from:)](rawrepresentable/init%28from_%29-3hvw1.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt`.
- [init(from:)](rawrepresentable/init%28from_%29-5ktev.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int8`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int8`.
- [init(from:)](rawrepresentable/init%28from_%29-2hvc0.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int16`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int16`.
- [init(from:)](rawrepresentable/init%28from_%29-114vz.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int32`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int32`.
- [init(from:)](rawrepresentable/init%28from_%29-29lhi.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int64`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int64`.
- [init(from:)](rawrepresentable/init%28from_%29-94955.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt8`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt8`.
- [init(from:)](rawrepresentable/init%28from_%29-6z4x4.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt16`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt16`.
- [init(from:)](rawrepresentable/init%28from_%29-3arr3.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt32`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt32`.
- [init(from:)](rawrepresentable/init%28from_%29-812cy.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt64`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt64`.

### Encoding a Value

These overloads are available for any conforming type with a `RawValue` that is an `Encodable` standard library type.

- [encode(to:)](rawrepresentable/encode%28to_%29-4evma.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `String`. Encodes this value into the given encoder, when the type’s `RawValue` is `String`.
- [encode(to:)](rawrepresentable/encode%28to_%29-5igsi.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Bool`. Encodes this value into the given encoder, when the type’s `RawValue` is `Bool`.
- [encode(to:)](rawrepresentable/encode%28to_%29-4tbh4.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Double`. Encodes this value into the given encoder, when the type’s `RawValue` is `Double`.
- [encode(to:)](rawrepresentable/encode%28to_%29-21ma8.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Float`. Encodes this value into the given encoder, when the type’s `RawValue` is `Float`.
- [encode(to:)](rawrepresentable/encode%28to_%29-8horh.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int`.
- [encode(to:)](rawrepresentable/encode%28to_%29-78oqu.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt`.
- [encode(to:)](rawrepresentable/encode%28to_%29-4pavm.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int8`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int8`.
- [encode(to:)](rawrepresentable/encode%28to_%29-86dqn.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int16`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int16`.
- [encode(to:)](rawrepresentable/encode%28to_%29-7dyeb.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int32`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int32`.
- [encode(to:)](rawrepresentable/encode%28to_%29-4gohs.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int64`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int64`.
- [encode(to:)](rawrepresentable/encode%28to_%29-9u5rt.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt8`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt8`.
- [encode(to:)](rawrepresentable/encode%28to_%29-cla3.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt16`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt16`.
- [encode(to:)](rawrepresentable/encode%28to_%29-27waz.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt32`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt32`.
- [encode(to:)](rawrepresentable/encode%28to_%29-16ame.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt64`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt64`.

### Initializers

- [init(codingKey:)](rawrepresentable/init%28codingkey_%29-3mxjn.md): Conforms when `Self` conforms to `CodingKeyRepresentable` and `RawValue` is `Int`.
- [init(codingKey:)](rawrepresentable/init%28codingkey_%29-9gih0.md): Conforms when `Self` conforms to `CodingKeyRepresentable` and `RawValue` is `String`.
- [init(from:)](rawrepresentable/init%28from_%29-6yajb.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt128`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt128`.
- [init(from:)](rawrepresentable/init%28from_%29-8fm8i.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int128`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int128`.

### Instance Properties

- [codingKey](rawrepresentable/codingkey-2f0gm.md): Conforms when `Self` conforms to `CodingKeyRepresentable` and `RawValue` is `String`.
- [codingKey](rawrepresentable/codingkey-xnw1.md): Conforms when `Self` conforms to `CodingKeyRepresentable` and `RawValue` is `Int`.
- [hashValue](rawrepresentable/hashvalue.md): Conforms when `Self` conforms to `Hashable` and `RawValue` conforms to `Hashable`.
- [rawAttachmentValueRepresentation](rawrepresentable/rawattachmentvaluerepresentation.md): Conforms when `RawValue` conforms to `CVAttachmentValueRepresentable`.

### Instance Methods

- [encode(to:)](rawrepresentable/encode%28to_%29-172ut.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int128`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int128`.
- [encode(to:)](rawrepresentable/encode%28to_%29-3ahar.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt128`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt128`.
- [hash(into:)](rawrepresentable/hash%28into_%29.md): Conforms when `Self` conforms to `Hashable` and `RawValue` conforms to `Hashable`.

### Type Aliases

- [RawRepresentable.AtomicOptionalRepresentation](rawrepresentable/atomicoptionalrepresentation.md): Conforms when `Self` conforms to `AtomicOptionalRepresentable` and `RawValue` conforms to `AtomicOptionalRepresentable`. The storage representation type that encodes to and decodes from `Optional<Self>` which is a suitable type when used in atomic operations on `Optional`.
- [RawRepresentable.AtomicRepresentation](rawrepresentable/atomicrepresentation.md): Conforms when `Self` conforms to `AtomicRepresentable` and `RawValue` conforms to `AtomicRepresentable`. The storage representation type that `Self` encodes to and decodes from which is a suitable type when used in atomic operations.

### Type Methods

- [decodeAtomicOptionalRepresentation(\_:)](rawrepresentable/decodeatomicoptionalrepresentation%28__%29.md): Conforms when `Self` conforms to `AtomicOptionalRepresentable` and `RawValue` conforms to `AtomicOptionalRepresentable`. Recovers the logical atomic type `Self?` by destroying some `AtomicOptionalRepresentation` storage instance returned from an atomic operation on `Optional`.
- [decodeAtomicRepresentation(\_:)](rawrepresentable/decodeatomicrepresentation%28__%29.md): Conforms when `Self` conforms to `AtomicRepresentable` and `RawValue` conforms to `AtomicRepresentable`. Recovers the logical atomic type `Self` by destroying some `AtomicRepresentation` storage instance returned from an atomic operation.
- [encodeAtomicOptionalRepresentation(\_:)](rawrepresentable/encodeatomicoptionalrepresentation%28__%29.md): Conforms when `Self` conforms to `AtomicOptionalRepresentable` and `RawValue` conforms to `AtomicOptionalRepresentable`. Destroys a value of `Self` and prepares an `AtomicOptionalRepresentation` storage type to be used for atomic operations on `Optional`.
- [encodeAtomicRepresentation(\_:)](rawrepresentable/encodeatomicrepresentation%28__%29.md): Conforms when `Self` conforms to `AtomicRepresentable` and `RawValue` conforms to `AtomicRepresentable`. Destroys a value of `Self` and prepares an `AtomicRepresentation` storage type to be used for atomic operations.
- [makeFromRawAttachmentValue(\_:)](rawrepresentable/makefromrawattachmentvalue%28__%29.md): Conforms when `RawValue` conforms to `CVAttachmentValueRepresentable`.

## Relationships

### Inherited By

- [OptionSet](optionset.md)

### Conforming Types

- [CodingUserInfoKey](codinguserinfokey.md)
- [FloatingPointSign](floatingpointsign.md)
- [String.Encoding](string/encoding.md)
- [TaskPriority](taskpriority.md)
- [Unicode.CanonicalCombiningClass](unicode/canonicalcombiningclass.md)
- [Unicode.UTF8.ValidationError.Kind](unicode/utf8/validationerror/kind-swift.struct.md)

## See Also

### Raw Representation

- [CaseIterable](caseiterable.md): A type that provides a collection of all of its values.
