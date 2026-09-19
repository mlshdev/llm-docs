> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/rotation3dfloat/init(forward:)

# init(forward:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a rotation with the specified forward vector.

## Declaration

```swift
init(forward: Vector3DFloat)
```

<a id="discussion"></a>

## Discussion

- Parameter forward The forward direction.

> **Note**

> This function creates a rotation with an up vector that’s `Vector3D(x: 0, y: 1, z: 0)` and where `+z` is forward.
