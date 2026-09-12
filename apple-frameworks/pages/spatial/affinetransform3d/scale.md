> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/scale](https://developer.apple.com/documentation/spatial/affinetransform3d/scale)

# scale (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The affine transform’s scale.

## Declaration

```swift
var scale: Size3D { get }
```

## See Also

### Decomposing a 3D affine transform

- [rotation](rotation.md): The affine transform’s rotation.
- [translation](translation.md): The translation component of the affine transform.

# SPAffineTransform3DGetScale (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The affine transform’s scale.

## Declaration

```objectivec
static SPSize3D SPAffineTransform3DGetScale(SPAffineTransform3D transform);
```

## See Also

### Decomposing a 3D affine transform

- [SPAffineTransform3DGetOffset](../spaffinetransform3dgetoffset.md): Deprecated. The affine transform’s translation.
- [SPAffineTransform3DGetRotation](../spaffinetransform3dgetrotation.md): The affine transform’s rotation.
