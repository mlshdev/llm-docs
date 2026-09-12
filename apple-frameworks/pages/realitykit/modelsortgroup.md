> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelsortgroup](https://developer.apple.com/documentation/realitykit/modelsortgroup)

# ModelSortGroup

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A group that you assign to multiple entities to tell the renderer what order and how to render the entities in the group.

## Declaration

```swift
struct ModelSortGroup
```

<a id="overview"></a>

## Overview

Each model sort group relates model entities to each other so that you can define what order the renderer draws them. Pass the same model sort group instance to each [ModelSortGroupComponent](modelsortgroupcomponent.md) whose entity you want to group, along with an order number for that entity within the group.

```swift
let group1 = ModelSortGroup()
entityA.components.set(
    ModelSortGroupComponent(group: group1, order: 0)
)
entityB.components.set(
    ModelSortGroupComponent(group: group1, order: 1)
)
```

In the example above, the renderer draws `entityA` before `entityB`.

Each `ModelSortGroup` instance represent a unique group.

```swift
let group2 = ModelSortGroup()
entityC.components.set(
    ModelSortGroupComponent(group: group2, order: 2)
)
entityD.components.set(
    ModelSortGroupComponent(group: group2, order: 3)
)
```

In this example, `entityC` and `entityD` are in the same group as each other, but in a different group than `entityA` and `entityB`.

## Topics

### Operators

- [!=(\_:\_:)](modelsortgroup/!=%28____%29.md): Returns a Boolean that indicates whether the model sort groups are unequal.
- [==(\_:\_:)](modelsortgroup/==%28____%29.md): Returns a Boolean that indicates whether the model sort groups are equal.

### Initializers

- [init(depthPass:)](modelsortgroup/init%28depthpass_%29.md): Creates a model sort group with an optional depth pass.

### Instance Properties

- [depthPass](modelsortgroup/depthpass-swift.property.md): A depth pass that controls when the renderer draws the depth of model entities in the group relative to their color.
- [planarUIPlacement](modelsortgroup/planaruiplacement-swift.property.md): A planar placement instance that controls how the renderer draws a model relative to a planar mesh or a SwiftUI view that’s coplanar and overlapping.

### Type Properties

- [planarUIAlwaysBehind](modelsortgroup/planaruialwaysbehind.md): A model sort group that instructs the renderer to draw a model’s mesh behind a SwiftUI layer that’s coincident with the mesh. See [ModelSortGroup.PlanarUIPlacement](modelsortgroup/planaruiplacement-swift.enum.md) for usage.
- [planarUIAlwaysInFront](modelsortgroup/planaruialwaysinfront.md): A model sort group that instructs the renderer to draw a model’s mesh in front of a SwiftUI layer that’s coincident with the mesh. See [ModelSortGroup.PlanarUIPlacement](modelsortgroup/planaruiplacement-swift.enum.md) for usage.
- [planarUIInline](modelsortgroup/planaruiinline.md): A model sort group that instructs the renderer to draw a model’s mesh along with a SwiftUI layer that’s coincident with the mesh. See [ModelSortGroup.PlanarUIPlacement](modelsortgroup/planaruiplacement-swift.enum.md) for usage.

### Enumerations

- [ModelSortGroup.DepthPass](modelsortgroup/depthpass-swift.enum.md): Options that indicate when the renderer draws a model’s depth relative to its color.
- [ModelSortGroup.PlanarUIPlacement](modelsortgroup/planaruiplacement-swift.enum.md): A set of predefined groups that indicate how the renderer draws a model relative to a planar mesh or a SwiftUI view that’s coplanar and overlapping.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Render configuration

- [ModelSortGroupComponent](modelsortgroupcomponent.md): A component that configures the rendering order for an entity’s model.
- [OpacityComponent](opacitycomponent.md): A component that controls the opacity of an entity and its descendants.
- [AdaptiveResolutionComponent](adaptiveresolutioncomponent.md): A component that provides the suggested pixels per meter necessary to render an object.
- [ModelDebugOptionsComponent](modeldebugoptionscomponent.md): A component that changes how RealityKit renders its entity to help with debugging.
- [MeshInstancesComponent](meshinstancescomponent.md): A component that performs GPU instancing on the model of the same entity.
