> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsshape/init(shapes:transforms:)](https://developer.apple.com/documentation/scenekit/scnphysicsshape/init(shapes:transforms:))

# init(shapes:transforms:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new physics shape by combining others.

## Declaration

```swift
convenience init(shapes: [SCNPhysicsShape], transforms: [NSValue]?)
```

## Parameters

- `shapes`: An array of [SCNPhysicsShape](../scnphysicsshape.md) objects.
- `transforms`: An array of [NSValue](../../foundation/nsvalue.md) objects containing [SCNMatrix4](../scnmatrix4-swift.struct.md) values, each of which is a transform for the physics shape at the corresponding index in the `shapes` parameter.

<a id="return-value"></a>

## Return Value

A new physics shape object.

<a id="Discussion"></a>

## Discussion

An individual physics shape is defined in its own local coordinate space. Therefore, to describe the positions and orientations of multiple shapes relative to one another, you must use coordinate transformations.

# shapeWithShapes:transforms: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a new physics shape by combining others.

## Declaration

```objectivec
+ (instancetype) shapeWithShapes:(NSArray<SCNPhysicsShape *> *) shapes transforms:(NSArray<NSValue *> *) transforms;
```

## Parameters

- `shapes`: An array of [SCNPhysicsShape](../scnphysicsshape.md) objects.
- `transforms`: An array of [NSValue](../../foundation/nsvalue.md) objects containing [SCNMatrix4](../scnmatrix4-swift.struct.md) values, each of which is a transform for the physics shape at the corresponding index in the `shapes` parameter.

<a id="return-value"></a>

## Return Value

A new physics shape object.

<a id="Discussion"></a>

## Discussion

An individual physics shape is defined in its own local coordinate space. Therefore, to describe the positions and orientations of multiple shapes relative to one another, you must use coordinate transformations.
