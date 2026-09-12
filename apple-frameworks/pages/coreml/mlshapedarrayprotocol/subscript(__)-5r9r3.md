> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(_:)-5r9r3](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(_:)-5r9r3)

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A slice of the shaped array for the specified ranges.

## Declaration

```swift
subscript(sliceRange: any MLShapedArrayRangeExpression) -> MLShapedArraySlice<Self.Scalar> { get set }
```
