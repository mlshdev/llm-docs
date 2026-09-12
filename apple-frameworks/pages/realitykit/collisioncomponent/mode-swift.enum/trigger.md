> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncomponent/mode-swift.enum/trigger](https://developer.apple.com/documentation/realitykit/collisioncomponent/mode-swift.enum/trigger)

# CollisionComponent.Mode.trigger

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A trigger collision object.

## Declaration

```swift
case trigger
```

<a id="discussion"></a>

## Discussion

When a collision object of this type collides with any other object, RealityKit records that contact was made, but does not compute other details, like contact points, normal vectors, and so on. This makes a trigger object more performant when all you need is a Boolean indicator that contact occurred.

Triggers are not simulated, so if the [Entity](../../entity.md) also contains [PhysicsBodyComponent](../../physicsbodycomponent.md), `trigger` is ignored.

## See Also

### Collision modes

- [CollisionComponent.Mode.default](default.md): A default collision object.
