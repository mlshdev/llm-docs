> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeexpression](https://developer.apple.com/documentation/swift/rangeexpression)

# RangeExpression

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be used to slice a collection.

## Declaration

```swift
protocol RangeExpression<Bound>
```

<a id="overview"></a>

## Overview

A type that conforms to `RangeExpression` can convert itself to a `Range<Bound>` of indices within a given collection.

## Topics

### Operators

- [~=(\_:\_:)](rangeexpression/~=%28____%29.md): Returns a Boolean value indicating whether a value is included in a range.

### Associated Types

- [Bound](rangeexpression/bound.md): The type for which the expression describes a range.

### Instance Methods

- [contains(\_:)](rangeexpression/contains%28__%29.md): Returns a Boolean value indicating whether the given element is contained within the range expression.
- [relative(to:)](rangeexpression/relative%28to_%29.md): Returns the range of indices described by this range expression within the given collection.

## Relationships

### Conforming Types

- [ClosedRange](closedrange.md)
- [PartialRangeFrom](partialrangefrom.md)
- [PartialRangeThrough](partialrangethrough.md)
- [PartialRangeUpTo](partialrangeupto.md)
- [Range](range.md)

## See Also

### Range Expressions

- [PartialRangeUpTo](partialrangeupto.md): Conforms when `Bound` conforms to `Comparable`, `Copyable`, and `Escapable`. A partial half-open interval up to, but not including, an upper bound.
- [PartialRangeThrough](partialrangethrough.md): Conforms when `Bound` conforms to `Comparable`, `Copyable`, and `Escapable`. A partial interval up to, and including, an upper bound.
- [PartialRangeFrom](partialrangefrom.md): Conforms when `Bound` conforms to `Comparable`, `Copyable`, and `Escapable`. A partial interval extending upward from a lower bound.
- [UnboundedRange\_](unboundedrange_.md): A range expression that represents the entire range of a collection.
