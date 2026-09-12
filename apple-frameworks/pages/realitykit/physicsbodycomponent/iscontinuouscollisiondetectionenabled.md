> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsbodycomponent/iscontinuouscollisiondetectionenabled](https://developer.apple.com/documentation/realitykit/physicsbodycomponent/iscontinuouscollisiondetectionenabled)

# isContinuousCollisionDetectionEnabled

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that controls whether the physics simulation performs continuous collision detection.

## Declaration

```swift
var isContinuousCollisionDetectionEnabled: Bool
```

<a id="discussion"></a>

## Discussion

Set the value to `true` to perform continuous collision detection. The value is `false` by default, indicating the simulation should apply discrete collision detection.

Discrete collision detection considers only the position of a body once per rendered frame, or about every 16 milliseconds at 60 frames per second. Continuous collision detection considers the position of the body throughout the frame interval. The latter is more computationally expensive, but can help to avoid missing a collision for a quickly moving object, like a projectile.
