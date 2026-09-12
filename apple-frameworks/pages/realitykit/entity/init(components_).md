> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/init(components:)](https://developer.apple.com/documentation/realitykit/entity/init(components:))

# init(components:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS · visionOS 1.0+

Creates an entity with multiple components.

## Declaration

```swift
@MainActor @preconcurrency convenience init(components: [any Component])
```

## Parameters

- `components`: The components to add to the entity.

<a id="discussion"></a>

## Discussion

This initializer adds the contents of `components` to the new [Entity](../entity.md). The components you specify in this initializer override any default components of the same type that RealityKit creates the entity with, such as [Transform](../transform.md).

For example, you can use this initializer to create an entity that anchors to the floor, displays a 1x1x1m box, and has a y-position of 0.5:

```swift
let floorCubeComponents = [
    AnchoringComponent(.plane(.horizontal, classification: .floor, minimumBounds: [1, 1])),
    ModelComponent(mesh: .generateBox(size: 1), materials: []),
    Transform(translation: [0, 0.5, 0])
]

let floorCubeEntity = Entity(components: floorCubeComponents)
```

> **Note**

> You can change any of the entity’s components at any time by modifying the entity’s [components](components.md) set.
