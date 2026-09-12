> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlookatconstraint/init(target:)](https://developer.apple.com/documentation/scenekit/scnlookatconstraint/init(target:))

# init(target:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a look-at constraint for a specified target node.

## Declaration

```swift
convenience init(target: SCNNode?)
```

## Parameters

- `target`: The node that constrained nodes will be reoriented to point toward.

<a id="return-value"></a>

## Return Value

A constraint object.

<a id="Discussion"></a>

## Discussion

To attach constraints to an [SCNNode](../scnnode.md) object, use its [constraints](../scnnode/constraints.md) property.

# lookAtConstraintWithTarget: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates a look-at constraint for a specified target node.

## Declaration

```objectivec
+ (instancetype) lookAtConstraintWithTarget:(SCNNode *) target;
```

## Parameters

- `target`: The node that constrained nodes will be reoriented to point toward.

<a id="return-value"></a>

## Return Value

A constraint object.

<a id="Discussion"></a>

## Discussion

To attach constraints to an [SCNNode](../scnnode.md) object, use its [constraints](../scnnode/constraints.md) property.
