> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(_:)-3ao6n

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
subscript(_: (UnboundedRange_) -> Void) -> MLShapedArraySlice<Self.Scalar> { get set }
```
