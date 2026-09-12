> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/plane](https://developer.apple.com/documentation/realitykit/portalcomponent/plane)

# PortalComponent.Plane

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A representation of a portal as an infinite plane.

## Declaration

```swift
struct Plane
```

<a id="overview"></a>

## Overview

Enable the corresponding clipping and crossing features by passing this value in [PortalComponent.ClippingMode.plane(\_:)](clippingmode-swift.enum/plane%28__%29.md) or [PortalComponent.CrossingMode.plane(\_:)](crossingmode-swift.enum/plane%28__%29.md).

RealityKit defines the [position](plane/position.md) and [normal](plane/normal.md) properties in entity local space.

The following default values are available:

- [positiveX](plane/positivex.md)
- [negativeX](plane/negativex.md)
- [positiveY](plane/positivey.md)
- [negativeY](plane/negativey.md)
- [positiveZ](plane/positivez.md)
- [negativeZ](plane/negativez.md)

See [PortalComponent](../portalcomponent.md) for example usage.

## Topics

### Initializers

- [init(position:normal:)](plane/init%28position_normal_%29.md): Creates a portal plane with position and normal.

### Instance Properties

- [normal](plane/normal.md): The normal of the portal plane, in entity local space.
- [position](plane/position.md): The position of the portal plane, in entity local space.

### Type Properties

- [negativeX](plane/negativex.md): A portal plane sitting at the origin facing the negative x direction.
- [negativeY](plane/negativey.md): A portal plane sitting at the origin facing the negative y direction.
- [negativeZ](plane/negativez.md): A portal plane sitting at the origin facing the negative z direction.
- [positiveX](plane/positivex.md): A portal plane sitting at the origin facing the positive x direction.
- [positiveY](plane/positivey.md): A portal plane sitting at the origin facing the positive y direction.
- [positiveZ](plane/positivez.md): A portal plane sitting at the origin facing the positive z direction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
