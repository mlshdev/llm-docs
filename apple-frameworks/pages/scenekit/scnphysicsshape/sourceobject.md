> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/sourceobject](https://developer.apple.com/documentation/scenekit/scnphysicsshape/sourceobject)

# sourceObject (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The object that was used to create the shape.

## Declaration

```swift
var sourceObject: Any { get }
```

<a id="Discussion"></a>

## Discussion

This property, along with the [transforms](transforms.md) and [options](options.md) properties, provides the information that was used to create the shape. You can use this information, for example, to draw editing or debugging UI in your scene.

- If the shape was created with the [init(geometry:options:)](init%28geometry_options_%29.md) method, the source object is an [SCNGeometry](../scngeometry.md) object, and the [options](options.md) property contains the options affecting the shape’s construction from that geometry.
- If the shape was created with the [init(node:options:)](init%28node_options_%29.md) method, the source object is an [SCNNode](../scnnode.md) object, and the [options](options.md) property contains the options affecting the shape’s construction from that node.
- If the shape was created with the [init(shapes:transforms:)](init%28shapes_transforms_%29.md) method, the source object is an array of [SCNPhysicsShape](../scnphysicsshape.md) objects and the [transforms](transforms.md) property describes how those shapes combine to form a compound shape.

## See Also

### Getting Information About a Shape

- [options](options.md): The options dictionary that was used to create the shape.
- [transforms](transforms.md): The array of transforms that was used to create a compound shape.

# sourceObject (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object that was used to create the shape.

## Declaration

```objectivec
@property (nonatomic, readonly) id sourceObject;
```

<a id="Discussion"></a>

## Discussion

This property, along with the [transforms](transforms.md) and [options](options.md) properties, provides the information that was used to create the shape. You can use this information, for example, to draw editing or debugging UI in your scene.

- If the shape was created with the [shapeWithGeometry:options:](init%28geometry_options_%29.md) method, the source object is an [SCNGeometry](../scngeometry.md) object, and the [options](options.md) property contains the options affecting the shape’s construction from that geometry.
- If the shape was created with the [shapeWithNode:options:](init%28node_options_%29.md) method, the source object is an [SCNNode](../scnnode.md) object, and the [options](options.md) property contains the options affecting the shape’s construction from that node.
- If the shape was created with the [shapeWithShapes:transforms:](init%28shapes_transforms_%29.md) method, the source object is an array of [SCNPhysicsShape](../scnphysicsshape.md) objects and the [transforms](transforms.md) property describes how those shapes combine to form a compound shape.

## See Also

### Getting Information About a Shape

- [options](options.md): The options dictionary that was used to create the shape.
- [transforms](transforms.md): The array of transforms that was used to create a compound shape.
