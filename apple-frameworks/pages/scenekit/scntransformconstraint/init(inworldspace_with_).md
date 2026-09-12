> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransformconstraint/init(inworldspace:with:)](https://developer.apple.com/documentation/scenekit/scntransformconstraint/init(inworldspace:with:))

# init(inWorldSpace:with:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new transform constraint.

## Declaration

```swift
convenience init(inWorldSpace world: Bool, with block: @escaping (SCNNode, SCNMatrix4) -> SCNMatrix4)
```

```swift
convenience init(inWorldSpace world: Bool, with block: @escaping (SCNNode, SCNMatrix4) -> SCNMatrix4)
```

## Parameters

- `world`: [true](https://developer.apple.com/documentation/swift/true) to evaluate the constraint in the scene’s world coordinate space, or [false](https://developer.apple.com/documentation/swift/false) to evaluate it relative to the local coordinate space of each constrained node.
- `block`: A block to be called when Scene Kit evaluates the constraint.

  The block takes the following parameters:

  - **node**: The constrained node.
  - **transform**: The constrained node’s current presentation transformation—the value of the [transform](../scnnode/transform.md) property of the constrained node’s [presentation](../scnnode/presentation.md) object. If the node is affected by an in-progress animation, this value reflects the currently visible state of the node during the animation (rather than its target state that will be visible when the animation completes).

  The block returns a transformation matrix, which Scene Kit then applies to the node. If you return the `transform` value passed to the block, your constraint has no effect on the node.

<a id="return-value"></a>

## Return Value

A constraint object.

<a id="Discussion"></a>

## Discussion

The `world` parameter determines the coordinate space of the transformations passed to and returned by the `block` parameter.

# transformConstraintInWorldSpace:withBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates a new transform constraint.

## Declaration

```objectivec
+ (instancetype) transformConstraintInWorldSpace:(BOOL) world withBlock:(SCNMatrix4 (^)(SCNNode *node, SCNMatrix4 transform)) block;
```

```objectivec
+ (instancetype) transformConstraintInWorldSpace:(BOOL) world withBlock:(SCNMatrix4 (^)(SCNNode *node, SCNMatrix4 transform)) block;
```

## Parameters

- `world`: [true](https://developer.apple.com/documentation/swift/true) to evaluate the constraint in the scene’s world coordinate space, or [false](https://developer.apple.com/documentation/swift/false) to evaluate it relative to the local coordinate space of each constrained node.
- `block`: A block to be called when Scene Kit evaluates the constraint.

  The block takes the following parameters:

  - **node**: The constrained node.
  - **transform**: The constrained node’s current presentation transformation—the value of the [transform](../scnnode/transform.md) property of the constrained node’s [presentationNode](../scnnode/presentation.md) object. If the node is affected by an in-progress animation, this value reflects the currently visible state of the node during the animation (rather than its target state that will be visible when the animation completes).

  The block returns a transformation matrix, which Scene Kit then applies to the node. If you return the `transform` value passed to the block, your constraint has no effect on the node.

<a id="return-value"></a>

## Return Value

A constraint object.

<a id="Discussion"></a>

## Discussion

The `world` parameter determines the coordinate space of the transformations passed to and returned by the `block` parameter.
