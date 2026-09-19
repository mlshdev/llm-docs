> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rect3dfloat/init(origin:size:)-27

# init(origin:size:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle from simd vectors that describe the origin and size.

## Declaration

```swift
init(origin: simd_float3 = .zero, size: simd_float3)
```

## Parameters

- `origin`: The origin of the rectangle.
- `size`: The size of the rectangle.
