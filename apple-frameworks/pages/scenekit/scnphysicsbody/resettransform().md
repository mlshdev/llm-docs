> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/resettransform()](https://developer.apple.com/documentation/scenekit/scnphysicsbody/resettransform())

# resetTransform() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Updates the position and orientation of a body in the physics simulation to match that of the node to which the body is attached.

## Declaration

```swift
func resetTransform()
```

<a id="Discussion"></a>

## Discussion

If you change the position or orientation of a node with an attached static or dynamic physics body, call this method afterward to ensure that the physics simulation incorporates the change. You need not call this method for kinematic bodies.

Note that dynamic and physics bodies are designed to be moved only by the physics simulation or not at all. You may use this method to move them regardless of this restriction, but at a cost to performance.

# resetTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Updates the position and orientation of a body in the physics simulation to match that of the node to which the body is attached.

## Declaration

```objectivec
- (void) resetTransform;
```

<a id="Discussion"></a>

## Discussion

If you change the position or orientation of a node with an attached static or dynamic physics body, call this method afterward to ensure that the physics simulation incorporates the change. You need not call this method for kinematic bodies.

Note that dynamic and physics bodies are designed to be moved only by the physics simulation or not at all. You may use this method to move them regardless of this restriction, but at a cost to performance.
