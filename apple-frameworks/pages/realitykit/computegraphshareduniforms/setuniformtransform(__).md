> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphshareduniforms/setuniformtransform(_:)](https://developer.apple.com/documentation/realitykit/computegraphshareduniforms/setuniformtransform(_:))

# setUniformTransform(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Registers a closure that transforms a uniform value of type `V` on a per-entity basis.

## Declaration

```swift
func setUniformTransform<V>(_ transform: @escaping (V, Entity) -> V) where V : BitwiseCopyable
```

## Parameters

- `transform`: A closure `(V, Entity) -> V`.

<a id="discussion"></a>

## Discussion

The closure receives the current value and the entity being evaluated, and returns the transformed value. This lets you derive per-entity variants of a global uniform at simulation time, for example, converting a position from the scene’s coordinate system to the system’s coordinate system.
