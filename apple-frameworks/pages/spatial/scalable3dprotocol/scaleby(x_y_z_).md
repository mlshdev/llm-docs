> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scalable3dprotocol/scaleby(x:y:z:)](https://developer.apple.com/documentation/spatial/scalable3dprotocol/scaleby(x:y:z:))

# scaleBy(x:y:z:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Scales the entity by the specified values.

## Declaration

```swift
mutating func scaleBy(x: Self.Scalar, y: Self.Scalar, z: Self.Scalar)
```

## Parameters

- `x`: The scale factor on the `x` dimension.
- `y`: The scale factor on the `y` dimension.
- `z`: The scale factor on the `z` dimension.

## Default Implementations

### Scalable3DProtocol Implementations

- [scaleBy(x:y:z:)](scaleby%28x_y_z_%29-5s9j8.md): Conforms when `Scalar` is `Float`. Scales the entity by the specified values.
