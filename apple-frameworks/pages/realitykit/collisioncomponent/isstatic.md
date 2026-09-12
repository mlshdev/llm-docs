> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncomponent/isstatic](https://developer.apple.com/documentation/realitykit/collisioncomponent/isstatic)

# isStatic

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A Boolean value that indicates whether the collider is static.

## Declaration

```swift
var isStatic: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When an object is static the physics engine recognizes that the object isn’t moving, which typically improves performance.
