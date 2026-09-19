> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/physicssimulation-swift.enum

# AnchoringComponent.PhysicsSimulation

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Describes the physics simulation space of the entity and its descendants.

## Declaration

```swift
enum PhysicsSimulation
```

<a id="overview"></a>

## Overview

This allows developers to fine-tune which entities with an `AnchoringComponent` interact with each other physically, as opposed to not interacting at all.

## Topics

### Enumeration Cases

- [AnchoringComponent.PhysicsSimulation.isolated](physicssimulation-swift.enum/isolated.md): Simulates the entity and its descendants in the entity’s own physics space.
- [AnchoringComponent.PhysicsSimulation.none](physicssimulation-swift.enum/none.md): Opts out the entity and its descendants from having their own physics space.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
