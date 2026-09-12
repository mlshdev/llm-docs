> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape](https://developer.apple.com/documentation/scenekit/scnphysicsshape)

# SCNPhysicsShape (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An abstraction of a physics body’s solid volume for tuning collision detection.

## Declaration

```swift
class SCNPhysicsShape
```

<a id="overview"></a>

## Overview

When SceneKit performs contact detection and other simulations for the [SCNPhysicsBody](scnphysicsbody.md) objects in your scene, it uses physics shapes instead of the rendered geometry of visible objects. This approach both improves simulation performance and allows you to more easily design your gameplay around scene elements the player can interact with.

<a id="Simple-Versus-Complex-Shapes"></a>

### Simple Versus Complex Shapes

When you allow SceneKit to automatically create a physics shape, it uses the simplest possible shape roughly matching the geometry of the node the physics body is attached to. This approach maximizes simulation performance but can lead to unrealistic physics behavior for some objects.

You can make the simulation behave more realistically by defining physics shapes that more closely follow the visible geometry in your scene. This approach comes at a cost to performance, so you want to limit the amount of detail in your physics shapes. Use the highest levels of detail only on bodies for which precise collision detection is important for your app.

If you create a physics shape using one of the basic geometry classes ([SCNBox](scnbox.md), [SCNSphere](scnsphere.md), [SCNPyramid](scnpyramid.md), [SCNCone](scncone.md), [SCNCylinder](scncylinder.md), or [SCNCapsule](scncapsule.md)), SceneKit uses an idealized form of that geometry for the physics shape instead of using the geometry’s vertex data to simulate collisions. For example, if you create a physics shape from an [SCNSphere](scnsphere.md) object, SceneKit simulates collisions for any object that passes within the sphere’s radius.

Because the idealized forms of simple geometries are computationally much simpler than the vertex data needed for displaying them, using basic geometries for physics shapes (or compound shapes created from basic geometries with the [init(shapes:transforms:)](scnphysicsshape/init%28shapes_transforms_%29.md) method) often provides the best balance between simulation accuracy and performance.

<a id="Changing-a-Physics-Bodys-Shape"></a>

### Changing a Physics Body’s Shape

Physics shapes are immutable, but you can change the shape associated with a physics body by creating a new [SCNPhysicsShape](scnphysicsshape.md) instance and assigning it to the body’s [physicsShape](scnphysicsbody/physicsshape.md) property.

## Topics

### Creating Physics Shapes

- [init(geometry:options:)](scnphysicsshape/init%28geometry_options_%29.md): Creates a physics shape based on a geometry object.
- [init(node:options:)](scnphysicsshape/init%28node_options_%29.md): Creates a physics shape from a node or hierarchy of nodes.

### Combining Physics Shapes

- [init(shapes:transforms:)](scnphysicsshape/init%28shapes_transforms_%29.md): Creates a new physics shape by combining others.

### Getting Information About a Shape

- [sourceObject](scnphysicsshape/sourceobject.md): The object that was used to create the shape.
- [options](scnphysicsshape/options.md): The options dictionary that was used to create the shape.
- [transforms](scnphysicsshape/transforms.md): The array of transforms that was used to create a compound shape.

### Shape Options

- [SCNPhysicsShape.Option](scnphysicsshape/option.md): Keys for the options dictionary used when creating a physics shape.

### Initializers

- [init(coder:)](scnphysicsshape/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Bodies

- [SCNPhysicsBody](scnphysicsbody.md): The physics simulation attributes attached to a scene graph node.

# SCNPhysicsShape (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An abstraction of a physics body’s solid volume for tuning collision detection.

## Declaration

```objectivec
@interface SCNPhysicsShape : NSObject
```

<a id="overview"></a>

## Overview

When SceneKit performs contact detection and other simulations for the [SCNPhysicsBody](scnphysicsbody.md) objects in your scene, it uses physics shapes instead of the rendered geometry of visible objects. This approach both improves simulation performance and allows you to more easily design your gameplay around scene elements the player can interact with.

<a id="Simple-Versus-Complex-Shapes"></a>

### Simple Versus Complex Shapes

When you allow SceneKit to automatically create a physics shape, it uses the simplest possible shape roughly matching the geometry of the node the physics body is attached to. This approach maximizes simulation performance but can lead to unrealistic physics behavior for some objects.

You can make the simulation behave more realistically by defining physics shapes that more closely follow the visible geometry in your scene. This approach comes at a cost to performance, so you want to limit the amount of detail in your physics shapes. Use the highest levels of detail only on bodies for which precise collision detection is important for your app.

If you create a physics shape using one of the basic geometry classes ([SCNBox](scnbox.md), [SCNSphere](scnsphere.md), [SCNPyramid](scnpyramid.md), [SCNCone](scncone.md), [SCNCylinder](scncylinder.md), or [SCNCapsule](scncapsule.md)), SceneKit uses an idealized form of that geometry for the physics shape instead of using the geometry’s vertex data to simulate collisions. For example, if you create a physics shape from an [SCNSphere](scnsphere.md) object, SceneKit simulates collisions for any object that passes within the sphere’s radius.

Because the idealized forms of simple geometries are computationally much simpler than the vertex data needed for displaying them, using basic geometries for physics shapes (or compound shapes created from basic geometries with the [shapeWithShapes:transforms:](scnphysicsshape/init%28shapes_transforms_%29.md) method) often provides the best balance between simulation accuracy and performance.

<a id="Changing-a-Physics-Bodys-Shape"></a>

### Changing a Physics Body’s Shape

Physics shapes are immutable, but you can change the shape associated with a physics body by creating a new [SCNPhysicsShape](scnphysicsshape.md) instance and assigning it to the body’s [physicsShape](scnphysicsbody/physicsshape.md) property.

## Topics

### Creating Physics Shapes

- [shapeWithGeometry:options:](scnphysicsshape/init%28geometry_options_%29.md): Creates a physics shape based on a geometry object.
- [shapeWithNode:options:](scnphysicsshape/init%28node_options_%29.md): Creates a physics shape from a node or hierarchy of nodes.

### Combining Physics Shapes

- [shapeWithShapes:transforms:](scnphysicsshape/init%28shapes_transforms_%29.md): Creates a new physics shape by combining others.

### Getting Information About a Shape

- [sourceObject](scnphysicsshape/sourceobject.md): The object that was used to create the shape.
- [options](scnphysicsshape/options.md): The options dictionary that was used to create the shape.
- [transforms](scnphysicsshape/transforms.md): The array of transforms that was used to create a compound shape.

### Shape Options

- [SCNPhysicsShapeOption](scnphysicsshape/option.md): Keys for the options dictionary used when creating a physics shape.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Bodies

- [SCNPhysicsBody](scnphysicsbody.md): The physics simulation attributes attached to a scene graph node.
