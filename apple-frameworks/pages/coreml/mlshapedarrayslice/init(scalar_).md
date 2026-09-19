> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlshapedarrayslice/init(scalar:)

# init(scalar:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array slice with exactly one value and zero dimensions.

## Declaration

```swift
init(scalar: Scalar)
```

## Parameters

- `scalar`: A singular scalar value.

## See Also

### Creating a shaped array slice

- [init(scalars:shape:)](init%28scalars_shape_%29.md): Initialize with a sequence and the shape.
- [init(mutating:shape:)](init%28mutating_shape_%29.md): Creates a new `MLShapedArraySlice` using a pixel buffer as the backing storage.
