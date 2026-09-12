> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnikconstraint/chainrootnode](https://developer.apple.com/documentation/scenekit/scnikconstraint/chainrootnode)

# chainRootNode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The parent node of the hierarchy affected by the constraint.

## Declaration

```swift
var chainRootNode: SCNNode { get }
```

<a id="Discussion"></a>

## Discussion

The root node is the highest node in the hierarchy moved by the constraint. For example, a robot arm may have two arm segments and a hand connected to a body. The upper arm is a child node of the body, the lower arm is a child node of the upper arm, and the hand is a child node of the lower arm. In this case, the upper arm is the chain root node, because the body should not move to follow the hand.

## See Also

### Adjusting the Constraint’s Limits of Motion

- [maxAllowedRotationAngle(forJoint:)](maxallowedrotationangle%28forjoint_%29.md): Returns the rotation limit, in degrees, for the specified node.
- [setMaxAllowedRotationAngle(\_:forJoint:)](setmaxallowedrotationangle%28__forjoint_%29.md): Sets the rotation limit, in degrees, for the specified node.

# chainRootNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The parent node of the hierarchy affected by the constraint.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNNode * chainRootNode;
```

<a id="Discussion"></a>

## Discussion

The root node is the highest node in the hierarchy moved by the constraint. For example, a robot arm may have two arm segments and a hand connected to a body. The upper arm is a child node of the body, the lower arm is a child node of the upper arm, and the hand is a child node of the lower arm. In this case, the upper arm is the chain root node, because the body should not move to follow the hand.

## See Also

### Adjusting the Constraint’s Limits of Motion

- [maxAllowedRotationAngleForJoint:](maxallowedrotationangle%28forjoint_%29.md): Returns the rotation limit, in degrees, for the specified node.
- [setMaxAllowedRotationAngle:forJoint:](setmaxallowedrotationangle%28__forjoint_%29.md): Sets the rotation limit, in degrees, for the specified node.
