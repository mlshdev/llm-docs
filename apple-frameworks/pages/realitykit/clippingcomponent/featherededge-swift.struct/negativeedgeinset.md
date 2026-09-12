> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent/featherededge-swift.struct/negativeedgeinset](https://developer.apple.com/documentation/realitykit/clippingcomponent/featherededge-swift.struct/negativeedgeinset)

# negativeEdgeInset

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The distance from each negative edge (-X, -Y, -Z) of the clip bounds over which opacity fades to 0, expressed in local coordinate space units.

## Declaration

```swift
var negativeEdgeInset: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

Values range from `0.0` to the half-extent of the bounding box on each axis. For example:

- `0.0` means no feathering on that edge.
- An inset distance  value of `2.0` on X axis  creates a 2-unit feather zone inward from the -X edge.

## See Also

### Configuring edge insets

- [positiveEdgeInset](positiveedgeinset.md): The distance from each positive edge (+X, +Y, +Z) of the clip bounds over which opacity fades to 0, expressed in local coordinate space units.
