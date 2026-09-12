> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodyevents/newsimulationpositions/withlocalspacepositions(_:)](https://developer.apple.com/documentation/realitykit/clothbodyevents/newsimulationpositions/withlocalspacepositions(_:))

# withLocalSpacePositions(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides access to the new simulation positions of the body’s particles, in local space.

## Declaration

```swift
func withLocalSpacePositions<Result>(_ body: (Span<SIMD3<Float>>) -> Result) -> Result
```

## Parameters

- `body`: A closure that receives a span over the local-space particle positions.

<a id="return-value"></a>

## Return Value

The value returned by `body`.

<a id="discussion"></a>

## Discussion

The provided span is only valid for the lifetime of the callback.
