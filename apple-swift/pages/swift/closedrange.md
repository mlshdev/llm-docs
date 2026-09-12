> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange](https://developer.apple.com/documentation/swift/closedrange)

# ClosedRange

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interval from a lower bound up to, and including, an upper bound.

## Declaration

```swift
@frozen struct ClosedRange<Bound> where Bound : Comparable
```

<a id="overview"></a>

## Overview

You create a `ClosedRange` instance by using the closed range operator (`...`).

```swift
let throughFive = 0...5
```

A `ClosedRange` instance contains both its lower bound and its upper bound.

```swift
throughFive.contains(3)
// true
throughFive.contains(10)
// false
throughFive.contains(5)
// true
```

Because a closed range includes its upper bound, a closed range whose lower bound is equal to the upper bound contains that value. Therefore, a `ClosedRange` instance cannot represent an empty range.

```swift
let zeroInclusive = 0...0
zeroInclusive.contains(0)
// true
zeroInclusive.isEmpty
// false
```

<a id="Using-a-Closed-Range-as-a-Collection-of-Consecutive-Values"></a>

## Using a Closed Range as a Collection of Consecutive Values

When a closed range uses integers as its lower and upper bounds, or any other type that conforms to the `Strideable` protocol with an integer stride, you can use that range in a `for`-`in` loop or with any sequence or collection method. The elements of the range are the consecutive values from its lower bound up to, and including, its upper bound.

```swift
for n in 3...5 {
    print(n)
}
// Prints "3"
// Prints "4"
// Prints "5"
```

Because floating-point types such as `Float` and `Double` are their own `Stride` types, they cannot be used as the bounds of a countable range. If you need to iterate over consecutive floating-point values, see the `stride(from:through:by:)` function.

## Topics

### Creating a Range

Create a new range using the closed range operator (`...`).

- [...(\_:\_:)](comparable/'...%28____%29.md): Returns a closed range that contains both of its bounds.

### Converting Ranges

- [relative(to:)](closedrange/relative%28to_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns the range of indices described by this range expression within the given collection.

### Inspecting a Range

- [isEmpty](closedrange/isempty.md): Conforms when `Bound` conforms to `Comparable`. A Boolean value indicating whether the range contains no elements.
- [lowerBound](closedrange/lowerbound.md): The range’s lower bound.
- [upperBound](closedrange/upperbound.md): The range’s upper bound.

### Checking for Containment

- [~=(\_:\_:)](closedrange/~=%28____%29.md): Returns a Boolean value indicating whether a value is included in a range.

### Clamping a Range

- [clamped(to:)](closedrange/clamped%28to_%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a copy of this range clamped to the given limiting range.

### Comparing Ranges

- [==(\_:\_:)](closedrange/==%28____%29.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether two ranges are equal.
- [!=(\_:\_:)](closedrange/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [overlaps(\_:)](closedrange/overlaps%28__%29-947dt.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether this range and the given range contain an element in common.
- [overlaps(\_:)](closedrange/overlaps%28__%29-7dfep.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether this range and the given closed range contain an element in common.

### Manipulating Indices

- [hash(into:)](closedrange/hash%28into_%29.md): Conforms when `Bound` conforms to `Comparable` and `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.

### Describing a Range

- [description](closedrange/description.md): Conforms when `Bound` conforms to `Comparable`. A textual representation of the range.
- [debugDescription](closedrange/debugdescription.md): Conforms when `Bound` conforms to `Comparable`. A textual representation of the range, suitable for debugging.
- [customMirror](closedrange/custommirror.md): Conforms when `Bound` conforms to `Comparable`. The custom mirror for this instance.

### Encoding and Decoding a Range

- [encode(to:)](closedrange/encode%28to_%29.md): Conforms when `Bound` conforms to `Comparable` and `Encodable`. Encodes this value into the given encoder.
- [init(from:)](closedrange/init%28from_%29.md): Conforms when `Bound` conforms to `Comparable` and `Decodable`. Creates a new instance by decoding from the given decoder.

### Infrequently Used Functionality

- [init(uncheckedBounds:)](closedrange/init%28uncheckedbounds_%29.md): Creates an instance with the given bounds.
- [hashValue](closedrange/hashvalue.md): Conforms when `Bound` conforms to `Comparable` and `Hashable`. The hash value.

### Initializers

- [init(\_:)](closedrange/init%28__%29-er19.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Creates an instance equivalent to the given `Range`.
- [init(\_:)](closedrange/init%28__%29-rhzn.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Now that Range is conditionally a collection when Bound: Strideable, CountableRange is no longer needed. This is a deprecated initializer for any remaining uses of Range(countableRange).

### Instance Methods

- [contains(\_:)](closedrange/contains%28__%29-29358.md): Conforms when `Bound` conforms to `Strideable` and `Bound.Stride` conforms to `SignedInteger`. Returns a Boolean value indicating whether the given range is contained within this closed range.
- [contains(\_:)](closedrange/contains%28__%29-822cl.md): Conforms when `Bound` conforms to `Comparable`. Returns a Boolean value indicating whether the given closed range is contained within this closed range.

### Default Implementations

- [BidirectionalCollection Implementations](closedrange/bidirectionalcollection-implementations.md)
- [Collection Implementations](closedrange/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](closedrange/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](closedrange/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](closedrange/customstringconvertible-implementations.md)
- [Decodable Implementations](closedrange/decodable-implementations.md)
- [Encodable Implementations](closedrange/encodable-implementations.md)
- [Equatable Implementations](closedrange/equatable-implementations.md)
- [Hashable Implementations](closedrange/hashable-implementations.md)
- [RangeExpression Implementations](closedrange/rangeexpression-implementations.md)
- [Sequence Implementations](closedrange/sequence-implementations.md)

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
- [PositionScaleRange](https://developer.apple.com/documentation/charts/positionscalerange)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeExpression](rangeexpression.md)
- [ScaleDomain](https://developer.apple.com/documentation/charts/scaledomain)
- [ScaleRange](https://developer.apple.com/documentation/charts/scalerange)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Ranges

- [..\<(\_:\_:)](comparable/'.._%28____%29.md): Returns a half-open range that contains its lower bound but not its upper bound.
- [Range](range.md): A half-open interval from a lower bound up to, but not including, an upper bound.
- [RangeSet](rangeset.md): A set of values of any comparable type, represented by ranges.
- [...(\_:\_:)](comparable/'...%28____%29.md): Returns a closed range that contains both of its bounds.
