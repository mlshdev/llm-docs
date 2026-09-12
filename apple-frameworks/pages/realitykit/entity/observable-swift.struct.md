> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/observable-swift.struct](https://developer.apple.com/documentation/realitykit/entity/observable-swift.struct)

# Entity.Observable

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An observable interface to an entity’s properties and components, enabling reactive updates using Swift’s Observation framework.

## Declaration

```swift
@frozen struct Observable
```

<a id="overview"></a>

## Overview

When you access properties in this structure, they participate in Observation. This means that the app notifies obersvers when they change in value. Each of these properties passes through to the underlying entity’s corresponding properties, so modifications of them modify the entity’s corresponding property.

## Topics

### Structures

- [Entity.Observable.Components](observable-swift.struct/components-swift.struct.md): An observable collection of an entity’s attached components, allowing for reactive updates based on component changes.

### Instance Properties

- [children](observable-swift.struct/children.md): The collection of child entities, allowing observation of its contents
- [components](observable-swift.struct/components-swift.property.md): The components an entity manages, enabling observation of their presence and values.
- [isEnabled](observable-swift.struct/isenabled.md): A Boolean value that indicates whether the entity is enabled in the scene, allowing observation of its state.
- [name](observable-swift.struct/name.md): The entity’s name, enabling observation of its changes.
- [orientation](observable-swift.struct/orientation.md): The entity’s local orientation, allowing observation of its rotation.
- [position](observable-swift.struct/position.md): The entity’s local position, allowing observation of its translation.
- [scale](observable-swift.struct/scale.md): The entity’s local scale, enabling observation of its size.
- [transform](observable-swift.struct/transform.md): The entity’s position, rotation, and scale, enabling observation of its complete spatial state.
