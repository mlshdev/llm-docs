> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlookatconstraint/target](https://developer.apple.com/documentation/scenekit/scnlookatconstraint/target)

# target (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node toward which constrained nodes will point after being reoriented.

## Declaration

```swift
var target: SCNNode? { get set }
```

## See Also

### Modifying a Constraint

- [isGimbalLockEnabled](isgimballockenabled.md): A Boolean value that specifies whether constrained nodes are allowed to rotate.

# target (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The node toward which constrained nodes will point after being reoriented.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNNode * target;
```

## See Also

### Modifying a Constraint

- [gimbalLockEnabled](isgimballockenabled.md): A Boolean value that specifies whether constrained nodes are allowed to rotate.
