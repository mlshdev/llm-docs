> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct/init(ink:path:transform:mask:)-w7ti](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct/init(ink:path:transform:mask:)-w7ti)

# init(ink:path:transform:mask:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a stroke with the line properties, path, transform, and mask that you specify.

## Declaration

```swift
init(ink: PKInk, path: PKStrokePath, transform: CGAffineTransform = .identity, mask: NSBezierPath? = nil)
```

## Parameters

- `ink`: The [PKInk](../pkink-swift.struct.md) the framework uses to render this stroke.
- `path`: The B-spline path that describes this stroke.
- `transform`: The [CGAffineTransform](../../corefoundation/cgaffinetransform.md) to apply to this stroke.
- `mask`: The pretransform mask the framework uses to clip the rendering of the stroke.

## See Also

### Creating a stroke object

- [init(ink:path:transform:mask:)](init%28ink_path_transform_mask_%29-1imp6.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [init(ink:path:transform:mask:randomSeed:)](init%28ink_path_transform_mask_randomseed_%29-10m5j.md): Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.
- [init(ink:path:transform:mask:randomSeed:)](init%28ink_path_transform_mask_randomseed_%29-epus.md): Creates a macOS stroke with the line properties, path, transform, mask, and random seed that you specify.
