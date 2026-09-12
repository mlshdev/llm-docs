> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitytargetvalue/unproject(_:to:)](https://developer.apple.com/documentation/realitykit/entitytargetvalue/unproject(_:to:))

# unproject(\_:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Unproject a 2D point from the gesture value into 3D world coordinates.

## Declaration

```swift
func unproject(_ keyPath: KeyPath<Value, CGPoint>, to realitySpace: some RealityCoordinateSpace) -> SIMD3<Float>?
```

## Parameters

- `keyPath`: A key path for a point on the gesture value.
- `realitySpace`: The 3D coordinate space of the returned point.

<a id="return-value"></a>

## Return Value

3D position in `realitySpace`.
