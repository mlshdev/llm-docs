> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glassbackgrounddisplaymode](https://developer.apple.com/documentation/swiftui/glassbackgrounddisplaymode)

# GlassBackgroundDisplayMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

The display mode of a glass background.

## Declaration

```swift
enum GlassBackgroundDisplayMode
```

<a id="overview"></a>

## Overview

Use a value of this type to indicate when to display a glass background that you add to a view using a view modifier like [glassBackgroundEffect(displayMode:)](view/glassbackgroundeffect%28displaymode_%29.md).

## Topics

### Getting the mode

- [GlassBackgroundDisplayMode.always](glassbackgrounddisplaymode/always.md): Always display the glass material.
- [GlassBackgroundDisplayMode.implicit](glassbackgrounddisplaymode/implicit.md): Display the glass material only when the view isn’t already contained in glass.
- [GlassBackgroundDisplayMode.never](glassbackgrounddisplaymode/never.md): Never display the glass material.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding a glass background on views in visionOS

- [glassBackgroundEffect(displayMode:)](view/glassbackgroundeffect%28displaymode_%29.md): Fills the view’s background with an automatic glass background effect and container-relative rounded rectangle shape.
- [glassBackgroundEffect(in:displayMode:)](view/glassbackgroundeffect%28in_displaymode_%29.md): Fills the view’s background with an automatic glass background effect and a shape that you specify.
- [GlassBackgroundEffect](glassbackgroundeffect.md): A specification for the appearance of a glass background.
- [AutomaticGlassBackgroundEffect](automaticglassbackgroundeffect.md): The automatic glass background effect.
- [GlassBackgroundEffectConfiguration](glassbackgroundeffectconfiguration.md): A configuration used to build a custom effect.
- [FeatheredGlassBackgroundEffect](featheredglassbackgroundeffect.md): The feathered glass background effect.
- [PlateGlassBackgroundEffect](plateglassbackgroundeffect.md): The plate glass background effect.
