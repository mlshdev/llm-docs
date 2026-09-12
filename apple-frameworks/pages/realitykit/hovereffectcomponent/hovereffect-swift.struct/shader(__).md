> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hovereffectcomponent/hovereffect-swift.struct/shader(_:)](https://developer.apple.com/documentation/realitykit/hovereffectcomponent/hovereffect-swift.struct/shader(_:))

# shader(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Returns a hover effect style that applies hover state data to a custom shader that applies to the entity’s model.

## Declaration

```swift
static func shader(_ inputs: HoverEffectComponent.ShaderHoverEffectInputs) -> HoverEffectComponent.HoverEffect
```

## Parameters

- `inputs`: A [HoverEffectComponent.ShaderHoverEffectInputs](../shaderhovereffectinputs.md) instance that allows you to customize various aspects of this hover effect.

<a id="discussion"></a>

## Discussion

The custom shader can be either MaterialX or [CustomMaterial](../../custommaterial.md).

> **Warning**

> This style doesn’t display anything without an appropriate custom shader.
