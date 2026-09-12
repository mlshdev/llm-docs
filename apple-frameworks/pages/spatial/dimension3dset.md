> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/dimension3dset](https://developer.apple.com/documentation/spatial/dimension3dset)

# Dimension3DSet

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A set of dimensions.

## Declaration

```swift
struct Dimension3DSet
```

## Topics

### Type properties

- [all](dimension3dset/all.md): All dimensions.
- [x](dimension3dset/x.md): The x-dimension.
- [y](dimension3dset/y.md): The y-dimension.
- [z](dimension3dset/z.md): The z-dimension.

### Instance properties

- [rawValue](dimension3dset/rawvalue.md): The corresponding value of the raw type.

### Initializers

- [init(rawValue:)](dimension3dset/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Checking characteristics

- [isInvertible](affinetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [isUniform(overDimensions:)](affinetransform3d/isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [matrix](affinetransform3d/matrix.md): The affine transform’s underlying matrix.
- [matrix3x3](affinetransform3d/matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [matrix4x4](affinetransform3d/matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.
