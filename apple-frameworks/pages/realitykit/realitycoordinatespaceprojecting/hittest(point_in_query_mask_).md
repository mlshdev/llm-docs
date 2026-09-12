> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceprojecting/hittest(point:in:query:mask:)](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceprojecting/hittest(point:in:query:mask:))

# hitTest(point:in:query:mask:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Searches the scene for entities at the specified point in the view.

## Declaration

```swift
func hitTest(point: CGPoint, in space: some CoordinateSpaceProtocol, query: CollisionCastQueryType, mask: CollisionGroup) -> [CollisionCastHit]
```

## Parameters

- `point`: A point in the provided coordinate space.
- `space`: The 2D coordinate space in which to interpret the `point`.
- `query`: The query type.
- `mask`: The collision mask that you can use to prevent hits with certain objects. The default value is [all](../collisiongroup/all.md), which means the ray can hit all objects. See [CollisionFilter](../collisionfilter.md) for details.

<a id="return-value"></a>

## Return Value

An array of hit-test results.

<a id="discussion"></a>

## Discussion

> **Important**

> RealityKit performs hit tests (ray-casts) against collision shapes. Entities without a proper [CollisionComponent](../collisioncomponent.md) are ignored by hit tests.
