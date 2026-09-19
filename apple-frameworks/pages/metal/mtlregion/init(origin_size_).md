> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlregion/init(origin:size:)

# init(origin:size:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a new region with the specified origin and size.

## Declaration

```swift
init(origin: MTLOrigin, size: MTLSize)
```

## Parameters

- `origin`: The origin of the region.
- `size`: The size of the region.

## See Also

### Creating regions

- [init()](init%28%29.md): Initializes a new region.
- [MTLRegionMake1D(\_:\_:)](../mtlregionmake1d%28____%29.md): Creates a 3D representation of a 1D region.
- [MTLRegionMake2D(\_:\_:\_:\_:)](../mtlregionmake2d%28________%29.md): Creates a 3D representation of a 2D region.
- [MTLRegionMake3D(\_:\_:\_:\_:\_:\_:)](../mtlregionmake3d%28____________%29.md): Creates a 3D region.
