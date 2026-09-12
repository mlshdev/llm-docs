> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcolliderevents/newbodycollisions/withcollisions(_:)](https://developer.apple.com/documentation/realitykit/clothcolliderevents/newbodycollisions/withcollisions(_:))

# withCollisions(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the collisions with cloth bodies that took place.

## Declaration

```swift
func withCollisions<Result>(_ callback: (Span<ClothColliderEvents.NewBodyCollisions.Collision>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the collisions.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

This span is only available during the subscription callback of this event. The provided span is only valid for the lifetime of the callback.

## See Also

### Accessing collision data

- [ClothColliderEvents.NewBodyCollisions.Collision](collision.md): A collision with a cloth body.
