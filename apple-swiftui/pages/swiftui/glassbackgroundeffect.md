> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glassbackgroundeffect](https://developer.apple.com/documentation/swiftui/glassbackgroundeffect)

# GlassBackgroundEffect

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** visionOS 2.4+

A specification for the appearance of a glass background.

## Declaration

```swift
protocol GlassBackgroundEffect
```

## Topics

### Associated Types

- [Body](glassbackgroundeffect/body.md): The type of effect representing the body of this effect. When you create a custom effect, Swift infers this type from your implementation of the required [makeBody(configuration:)](glassbackgroundeffect/makebody%28configuration_%29.md) method.

### Instance Methods

- [makeBody(configuration:)](glassbackgroundeffect/makebody%28configuration_%29.md): Defines the effect produced by this effect.

### Type Aliases

- [GlassBackgroundEffect.Configuration](glassbackgroundeffect/configuration.md): The configuration type passed to `makeBody(configuration:)`.

### Type Properties

- [automatic](glassbackgroundeffect/automatic.md): Conforms when `Self` is `AutomaticGlassBackgroundEffect`. The default glass background effect, based on the glass’s context.
- [feathered](glassbackgroundeffect/feathered.md): Conforms when `Self` is `FeatheredGlassBackgroundEffect`. A feathered background effect with default padding amount and default soft edge radial size.
- [plate](glassbackgroundeffect/plate.md): Conforms when `Self` is `PlateGlassBackgroundEffect`. A plate glass background effect.

### Type Methods

- [feathered(padding:softEdgeRadius:)](glassbackgroundeffect/feathered%28padding_softedgeradius_%29.md): Conforms when `Self` is `FeatheredGlassBackgroundEffect`. A feathered background effect with custom padding and soft edge radius.

## Relationships

### Conforming Types

- [AutomaticGlassBackgroundEffect](automaticglassbackgroundeffect.md)
- [FeatheredGlassBackgroundEffect](featheredglassbackgroundeffect.md)
- [PlateGlassBackgroundEffect](plateglassbackgroundeffect.md)

## See Also

### Adding a glass background on views in visionOS

- [glassBackgroundEffect(displayMode:)](view/glassbackgroundeffect%28displaymode_%29.md): Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(in:displayMode:)](view/glassbackgroundeffect%28in_displaymode_%29.md): Fills the view’s background with an automatic glass background effect and a shape that you specify.
- [GlassBackgroundDisplayMode](glassbackgrounddisplaymode.md): The display mode of a glass background.
- [AutomaticGlassBackgroundEffect](automaticglassbackgroundeffect.md): The automatic glass background effect.
- [GlassBackgroundEffectConfiguration](glassbackgroundeffectconfiguration.md): A configuration used to build a custom effect.
- [FeatheredGlassBackgroundEffect](featheredglassbackgroundeffect.md): The feathered glass background effect.
- [PlateGlassBackgroundEffect](plateglassbackgroundeffect.md): The plate glass background effect.
