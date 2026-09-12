> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationcomponent/hittarget](https://developer.apple.com/documentation/realitykit/manipulationcomponent/hittarget)

# ManipulationComponent.HitTarget

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A component that redirects input to a different entity with a `ManipulationComponent`.

## Declaration

```swift
struct HitTarget
```

<a id="overview"></a>

## Overview

Add this component to an entity and set `redirectedEntity` to another entity that should activate when interaction occurs on the entity with the `HitTarget` component:

```swift
// Configure an entity for interaction.
entityToMove.components.set(ManipulationComponent())

// Create a component redirecting input to `entityToMove`.
let targetComponent = ManipulationComponent.HitTarget(redirectedEntity: entityToMove)

// Apply it to another entity. Now when input occurs on `proxyTarget`,
// the interaction on `entityToMove` will trigger.
proxyTarget.components.set(targetComponent)
```

## Topics

### Initializers

- [init(redirectedEntity:)](hittarget/init%28redirectedentity_%29.md): Initialize a `HitTarget` component redirecting to an entity that has a `ManipulationComponent`.

### Instance Properties

- [redirectedEntity](hittarget/redirectedentity.md): The entity to redirect the interaction to.

## Relationships

### Conforms To

- [Component](../component.md)
