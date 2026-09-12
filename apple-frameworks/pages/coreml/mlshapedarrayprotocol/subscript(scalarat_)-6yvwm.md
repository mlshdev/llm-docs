> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(scalarat:)-6yvwm](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(scalarat:)-6yvwm)

# subscript(scalarAt:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The scalar value at the indices.

## Declaration

```swift
subscript(scalarAt indices: Int...) -> Self.Scalar { get set }
```

## Parameters

- `indices`: The indices to a scalar

<a id="overview"></a>

## Overview

The subscript returns scalar value of the slice pointed by the specified indices. It raises a runtime error if the specified indices is not a scalar.
