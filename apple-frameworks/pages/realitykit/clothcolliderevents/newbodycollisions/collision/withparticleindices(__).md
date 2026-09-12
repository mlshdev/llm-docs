> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcolliderevents/newbodycollisions/collision/withparticleindices(_:)](https://developer.apple.com/documentation/realitykit/clothcolliderevents/newbodycollisions/collision/withparticleindices(_:))

# withParticleIndices(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the indices of particles that collided with the collider.

## Declaration

```swift
func withParticleIndices<Result>(_ callback: (Span<UInt32>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the colliding particle indices.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

This span is only available during the subscription callback of this event. The provided span is only valid for the lifetime of the callback.
