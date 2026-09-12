> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncomponent/collisionoptions-swift.struct/static](https://developer.apple.com/documentation/realitykit/collisioncomponent/collisionoptions-swift.struct/static)

# static

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Omits reporting collisions with static collision objects.

## Declaration

```swift
static let `static`: CollisionComponent.CollisionOptions
```

<a id="discussion"></a>

## Discussion

When a collision object is static, it doesn’t report collisions with static collision objects, only with dynamic collision objects. In contrast, when a collision object is dynamic (not static), it reports collisions with all other collision objects.

> **Note**

> Static collision objects are more light-weight and improve performance. They should be used where collisions are tested against these objects, not between these objects.
