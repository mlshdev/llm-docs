> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(_:)-23n4b](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(_:)-23n4b)

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A slice of the shaped array for the specified ranges.

## Declaration

```swift
subscript(sliceRange: Range<Int>) -> MLShapedArraySlice<Self.Scalar> { get set }
```

<a id="overview"></a>

## Overview

This overrides the method from Collection.
