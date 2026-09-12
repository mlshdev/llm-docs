> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/numeric](https://developer.apple.com/documentation/swift/numeric)

# Numeric

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type with values that support multiplication.

## Declaration

```swift
protocol Numeric : AdditiveArithmetic, ExpressibleByIntegerLiteral
```

<a id="overview"></a>

## Overview

The `Numeric` protocol provides a suitable basis for arithmetic on scalar values, such as integers and floating-point numbers. You can write generic methods that operate on any numeric type in the standard library by using the `Numeric` protocol as a generic constraint.

The following example extends `Sequence` with a method that returns an array with the sequence’s values multiplied by two.

```swift
extension Sequence where Element: Numeric {
    func doublingAll() -> [Element] {
        return map { $0 * 2 }
    }
}
```

With this extension, any sequence with elements that conform to `Numeric` has the `doublingAll()` method. For example, you can double the elements of an array of doubles or a range of integers:

```swift
let observations = [1.5, 2.0, 3.25, 4.875, 5.5]
let doubledObservations = observations.doublingAll()
// doubledObservations == [3.0, 4.0, 6.5, 9.75, 11.0]

let integers = 0..<8
let doubledIntegers = integers.doublingAll()
// doubledIntegers == [0, 2, 4, 6, 8, 10, 12, 14]
```

<a id="Conforming-to-the-Numeric-Protocol"></a>

## Conforming to the Numeric Protocol

To add `Numeric` protocol conformance to your own custom type, implement the required initializer and operators, and provide a `magnitude` property using a type that can represent the magnitude of any value of your custom type.

## Topics

### Operators

- [\*(\_:\_:)](numeric/_%28____%29.md): Multiplies two values and produces their product.
- [\*=(\_:\_:)](numeric/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.

### Associated Types

- [Magnitude](numeric/magnitude-swift.associatedtype.md): A type that can represent the absolute value of any possible value of the conforming type.

### Initializers

- [init(exactly:)](numeric/init%28exactly_%29.md): Creates a new instance from the given integer, if it can be represented exactly.

### Instance Properties

- [magnitude](numeric/magnitude-1v49u.md): The magnitude of this value.

## Relationships

### Inherits From

- [AdditiveArithmetic](additivearithmetic.md)
- [Equatable](equatable.md)
- [ExpressibleByIntegerLiteral](expressiblebyintegerliteral.md)

### Inherited By

- [BinaryFloatingPoint](binaryfloatingpoint.md)
- [BinaryInteger](binaryinteger.md)
- [FixedWidthInteger](fixedwidthinteger.md)
- [FloatingPoint](floatingpoint.md)
- [SignedInteger](signedinteger.md)
- [SignedNumeric](signednumeric.md)
- [UnsignedInteger](unsignedinteger.md)

### Conforming Types

- [Double](double.md)
- [Float](float.md)
- [Float16](float16.md)
- [Float80](float80.md)
- [Int](int.md)
- [Int128](int128.md)
- [Int16](int16.md)
- [Int32](int32.md)
- [Int64](int64.md)
- [Int8](int8.md)
- [UInt](uint.md)
- [UInt128](uint128.md)
- [UInt16](uint16.md)
- [UInt32](uint32.md)
- [UInt64](uint64.md)
- [UInt8](uint8.md)

## See Also

### Basic Arithmetic

- [AdditiveArithmetic](additivearithmetic.md): A type with values that support addition and subtraction.
- [SignedNumeric](signednumeric.md): A numeric type with a negation operation.
- [Strideable](strideable.md): A type representing continuous, one-dimensional values that can be offset and measured.
