> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hashierarchy](https://developer.apple.com/documentation/realitykit/hashierarchy)

# HasHierarchy

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that provides access to a parent entity and child entities.

## Declaration

```swift
@MainActor @preconcurrency protocol HasHierarchy : Entity
```

## Mentioned In

- [Loading entities from a file](loading-entities-from-a-file.md)

<a id="overview"></a>

## Overview

All entities automatically adopt this protocol because the [Entity](entity.md) base class does. This adoption gives all entities a collection of methods for managing the hierarchy.

## Topics

### Managing the parent

- [parent](hashierarchy/parent.md): The parent entity.
- [setParent(\_:preservingWorldTransform:)](hashierarchy/setparent%28__preservingworldtransform_%29.md): Attaches the entity as a child to the specified entity.
- [removeFromParent(preservingWorldTransform:)](hashierarchy/removefromparent%28preservingworldtransform_%29.md): Removes the entity from its current parent or from the scene if it is a root entity.

### Managing children

- [children](hashierarchy/children.md): The child entities that the entity manages.
- [addChild(\_:preservingWorldTransform:)](hashierarchy/addchild%28__preservingworldtransform_%29.md): Adds the given entity to the collection of child entities.
- [removeChild(\_:preservingWorldTransform:)](hashierarchy/removechild%28__preservingworldtransform_%29.md): Removes the given child from the entity.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforming Types

- [AnchorEntity](anchorentity.md)
- [BodyTrackedEntity](bodytrackedentity.md)
- [DirectionalLight](directionallight.md)
- [Entity](entity.md)
- [ModelEntity](modelentity.md)
- [PerspectiveCamera](perspectivecamera.md)
- [PointLight](pointlight.md)
- [SpotLight](spotlight.md)
- [TriggerVolume](triggervolume.md)
- [ViewAttachmentEntity](viewattachmententity.md)

## See Also

### Relating entities

- [parameters](entity/parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ChildCollection](entity/childcollection.md): A collection of child entities.
