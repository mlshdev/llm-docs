> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(_:)-2cxk1](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(_:)-2cxk1)

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A slice of the shaped array for the selected leading axes.

## Declaration

```swift
subscript(indices: Int...) -> MLShapedArraySlice<Self.Scalar> { get set }
```

<a id="overview"></a>

## Overview

The slice has a rank of `self.rank - indices.count`. For example, given a shaped array `m` with the shape being `[3, 3]`, `m[1]` returns a slice of shape `[3]` with the contents labeld as `x` below.

```
 O  O  O
 x  x  x
 O  O  O
```
