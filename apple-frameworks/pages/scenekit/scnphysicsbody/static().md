> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/static()](https://developer.apple.com/documentation/scenekit/scnphysicsbody/static())

# static() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a physics body that is unaffected by forces or collisions and that cannot move.

## Declaration

```swift
class func `static`() -> Self
```

<a id="return-value"></a>

## Return Value

A new physics body object.

<a id="Discussion"></a>

## Discussion

Use static bodies to construct fixtures in your scene that other bodies need to collide with but that do not themselves move, such as floors, walls, and terrain.

For the body to participate in collision detection or respond to forces, you must attach it to the [physicsBody](../scnnode/physicsbody.md) property of an [SCNNode](../scnnode.md) object in a scene.

SceneKit automatically creates a physics shape for the body when you attach it to a node, based on that node’s [geometry](../scnnode/geometry.md) property. To create a physics shape that’s based on the geometries of a node and its hierarchy of children, or to control the level of detail in a physics shape, create the physics shape manually using an [SCNPhysicsShape](../scnphysicsshape.md) class method.

> **Note**

>  For nodes containing custom geometry, the physics shape SceneKit automatically creates is a rough approximation of the geometry. This approximation, or *convex hull*, provides a compromise between accuracy and performance in collision detection. For the best collision detection performance, create an [SCNPhysicsShape](../scnphysicsshape.md) instance based on a basic geometry class ([SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), or [SCNCapsule](../scncapsule.md)).

## See Also

### Related Documentation

- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.

### Creating Physics Bodies

- [init(type:shape:)](init%28type_shape_%29.md): Creates a physics body with the specified type and shape.
- [dynamic()](dynamic%28%29.md): Creates a physics body that can be affected by forces and collisions.
- [kinematic()](kinematic%28%29.md): Creates a physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

# staticBody (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a physics body that is unaffected by forces or collisions and that cannot move.

## Declaration

```objectivec
+ (instancetype) staticBody;
```

<a id="return-value"></a>

## Return Value

A new physics body object.

<a id="Discussion"></a>

## Discussion

Use static bodies to construct fixtures in your scene that other bodies need to collide with but that do not themselves move, such as floors, walls, and terrain.

For the body to participate in collision detection or respond to forces, you must attach it to the [physicsBody](../scnnode/physicsbody.md) property of an [SCNNode](../scnnode.md) object in a scene.

SceneKit automatically creates a physics shape for the body when you attach it to a node, based on that node’s [geometry](../scnnode/geometry.md) property. To create a physics shape that’s based on the geometries of a node and its hierarchy of children, or to control the level of detail in a physics shape, create the physics shape manually using an [SCNPhysicsShape](../scnphysicsshape.md) class method.

> **Note**

>  For nodes containing custom geometry, the physics shape SceneKit automatically creates is a rough approximation of the geometry. This approximation, or *convex hull*, provides a compromise between accuracy and performance in collision detection. For the best collision detection performance, create an [SCNPhysicsShape](../scnphysicsshape.md) instance based on a basic geometry class ([SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), or [SCNCapsule](../scncapsule.md)).

## See Also

### Related Documentation

- [type](type.md): A constant that determines how the physics body responds to forces and collisions.
- [physicsShape](physicsshape.md): An object that defines the solid volume of the physics body for use in collision detection.

### Creating Physics Bodies

- [bodyWithType:shape:](init%28type_shape_%29.md): Creates a physics body with the specified type and shape.
- [dynamicBody](dynamic%28%29.md): Creates a physics body that can be affected by forces and collisions.
- [kinematicBody](kinematic%28%29.md): Creates a physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.
