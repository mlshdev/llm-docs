> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox/formunion(_:)-6itj9](https://developer.apple.com/documentation/realitykit/boundingbox/formunion(_:)-6itj9)

# formUnion(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Expands the bounding box to contain the specified point.

## Declaration

```swift
mutating func formUnion(_ point: SIMD3<Float>)
```

## Parameters

- `point`: A point in space.

## See Also

### Expanding boxes

- [union(\_:)](union%28__%29-1y8hw.md): Creates a bounding box containing the current bounds and the specified bounds.
- [formUnion(\_:)](formunion%28__%29-5iy03.md): Expands the bounding box to contain the specified bounds.
- [union(\_:)](union%28__%29-g4th.md): Creates a bounding box containing the current bounds and the specified point.
