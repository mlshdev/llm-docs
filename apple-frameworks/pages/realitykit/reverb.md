> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverb](https://developer.apple.com/documentation/realitykit/reverb)

# Reverb

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The reverberation RealityKit applies to spatial audio sources.

## Declaration

```swift
struct Reverb
```

<a id="overview"></a>

## Overview

You can configure the reverb for spatial audio sources in your RealityKit content with the [ReverbComponent](reverbcomponent.md).

```swift
let cinema = Entity()
let reverb: Reverb = .preset(.mediumRoomDry)
cinema.components.set(ReverbComponent(reverb: reverb))
```

## Topics

### Creating a reverb

- [simulated(mesh:materials:)](reverb/simulated%28mesh_materials_%29.md): A reverb that is simulated from a reverb mesh and materials.

### Structures

- [Reverb.Preset](reverb/preset.md): Reverbs defined by a preset environment.

### Type Properties

- [anechoic](reverb/anechoic.md): A reverb instance that applies no reverberation to spatial audio sources.

### Type Methods

- [preset(\_:)](reverb/preset%28__%29.md): Returns a reverb instance that you can set on a reverb component.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reverb

- [Reverb.Preset](reverb/preset.md): Reverbs defined by a preset environment.
- [ReverbComponent](reverbcomponent.md): A component that defines the reverberation of spatial audio sources.
