> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceprojecting/entity(at:in:)](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceprojecting/entity(at:in:))

# entity(at:in:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Finds the first entity hit when projecting a ray from a starting point.

## Declaration

```swift
func entity(at point: CGPoint, in space: some CoordinateSpaceProtocol) -> Entity?
```

## Parameters

- `point`: A point in the provided coordinate space.
- `space`: The 2D coordinate space in which to interpret the `point`.

<a id="return-value"></a>

## Return Value

The entity at `point`. Returns `nil` if no entity was found.

<a id="discussion"></a>

## Discussion

> **Important**

> RealityKit performs hit tests (ray-casts) against collision shapes. Entities without a valid [CollisionComponent](../collisioncomponent.md) are ignored by hit tests.
