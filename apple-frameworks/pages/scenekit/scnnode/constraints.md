> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/constraints](https://developer.apple.com/documentation/scenekit/scnnode/constraints)

# constraints (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A list of constraints affecting the node’s transformation.

## Declaration

```swift
var constraints: [SCNConstraint]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array of constraint objects. Before rendering, SceneKit evaluates all constraints attached to a node hierarchy and adjusts node transformations appropriately.

Use the [SCNLookAtConstraint](../scnlookatconstraint.md) class to make a node always point toward another node even as both are moved, or the [SCNTransformConstraint](../scntransformconstraint.md) class to apply arbitrary transformations at constraint evaluation time.

# constraints (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A list of constraints affecting the node’s transformation.

## Declaration

```objectivec
@property (copy, nullable) NSArray<SCNConstraint *> * constraints;
```

<a id="Discussion"></a>

## Discussion

An array of constraint objects. Before rendering, SceneKit evaluates all constraints attached to a node hierarchy and adjusts node transformations appropriately.

Use the [SCNLookAtConstraint](../scnlookatconstraint.md) class to make a node always point toward another node even as both are moved, or the [SCNTransformConstraint](../scntransformconstraint.md) class to apply arbitrary transformations at constraint evaluation time.
