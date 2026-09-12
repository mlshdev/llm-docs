> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/transforms](https://developer.apple.com/documentation/scenekit/scnphysicsshape/transforms)

# transforms (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The array of transforms that was used to create a compound shape.

## Declaration

```swift
var transforms: [NSValue]? { get }
```

<a id="Discussion"></a>

## Discussion

You provide this array of [NSValue](../../foundation/nsvalue.md) objects, each containing an [SCNMatrix4](../scnmatrix4-swift.struct.md) value, in the [init(shapes:transforms:)](init%28shapes_transforms_%29.md) method to create a compound shape. Use this array along with the [sourceObject](sourceobject.md) property to recover the information that was used to create the shape.

If the shape was created with the [init(geometry:options:)](init%28geometry_options_%29.md) or [init(node:options:)](init%28node_options_%29.md) method, this property’s value is `nil`.

## See Also

### Getting Information About a Shape

- [sourceObject](sourceobject.md): The object that was used to create the shape.
- [options](options.md): The options dictionary that was used to create the shape.

# transforms (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The array of transforms that was used to create a compound shape.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSValue *> * transforms;
```

<a id="Discussion"></a>

## Discussion

You provide this array of [NSValue](../../foundation/nsvalue.md) objects, each containing an [SCNMatrix4](../scnmatrix4-swift.struct.md) value, in the [shapeWithShapes:transforms:](init%28shapes_transforms_%29.md) method to create a compound shape. Use this array along with the [sourceObject](sourceobject.md) property to recover the information that was used to create the shape.

If the shape was created with the [shapeWithGeometry:options:](init%28geometry_options_%29.md) or [shapeWithNode:options:](init%28node_options_%29.md) method, this property’s value is `nil`.

## See Also

### Getting Information About a Shape

- [sourceObject](sourceobject.md): The object that was used to create the shape.
- [options](options.md): The options dictionary that was used to create the shape.
