> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlookatconstraint/isgimballockenabled](https://developer.apple.com/documentation/scenekit/scnlookatconstraint/isgimballockenabled)

# isGimbalLockEnabled (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that specifies whether constrained nodes are allowed to rotate.

## Declaration

```swift
var isGimbalLockEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), constrained nodes are limited in rotation around a roll axis (the vector pointing from the constrained node to the target node). If the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), constrained nodes rotate freely around this axis when the constraint adjusts their orientation.

For example, when constraining a camera to follow a moving object, setting this property to [true](https://developer.apple.com/documentation/swift/true) ensures that the horizon remains level from the camera’s point of view.

## See Also

### Modifying a Constraint

- [target](target.md): The node toward which constrained nodes will point after being reoriented.

# gimbalLockEnabled (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A Boolean value that specifies whether constrained nodes are allowed to rotate.

## Declaration

```objectivec
@property (nonatomic) BOOL gimbalLockEnabled;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), constrained nodes are limited in rotation around a roll axis (the vector pointing from the constrained node to the target node). If the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), constrained nodes rotate freely around this axis when the constraint adjusts their orientation.

For example, when constraining a camera to follow a moving object, setting this property to [true](https://developer.apple.com/documentation/swift/true) ensures that the horizon remains level from the camera’s point of view.

## See Also

### Modifying a Constraint

- [target](target.md): The node toward which constrained nodes will point after being reoriented.
