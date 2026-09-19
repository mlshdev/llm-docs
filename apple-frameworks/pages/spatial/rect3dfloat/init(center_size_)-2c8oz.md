> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rect3dfloat/init(center:size:)-2c8oz

# init(center:size:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle from simd vectors that describe the center and size.

## Declaration

```swift
init(center: simd_float3 = .zero, size: simd_float3)
```

## Parameters

- `center`: The center of the rectangle.
- `size`: The size of the rectangle.
