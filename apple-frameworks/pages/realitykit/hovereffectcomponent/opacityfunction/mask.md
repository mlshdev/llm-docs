> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hovereffectcomponent/opacityfunction/mask](https://developer.apple.com/documentation/realitykit/hovereffectcomponent/opacityfunction/mask)

# HoverEffectComponent.OpacityFunction.mask

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Applies a hover effect with full opacity when the opacity of the entity’s base material is greater than five percent.

## Declaration

```swift
case mask
```

<a id="discussion"></a>

## Discussion

The hover effect fades out with the base material when its opacity is less than `0.05`. In this example, a rounded black rectangle continuously transitions between transparent and fully opaque. Applying a green highlight hover effect to the rectangle only displays the hover effect when the rectangle is at least slightly opaque. The hover effect doesn’t draw when the rectangle is transparent.

Video: hovereffectcomponent-opacityfunction-mask
