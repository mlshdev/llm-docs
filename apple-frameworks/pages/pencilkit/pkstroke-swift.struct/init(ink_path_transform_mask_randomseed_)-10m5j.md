> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct/init(ink:path:transform:mask:randomseed:)-10m5j](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct/init(ink:path:transform:mask:randomseed:)-10m5j)

# init(ink:path:transform:mask:randomSeed:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.

## Declaration

```swift
init(ink: PKInk, path: PKStrokePath, transform: CGAffineTransform = .identity, mask: UIBezierPath? = nil, randomSeed: UInt32)
```

## Parameters

- `ink`: The [PKInkReference](../pkinkreference.md) the framework uses to render this stroke.
- `path`: The B-spline path that describes this stroke.
- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to this stroke. Defaults to [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md).
- `mask`: The pretransform mask the framework uses to clip the rendering of the stroke.
- `randomSeed`: The random seed for the stroke.

## See Also

### Creating a stroke object

- [init(ink:path:transform:mask:)](init%28ink_path_transform_mask_%29-1imp6.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [init(ink:path:transform:mask:)](init%28ink_path_transform_mask_%29-w7ti.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [init(ink:path:transform:mask:randomSeed:)](init%28ink_path_transform_mask_randomseed_%29-epus.md): Creates a macOS stroke with the line properties, path, transform, mask, and random seed that you specify.
