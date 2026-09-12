> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(_:)-70104](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(_:)-70104)

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A slice of the shaped array for the specified ranges.

## Declaration

```swift
subscript<C>(partialSliceRanges: C) -> MLShapedArraySlice<Self.Scalar> where C : Collection, C.Element == any MLShapedArrayRangeExpression { get set }
```

<a id="overview"></a>

## Overview

When the range expression array is shorter than the rank, the remaining axes are fully selected. For example, given a shaped array `m` of shape `[2, 3]`, `m[[0..<1]]` results in a slice with shape `[1, 3]`.
