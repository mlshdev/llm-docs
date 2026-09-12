> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/featheredglassbackgroundeffect](https://developer.apple.com/documentation/swiftui/featheredglassbackgroundeffect)

# FeatheredGlassBackgroundEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.4+

The feathered glass background effect.

## Declaration

```swift
struct FeatheredGlassBackgroundEffect
```

<a id="overview"></a>

## Overview

You can also use [feathered](glassbackgroundeffect/feathered.md) to construct this effect.

The layout size of a view with feathered glass background is based on the content size instead of the glass background size. When the glass background is clipped by an outer container, such as VStack or HStack, it can be resolved by increasing content size, such as content padding, or reducing the feathered glass background size with its padding parameter.

## Topics

### Initializers

- [init()](featheredglassbackgroundeffect/init%28%29.md): Creates a feathered glass background effect.
- [init(padding:softEdgeRadius:)](featheredglassbackgroundeffect/init%28padding_softedgeradius_%29.md): Creates a feathered glassBackground effect.

## Relationships

### Conforms To

- [GlassBackgroundEffect](glassbackgroundeffect.md)

## See Also

### Adding a glass background on views in visionOS

- [glassBackgroundEffect(displayMode:)](view/glassbackgroundeffect%28displaymode_%29.md): Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(in:displayMode:)](view/glassbackgroundeffect%28in_displaymode_%29.md): Fills the view’s background with an automatic glass background effect and a shape that you specify.
- [GlassBackgroundDisplayMode](glassbackgrounddisplaymode.md): The display mode of a glass background.
- [GlassBackgroundEffect](glassbackgroundeffect.md): A specification for the appearance of a glass background.
- [AutomaticGlassBackgroundEffect](automaticglassbackgroundeffect.md): The automatic glass background effect.
- [GlassBackgroundEffectConfiguration](glassbackgroundeffectconfiguration.md): A configuration used to build a custom effect.
- [PlateGlassBackgroundEffect](plateglassbackgroundeffect.md): The plate glass background effect.
