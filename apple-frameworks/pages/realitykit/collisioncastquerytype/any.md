> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncastquerytype/any](https://developer.apple.com/documentation/realitykit/collisioncastquerytype/any)

# CollisionCastQueryType.any

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Report one hit.

## Declaration

```swift
case any
```

<a id="discussion"></a>

## Discussion

This query type typically executes fastest, but doesn’t guarantee anything about which hit it returns. If you need the hit closest to the origin of the cast, use [CollisionCastQueryType.nearest](nearest.md) instead.

## See Also

### Collision cast queries

- [CollisionCastQueryType.nearest](nearest.md): Report the closest hit.
- [CollisionCastQueryType.all](all.md): Report all hits sorted in ascending order by distance from the cast origin.
