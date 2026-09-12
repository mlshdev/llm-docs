> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modeldebugoptionscomponent](https://developer.apple.com/documentation/realitykit/modeldebugoptionscomponent)

# ModelDebugOptionsComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 26.0+ · visionOS

A component that changes how RealityKit renders its entity to help with debugging.

## Declaration

```swift
struct ModelDebugOptionsComponent
```

<a id="overview"></a>

## Overview

Attaching a `ModelDebugOptionsComponent` to a [ModelEntity](modelentity.md) tells RealityKit to change the way it renders that entity based on a specified [visualizationMode](modeldebugoptionscomponent/visualizationmode-swift.property.md). This component isolates individual parts of the rendering process, such as the entity’s transparency or roughness, and displays surface color to help identify visual anomalies.

To use this component, create a `ModelDebugOptionsComponent` and set its [visualizationMode](modeldebugoptionscomponent/visualizationmode-swift.property.md) to the desired value. Then, set the component as the entity’s `ModelEntity/modelDebugOptions` property:

```swift
if let robot = anchor.findEntity(named: "Robot") as? ModelEntity {
    let component = ModelDebugOptionsComponent(visualizationMode: .normal)
    robot.modelDebugOptions = component
}
```

For more information on the visualization modes supported by `ModelDebugOptionsComponent`, see [ModelDebugOptionsComponent.VisualizationMode](modeldebugoptionscomponent/visualizationmode-swift.enum.md).

<a id="Attach-a-debug-component-to-an-entity"></a>

### Attach a debug component to an entity

To attach a debug component to a particular entity, traverse the entity tree while passing the component to each child:

```swift
// Traverse the entity tree to attach a certain debug mode through components.
func attachDebug(entity: Entity, debug: ModelDebugOptionsComponent) {
    entity.components.set(debug)
    for child in entity.children {
        attachDebug(entity: child, debug: debug)
    }
}
// Respond to a button or UI element.
func debugLightingDiffuseButtonCallback() {
    let debugComponent = ModelDebugOptionsComponent(
        visualizationMode: .lightingDiffuse
    )
    attachDebug(entity: model, debug: debugComponent)
}
```

<a id="Attach-a-debug-component-to-a-trait"></a>

### Attach a debug component to a trait

To attach a debug component based on a trait, traverse the entity tree while checking for [HasModel](hasmodel.md) adoption:

```swift
func attachDebug(entity: Entity, debug: ModelDebugOptionsComponent) {
    if let model = entity as? ModelEntity {
        model.visualizationMode = debug
    }
    for child in entity.children {
        attachDebug(entity: child, debug: debug)
    }
}
// Respond to a button or UI element.
func debugLightingDiffuseButtonCallback() {
    let debugComponent = ModelDebugOptionsComponent(
        visualizationMode: .lightingDiffuse
    )
    attachDebug(entity: model, debug: debugComponent)
}
```

## Topics

### Creating model debug options components

- [init(visualizationMode:)](modeldebugoptionscomponent/init%28visualizationmode_%29.md): Creates a component that isolates a portion of the rendering process and displays it as the entity’s surface texture.

### Setting the visualization mode

- [visualizationMode](modeldebugoptionscomponent/visualizationmode-swift.property.md): The part of the rendering process to display as the entity’s surface texture.
- [ModelDebugOptionsComponent.VisualizationMode](modeldebugoptionscomponent/visualizationmode-swift.enum.md): A mode that specifies the portion of the rendering process to isolate and display for debugging.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Render configuration

- [ModelSortGroupComponent](modelsortgroupcomponent.md): A component that configures the rendering order for an entity’s model.
- [ModelSortGroup](modelsortgroup.md): A group that you assign to multiple entities to tell the renderer what order and how to render the entities in the group.
- [OpacityComponent](opacitycomponent.md): A component that controls the opacity of an entity and its descendants.
- [AdaptiveResolutionComponent](adaptiveresolutioncomponent.md): A component that provides the suggested pixels per meter necessary to render an object.
- [MeshInstancesComponent](meshinstancescomponent.md): A component that performs GPU instancing on the model of the same entity.
