> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3dprotocol/apply(_:)-1qcu6](https://developer.apple.com/documentation/spatial/primitive3dprotocol/apply(_:)-1qcu6)

# apply(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Applies a pose.

## Declaration

```swift
mutating func apply(_ pose: Self.Pose)
```

## Parameters

- `pose`: The pose.

## Default Implementations

### Primitive3DProtocol Implementations

- [apply(\_:)](apply%28__%29-2ch0y.md): Conforms when `Scalar` is `Float`. Applies a projective transform.
- [apply(\_:)](apply%28__%29-2zt51.md): Conforms when `Scalar` is `Float`. Applies an affine transform.
- [apply(\_:)](apply%28__%29-40ngr.md): Conforms when `Scalar` is `Float`. Applies a pose.
