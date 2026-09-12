> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/init(geometry:options:)](https://developer.apple.com/documentation/scenekit/scnphysicsshape/init(geometry:options:))

# init(geometry:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a physics shape based on a geometry object.

## Declaration

```swift
convenience init(geometry: SCNGeometry, options: [SCNPhysicsShape.Option : Any]? = nil)
```

## Parameters

- `geometry`: A geometry object.
- `options`: A dictionary of options affecting the level of detail of the physics shape, or `nil` to use default options. For applicable keys and their possible values, see `Shape Creation Options Keys`.

<a id="return-value"></a>

## Return Value

A new physics shape object.

<a id="Discussion"></a>

## Discussion

If you create a physics shape using one of the basic geometry classes ([SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), or [SCNCapsule](../scncapsule.md)), SceneKit uses an idealized form of that geometry for the physics shape instead of using the geometry’s vertex data to simulate collisions. For example, if you create a physics shape from an [SCNSphere](../scnsphere.md) object, SceneKit simulates collisions for any object that passes within the sphere’s radius.

Because the idealized forms of simple geometries are computationally much simpler than the vertex data needed for displaying them, using basic geometries for physics shapes (or compound shapes created from basic geometries with the [init(shapes:transforms:)](init%28shapes_transforms_%29.md) method) often provides the best balance between simulation accuracy and performance.

To use the newly created physics shape, create a physics body with the the [init(type:shape:)](../scnphysicsbody/init%28type_shape_%29.md) method, or assign the shape to the [physicsShape](../scnphysicsbody/physicsshape.md) property of an existing body.

## See Also

### Creating Physics Shapes

- [init(node:options:)](init%28node_options_%29.md): Creates a physics shape from a node or hierarchy of nodes.

# shapeWithGeometry:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a physics shape based on a geometry object.

## Declaration

```objectivec
+ (instancetype) shapeWithGeometry:(SCNGeometry *) geometry options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `geometry`: A geometry object.
- `options`: A dictionary of options affecting the level of detail of the physics shape, or `nil` to use default options. For applicable keys and their possible values, see `Shape Creation Options Keys`.

<a id="return-value"></a>

## Return Value

A new physics shape object.

<a id="Discussion"></a>

## Discussion

If you create a physics shape using one of the basic geometry classes ([SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), or [SCNCapsule](../scncapsule.md)), SceneKit uses an idealized form of that geometry for the physics shape instead of using the geometry’s vertex data to simulate collisions. For example, if you create a physics shape from an [SCNSphere](../scnsphere.md) object, SceneKit simulates collisions for any object that passes within the sphere’s radius.

Because the idealized forms of simple geometries are computationally much simpler than the vertex data needed for displaying them, using basic geometries for physics shapes (or compound shapes created from basic geometries with the [shapeWithShapes:transforms:](init%28shapes_transforms_%29.md) method) often provides the best balance between simulation accuracy and performance.

To use the newly created physics shape, create a physics body with the the [bodyWithType:shape:](../scnphysicsbody/init%28type_shape_%29.md) method, or assign the shape to the [physicsShape](../scnphysicsbody/physicsshape.md) property of an existing body.

## See Also

### Creating Physics Shapes

- [shapeWithNode:options:](init%28node_options_%29.md): Creates a physics shape from a node or hierarchy of nodes.
