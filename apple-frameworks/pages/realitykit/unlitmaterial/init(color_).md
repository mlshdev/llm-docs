> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/unlitmaterial/init(color:)

# init(color:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an unlit material with the given base color.

## Declaration

```swift
init(color: NSColor)
```

## Parameters

- `color`: The base color for the new material.

<a id="discussion"></a>

## Discussion

> **Note**

> The blending mode of `UnlitMaterial` materials should be configured explicitly with the [blending](blending-swift.property.md) property for transparent or translucent surfaces.  The `opaque` mode is used when unset.
