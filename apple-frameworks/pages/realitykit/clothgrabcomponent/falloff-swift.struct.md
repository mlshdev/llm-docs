> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothgrabcomponent/falloff-swift.struct](https://developer.apple.com/documentation/realitykit/clothgrabcomponent/falloff-swift.struct)

# ClothGrabComponent.Falloff

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Controls whether grab strength falls off based on particle distance from the volume surface.

## Declaration

```swift
struct Falloff
```

<a id="overview"></a>

## Overview

When grabbing particles using a volume, falloff determines how strongly particles are dragged based on their position within the volume. With falloff disabled, all particles inside the volume are dragged with equal strength. With falloff enabled, particles closer to the volume surface are dragged less strongly, producing smoother motion.

## Topics

### Type Properties

- [disabled](falloff-swift.struct/disabled.md): No falloff is applied.
- [enabled](falloff-swift.struct/enabled.md): Grab strength decreases as particles approach the volume surface.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the falloff

- [falloff](falloff-swift.property.md): Controls whether the grabbing strength falls off based on distance from the volume surface.
