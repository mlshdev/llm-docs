> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/options](https://developer.apple.com/documentation/scenekit/scnphysicsshape/options)

# options (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The options dictionary that was used to create the shape.

## Declaration

```swift
var options: [SCNPhysicsShape.Option : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

You provide this dictionary in the [init(geometry:options:)](init%28geometry_options_%29.md) or [init(node:options:)](init%28node_options_%29.md) method. Use this dictionary along with the [sourceObject](sourceobject.md) property to recover the information that was used to create the shape.

If the shape was created with the [init(shapes:transforms:)](init%28shapes_transforms_%29.md) method, this property’s value is `nil`.

## See Also

### Getting Information About a Shape

- [sourceObject](sourceobject.md): The object that was used to create the shape.
- [transforms](transforms.md): The array of transforms that was used to create a compound shape.

# options (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The options dictionary that was used to create the shape.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * options;
```

<a id="Discussion"></a>

## Discussion

You provide this dictionary in the [shapeWithGeometry:options:](init%28geometry_options_%29.md) or [shapeWithNode:options:](init%28node_options_%29.md) method. Use this dictionary along with the [sourceObject](sourceobject.md) property to recover the information that was used to create the shape.

If the shape was created with the [shapeWithShapes:transforms:](init%28shapes_transforms_%29.md) method, this property’s value is `nil`.

## See Also

### Getting Information About a Shape

- [sourceObject](sourceobject.md): The object that was used to create the shape.
- [transforms](transforms.md): The array of transforms that was used to create a compound shape.
