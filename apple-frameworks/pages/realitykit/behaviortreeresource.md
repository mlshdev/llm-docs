> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/behaviortreeresource](https://developer.apple.com/documentation/realitykit/behaviortreeresource)

# BehaviorTreeResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An immutable representation of a behavior tree.

## Declaration

```swift
class BehaviorTreeResource
```

<a id="overview"></a>

## Overview

A `BehaviorTreeResource` can be produced by compiling a tree definition. Once compiled, assign it to an entity via [BehaviorTreeComponent](behaviortreecomponent.md) to begin driving behaviors:

let treeResource1 = try BehaviorTreeResource(definition: Data(behaviorTreeDefinition1.utf8)) let treeResource2 = try BehaviorTreeResource(definition: Data(behaviorTreeDefinition2.utf8)) let treeResources: \[String : BehaviorTreeResource\] = \[“tree1” : treeResource1, “tree2” : treeResource2\] entity.components.set(BehaviorTreeComponent(behaviorTree: resource, availableBehaviorTrees: treeResources))

<a id="Parameters"></a>

## Parameters

The tree exposes a set of named parameters that control its behavior at runtime, such as movement speed. Read the available parameters via [parameterNames](behaviortreeresource/parameternames.md). To set values at runtime, use the entity’s parameter binding:

entity.parameters\[“MoveSpeed”\] = BindableValue(Float(1.0))

## Topics

### Creating a behavior tree

- [init(definition:)](behaviortreeresource/init%28definition_%29.md): Compile a new resource from data, throws on failure.

### Validating a definition

- [validate(definition:)](behaviortreeresource/validate%28definition_%29.md): Run the compiler and return all tree errors without producing a resource.

### Accessing parameters

- [parameterNames](behaviortreeresource/parameternames.md): Returns the names of all parameters in the behavior tree resource.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Behavior trees

- [BehaviorTreeComponent](behaviortreecomponent.md): Manages which behavior tree is active for the component’s entity.
- [BehaviorTreeAction](behaviortreeaction.md): A protocol that defines an action that a behavior tree action node can use.
- [BehaviorTreeActionHandler](behaviortreeactionhandler.md): Behavior Tree-specific event handlers that allow an `ActionResult` to be returned from the handler.
- [ActionResult](actionresult.md): Status values that an action can report back to the animation system.
