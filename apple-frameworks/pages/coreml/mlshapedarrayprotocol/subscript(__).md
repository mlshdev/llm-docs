> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(_:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(_:))

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A slice of the shaped array for the selected leading axes.

## Declaration

```swift
subscript<C>(indices: C) -> MLShapedArraySlice<Self.Scalar> where C : Collection, C.Element == Int { get set }
```

## Parameters

- `indices`: The indices to slice the array.

<a id="overview"></a>

## Overview

The slice has a rank of `self.rank - indices.count`. For example, given a shaped array `m` with the shape being `3 x 3`, `m[[1]]` returns a slice of shape `[3]` with the contents labeld as `x` below.

```
 O  O  O
 x  x  x
 O  O  O
```

## Default Implementations

### MLShapedArrayProtocol Implementations

- [subscript(\_:)](subscript%28__%29-23n4b.md): A slice of the shaped array for the specified ranges.
- [subscript(\_:)](subscript%28__%29-2cxk1.md): A slice of the shaped array for the selected leading axes.
- [subscript(\_:)](subscript%28__%29-2hc37.md): A slice of the shaped array for the specified ranges.
- [subscript(\_:)](subscript%28__%29-3ao6n.md)
- [subscript(\_:)](subscript%28__%29-5r9r3.md): A slice of the shaped array for the specified ranges.
- [subscript(\_:)](subscript%28__%29-70104.md): A slice of the shaped array for the specified ranges.
- [subscript(\_:)](subscript%28__%29-79cx4.md)

## See Also

### Accessing elements

- [subscript(scalarAt:)](subscript%28scalarat_%29.md): Accesses an element and a multidimensional location.
