> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range](https://developer.apple.com/documentation/swift/range)

# Range

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A half-open interval from a lower bound up to, but not including, an upper bound.

## Declaration

```swift
@frozen struct Range<Bound> where Bound : Comparable
```

<a id="overview"></a>

## Overview

You create a `Range` instance by using the half-open range operator (`..<`).

```swift
let underFive = 0.0..<5.0
```

You can use a `Range` instance to quickly check if a value is contained in a particular range of values. For example:

```swift
underFive.contains(3.14)
// true
underFive.contains(6.28)
// false
underFive.contains(5.0)
// false
```

`Range` instances can represent an empty interval, unlike `ClosedRange`.

```swift
let empty = 0.0..<0.0
empty.contains(0.0)
// false
empty.isEmpty
// true
```

<a id="Using-a-Range-as-a-Collection-of-Consecutive-Values"></a>

## Using a Range as a Collection of Consecutive Values

When a range uses integers as its lower and upper bounds, or any other type that conforms to the `Strideable` protocol with an integer stride, you can use that range in a `for`-`in` loop or with any sequence or collection method. The elements of the range are the consecutive values from its lower bound up to, but not including, its upper bound.

```swift
for n in 3..<5 {
    print(n)
}
// Prints "3"
// Prints "4"
```

Because floating-point types such as `Float` and `Double` are their own `Stride` types, they cannot be used as the bounds of a countable range. If you need to iterate over consecutive floating-point values, see the `stride(from:to:by:)` function.

## Topics

### Creating a Range

Create a new range using the half-open range operator (`..<`).

- [..\<(\_:\_:)](comparable/'.._%28____%29.md): Returns a half-open range that contains its lower bound but not its upper bound.

### Converting Ranges

- [relative(to:)](range/relative%28to_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns the range of indices described by this range expression within the given collection.
- [init(\_:in:)](range/init%28__in_%29-5cclx.md): Conforms when `Bound` is `String.Index`.
- [init(\_:in:)](range/init%28__in_%29-5qfor.md): Conforms when `Bound` is `String.Index`.

### Inspecting a Range

- [isEmpty](range/isempty.md): A Boolean value indicating whether the range contains no elements.
- [lowerBound](range/lowerbound.md): The range’s lower bound.
- [upperBound](range/upperbound.md): The range’s upper bound.

### Checking for Containment

- [~=(\_:\_:)](range/~=%28____%29.md): Returns a Boolean value indicating whether a value is included in a range.

### Clamping a Range

- [clamped(to:)](range/clamped%28to_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a copy of this range clamped to the given limiting range.

### Working with Foundation Ranges

- [init(\_:)](range/init%28__%29-15u6b.md): Conforms when `Bound` is `Int`.
- [init(\_:)](range/init%28__%29-1q7lu.md): Conforms when `Bound` conforms to `BinaryInteger`.

### Comparing Ranges

- [==(\_:\_:)](range/==%28____%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether two ranges are equal.
- [!=(\_:\_:)](range/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [overlaps(\_:)](range/overlaps%28__%29-7osha.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether this range and the given range contain an element in common.
- [overlaps(\_:)](range/overlaps%28__%29-9fkb2.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether this range and the given closed range contain an element in common.

### Manipulating Indices

- [hash(into:)](range/hash%28into_%29.md): Conforms when `Bound` conforms to `Comparable` and `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.

### Describing a Range

- [description](range/description.md): Conforms when `Bound` conforms to `Comparable`. A textual representation of the range.
- [debugDescription](range/debugdescription.md): Conforms when `Bound` conforms to `Comparable`. A textual representation of the range, suitable for debugging.
- [customMirror](range/custommirror.md): Conforms when `Bound` conforms to `Comparable`. The custom mirror for this instance.

### Encoding and Decoding a Range

- [encode(to:)](range/encode%28to_%29.md): Conforms when `Bound` conforms to `Comparable` and `Encodable`. Encodes this value into the given encoder.
- [init(from:)](range/init%28from_%29.md): Conforms when `Bound` conforms to `Comparable` and `Decodable`. Creates a new instance by decoding from the given decoder.

### Infrequently Used Functionality

- [init(uncheckedBounds:)](range/init%28uncheckedbounds_%29.md): Creates an instance with the given bounds.
- [hashValue](range/hashvalue.md): Conforms when `Bound` conforms to `Comparable` and `Hashable`. The hash value.

### Initializers

- [init(\_:)](range/init%28__%29-35b1j.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Now that Range is conditionally a collection when Bound: Strideable, CountableRange is no longer needed. This is a deprecated initializer for any remaining uses of Range(countableRange).
- [init(\_:)](range/init%28__%29-79g1a.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Creates an instance equivalent to the given `ClosedRange`.
- [init(\_:in:)](range/init%28__in_%29-24465.md): Conforms when `Bound` is `AttributedString.Index`.
- [init(\_:in:)](range/init%28__in_%29-612lr.md): Conforms when `Bound` is `AttributedString.Index`.
- [init(\_:in:)](range/init%28__in_%29-75xo3.md): Conforms when `Bound` is `String.Index`.
- [init(\_:in:)](range/init%28__in_%29-9vre5.md): Conforms when `Bound` is `String.Index`.

### Instance Methods

- [contains(\_:)](range/contains%28__%29-4xxju.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether the given range is contained within this range.
- [contains(\_:)](range/contains%28__%29-680jp.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether the given closed range is contained within this range.
- [contains(\_:)](range/contains%28__%29-76nb4.md): Returns a Boolean value indicating whether the given element is contained within the range.
- [formatted()](range/formatted%28%29.md): Conforms when `Bound` is `Date`. Formats the date range as an interval.
- [formatted(\_:)](range/formatted%28__%29.md): Conforms when `Bound` is `Date`. Formats the date range using the specified style.
- [formatted(date:time:)](range/formatted%28date_time_%29.md): Conforms when `Bound` is `Date`. Formats the date range using the specified date and time format styles.
- [isValid(within:)](range/isvalid%28within_%29-2fba2.md): Conforms when `Bound` is `AttributedString.Index`. Indicates whether the range is valid for use with the provided attributed string.
- [isValid(within:)](range/isvalid%28within_%29-8h4h8.md): Conforms when `Bound` is `AttributedString.Index`. Indicates whether the range is valid for use with the provided discontiguous attributed string.

### Type Methods

- [upToNextMajor(from:)](range/uptonextmajor%28from_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a requirement for a version range, starting at the given minimum version and going up to the next major version. This is the recommended version requirement.
- [upToNextMinor(from:)](range/uptonextminor%28from_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a requirement for a version range, starting at the given minimum version and going up to the next minor version.

### Default Implementations

- [BidirectionalCollection Implementations](range/bidirectionalcollection-implementations.md)
- [Collection Implementations](range/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](range/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](range/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](range/customstringconvertible-implementations.md)
- [Decodable Implementations](range/decodable-implementations.md)
- [Encodable Implementations](range/encodable-implementations.md)
- [Equatable Implementations](range/equatable-implementations.md)
- [Hashable Implementations](range/hashable-implementations.md)
- [RangeExpression Implementations](range/rangeexpression-implementations.md)
- [Sequence Implementations](range/sequence-implementations.md)

## Relationships

### Conforms To

- [BNNSGraph.Builder.SliceIndex](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/sliceindex)
- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [CustomTestStringConvertible](https://developer.apple.com/documentation/testing/customteststringconvertible)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [MLShapedArrayRangeExpression](https://developer.apple.com/documentation/coreml/mlshapedarrayrangeexpression)
- [MLTensorRangeExpression](https://developer.apple.com/documentation/coreml/mltensorrangeexpression)
- [NDArray.RangeExpression](https://developer.apple.com/documentation/coreai/ndarray/rangeexpression)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeExpression](rangeexpression.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Ranges

- [..\<(\_:\_:)](comparable/'.._%28____%29.md): Returns a half-open range that contains its lower bound but not its upper bound.
- [RangeSet](rangeset.md): A set of values of any comparable type, represented by ranges.
- [...(\_:\_:)](comparable/'...%28____%29.md): Returns a closed range that contains both of its bounds.
- [ClosedRange](closedrange.md): An interval from a lower bound up to, and including, an upper bound.
