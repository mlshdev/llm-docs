> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncomponent/mode-swift.enum/default](https://developer.apple.com/documentation/realitykit/collisioncomponent/mode-swift.enum/default)

# CollisionComponent.Mode.default

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A default collision object.

## Declaration

```swift
case `default`
```

<a id="discussion"></a>

## Discussion

When two objects of this type collide, RealityKit computes the full contact details (contact points, normal vectors, penetration depths, and so on) and stores them in the contact set.

> **Note**

> Collisions will fall through and do not collide by default, to enable colliding see the [CollisionComponent.Mode.colliding](colliding.md) mode.

## See Also

### Collision modes

- [CollisionComponent.Mode.trigger](trigger.md): A trigger collision object.
