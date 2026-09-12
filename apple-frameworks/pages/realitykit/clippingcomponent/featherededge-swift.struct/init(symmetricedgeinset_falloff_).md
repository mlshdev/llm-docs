> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent/featherededge-swift.struct/init(symmetricedgeinset:falloff:)](https://developer.apple.com/documentation/realitykit/clippingcomponent/featherededge-swift.struct/init(symmetricedgeinset:falloff:))

# init(symmetricEdgeInset:falloff:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initializes both [positiveEdgeInset](positiveedgeinset.md) and [negativeEdgeInset](negativeedgeinset.md) with the same symmetric value.

## Declaration

```swift
init(symmetricEdgeInset: SIMD3<Float> = .zero, falloff: ClippingComponent.FeatheredEdge.Falloff = .linear)
```
