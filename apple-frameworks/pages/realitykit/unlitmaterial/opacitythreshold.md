> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unlitmaterial/opacitythreshold](https://developer.apple.com/documentation/realitykit/unlitmaterial/opacitythreshold)

# opacityThreshold

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A threshold below which RealityKit ignores opacity.

## Declaration

```swift
var opacityThreshold: Float? { get set }
```

<a id="discussion"></a>

## Discussion

When `opacityThreshold` is set, RealityKit discards pixels with opacity values less than the `opacityThreshold`, and renders opacity values greater than or equal to `opacityThreshold` fully opaque.

> **Note**

> When the `opacityThreshold` property is set, the blend mode of the [blending](blending-swift.property.md) property is ignored and the renderer applies the masking behavior.

## See Also

### Controlling opacity

- [blending](blending-swift.property.md): The transparency options for the material.
