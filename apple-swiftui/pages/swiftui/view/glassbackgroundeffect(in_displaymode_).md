> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/glassbackgroundeffect(in:displaymode:)](https://developer.apple.com/documentation/swiftui/view/glassbackgroundeffect(in:displaymode:))

# glassBackgroundEffect(in:displayMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Fills the view’s background with an automatic glass background effect and a shape that you specify.

## Declaration

```swift
nonisolated func glassBackgroundEffect<S>(in shape: S, displayMode: GlassBackgroundDisplayMode = .always) -> some View where S : InsettableShape

```

## Parameters

- `shape`: An [InsettableShape](../insettableshape.md) instance that SwiftUI draws behind the view.
- `displayMode`: When to display the glass background. The default is [GlassBackgroundDisplayMode.always](../glassbackgrounddisplaymode/always.md).

<a id="return-value"></a>

## Return Value

A view with a glass background.

<a id="discussion"></a>

## Discussion

Use this modifier to add a 3D glass background material that includes thickness, specularity, glass blur, shadows, and other effects. Because of its physical depth, the glass background influences z-axis layout.

To ensure that the effect renders properly when you add it to a collection of views in a [ZStack](../zstack.md), add the modifier to the stack rather to one of the views in the stack. This includes when you create an implicit stack with view modifiers like [overlay(alignment:content:)](overlay%28alignment_content_%29.md) or [background(alignment:content:)](background%28alignment_content_%29.md). In those cases, you might need to create an explicit [ZStack](../zstack.md) inside the `content` closure to have a place to add the glass background modifier.

Non closed shapes will be rendered as their convex hull.

## See Also

### Adding a glass background on views in visionOS

- [glassBackgroundEffect(displayMode:)](glassbackgroundeffect%28displaymode_%29.md): Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.
- [GlassBackgroundDisplayMode](../glassbackgrounddisplaymode.md): The display mode of a glass background.
- [GlassBackgroundEffect](../glassbackgroundeffect.md): A specification for the appearance of a glass background.
- [AutomaticGlassBackgroundEffect](../automaticglassbackgroundeffect.md): The automatic glass background effect.
- [GlassBackgroundEffectConfiguration](../glassbackgroundeffectconfiguration.md): A configuration used to build a custom effect.
- [FeatheredGlassBackgroundEffect](../featheredglassbackgroundeffect.md): The feathered glass background effect.
- [PlateGlassBackgroundEffect](../plateglassbackgroundeffect.md): The plate glass background effect.
